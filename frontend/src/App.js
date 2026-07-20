import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { TechStack } from "@/components/site/TechStack";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLoading(false);
      return;
    }
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    lenis.stop();
    const timer = setTimeout(() => {
      setLoading(false);
      lenis.start();
    }, 2300);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App relative">
      <div className="noise-overlay" />
      <CustomCursor />
      <Toaster position="bottom-right" theme="dark" toastOptions={{ style: { background: "#060a14", border: "1px solid rgba(37,150,190,0.35)", color: "#f8fafc" } }} />
      <AnimatePresence mode="wait">{loading && <Preloader key="preloader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero started={!loading} />
        <About />
        <Features />
        <HowItWorks />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
