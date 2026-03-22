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
    <section id="why" className="py-24 md:py-32 bg-navy">
      <div className="container" ref={ref}>
        <h2 className="text-center text-navy-foreground text-balance animate-reveal">
          Warum Ralf Schmidt?
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="text-center animate-reveal"
              style={{ animationDelay: `${160 + i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <u.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-navy-foreground">{u.title}</h3>
              <p className="mt-3 text-slate_light leading-relaxed max-w-xs mx-auto">
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
