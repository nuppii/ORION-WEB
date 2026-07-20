import { motion, useReducedMotion } from "framer-motion";

export const LineReveal = ({ lines, className = "", delay = 0, as = "h1", once = true, ...rest }) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.h1;
  return (
    <Tag className={className} {...rest}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduced ? { y: 0 } : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const LetterReveal = ({ text, className = "", delay = 0 }) => {
  const reduced = useReducedMotion();
  return (
    <span className={`inline-block overflow-hidden ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={reduced ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

export const FadeUp = ({ children, className = "", delay = 0, y = 40, once = true }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
