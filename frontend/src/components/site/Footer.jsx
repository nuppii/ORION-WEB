import { FadeUp } from "./SplitReveal";
import { scrollToId } from "./Navbar";
import { useContent } from "./i18n";

export const Footer = () => {
  const { FOOTER } = useContent();

  return (
    <footer data-testid="footer" className="relative border-t border-white/[0.06] px-6 sm:px-12 pt-20 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <button onClick={() => scrollToId("hero")} data-hover data-testid="footer-logo" className="text-left">
            <p className="font-heading font-bold text-6xl sm:text-8xl tracking-[-0.04em] text-outline hover:text-white transition-colors duration-700">
              ORION
            </p>
          </button>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
          <div>
            <p className="font-mono-orion text-[11px] tracking-[0.25em] uppercase text-[#94A3B8]">{FOOTER.subtitle}</p>
            <p data-testid="footer-tagline" className="mt-3 font-heading font-medium text-lg text-white/80">{FOOTER.tagline}</p>
          </div>
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-3" aria-label="Footer navigation">
            {FOOTER.nav.map((l) => (
              <button
                key={l.label}
                data-testid={`footer-link-${l.id}-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => scrollToId(l.id)}
                className="text-left font-mono-orion text-[10px] tracking-[0.2em] uppercase text-[#94A3B8]/70 hover:text-[#48cae4] transition-colors duration-300"
                data-hover
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.05]">
          <p data-testid="footer-copyright" className="font-mono-orion text-[10px] tracking-[0.15em] uppercase text-[#94A3B8]/50 leading-relaxed">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
