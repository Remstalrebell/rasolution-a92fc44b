import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-foreground text-balance animate-reveal">
            Expertise, die sich auszahlt.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed animate-reveal delay-200" style={{ textWrap: "pretty" }}>
            Mein Name ist <strong className="text-foreground font-semibold">Ralf Schmidt</strong>. Ich unterstütze Unternehmen dabei, ihre Flotte effizienter, kostentransparenter und zukunftssicherer zu steuern. Mit jahrzehntelanger Erfahrung im Fuhrparkmanagement kenne ich die täglichen Herausforderungen zwischen Kostendruck und Mobilitätsgarantie aus der Praxis.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-reveal delay-300" style={{ textWrap: "pretty" }}>
            Mein Ziel ist es, Ihre Flotte nicht nur zu verwalten, sondern strategisch zu optimieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
