import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

const MarqueeRow = ({ items, reverse = false, outline = false }) => (
  <div className="overflow-hidden py-2" data-hover>
    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
          {items.map((t) => (
            <span
              key={`${dup}-${t}`}
              className={`font-heading font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight whitespace-nowrap px-8 sm:px-12 ${
                outline ? "text-outline" : "text-white/90"
              }`}
            >
              {t}
              <span className="inline-block mx-8 sm:mx-12 w-3 h-3 rounded-full align-middle" style={{ background: "var(--orion-blue)", boxShadow: "0 0 16px rgba(37,150,190,0.8)" }} />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const TechStack = () => {
  const { TECH } = useContent();

  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="px-6 sm:px-12 max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">09</span> {TECH.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="tech-stack-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white mb-16">
            {TECH.title}
          </h2>
        </FadeUp>
      </div>

      <FadeUp y={20}>
        <MarqueeRow items={TECH.marquee} outline />
        <MarqueeRow items={TECH.marquee} reverse />
      </FadeUp>

      <div className="px-6 sm:px-12 max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {TECH.groups.map((g, i) => (
            <FadeUp key={g.name} delay={i * 0.06} className="bg-[#020308]">
              <div data-testid={`tech-group-${i}`} className="group p-7 h-full hover:bg-[rgba(37,150,190,0.05)] transition-colors duration-500" data-hover>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono-orion text-[10px] text-[#48cae4]/60 tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-white/[0.08] group-hover:bg-[rgba(72,202,228,0.3)] transition-colors duration-500" />
                </div>
                <p className="font-heading font-bold text-lg text-white group-hover:text-[#48cae4] transition-colors duration-300">{g.name}</p>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[13px] text-[#94A3B8] leading-snug">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#2596be] shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
