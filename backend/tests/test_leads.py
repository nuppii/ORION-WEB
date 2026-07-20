"""Backend tests for ORION leads API"""
import os
import time
import pytest
import requests
from pathlib import Path
from dotenv import load_dotenv

# Load frontend .env to get REACT_APP_BACKEND_URL
FRONTEND_ENV = Path(__file__).parent.parent.parent / "frontend" / ".env"
load_dotenv(FRONTEND_ENV)

BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health / root ----
def test_api_root(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "ORION" in data["message"]


# ---- POST /api/leads ----
class TestCreateLead:
    def test_create_lead_full_payload(self, api_client):
        payload = {
            "name": "TEST_John Doe",
            "email": "TEST_john@example.com",
            "company": "ORION Test Co",
            "message": "Automate our data pipelines",
        }
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data and isinstance(data["created_at"], str)

    def test_create_lead_minimal_payload(self, api_client):
        payload = {"name": "TEST_MinUser", "email": "TEST_min@example.com"}
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] is None
        assert data["message"] is None
        assert "id" in data

    def test_create_lead_invalid_email(self, api_client):
        payload = {"name": "TEST_Bad", "email": "not-an-email"}
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 422

    def test_create_lead_missing_name(self, api_client):
        payload = {"email": "TEST_x@example.com"}
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 422

    def test_create_lead_missing_email(self, api_client):
        payload = {"name": "TEST_NoEmail"}
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 422


# ---- GET /api/leads ----
class TestGetLeads:
    def test_get_leads_returns_list(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)

    def test_get_leads_persists_and_sorted_desc(self, api_client):
        # Create two leads with slight time gap
        p1 = {"name": "TEST_Sort1", "email": "TEST_sort1@example.com"}
        p2 = {"name": "TEST_Sort2", "email": "TEST_sort2@example.com"}
        r1 = api_client.post(f"{BASE_URL}/api/leads", json=p1)
        assert r1.status_code == 200
        id1 = r1.json()["id"]
        time.sleep(1.1)
        r2 = api_client.post(f"{BASE_URL}/api/leads", json=p2)
        assert r2.status_code == 200
        id2 = r2.json()["id"]

        # GET list
        r = api_client.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 200
        leads = r.json()
        ids = [l["id"] for l in leads]
        assert id1 in ids
        assert id2 in ids

        # No mongo _id leaking
        for l in leads[:5]:
            assert "_id" not in l

        # Newest first: id2 (later) should come before id1
        pos1 = ids.index(id1)
        pos2 = ids.index(id2)
        assert pos2 < pos1, f"Expected newer lead first: pos2={pos2}, pos1={pos1}"
