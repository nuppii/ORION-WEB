import { AlertTriangle } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { DISCLAIMER } from "./content";

export const DisclaimerSection = () => (
  <section id="disclaimer" data-testid="disclaimer-section" className="relative py-24 sm:py-32 px-6 sm:px-12">
    <div className="max-w-4xl mx-auto">
      <FadeUp>
        <div className="border border-white/[0.08] p-8 sm:p-12">
          <p className="font-mono-orion text-[11px] tracking-[0.3em] uppercase text-[#94A3B8]/60 mb-8 flex items-center gap-3">
            <AlertTriangle size={13} className="text-[#f59e0b]/70" />
            {DISCLAIMER.title}
          </p>
          <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
            <p>{DISCLAIMER.p1}</p>
            <p>{DISCLAIMER.p2}</p>
            <p>{DISCLAIMER.p3}</p>
          </div>
          <p className="mt-8 font-mono-orion text-[10px] tracking-[0.25em] uppercase text-[#48cae4]/70">{DISCLAIMER.lead}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {DISCLAIMER.responsibilities.map((r, i) => (
              <div key={r} data-testid={`responsibility-${i}`} className="flex items-start gap-3 py-1">
                <span className="mt-[8px] w-1 h-1 rounded-full bg-[#2596be] shrink-0" />
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
          <p data-testid="disclaimer-outro" className="mt-8 text-[13px] text-[#f59e0b]/70 leading-relaxed border-t border-white/[0.06] pt-6">
            {DISCLAIMER.outro}
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);
