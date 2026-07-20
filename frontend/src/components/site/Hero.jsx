import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Activity } from "lucide-react";
import { ParticleSphere } from "./ParticleSphere";
import { Magnetic } from "./Magnetic";
import { LetterReveal } from "./SplitReveal";
import { scrollToId } from "./Navbar";
import { HERO } from "./content";

export const Hero = ({ started }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const ySphere = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);

  const d = started ? 0.2 : 2.6;

  return (
    <section ref={ref} id="hero" data-testid="hero-section" className="relative h-[100svh] min-h-[720px] overflow-hidden flex items-center">
      <div className="aura" style={{ width: 700, height: 700, background: "rgba(37,150,190,0.14)", top: "-15%", right: "-10%" }} />
      <div className="aura" style={{ width: 500, height: 500, background: "rgba(72,202,228,0.07)", bottom: "-20%", left: "-10%" }} />

      <motion.div style={{ y: ySphere }} className="absolute inset-0">
        <ParticleSphere />
      </motion.div>

      <motion.div style={{ y: yTitle, opacity }} className="relative z-10 px-6 sm:px-12 w-full pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono-orion text-xs sm:text-sm tracking-[0.35em] uppercase text-[#48cae4] mb-6 flex items-center gap-3"
          data-testid="hero-eyebrow"
        >
          <span className="h-px w-10 inline-block" style={{ background: "var(--orion-cyan)" }} />
          {HERO.eyebrow}
        </motion.p>

        {started && (
          <h1 data-testid="hero-title" className="font-heading font-bold text-white text-[22vw] sm:text-[18vw] lg:text-[15vw] leading-[0.85] tracking-[-0.05em] select-none">
            <LetterReveal text="ORION" delay={d + 0.15} />
          </h1>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: d + 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl"
        >
          <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed" data-testid="hero-subtitle">
            <span className="text-white font-medium">{HERO.subtitle}.</span>
            <br />
            {HERO.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: d + 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4 pointer-events-auto"
        >
          <Magnetic>
            <button data-testid="hero-explore-btn" className="btn-primary-orion" onClick={() => scrollToId("about")}>
              {HERO.actions[0].label}
            </button>
          </Magnetic>
          <Magnetic>
            <button data-testid="hero-architecture-btn" className="btn-ghost-orion" onClick={() => scrollToId("architecture")}>
              <ArrowUpRight size={14} />
              {HERO.actions[1].label}
            </button>
          </Magnetic>
          <Magnetic>
            <button data-testid="hero-status-btn" className="btn-ghost-orion" onClick={() => scrollToId("status")}>
              <Activity size={14} />
              {HERO.actions[2].label}
            </button>
          </Magnetic>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.2 }}
          data-testid="hero-mention"
          className="mt-8 font-mono-orion text-[10px] tracking-[0.12em] uppercase text-[#94A3B8]/60 max-w-lg leading-relaxed flex items-start gap-2"
        >
          <span className="mt-[3px] w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: "#f59e0b" }} />
          {HERO.mention}
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: d + 1.4, duration: 1 }}
        onClick={() => scrollToId("vision")}
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-6 sm:left-12 z-10 flex items-center gap-3 font-mono-orion text-[10px] tracking-[0.3em] uppercase text-[#94A3B8]"
        data-hover
      >
        <motion.span animate={reduced ? {} : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.span>
        Scroll to explore
      </motion.button>
    </section>
  );
};
