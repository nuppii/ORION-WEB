import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FadeUp } from "./SplitReveal";
import { useContent } from "./i18n";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#334155", "#f8fafc"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
};

export const Vision = () => {
  const { VISION } = useContent();
  const ref = useRef(null);
  const quoteRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const { scrollYProgress: qp } = useScroll({ target: quoteRef, offset: ["start 0.9", "start 0.4"] });
  const qScale = useTransform(qp, [0, 1], [0.94, 1]);
  const qOpacity = useTransform(qp, [0, 1], [0.25, 1]);
  const words = VISION.p1.split(" ");
  const [q0, q1, q2, q3, q4] = VISION.quoteParts;

  return (
    <section id="vision" data-testid="vision-section" className="relative py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="aura" style={{ width: 600, height: 600, background: "rgba(37,150,190,0.08)", top: "10%", left: "-15%" }} />
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4 flex items-center gap-3">
            <span className="text-[#94A3B8]/40">01</span> {VISION.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 data-testid="vision-title" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-4xl">
            {VISION.title}
          </h2>
        </FadeUp>

        <div ref={ref} className="relative mt-12 sm:mt-16 max-w-4xl">
          <p data-testid="vision-text" className="font-heading font-medium text-2xl sm:text-3xl lg:text-4xl leading-[1.35] tracking-tight">
            {reduced
              ? words.join(" ")
              : words.map((w, i) => (
                  <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                    {w}
                  </Word>
                ))}
          </p>
        </div>

        <FadeUp delay={0.1} className="mt-10 max-w-3xl">
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">{VISION.p2}</p>
        </FadeUp>

        <div ref={quoteRef} className="relative mt-16 sm:mt-20">
          <FadeUp>
            <p className="font-mono-orion text-[11px] tracking-[0.25em] uppercase text-[#94A3B8]/60 mb-6">{VISION.ideaLead}</p>
          </FadeUp>
          <motion.blockquote
            style={reduced ? {} : { scale: qScale, opacity: qOpacity }}
            data-testid="vision-quote"
            className="relative pl-8 sm:pl-12 py-2"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: "linear-gradient(180deg, #48cae4, rgba(37,150,190,0.1))", boxShadow: "0 0 12px rgba(72,202,228,0.5)" }} />
            <p className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white max-w-4xl">
              {q0}
              <span className="text-[#48cae4]" style={{ textShadow: "0 0 24px rgba(72,202,228,0.5)" }}>{q1}</span>
              {q2}
              <span className="text-[#48cae4]" style={{ textShadow: "0 0 24px rgba(72,202,228,0.5)" }}>{q3}</span>
              {q4}
            </p>
          </motion.blockquote>
        </div>

        <FadeUp delay={0.1} className="mt-12 max-w-3xl ml-auto">
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">{VISION.p3}</p>
        </FadeUp>
      </div>
    </section>
  );
};
