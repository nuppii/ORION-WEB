<div align="center">

# ORION — Official Website

### Obviously Rochat's Intelligent Operating Network

**The public showcase for a proactive AI operating network built to transform intent into coordinated action.**

[![Website](https://img.shields.io/badge/website-live-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://nuppii.github.io/ORION-WEB/)
[![GitHub Pages](https://img.shields.io/badge/deployed%20with-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![Status](https://img.shields.io/badge/ORION-active%20development-f59e0b?style=for-the-badge)](#project-status)
[![Commercial](https://img.shields.io/badge/commercial%20readiness-not%20ready-991b1b?style=for-the-badge)](#project-status)

[**Visit the website**](https://nuppii.github.io/ORION-WEB/) · [**About ORION**](#about-orion) · [**Deployment**](#deployment)

</div>

---

## About this repository

This repository contains the public promotional website for **ORION — Obviously Rochat's Intelligent Operating Network**.

It is deliberately separated from the private ORION application repository. Only the static website and its deployment configuration are published here; the Python application, private configuration, credentials, personal data and internal runtime files are not part of this repository.

The website is built as a React single-page application with a component-based architecture, responsive styling, motion design and WebGL-powered visual scenes. GitHub Actions compiles the public production bundle automatically.

## About ORION

ORION is an experimental proactive AI system designed to understand user intent, coordinate specialized tools and execute structured workflows across a digital environment.

Its development explores areas such as:

- intelligent task automation;
- workflow and tool orchestration;
- voice and text interaction;
- controlled system interaction;
- persistent memory and contextual assistance;
- productivity and connected-service integrations;
- specialized AI agents and decision support.

## Project status

> [!IMPORTANT]
> **ORION is under active development. It is not production-ready and is not yet ready for commercialization.** The public website presents the project's direction and current ambitions; it must not be interpreted as a promise of availability, stability or commercial support.

Some capabilities remain experimental, platform-dependent or subject to change. No commercial product, subscription or production service is currently offered through this website.

## Website stack

| Layer | Technology |
|---|---|
| Application | React 19 |
| Build system | Create React App and CRACO |
| Design | Tailwind CSS and custom responsive CSS |
| Motion | Framer Motion and Lenis |
| Visual effects | Three.js and React Three Fiber |
| Hosting | GitHub Pages |
| Deployment | GitHub Actions |

## Local preview

Clone the public website repository:

```powershell
git clone https://github.com/nuppii/ORION-WEB.git
cd ORION-WEB
```

Install the frontend dependencies and start the development server:

```powershell
cd frontend
npm install --legacy-peer-deps
npm start
```

Then open:

```text
http://localhost:3000/
```

The development server supports live reloading while editing the React components.

## Repository structure

```text
ORION-WEB/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml   # Automatic GitHub Pages deployment
├── frontend/
│   ├── public/                # HTML shell and public metadata
│   ├── src/                   # React application and site sections
│   ├── package.json           # Dependencies and scripts
│   └── craco.config.js        # Build configuration
├── design_guidelines.json     # Visual design reference
└── README.md                  # Repository documentation
```

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` runs automatically whenever a commit is pushed to `main`. It installs the frontend dependencies, compiles an optimized React production build and deploys only `frontend/build` to GitHub Pages.

To enable the first deployment:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Open the **Actions** tab and monitor the `Deploy ORION website to GitHub Pages` workflow.
5. Once deployment succeeds, visit [nuppii.github.io/ORION-WEB](https://nuppii.github.io/ORION-WEB/).

The workflow can also be launched manually from the GitHub Actions interface.

## Updating the website

Edit the React components or styles under `frontend/src`, test the result locally, then push the change to `main`:

```powershell
git add frontend
git commit -m "Update ORION website"
git push
```

GitHub Actions will publish the new version automatically.

## Security boundary

This repository must remain limited to public marketing content.

Never add:

- ORION's private Python source code;
- API keys, OAuth credentials or access tokens;
- application configuration files;
- personal memory or financial data;
- logs, backups, databases or executable builds;
- internal documentation containing confidential information.

## Usage and ownership

No open-source licence is currently granted for the ORION brand, website design or project content. Unless a licence file is added later, all rights are reserved by the project owner.

## Disclaimer

This website describes an experimental project in active development. Information, visuals, features and timelines may change without notice. ORION is not currently offered as a finished commercial product and should not be relied upon for critical or production use.

---

<div align="center">

**ORION — From intent to coordinated action.**

Built by **Rochat's Enterprise**.

</div>
