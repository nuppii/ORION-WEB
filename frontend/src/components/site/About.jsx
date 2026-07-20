import { FadeUp } from "./SplitReveal";
import { ABOUT, PRINCIPLES } from "./content";

export const About = () => (
  <section id="about" data-testid="about-section" className="relative py-32 sm:py-44 px-6 sm:px-12 overflow-hidden">
    <div className="aura" style={{ width: 600, height: 600, background: "rgba(72,202,228,0.06)", top: "30%", right: "-15%" }} />
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
          <span className="text-[#94A3B8]/40">02</span> {ABOUT.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 data-testid="about-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl">
          {ABOUT.title}
        </h2>
      </FadeUp>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <FadeUp delay={0.15}>
          <p data-testid="about-intro" className="font-heading font-medium text-xl sm:text-2xl leading-[1.4] tracking-tight text-white/90">
            {ABOUT.intro}
          </p>
          <p className="mt-8 text-base text-[#94A3B8] leading-relaxed">{ABOUT.routing}</p>
        </FadeUp>
        <div>
          <FadeUp delay={0.2}>
            <p className="font-mono-orion text-[11px] tracking-[0.2em] uppercase text-[#94A3B8]/60 mb-6">{ABOUT.layersLead}</p>
          </FadeUp>
          <div className="space-y-0">
            {ABOUT.layers.map((l, i) => (
              <FadeUp key={l} delay={0.05 * i} y={20}>
                <div
                  data-testid={`about-layer-${i}`}
                  className="group flex items-center gap-4 py-3 border-b border-white/[0.06] hover:border-[rgba(72,202,228,0.4)] transition-colors duration-500"
                  data-hover
                >
                  <span className="font-mono-orion text-[10px] text-[#48cae4]/60 tracking-[0.2em] w-7">{String(i + 1).padStart(2, "0")}</span>
                  <span className="w-1 h-1 rounded-full bg-[#2596be] group-hover:shadow-[0_0_10px_#48cae4] group-hover:bg-[#48cae4] transition-all duration-300" />
                  <p className="text-sm sm:text-base text-[#cbd5e1] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{l}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-28 sm:mt-36">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-10 flex items-center gap-3">
            <span className="h-px w-10 inline-block" style={{ background: "var(--orion-cyan)" }} />
            Core Principles
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {PRINCIPLES.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08} className="bg-[#020308]">
              <div
                data-testid={`principle-${i}`}
                className="group relative p-8 h-full transition-colors duration-500 hover:bg-[rgba(37,150,190,0.06)] overflow-hidden"
                data-hover
              >
                <span className="absolute -top-4 -right-2 font-heading font-bold text-7xl text-white/[0.03] group-hover:text-[rgba(72,202,228,0.08)] transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-orion text-[10px] text-[#48cae4]/70 tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-heading font-bold text-lg text-white group-hover:text-[#48cae4] transition-colors duration-300">{p.title}</p>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{p.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);
