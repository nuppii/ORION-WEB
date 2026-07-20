import { FadeUp } from "./SplitReveal";

const TECH = ["Python", "AI APIs", "Automation Tools", "System Scripting", "REST APIs"];

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

export const TechStack = () => (
  <section id="tech-stack" data-testid="tech-stack-section" className="relative py-32 sm:py-44 overflow-hidden">
    <div className="px-6 sm:px-12 max-w-6xl mx-auto">
      <FadeUp>
        <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
          <span className="text-[#94A3B8]/40">04</span> Tech Stack
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 data-testid="tech-stack-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white mb-20">
          Designed for practical automation.
        </h2>
      </FadeUp>
    </div>
    <FadeUp y={20}>
      <MarqueeRow items={TECH} outline />
      <MarqueeRow items={TECH} reverse />
    </FadeUp>
  </section>
);
