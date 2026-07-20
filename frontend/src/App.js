import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { LangProvider } from "@/components/site/i18n";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { CosmicBackground } from "@/components/site/CosmicBackground";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Vision } from "@/components/site/Vision";
import { About } from "@/components/site/About";
import { Capabilities } from "@/components/site/Capabilities";
import { GalaxySection } from "@/components/site/GalaxySection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { SolarSection } from "@/components/site/SolarSection";
import { Finance } from "@/components/site/Finance";
import { Security } from "@/components/site/Security";
import { TechStack } from "@/components/site/TechStack";
import { StatusSection } from "@/components/site/StatusSection";
import { RoadmapSection } from "@/components/site/RoadmapSection";
import { FAQSection } from "@/components/site/FAQSection";
import { BlackHoleSection } from "@/components/site/BlackHoleSection";
import { DisclaimerSection } from "@/components/site/DisclaimerSection";
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
    <LangProvider>
      <div className="App relative">
        <div className="noise-overlay" />
        <CosmicBackground />
        <CustomCursor />
        <Toaster position="bottom-right" theme="dark" toastOptions={{ style: { background: "#060a14", border: "1px solid rgba(37,150,190,0.35)", color: "#f8fafc" } }} />
        <AnimatePresence mode="wait">{loading && <Preloader key="preloader" />}</AnimatePresence>
        <Navbar />
        <main className="relative">
          <Hero started={!loading} />
          <Vision />
          <About />
          <Capabilities />
          <GalaxySection />
          <HowItWorks />
          <SolarSection />
          <Finance />
          <Security />
          <TechStack />
          <StatusSection />
          <RoadmapSection />
          <FAQSection />
          <BlackHoleSection />
          <DisclaimerSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
