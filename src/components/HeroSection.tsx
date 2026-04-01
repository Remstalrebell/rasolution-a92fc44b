import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      {/* Background image – boosted saturation for golden sun glow */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3864110/pexels-photo-3864110.jpeg')",
          opacity: 0.3,
          filter: "saturate(1.6)",
        }}
      />

      {/* Glass mask – right 38%, masks industrial elements */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[38%] backdrop-blur-xl"
        style={{ backgroundColor: "hsl(var(--hero-bg) / 0.45)" }}
      />

      {/* Text block inside the glass zone */}
      <div className="relative z-10 w-full flex justify-end" ref={ref}>
        <div className="w-[38%] px-8 lg:px-12 text-right flex flex-col justify-center animate-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 delay-100 animate-reveal" style={{ color: "hsl(var(--hero-accent))" }}>
            Fuhrparkmanagement
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight delay-200 animate-reveal" style={{ color: "hsl(var(--hero-foreground))" }}>
            Fuhrparkmanagement mit System.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1 delay-250 animate-reveal" style={{ color: "hsl(var(--primary))" }}>
            Kosten senken. Effizienz steigern.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed delay-300 animate-reveal ml-auto max-w-md" style={{ color: "hsl(var(--hero-muted))" }}>
            Strategische Beratung und digitale Umsetzung für Unternehmen mit großen Flotten.
          </p>
          <div className="mt-5 delay-400 animate-reveal">
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
