import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Truck } from "lucide-react";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Fleet background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4204153/pexels-photo-4204153.jpeg')" }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="shrink-0 animate-reveal">
            <div className="h-40 w-40 rounded-full border-2 border-primary/30 shadow-lg bg-muted/50 flex items-center justify-center">
              <Truck className="h-16 w-16 text-primary/60" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-foreground text-balance animate-reveal">
              Expertise, die sich auszahlt.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed animate-reveal delay-200" style={{ textWrap: "pretty" }}>
              <strong className="text-foreground font-semibold">Rasolution</strong> unterstützt Unternehmen dabei, ihre Flotte effizienter, kostentransparenter und zukunftssicherer zu steuern. Mit jahrzehntelanger Erfahrung im Fuhrparkmanagement kennen wir die täglichen Herausforderungen zwischen Kostendruck und Mobilitätsgarantie aus der Praxis.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-reveal delay-300" style={{ textWrap: "pretty" }}>
              Unser Ziel ist es, Ihre Flotte nicht nur zu verwalten, sondern strategisch zu optimieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
