import { FadeUp } from "./SplitReveal";
import { scrollToId } from "./Navbar";

export const Footer = () => (
  <footer data-testid="footer" className="relative border-t border-white/[0.06] px-6 sm:px-12 pt-20 pb-10 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <button onClick={() => scrollToId("hero")} data-hover data-testid="footer-logo" className="text-left">
          <p className="font-heading font-bold text-6xl sm:text-8xl tracking-[-0.04em] text-outline hover:text-white transition-colors duration-700">
            ORION
          </p>
        </button>
      </FadeUp>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="font-mono-orion text-[11px] tracking-[0.25em] uppercase text-[#94A3B8]">
            Obviously Rochat's Intelligent Operating Network
          </p>
          <p data-testid="footer-disclaimer" className="text-xs text-[#94A3B8]/60 mt-4 max-w-md leading-relaxed">
            ORION is an experimental AI system for educational and productivity purposes.
          </p>
        </div>
        <p className="font-mono-orion text-[10px] tracking-[0.2em] uppercase text-[#94A3B8]/50">
          © {new Date().getFullYear()} ORION — All systems nominal
        </p>
      </div>
    </div>
  </footer>
);
