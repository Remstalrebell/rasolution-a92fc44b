import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", company: "", fleetSize: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage von ${form.name} – ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nUnternehmen: ${form.company}\nE-Mail: ${form.email}\nFuhrparkgröße: ${form.fleetSize}\n\nNachricht:\n${form.message}`
    );
    window.location.href = `mailto:ceo@rasolution.io?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-foreground text-balance animate-reveal">
            Kontakt aufnehmen
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-lg animate-reveal delay-100">
            Lassen Sie uns über Ihre Flotte sprechen.
          </p>

          <div className="mt-12 grid md:grid-cols-5 gap-12 animate-reveal delay-200">
            {/* Info */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Ralf Schmidt</p>
                <p className="text-sm text-muted-foreground">Rasolution.io</p>
              </div>
              <a
                href="mailto:ceo@rasolution.io"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} className="text-primary" />
                ceo@rasolution.io
              </a>
              <a
                href="tel:+491781788817"
                className="inline-flex"
              >
                <Button variant="navy" size="default" className="gap-2">
                  <Phone size={16} />
                  Jetzt Anrufen
                </Button>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  name="name"
                  placeholder="Ihr Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="E-Mail-Adresse"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <input
                name="company"
                placeholder="Unternehmen"
                value={form.company}
                onChange={handleChange}
                className="h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
              <select
                name="fleetSize"
                required
                value={form.fleetSize}
                onChange={handleChange}
                className="h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              >
                <option value="" disabled>
                  Ungefähre Fuhrparkgröße
                </option>
                <option value="10-50">10–50 Fahrzeuge</option>
                <option value="50-200">50–200 Fahrzeuge</option>
                <option value="200+">200+ Fahrzeuge</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Ihre Nachricht"
                value={form.message}
                onChange={handleChange}
                className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
              />
              <Button type="submit" variant="hero" size="lg" className="self-start gap-2">
                <Send size={16} />
                Analyse-Gespräch anfragen
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
