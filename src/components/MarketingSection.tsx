import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, BarChart3, Target, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Professionelle Webpräsenz",
    description: "Ihre Marke verdient einen starken Auftritt. Wir gestalten Webseiten, die Vertrauen schaffen und Kunden gewinnen.",
  },
  {
    icon: BarChart3,
    title: "Suchmaschinenoptimierung",
    description: "Durch gezielte SEO-Strategien sorgen wir dafür, dass Sie bei Google & Co. gefunden werden – organisch und nachhaltig.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Von Google Ads bis Social Media – wir schalten zielgerichtete Kampagnen, die messbare Ergebnisse liefern.",
  },
  {
    icon: Megaphone,
    title: "YouTube & Video-Marketing",
    description: "Video ist das stärkste Medium. Wir entwickeln YouTube-Strategien, die Ihre Expertise sichtbar machen und Reichweite schaffen.",
  },
];

const MarketingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="marketing" className="py-24 md:py-32 bg-secondary/50">
      <div className="container" ref={ref}>
        <div className="max-w-3xl mx-auto text-center animate-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Onlinemarketing & YTA
          </p>
          <h2 className="text-foreground text-balance">
            Digitale Sichtbarkeit für Ihr Unternehmen
          </h2>
          <p className="mt-4 text-muted-foreground text-lg delay-100 animate-reveal" style={{ textWrap: "pretty" }}>
            Neben Fuhrparkmanagement unterstütze ich Unternehmen dabei, ihre digitale Präsenz strategisch auszubauen – von der Website über SEO bis hin zu YouTube-Strategien.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-reveal"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-reveal" style={{ animationDelay: "600ms" }}>
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Marketing-Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
