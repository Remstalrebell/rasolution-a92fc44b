import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      {/* BEV charging station background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/5982900/pexels-photo-5982900.jpeg')" }}
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-bg))]/70" />

      <div className="container relative z-10 py-24 md:py-32 lg:py-40" ref={ref}>
        <div className="max-w-3xl animate-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6 delay-100 animate-reveal" style={{ color: "hsl(var(--hero-accent))" }}>
            Fuhrparkmanagement
          </p>
          <h1 className="text-balance delay-200 animate-reveal" style={{ color: "hsl(var(--hero-foreground))" }}>
            Fuhrparkmanagement mit System.{" "}
            <span style={{ color: "hsl(var(--hero-accent))" }}>Kosten senken.</span>{" "}
            Effizienz steigern.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed delay-300 animate-reveal" style={{ color: "hsl(var(--hero-muted))", textWrap: "pretty" }}>
            Strategische Beratung und digitale Umsetzung für Unternehmen mit großen Flotten – basierend auf jahrzehntelanger Praxiserfahrung.
          </p>
          <div className="mt-10 delay-400 animate-reveal">
            <Button
              variant="hero"
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt Erstgespräch vereinbaren
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
