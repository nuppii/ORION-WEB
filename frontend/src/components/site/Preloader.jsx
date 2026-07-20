import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LetterReveal } from "./SplitReveal";

export const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / 1800, 1);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: "#020308" }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative">
        <div className="aura" style={{ width: 320, height: 320, background: "rgba(37,150,190,0.25)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <LetterReveal
          text="ORION"
          className="font-heading font-bold text-6xl sm:text-8xl tracking-[-0.04em] text-white relative"
          delay={0.15}
        />
      </div>
      <div className="mt-10 flex items-center gap-4">
        <div className="h-px w-24 bg-white/10 overflow-hidden">
          <motion.div
            className="h-full"
            style={{ background: "var(--orion-blue)", width: `${count}%` }}
          />
        </div>
        <span className="font-mono-orion text-xs text-[#94A3B8] tabular-nums" data-testid="preloader-counter">
          {String(count).padStart(3, "0")}
        </span>
      </div>
      <p className="font-mono-orion text-[10px] tracking-[0.3em] uppercase text-[#94A3B8]/60 mt-6">
        Proactive AI Operating Network
      </p>
    </motion.div>
  );
};
