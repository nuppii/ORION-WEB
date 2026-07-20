import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FadeUp } from "./SplitReveal";

const TEXT =
  "ORION is an experimental proactive AI system focused on turning intent into structured action. It analyzes requests, selects the right operational path, and coordinates tools across digital workflows.";

const DOMAINS = ["Automation", "System Interaction", "Workflow Orchestration", "Decision Support"];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#334155", "#f8fafc"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
};

export const About = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");

  return (
    <section id="about" data-testid="about-section" className="relative py-32 sm:py-48 px-6 sm:px-12">
      <div className="aura" style={{ width: 600, height: 600, background: "rgba(37,150,190,0.08)", top: "20%", left: "-15%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">01</span> About ORION
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="about-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white max-w-3xl">
            Built to reason, coordinate, and act.
          </h2>
        </FadeUp>

        <div ref={ref} className="mt-16 sm:mt-24 max-w-4xl">
          <p data-testid="about-text" className="font-heading font-medium text-2xl sm:text-3xl lg:text-4xl leading-[1.35] tracking-tight">
            {reduced
              ? words.join(" ")
              : words.map((w, i) => (
                  <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                    {w}
                  </Word>
                ))}
          </p>
        </div>

        <div className="mt-24 sm:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {DOMAINS.map((dm, i) => (
            <FadeUp key={dm} delay={i * 0.1} className="group bg-[#020308]">
              <div
                data-testid={`about-domain-${i}`}
                className="p-8 h-full transition-colors duration-500 hover:bg-[rgba(37,150,190,0.06)]"
                data-hover
              >
                <span className="font-mono-orion text-[10px] text-[#48cae4]/70 tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-heading font-medium text-lg text-white group-hover:text-[#48cae4] transition-colors duration-300">
                  {dm}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
