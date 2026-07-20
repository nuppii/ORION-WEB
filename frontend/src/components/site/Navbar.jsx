import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { NAV_LINKS } from "./content";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open && window.__lenis) window.__lenis.stop();
    else if (window.__lenis) window.__lenis.start();
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[#020308]/70 border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left" style={{ scaleX: progress, background: "linear-gradient(90deg, #2596be, #48cae4)" }} />
        <nav className="flex items-center justify-between px-6 sm:px-12 h-[70px]">
          <button
            data-testid="nav-logo"
            onClick={() => go("hero")}
            className="font-heading font-bold text-xl tracking-tight text-white flex items-center gap-2"
            data-hover
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--orion-cyan)", boxShadow: "0 0 12px var(--orion-cyan)" }} />
            ORION
          </button>

          <div className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="font-mono-orion text-[10px] tracking-[0.18em] uppercase text-[#94A3B8] hover:text-white transition-colors duration-300"
                data-hover
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.25}>
              <button
                data-testid="nav-cta-btn"
                onClick={() => go("about")}
                className="hidden sm:inline-flex font-mono-orion text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-[rgba(37,150,190,0.5)] text-[#48cae4] hover:bg-[rgba(37,150,190,0.12)] transition-colors duration-300"
              >
                Discover ORION
              </button>
            </Magnetic>
            <button
              data-testid="nav-menu-btn"
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden text-white p-2"
              aria-label="Menu"
              data-hover
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#020308]/95 backdrop-blur-2xl flex items-center"
          >
            <div className="px-8 sm:px-16 w-full max-w-3xl mx-auto">
              {NAV_LINKS.map((l, i) => (
                <div key={l.id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => go(l.id)}
                    className="block text-left font-heading font-bold text-4xl sm:text-5xl py-1.5 text-white/80 hover:text-[#48cae4] transition-colors duration-300"
                    data-hover
                  >
                    <span className="font-mono-orion text-xs text-[#48cae4]/60 mr-4 align-middle">{String(i + 1).padStart(2, "0")}</span>
                    {l.label}
                  </motion.button>
                </div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55 }}
                onClick={() => go("about")}
                className="btn-primary-orion mt-10"
              >
                Discover ORION
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
