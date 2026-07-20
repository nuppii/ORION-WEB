import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

export const RoadmapSection = () => {
  const { ROADMAP } = useContent();

  return (
    <section id="roadmap" data-testid="roadmap-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 650, height: 650, background: "rgba(72,202,228,0.05)", top: "30%", left: "-18%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">11</span> {ROADMAP.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="roadmap-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl mb-16">
            {ROADMAP.title}
          </h2>
        </FadeUp>

        <div className="border-t border-white/[0.08]">
          {ROADMAP.phases.map((phase, i) => (
            <FadeUp key={phase.name} y={30}>
              <div data-testid={`roadmap-phase-${i}`} className="group grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-16 py-10 border-b border-white/[0.08]" data-hover>
                <div>
                  <p className="font-mono-orion text-[10px] tracking-[0.3em] uppercase text-[#48cae4]/70">Phase {String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#48cae4] transition-colors duration-500">
                    {phase.name}
                  </p>
                  {phase.lead && <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed max-w-xs">{phase.lead}</p>}
                </div>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                    {phase.items.map((item, j) => (
                      <FadeUp key={item} delay={0.04 * j} y={14}>
                        <div className="flex items-start gap-3 py-2.5 border-b border-white/[0.04]">
                          <span className="mt-[9px] h-px w-4 shrink-0 bg-[#2596be] group-hover:bg-[#48cae4] transition-colors duration-500" />
                          <p className="text-sm text-[#94A3B8] leading-relaxed">{item}</p>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                  {phase.outro && (
                    <p className="mt-6 font-mono-orion text-[11px] tracking-[0.1em] uppercase text-[#48cae4]/70 leading-relaxed">{phase.outro}</p>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
