import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Award, Zap } from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "Unabhängigkeit",
    description: "Ich berate hersteller- und leasingneutral – nur Ihr Erfolg zählt.",
  },
  {
    icon: Award,
    title: "Praxiserfahrung",
    description: "Jahrzehntelange Expertise in der operativen Flottensteuerung.",
  },
  {
    icon: Zap,
    title: "Zukunftssicherheit",
    description: "Expertise bei der Umstellung auf E-Mobilität und digitale Verwaltung.",
  },
];

const WhySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="why" className="py-24 md:py-32" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="container" ref={ref}>
        <h2 className="text-center text-balance animate-reveal" style={{ color: "hsl(var(--hero-foreground))" }}>
          Warum Ralf Schmidt?
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="text-center animate-reveal"
              style={{ animationDelay: `${160 + i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "hsl(var(--hero-accent) / 0.15)" }}>
                <u.icon style={{ color: "hsl(var(--hero-accent))" }} size={26} />
              </div>
              <h3 style={{ color: "hsl(var(--hero-foreground))" }}>{u.title}</h3>
              <p className="mt-3 leading-relaxed max-w-xs mx-auto" style={{ color: "hsl(var(--hero-muted))" }}>
                {u.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
