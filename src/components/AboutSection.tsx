import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ralfImg from "@/assets/ralf-schmidt.jpg";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="shrink-0 animate-reveal">
            <Avatar className="h-40 w-40 border-2 border-amber-500/40 shadow-lg shadow-amber-500/20 ring-2 ring-amber-500/50">
              <AvatarImage src={ralfImg} alt="Ralf Schmidt" className="object-cover" />
              <AvatarFallback className="text-3xl font-bold">RS</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left">
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
      </div>
    </section>
  );
};

export default AboutSection;
