import { AlertTriangle } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

const DOT = {
  good: { color: "#48cae4", pulse: true },
  mid: { color: "#2596be", pulse: false },
  bad: { color: "#f59e0b", pulse: true },
};

export const StatusSection = () => {
  const { STATUS, UI } = useContent();

  return (
    <section id="status" data-testid="status-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 600, height: 600, background: "rgba(37,150,190,0.06)", top: "10%", right: "-18%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">10</span> {STATUS.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="status-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl">
            {STATUS.title}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl">{STATUS.intro}</p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <FadeUp delay={0.1}>
            <div data-testid="status-panel" className="border border-white/[0.08] bg-[#060a14]/60">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
                <p className="font-mono-orion text-[10px] tracking-[0.25em] uppercase text-[#94A3B8]/60">{UI.diagnostics}</p>
                <span className="flex items-center gap-2 font-mono-orion text-[10px] tracking-[0.2em] uppercase text-[#48cae4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48cae4] animate-pulse" /> {UI.live}
                </span>
              </div>
              <div className="p-6 space-y-1">
                {STATUS.entries.map((e, i) => {
                  const dot = DOT[e.state];
                  return (
                    <div key={e.label} data-testid={`status-entry-${i}`} className="group flex items-center gap-3 py-2 font-mono-orion text-xs sm:text-[13px]" data-hover>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot.pulse ? "animate-pulse" : ""}`} style={{ background: dot.color, boxShadow: `0 0 8px ${dot.color}66` }} />
                      <span className="text-[#94A3B8] group-hover:text-white transition-colors duration-300">{e.label}</span>
                      <span className="flex-1 border-b border-dotted border-white/[0.12] mx-1 translate-y-[3px]" />
                      <span style={{ color: dot.color }} className="text-right">{e.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p data-testid="status-commercial" className="mt-6 text-xs sm:text-sm text-[#94A3B8]/70 leading-relaxed border border-white/[0.06] p-5">
              {STATUS.commercial}
            </p>
          </FadeUp>

          <div>
            <FadeUp delay={0.15}>
              <p className="font-heading font-bold text-2xl text-white flex items-center gap-3">
                <AlertTriangle size={18} className="text-[#f59e0b]/80" />
                {STATUS.limitationsTitle}
              </p>
              <p className="mt-3 text-sm text-[#94A3B8]">{STATUS.limitationsLead}</p>
            </FadeUp>
            <div className="mt-8 space-y-0">
              {STATUS.limitations.map((l, i) => (
                <FadeUp key={l} delay={0.02 * i} y={16}>
                  <div data-testid={`limitation-${i}`} className="group flex items-start gap-4 py-3 border-b border-white/[0.05] hover:border-[rgba(245,158,11,0.25)] transition-colors duration-500" data-hover>
                    <span className="font-mono-orion text-[10px] text-[#94A3B8]/40 tracking-[0.2em] pt-0.5 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-[#94A3B8] group-hover:text-[#cbd5e1] transition-colors duration-300 leading-relaxed">{l}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
