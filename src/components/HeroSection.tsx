import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();
  const [showButton, setShowButton] = useState(false);

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

      {/* Single seamless blur wedge – no stacked layers */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          clipPath: "polygon(67% 0%, 100% 0%, 100% 100%, 100% 100%)",
          background: "linear-gradient(135deg, hsl(var(--hero-bg) / 0.1), hsl(var(--hero-bg) / 0.45))",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 12%, rgba(0,0,0,0.45) 32%, rgba(0,0,0,0.78) 58%, #000 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 12%, rgba(0,0,0,0.45) 32%, rgba(0,0,0,0.78) 58%, #000 100%)",
        }}
      />

      {/* Text block – top-right */}
      <div className="relative z-10 flex justify-end pt-[17vh] px-6 lg:px-12" ref={ref}>
        <div
          className="text-right leading-tight cursor-pointer animate-reveal"
          onMouseEnter={() => setShowButton(true)}
          onClick={() => setShowButton(true)}
        >
          <h1
            className="font-bold whitespace-nowrap animate-reveal delay-200"
            style={{
              color: "hsl(var(--hero-foreground))",
              fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
            }}
          >
            Fuhrparkmanagement mit System.
          </h1>
          <p
            className="font-bold mt-1 animate-reveal delay-250"
            style={{
              color: "hsl(var(--primary))",
              fontSize: "clamp(1.3rem, 2.4vw, 2.5rem)",
            }}
          >
            Kosten senken.
          </p>
          <p
            className="font-bold animate-reveal delay-300"
            style={{
              color: "hsl(var(--primary))",
              fontSize: "clamp(1.3rem, 2.4vw, 2.5rem)",
            }}
          >
            Effizienz steigern.
          </p>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed animate-reveal delay-350 ml-auto max-w-md"
            style={{ color: "hsl(var(--hero-muted))" }}
          >
            Strategische Beratung und digitale Umsetzung für Unternehmen mit großen Flotten.
          </p>
          <div
            className="mt-5 transition-opacity duration-700 ease-out"
            style={{ opacity: showButton ? 1 : 0, pointerEvents: showButton ? "auto" : "none" }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={(e) => {
                e.stopPropagation();
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
