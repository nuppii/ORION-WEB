import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./SplitReveal";

const FEATURES = [
  { n: "01", title: "Task Automation", desc: "Convert recurring work into dependable automated flows with clear state and feedback." },
  { n: "02", title: "AI Workflow Orchestration", desc: "Coordinate multi-step processes, route decisions, and keep complex operations aligned." },
  { n: "03", title: "System Interaction Layer", desc: "Bridge user intent with scripts, APIs, local tools, and controlled system operations." },
  { n: "04", title: "Intelligent Decision Support", desc: "Surface context, evaluate options, and support decisions with structured reasoning." },
  { n: "05", title: "Modular Tool Integration", desc: "Connect specialized capabilities through a flexible architecture designed to expand." },
];

export const Features = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="features" data-testid="features-section" className="relative py-32 sm:py-48 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">02</span> Features
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="features-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white max-w-3xl mb-20 sm:mb-28">
            Intelligence for modern operational systems.
          </h2>
        </FadeUp>

        <div className="border-t border-white/[0.08]">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.n} delay={i * 0.05}>
              <div
                data-testid={`feature-row-${f.n}`}
                className="group relative border-b border-white/[0.08] py-10 sm:py-12 grid grid-cols-12 gap-4 items-center cursor-default overflow-hidden"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-hover
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: "linear-gradient(90deg, rgba(37,150,190,0.10), transparent 65%)" }}
                />
                <span className={`col-span-2 sm:col-span-1 font-heading font-bold text-3xl sm:text-5xl transition-colors duration-500 ${active === i ? "text-[#48cae4]" : "text-outline"}`}>
                  {f.n}
                </span>
                <div className="col-span-9 sm:col-span-5">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight text-white group-hover:translate-x-2 transition-transform duration-500">
                    {f.title}
                  </h3>
                </div>
                <p className="col-span-12 sm:col-span-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed pl-[calc(16.666%+1rem)] sm:pl-0">
                  {f.desc}
                </p>
                <span className="hidden sm:flex col-span-1 justify-end">
                  <ArrowUpRight
                    size={22}
                    className={`transition-all duration-500 ${active === i ? "text-[#48cae4] rotate-0 opacity-100" : "text-[#94A3B8]/30 -rotate-45 opacity-40"}`}
                  />
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
