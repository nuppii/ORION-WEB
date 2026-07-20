import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Tech Stack", id: "tech-stack" },
];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "backdrop-blur-xl bg-[#020308]/70 border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 h-[70px]">
        <button
          data-testid="nav-logo"
          onClick={() => scrollToId("hero")}
          className="font-heading font-bold text-xl tracking-tight text-white flex items-center gap-2"
          data-hover
        >
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--orion-cyan)", boxShadow: "0 0 12px var(--orion-cyan)" }} />
          ORION
        </button>
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollToId(l.id)}
              className="font-mono-orion text-[11px] tracking-[0.2em] uppercase text-[#94A3B8] hover:text-white transition-colors duration-300"
              data-hover
            >
              {l.label}
            </button>
          ))}
        </div>
        <Magnetic strength={0.25}>
          <button
            data-testid="nav-cta-btn"
            onClick={() => scrollToId("contact")}
            className="font-mono-orion text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-[rgba(37,150,190,0.5)] text-[#48cae4] hover:bg-[rgba(37,150,190,0.12)] transition-colors duration-300"
          >
            Join Waitlist
          </button>
        </Magnetic>
      </nav>
    </motion.header>
  );
};
