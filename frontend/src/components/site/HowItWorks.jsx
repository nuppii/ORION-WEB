import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MessageSquare, BrainCircuit, Wrench, Play, RefreshCw } from "lucide-react";
import { FadeUp } from "./SplitReveal";

const STEPS = [
  { icon: MessageSquare, title: "User Input", desc: "Intent enters the network — a request, a trigger, a signal." },
  { icon: BrainCircuit, title: "AI Analysis", desc: "ORION reasons over context and decomposes the objective." },
  { icon: Wrench, title: "Tool Selection", desc: "The right operational path and tools are selected automatically." },
  { icon: Play, title: "Execution", desc: "Coordinated actions run across scripts, APIs and systems." },
  { icon: RefreshCw, title: "Feedback", desc: "Results flow back with clear state, ready for the next cycle." },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["2%", "-62%"]);
  const lineW = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  if (reduced) {
    return (
      <section id="how-it-works" data-testid="how-it-works-section" className="py-32 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4">03 — How It Works</p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-16">From request to completed action.</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="border border-white/[0.08] p-8">
                <s.icon size={22} className="text-[#48cae4]" />
                <h3 className="font-heading font-bold text-xl text-white mt-4">{s.title}</h3>
                <p className="text-sm text-[#94A3B8] mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="how-it-works" data-testid="how-it-works-section" className="relative h-[380vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="aura" style={{ width: 700, height: 700, background: "rgba(37,150,190,0.09)", top: "30%", right: "-20%" }} />
        <div className="px-6 sm:px-12 max-w-6xl mx-auto w-full">
          <FadeUp>
            <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
              <span className="text-[#94A3B8]/40">03</span> How It Works
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 data-testid="how-it-works-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              From request to completed action.
            </h2>
          </FadeUp>
        </div>

        <div className="mt-16 sm:mt-20 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.06]" />
          <motion.div className="absolute top-1/2 left-0 h-px" style={{ width: lineW, background: "linear-gradient(90deg, var(--orion-blue), var(--orion-cyan))", boxShadow: "0 0 16px rgba(37,150,190,0.6)" }} />
          <motion.div style={{ x }} className="flex gap-6 sm:gap-10 pl-6 sm:pl-12 w-max">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                data-testid={`step-card-${i}`}
                className="relative w-[280px] sm:w-[360px] shrink-0 border border-white/[0.08] bg-[#060a14]/80 backdrop-blur-xl p-8 sm:p-10 group hover:border-[rgba(37,150,190,0.5)] transition-colors duration-500"
                data-hover
              >
                <span className="font-heading font-bold text-6xl sm:text-7xl text-outline-blue absolute top-6 right-6 opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon size={26} className="text-[#48cae4]" />
                <h3 className="font-heading font-bold text-2xl text-white mt-8 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mt-3">{s.desc}</p>
                <div className="mt-8 h-px w-full bg-white/[0.06] group-hover:bg-[rgba(37,150,190,0.4)] transition-colors duration-500" />
                <p className="font-mono-orion text-[10px] tracking-[0.25em] uppercase text-[#94A3B8]/50 mt-4">
                  Phase {i + 1} / 5
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
