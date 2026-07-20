import { motion } from "framer-motion";
import { TrendingUp, Info } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

export const Finance = () => {
  const { FINANCE } = useContent();

  return (
    <section id="finance" data-testid="finance-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 550, height: 550, background: "rgba(37,150,190,0.07)", top: "20%", left: "-15%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">07</span> {FINANCE.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="finance-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl">
            {FINANCE.title}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">{FINANCE.intro}</p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-14 border border-white/[0.08] bg-[#060a14]/60" data-testid="finance-panel">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2596be]/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#48cae4]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <p className="font-mono-orion text-[10px] tracking-[0.25em] uppercase text-[#94A3B8]/60 flex items-center gap-2">
                <TrendingUp size={12} className="text-[#48cae4]" /> {FINANCE.listLabel}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
              {FINANCE.list.map((f, i) => (
                <div key={f} data-testid={`finance-tile-${i}`} className="group bg-[#020308] p-6 hover:bg-[rgba(37,150,190,0.06)] transition-colors duration-500" data-hover>
                  <span className="font-mono-orion text-[10px] text-[#48cae4]/60 tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-heading font-medium text-base text-white group-hover:text-[#48cae4] transition-colors duration-300">{f}</p>
                  <div className="mt-4 flex items-end gap-1 h-6" aria-hidden>
                    {[0.4, 0.7, 0.5, 0.9, 0.6, 1].map((h, j) => (
                      <motion.span
                        key={j}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.06 + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="w-1.5 origin-bottom bg-gradient-to-t from-[#2596be]/30 to-[#48cae4]/60 group-hover:to-[#48cae4] transition-colors duration-500"
                        style={{ height: `${h * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p data-testid="finance-disclaimer" className="mt-8 flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8]/70 leading-relaxed border border-white/[0.06] p-5 max-w-3xl">
            <Info size={15} className="shrink-0 mt-0.5 text-[#48cae4]/60" />
            {FINANCE.disclaimer}
          </p>
        </FadeUp>
      </div>
    </section>
  );
};
