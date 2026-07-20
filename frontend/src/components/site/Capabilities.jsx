import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioLines, Workflow, Network, MonitorCog, Database, Brain, Users, RefreshCw, Scale, AlertTriangle } from "lucide-react";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

const ICONS = [AudioLines, Workflow, Network, MonitorCog, Database, Brain, Users, RefreshCw, Scale];

const TronCorners = () => (
  <>
    <span className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#48cae4]" style={{ boxShadow: "-2px -2px 8px rgba(72,202,228,0.3)" }} />
    <span className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#48cae4]" style={{ boxShadow: "2px -2px 8px rgba(72,202,228,0.3)" }} />
    <span className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#48cae4]" style={{ boxShadow: "-2px 2px 8px rgba(72,202,228,0.3)" }} />
    <span className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#48cae4]" style={{ boxShadow: "2px 2px 8px rgba(72,202,228,0.3)" }} />
  </>
);

export const Capabilities = () => {
  const { CAPABILITIES } = useContent();
  const [active, setActive] = useState(0);
  const item = CAPABILITIES.items[active];
  const ActiveIcon = ICONS[active];

  return (
    <section id="capabilities" data-testid="capabilities-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 700, height: 700, background: "rgba(37,150,190,0.07)", top: "5%", left: "-20%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">03</span> {CAPABILITIES.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="capabilities-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-3xl mb-14">
            {CAPABILITIES.title}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 items-start">
          {/* Selector grid — TRON tiles */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-3 gap-2" data-testid="capability-grid">
              {CAPABILITIES.items.map((c, i) => {
                const Icon = ICONS[i];
                const isActive = i === active;
                return (
                  <button
                    key={c.title}
                    data-testid={`capability-tile-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative aspect-square flex flex-col items-center justify-center gap-2 border transition-all duration-400 tron-cut-sm ${
                      isActive
                        ? "border-[rgba(72,202,228,0.8)] bg-[rgba(37,150,190,0.12)] shadow-[0_0_28px_rgba(37,150,190,0.35),inset_0_0_20px_rgba(37,150,190,0.15)]"
                        : "border-white/[0.08] bg-white/[0.015] hover:border-[rgba(72,202,228,0.4)] hover:bg-[rgba(37,150,190,0.05)]"
                    }`}
                    data-hover
                  >
                    <span className={`absolute top-1.5 left-2 font-mono-orion text-[8px] tracking-[0.2em] ${isActive ? "text-[#48cae4]" : "text-[#94A3B8]/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={22} className={`transition-all duration-300 ${isActive ? "text-[#48cae4] drop-shadow-[0_0_10px_rgba(72,202,228,0.9)]" : "text-[#94A3B8] group-hover:text-white"}`} strokeWidth={1.5} />
                    <span className={`px-1.5 text-center font-mono-orion text-[8px] sm:text-[9px] leading-tight tracking-[0.06em] uppercase transition-colors duration-300 ${isActive ? "text-white" : "text-[#94A3B8]/70"}`}>
                      {c.title}
                    </span>
                    {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3 bg-[#48cae4]" style={{ boxShadow: "0 0 12px rgba(72,202,228,0.9)" }} />}
                  </button>
                );
              })}
            </div>
          </FadeUp>

          {/* Detail console — TRON panel */}
          <FadeUp delay={0.2}>
            <div className="relative border border-[rgba(72,202,228,0.2)] bg-[#04070f]/80 scanlines min-h-[420px] lg:min-h-[440px]" data-testid="capability-console">
              <TronCorners />
              <div className="flex items-center justify-between px-6 py-3 border-b border-[rgba(72,202,228,0.15)]">
                <p className="font-mono-orion text-[9px] tracking-[0.3em] uppercase text-[#48cae4]/70">
                  orion://capabilities/{String(active + 1).padStart(2, "0")}
                </p>
                <span className="flex items-center gap-2 font-mono-orion text-[9px] tracking-[0.2em] uppercase text-[#48cae4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48cae4] animate-pulse" style={{ boxShadow: "0 0 8px #48cae4" }} />
                  online
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -18, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-6 sm:p-8"
                  data-testid="capability-detail"
                >
                  <span className="absolute top-2 right-4 font-heading font-bold text-[7rem] leading-none text-[rgba(72,202,228,0.05)] select-none pointer-events-none">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 flex items-center justify-center border border-[rgba(72,202,228,0.4)] bg-[rgba(37,150,190,0.08)] tron-cut-sm">
                      <ActiveIcon size={22} className="text-[#48cae4]" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white" style={{ textShadow: "0 0 30px rgba(72,202,228,0.3)" }}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 font-heading font-medium text-base sm:text-lg text-[#48cae4]/90 leading-snug max-w-2xl">{item.tagline}</p>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed max-w-2xl">{item.text}</p>

                  <p className="mt-6 font-mono-orion text-[9px] tracking-[0.3em] uppercase text-[#48cae4]/60 flex items-center gap-3">
                    {item.listLabel}
                    <span className="h-px flex-1 max-w-[120px] bg-[rgba(72,202,228,0.25)]" />
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.list.map((f, i) => (
                      <motion.span
                        key={f}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.035, duration: 0.3 }}
                        className="font-mono-orion text-[9px] sm:text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 border border-[rgba(72,202,228,0.25)] text-[#cbd5e1] hover:border-[rgba(72,202,228,0.7)] hover:text-[#48cae4] hover:shadow-[0_0_14px_rgba(72,202,228,0.25)] transition-all duration-300"
                        data-hover
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>

                  {item.note && (
                    <p className="mt-5 flex items-start gap-2.5 text-xs text-[#f59e0b]/80 leading-relaxed border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.04)] p-3.5 max-w-2xl">
                      <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                      {item.note}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
