import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Monitor, Headphones, Leaf } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Strategische Beratung",
    description:
      "Wir analysieren Ihre bestehende Flottenstruktur und entwickeln einen maßgeschneiderten Fahrplan zur Kostenreduktion.",
  },
  {
    icon: Monitor,
    title: "Digitale Umsetzung",
    description:
      "Ich begleite Sie bei der Einführung moderner Flottensoftware und digitaler Prozesse für maximale Transparenz.",
  },
  {
    icon: Headphones,
    title: "Langfristiger Support",
    description:
      "Als dauerhafter Partner stehe ich Ihnen bei Marktveränderungen und operativen Fragen zur Seite.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container" ref={ref}>
        <h2 className="text-center text-foreground text-balance animate-reveal">
          Leistungen
        </h2>
        <p className="mt-4 text-center text-muted-foreground text-lg animate-reveal delay-100">
          Ganzheitliche Beratung für Ihren Fuhrpark.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-reveal"
              style={{ animationDelay: `${160 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* BEV-Versprechen */}
        <div className="mt-20 max-w-3xl mx-auto bg-card rounded-xl p-10 shadow-sm border border-amber-200/50 animate-reveal delay-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Leaf className="text-green-600" size={20} />
            </div>
            <h3 className="text-foreground">Nachhaltige Flottensteuerung: Mein BEV-Versprechen</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg" style={{ textWrap: "pretty" }}>
            Die Zukunft der Mobilität ist elektrisch. Ich begleite Sie bei der strategischen Umstellung Ihres Fuhrparks auf Battery Electric Vehicles (BEVs). Von der Ladeinfrastruktur bis zur TCO-Analyse – ich mache Ihre Flotte fit für die E-Mobilität.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
