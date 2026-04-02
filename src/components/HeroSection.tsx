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

      {/* Diagonal wedge mask – soft-edge gradient blur */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          clipPath: "polygon(67% 0%, 100% 0%, 100% 100%, 100% 100%)",
          background: "linear-gradient(to bottom right, hsl(var(--hero-bg) / 0.15), hsl(var(--hero-bg) / 0.55))",
        }}
      />

      {/* Soft gradient transition zone for seamless blur edge */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          clipPath: "polygon(55% 0%, 67% 0%, 100% 100%, 85% 100%)",
          background: "linear-gradient(to right, transparent, hsl(var(--hero-bg) / 0.2))",
        }}
      />

      {/* Text block inside the protected zone */}
      <div className="relative z-10 w-full flex justify-end" ref={ref}>
        <div className="w-[42%] px-8 lg:px-12 text-right flex flex-col justify-center animate-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 delay-100 animate-reveal" style={{ color: "hsl(var(--hero-accent))" }}>
            Fuhrparkmanagement
          </p>
          <h1
            className="font-bold leading-tight delay-200 animate-reveal whitespace-nowrap"
            style={{
              color: "hsl(var(--hero-foreground))",
              fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
            }}
          >
            Fuhrparkmanagement mit System.
          </h1>
          <p
            className="font-bold mt-1 delay-250 animate-reveal"
            style={{
              color: "hsl(var(--primary))",
              fontSize: "clamp(1.3rem, 2.4vw, 2.5rem)",
            }}
          >
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
