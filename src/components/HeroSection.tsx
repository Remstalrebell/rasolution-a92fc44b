import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3864110/pexels-photo-3864110.jpeg')",
          opacity: 0.3,
          filter: "saturate(1.6)",
        }}
      />

      {/* Glassmorphism wedge – razor-sharp diagonal, no stripes */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(55% 0%, 100% 0%, 100% 100%, 85% 100%)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          background: "rgba(255, 255, 255, 0.1)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      />

      {/* Text block – top-right, high positioning */}
      <div className="relative z-10 flex justify-end pt-[12vh] px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="text-right leading-tight group animate-reveal max-w-[90vw] sm:max-w-none">
          <h1
            className="font-bold animate-reveal delay-200"
            style={{
              color: "hsl(var(--hero-foreground))",
              fontSize: "clamp(1.3rem, 2.8vw, 3rem)",
            }}
          >
            Fuhrparkmanagement<br />mit System.
          </h1>
          <p
            className="font-bold mt-1 animate-reveal delay-250"
            style={{
              color: "hsl(var(--primary))",
              fontSize: "clamp(1.1rem, 2.4vw, 2.5rem)",
            }}
          >
            Effizienz steigern.
          </p>
          <p
            className="font-bold animate-reveal delay-300"
            style={{
              color: "hsl(var(--primary))",
              fontSize: "clamp(1.1rem, 2.4vw, 2.5rem)",
            }}
          >
            Kosten senken.
          </p>
          <p
            className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed animate-reveal delay-350 ml-auto max-w-md"
            style={{ color: "hsl(var(--hero-muted))" }}
          >
            Strategische Beratung und digitale Umsetzung<br />für Unternehmen mit großen Flotten.
          </p>
          <div className="mt-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-700 ease-out">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
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
