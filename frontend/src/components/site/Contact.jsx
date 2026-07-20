import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { FadeUp, LineReveal } from "./SplitReveal";
import { Magnetic } from "./Magnetic";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL?.replace(/\/$/, "");
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!API) {
      toast.info("The ORION waitlist is not open yet. Please check back soon.");
      return;
    }
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      setSent(true);
      toast.success("You're on the list. ORION will reach out.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-32 sm:py-48 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 800, height: 800, background: "rgba(37,150,190,0.12)", bottom: "-30%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="max-w-6xl mx-auto relative">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">05</span> Get Access
          </p>
        </FadeUp>
        <LineReveal
          as="h2"
          data-testid="contact-title"
          lines={["The network is", "coming online."]}
          className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white"
        />
        <FadeUp delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-lg">
            Join the waitlist to be first in line when ORION opens. No noise — just a signal when it's time.
          </p>
        </FadeUp>

        <div className="mt-16 max-w-2xl">
          {sent ? (
            <div data-testid="contact-success" className="border border-[rgba(37,150,190,0.4)] bg-[rgba(37,150,190,0.06)] p-10 flex items-start gap-4">
              <CheckCircle2 className="text-[#48cae4] shrink-0 mt-1" size={22} />
              <div>
                <p className="font-heading font-bold text-xl text-white">Signal received.</p>
                <p className="text-sm text-[#94A3B8] mt-2">You're on the ORION waitlist. We'll contact you as soon as access opens.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <input data-testid="contact-name-input" className="orion-input" placeholder="Name *" value={form.name} onChange={set("name")} data-hover />
                <input data-testid="contact-email-input" className="orion-input" type="email" placeholder="Email *" value={form.email} onChange={set("email")} data-hover />
              </div>
              <input data-testid="contact-company-input" className="orion-input" placeholder="Company (optional)" value={form.company} onChange={set("company")} data-hover />
              <textarea data-testid="contact-message-input" className="orion-input min-h-[130px] resize-y" placeholder="What would you automate first? (optional)" value={form.message} onChange={set("message")} data-hover />
              <Magnetic>
                <button data-testid="contact-submit-btn" type="submit" disabled={loading} className="btn-primary-orion disabled:opacity-60">
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  Join the Waitlist
                </button>
              </Magnetic>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
