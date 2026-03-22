import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(215 50% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(215 50% 60%) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />

      <div className="container relative z-10 py-24 md:py-32 lg:py-40" ref={ref}>
        <div className="max-w-3xl animate-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6 delay-100 animate-reveal">
            Fuhrparkmanagement
          </p>
          <h1 className="text-navy-foreground text-balance delay-200 animate-reveal">
            Fuhrparkmanagement mit System.{" "}
            <span className="text-primary">Kosten senken.</span>{" "}
            Effizienz steigern.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate_light max-w-2xl leading-relaxed delay-300 animate-reveal" style={{ textWrap: "pretty" }}>
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
