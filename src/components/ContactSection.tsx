import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Send, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Anfrage von ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\nNachricht:\n${form.message}`
    );
    window.location.href = `mailto:info@rasolution.io?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary animate-reveal">
            Rasolution
          </h2>
          <p className="mt-3 text-center text-muted-foreground text-lg max-w-2xl mx-auto animate-reveal delay-100">
            Ihr strategischer Partner für modernes Fuhrparkmanagement.
          </p>
          <p className="mt-2 text-center text-muted-foreground animate-reveal delay-100">
            Lassen Sie uns über Ihre Flotte sprechen.
          </p>

          <div className="mt-12 grid md:grid-cols-5 gap-12 animate-reveal delay-200">
            {/* Info */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Rasolution</p>
                <p className="text-sm text-muted-foreground">Fuhrparkmanagement mit System</p>
              </div>
              <a href="tel:+491567972893" className="inline-flex">
                <Button variant="navy" size="default" className="gap-2">
                  <Phone size={16} />
                  Jetzt Anrufen
                </Button>
              </a>
              <a
                href="https://www.instagram.com/rasolution.media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                aria-label="Instagram @rasolution.media"
              >
                <Instagram size={18} />
                @rasolution.media
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
                name="subject"
                placeholder="Betreff"
                required
                value={form.subject}
                onChange={handleChange}
                className="h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Ihre Nachricht"
                required
                value={form.message}
                onChange={handleChange}
                className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
              />
              <Button type="submit" variant="hero" size="lg" className="self-start gap-2">
                <Send size={16} />
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
