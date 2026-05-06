import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, BarChart3, Target, Megaphone, Rocket, Bot, CreditCard, ExternalLink } from "lucide-react";
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
    <BusinessResourcesSection />
    </>
  );
};

const resources = [
  {
    icon: Rocket,
    title: "Der Affiliate-Code 3.0 & Closer-Coaching",
    text: "Systematische Skalierung und High-Ticket-Marketing-Strategien für nachhaltigen digitalen Erfolg.",
    links: [
      { label: "Affiliate-Code 3.0", url: "https://www.digistore24.com/redir/594457/Rasolution/" },
      { label: "Closer-Coaching", url: "https://www.digistore24.com/redir/539110/Rasolution/" },
    ],
  },
  {
    icon: Bot,
    title: "Emergent AI – Business Automation",
    text: "KI-gestützte Workflows zur Eliminierung repetitiver Aufgaben und zur Schaffung strategischer Freiräume.",
    links: [{ label: "Emergent AI entdecken", url: "https://app.emergent.sh/register?ref=ceor250178" }],
  },
  {
    icon: CreditCard,
    title: "Premium Business Finance",
    text: "Maximale Liquidität und exklusive Business-Benefits durch AMEX Business Platinum (200k Punkte Bonus) und Advanzia Gold.",
    links: [
      { label: "AMEX Business Platinum", url: "https://americanexpress.com/de-de/referral/business-platinum?ref=rALFSb9w9&XLINK=MYCP" },
      { label: "Advanzia Gold", url: "https://refer.gebuhrenfrei.com/6dVPTb" },
    ],
  },
];

const BusinessResourcesSection = () => {
  const ref = useScrollReveal();
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(215 28% 9%) 0%, hsl(348 25% 11%) 100%)" }}>
      <div className="container relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center animate-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Strategische Partnerschaften</p>
          <h2 className="text-white text-balance">Business-Ressourcen & Strategische Tools</h2>
          <p className="mt-4 text-slate-300 text-lg">Kuratierte Werkzeuge und Partner für Entlastung, Transparenz und nachhaltiges Unternehmenswachstum.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <div
              key={r.title}
              className="group rounded-2xl p-7 border border-white/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300 animate-reveal flex flex-col"
              style={{ background: "rgba(255,255,255,0.04)", animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <r.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-white">{r.title}</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed flex-1">{r.text}</p>
              <div className="mt-6 flex flex-col gap-2">
                {r.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium text-white bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-lg px-4 py-2.5 transition-all"
                  >
                    <span>{l.label}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-400 max-w-2xl mx-auto animate-reveal" style={{ animationDelay: "600ms" }}>
          Transparenz-Hinweis: Diese Sektion enthält Affiliate-Partner-Links. Bei Abschluss erhalten wir ggf. eine Provision, ohne dass sich der Preis für Sie ändert.
        </p>
      </div>
    </section>
  );
};

export default MarketingSection;
