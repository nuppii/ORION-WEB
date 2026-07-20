import { ShieldCheck, AlertTriangle, Lock } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { SECURITY } from "./content";

export const Security = () => (
  <section id="security" data-testid="security-section" className="relative py-32 sm:py-44 px-6 sm:px-12 overflow-hidden">
    <div className="aura" style={{ width: 550, height: 550, background: "rgba(72,202,228,0.05)", bottom: "5%", right: "-15%" }} />
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
          <span className="text-[#94A3B8]/40">08</span> {SECURITY.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 data-testid="security-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl">
          {SECURITY.title}
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="mt-8 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">{SECURITY.intro}</p>
      </FadeUp>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {SECURITY.principles.map((p, i) => (
          <FadeUp key={p} delay={0.04 * i} y={24}>
            <div data-testid={`security-principle-${i}`} className="group flex items-center gap-5 py-5 border-b border-white/[0.06] hover:border-[rgba(72,202,228,0.35)] transition-colors duration-500" data-hover>
              <span className="shrink-0 w-9 h-9 flex items-center justify-center border border-white/[0.1] group-hover:border-[rgba(72,202,228,0.5)] group-hover:shadow-[0_0_16px_rgba(72,202,228,0.2)] transition-all duration-500">
                <Lock size={13} className="text-[#48cae4]/70" />
              </span>
              <p className="text-sm sm:text-base text-[#cbd5e1] group-hover:text-white transition-colors duration-300">{p}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FadeUp>
          <div data-testid="security-audit" className="h-full border border-white/[0.08] p-7 flex items-start gap-4">
            <ShieldCheck size={18} className="shrink-0 mt-1 text-[#48cae4]/70" />
            <p className="text-sm text-[#94A3B8] leading-relaxed">{SECURITY.audit}</p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div data-testid="security-warning" className="h-full border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.04)] p-7 flex items-start gap-4">
            <AlertTriangle size={18} className="shrink-0 mt-1 text-[#f59e0b]/80" />
            <p className="text-sm text-[#f59e0b]/80 leading-relaxed">{SECURITY.warning}</p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);
