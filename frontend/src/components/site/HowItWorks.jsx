import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

export const HowItWorks = () => {
  const { HOW_IT_WORKS } = useContent();
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.75"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 600, height: 600, background: "rgba(37,150,190,0.07)", top: "40%", right: "-18%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">05</span> {HOW_IT_WORKS.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="how-it-works-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl mb-16">
            {HOW_IT_WORKS.title}
          </h2>
        </FadeUp>

        <div ref={ref} className="relative">
          <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-white/[0.08]" />
          {!reduced && (
            <motion.div
              className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px origin-top"
              style={{ scaleY: lineScale, background: "linear-gradient(180deg, #48cae4, #2596be)", boxShadow: "0 0 12px rgba(72,202,228,0.5)" }}
            />
          )}

          <div className="space-y-10 sm:space-y-12">
            {HOW_IT_WORKS.steps.map((s, i) => (
              <FadeUp key={s.title} y={40} delay={0.05}>
                <div data-testid={`how-step-${i}`} className="group relative grid grid-cols-[40px_1fr] sm:grid-cols-[56px_200px_1fr] gap-6 sm:gap-10 items-start" data-hover>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 border border-white/[0.12] bg-[#020308] group-hover:border-[rgba(72,202,228,0.6)] group-hover:shadow-[0_0_24px_rgba(72,202,228,0.25)] transition-all duration-500">
                    <span className="font-mono-orion text-xs sm:text-sm text-[#48cae4]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="hidden sm:block font-heading font-bold text-xl text-white pt-3 group-hover:text-[#48cae4] transition-colors duration-300">{s.title}</p>
                  <div className="pt-1 sm:pt-3">
                    <p className="sm:hidden font-heading font-bold text-lg text-white mb-2">{s.title}</p>
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl group-hover:text-[#cbd5e1] transition-colors duration-300">{s.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
