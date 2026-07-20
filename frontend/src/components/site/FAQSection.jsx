import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

export const FAQSection = () => {
  const { FAQ } = useContent();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 500, height: 500, background: "rgba(37,150,190,0.06)", bottom: "10%", right: "-12%" }} />
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">12</span> {FAQ.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="faq-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white mb-16">
            {FAQ.title}
          </h2>
        </FadeUp>

        <div className="border-t border-white/[0.08]">
          {FAQ.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={item.q} y={20} delay={0.02 * i}>
                <div data-testid={`faq-item-${i}`} className="border-b border-white/[0.08]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="group w-full flex items-center gap-5 py-6 text-left"
                    data-hover
                  >
                    <span className={`font-mono-orion text-[10px] tracking-[0.2em] w-7 shrink-0 transition-colors duration-300 ${isOpen ? "text-[#48cae4]" : "text-[#94A3B8]/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 font-heading font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${isOpen ? "text-[#48cae4]" : "text-white"}`}>
                      {item.q}
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.35 }} className={`shrink-0 ${isOpen ? "text-[#48cae4]" : "text-[#94A3B8]"}`}>
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                        data-testid={`faq-answer-${i}`}
                      >
                        <p className="pb-7 pl-12 pr-8 text-sm sm:text-base text-[#94A3B8] leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
