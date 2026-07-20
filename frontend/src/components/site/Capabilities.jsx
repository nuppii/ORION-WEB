import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, AlertTriangle } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { CAPABILITIES } from "./content";

const Row = ({ item, index, open, onToggle }) => (
  <FadeUp y={30} delay={0.03 * index}>
    <div data-testid={`capability-row-${index}`} className="border-b border-white/[0.08]">
      <button
        onClick={onToggle}
        data-testid={`capability-toggle-${index}`}
        className="group w-full flex items-center gap-6 sm:gap-10 py-7 sm:py-8 text-left"
        data-hover
      >
        <span className={`font-mono-orion text-xs tracking-[0.2em] w-8 shrink-0 transition-colors duration-300 ${open ? "text-[#48cae4]" : "text-[#94A3B8]/40"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-all duration-500 ${
            open ? "text-[#48cae4] translate-x-2" : "text-white group-hover:text-white group-hover:translate-x-2"
          }`}
        >
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 w-9 h-9 flex items-center justify-center border transition-colors duration-300 ${
            open ? "border-[rgba(72,202,228,0.6)] text-[#48cae4]" : "border-white/[0.12] text-[#94A3B8]"
          }`}
        >
          <Plus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            data-testid={`capability-content-${index}`}
          >
            <div className="pb-10 pl-14 sm:pl-[4.5rem] pr-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <p className="font-heading font-medium text-lg sm:text-xl text-white/90 leading-snug">{item.tagline}</p>
                <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">{item.text}</p>
                {item.note && (
                  <p className="mt-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#f59e0b]/80 leading-relaxed border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.04)] p-4">
                    <AlertTriangle size={15} className="shrink-0 mt-0.5" />
                    {item.note}
                  </p>
                )}
              </div>
              <div>
                <p className="font-mono-orion text-[10px] tracking-[0.25em] uppercase text-[#48cae4]/70 mb-4">{item.listLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {item.list.map((f, i) => (
                    <motion.span
                      key={f}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.04, duration: 0.4 }}
                      className="font-mono-orion text-[10px] sm:text-[11px] tracking-[0.08em] uppercase px-3.5 py-2 border border-white/[0.1] text-[#cbd5e1] hover:border-[rgba(72,202,228,0.5)] hover:text-[#48cae4] transition-colors duration-300"
                      data-hover
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </FadeUp>
);

export const Capabilities = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="capabilities" data-testid="capabilities-section" className="relative py-32 sm:py-44 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 700, height: 700, background: "rgba(37,150,190,0.07)", top: "5%", left: "-20%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">03</span> {CAPABILITIES.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="capabilities-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl mb-20">
            {CAPABILITIES.title}
          </h2>
        </FadeUp>

        <div className="border-t border-white/[0.08]">
          {CAPABILITIES.items.map((item, i) => (
            <Row key={item.title} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};
