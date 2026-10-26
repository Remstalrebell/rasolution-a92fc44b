import RefurbishmentGuide from "@/components/RefurbishmentGuide";
import TopAngebote from "@/components/TopAngebote";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Users, Receipt } from "lucide-react";

const faqs = [
  { q: "Welche Gewährleistung erhalte ich auf ein Refurbished E-Bike?", a: "Auf jedes geprüfte E-Bike aus unserem zertifizierten Refurbishment-Partnernetzwerk gilt eine 12 Monate gesetzliche Händler-Gewährleistung auf geprüfte Gebrauchtware. Sie erhalten geprüfte Qualität mit Händler-Gewährleistung." },
  { q: "Wie läuft der Aufbereitungsprozess (Refurbishment) ab?", a: "Jeder Leasingrückläufer durchläuft einen mehrstufigen Prozess: Eingangsprüfung und Dokumentation, vollständige Reinigung, Diagnose von Motor und Elektronik per Herstellersoftware, Akkutest mit Kapazitätsmessung, Austausch aller Verschleißteile nach Bedarf, Einstellung von Schaltung und Bremsen sowie eine abschließende Probefahrt. Erst nach bestandener Endkontrolle erhält das Fahrrad ein Prüfprotokoll und wird freigegeben." },
  { q: "Wie und wohin wird geliefert?", a: "Wir liefern deutschlandweit fahrbereit vormontiert per Speditionsversand, in der Regel innerhalb von 5 bis 10 Werktagen. Lenker und Pedale sind mit wenigen Handgriffen montiert; eine Anleitung liegt bei. In der Region Stuttgart / Rems-Murr ist auch eine persönliche Übergabe mit Einweisung möglich." },
  { q: "Kann mein Unternehmen Diensträder über Rasolution beziehen?", a: "Ja. Wir unterstützen Unternehmen bei der Konzeption eines Dienstradprogramms – von der Auswahl eines geeigneten Leasingpartners über die Überlassungsverträge bis zur Integration in das bestehende Mobilitäts- und Fuhrparkkonzept." },
  { q: "Sind Refurbished E-Bikes auch für Privatpersonen erhältlich?", a: "Selbstverständlich. Leasingrückläufer bieten Privatpersonen eine attraktive Möglichkeit, hochwertige Markenräder deutlich unter der unverbindlichen Preisempfehlung zu erwerben – mit geprüfter Technik und Gewährleistung." },
];

const Mobilitaetsmanagement = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "Privatperson", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nE-Mail: ${form.email}\nAnfrage als: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:info@rasolution.io?subject=${encodeURIComponent("Anfrage Mobilitätsmanagement")}&body=${encodeURIComponent(body)}`;
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
          <div className="container max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">Mobilitätsmanagement</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "hsl(var(--hero-fg, 0 0% 100%))" }}>
              Nachhaltiges Mobilitätsmanagement & Refurbished E-Bikes
            </h1>
            <p className="text-lg md:text-xl mb-10" style={{ color: "hsl(var(--hero-muted))" }}>
              Intelligente Fuhrparklösungen für Unternehmen und hochwertige Leasingrückläufer für Privatpersonen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => scrollTo("top-angebote")}>Zu den Top-Angeboten</Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("anfrage")}>Beratung anfragen</Button>
            </div>
          </div>
        </section>
        <RefurbishmentGuide />

        {/* Ratgeber */}
        <section className="py-20">
          <div className="container max-w-3xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ratgeber: Mobilität neu gedacht</h2>
              <p className="text-foreground/80">Fundiertes Wissen für Unternehmen, Fuhrparkverantwortliche und private Radfahrer.</p>
            </div>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Leaf className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Die Vorteile von Refurbished Leasingrückläufern – ökologisch & ökonomisch</h3></div>
              <p className="text-base leading-relaxed text-foreground/80">Die Herstellung eines E-Bikes verursacht je nach Modell zwischen 100 und 200 Kilogramm CO₂-Äquivalente – der größte Anteil entfällt auf Rahmen, Motor und Akku. Wer sich für ein aufbereitetes Fahrrad entscheidet, verlängert den Lebenszyklus bereits produzierter Ressourcen und vermeidet einen erheblichen Teil dieser Emissionen. Leasingrückläufer stammen meist aus Dienstradprogrammen und wurden in der Regel drei Jahre lang gepflegt, regelmäßig gewartet und durch Vollkaskoversicherungen abgesichert genutzt.</p>
              <p className="text-base leading-relaxed text-foreground/80">Ökonomisch überzeugen Refurbished E-Bikes durch einen deutlichen Preisvorteil: Ersparnisse von 30 bis 45 Prozent gegenüber der unverbindlichen Preisempfehlung sind üblich – bei nahezu identischer Leistungsfähigkeit. Moderne Mittelmotoren sind auf Laufleistungen von weit über 20.000 Kilometern ausgelegt, und Akkus verlieren in drei Jahren typischerweise nur 10 bis 20 Prozent ihrer Kapazität. Durch den professionellen Aufbereitungsprozess mit Diagnose, Verschleißteiltausch und Prüfprotokoll erhalten Käufer Transparenz und Sicherheit, die ein privater Gebrauchtkauf selten bietet.</p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Users className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Wie Unternehmen von Diensträdern profitieren</h3></div>
              <p className="text-base leading-relaxed text-foreground/80">Diensträder sind längst mehr als ein Trend – sie sind ein strategisches Instrument im modernen Mobilitätsmanagement. Jeder Arbeitsweg, der statt mit dem Pkw mit dem E-Bike zurückgelegt wird, spart bei einer Pendelstrecke von 10 Kilometern pro Jahr rund 400 bis 500 Kilogramm CO₂ ein. Für Unternehmen, die im Rahmen der Nachhaltigkeitsberichterstattung (CSRD) ihre Scope-3-Emissionen erfassen, ist das ein messbarer Beitrag zur Klimabilanz.</p>
              <p className="text-base leading-relaxed text-foreground/80">Gleichzeitig stärken Diensträder die Mitarbeiterbindung: Sie sind ein geschätzter Benefit, fördern Gesundheit und Wohlbefinden und senken nachweislich krankheitsbedingte Fehlzeiten. In Zeiten des Fachkräftemangels wird ein attraktives Mobilitätsangebot zum Wettbewerbsvorteil im Recruiting. Zudem reduziert sich der Bedarf an Parkflächen und Poolfahrzeugen – ein Effekt, der sich direkt in den Fuhrparkkosten niederschlägt. Rasolution verknüpft Dienstradprogramme mit dem bestehenden Fuhrpark zu einem ganzheitlichen Mobilitätskonzept.</p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Receipt className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Steuervorteile nutzen – die 0,25 %-Regel einfach erklärt</h3></div>
              <p className="text-base leading-relaxed text-foreground/80">Wird ein Dienstrad per Gehaltsumwandlung überlassen, ist der geldwerte Vorteil für die private Nutzung zu versteuern. Seit 2020 gilt dafür die sogenannte 0,25 %-Regel: Monatlich wird lediglich 1 Prozent eines Viertels der auf volle 100 Euro abgerundeten unverbindlichen Preisempfehlung als geldwerter Vorteil angesetzt. Bei einem E-Bike mit einer UVP von 4.000 Euro sind das nur 10 Euro pro Monat, die dem zu versteuernden Einkommen hinzugerechnet werden.</p>
              <p className="text-base leading-relaxed text-foreground/80">Da die Leasingrate aus dem Bruttogehalt gezahlt wird, sinken Steuer- und Sozialabgaben – Arbeitnehmer sparen gegenüber dem Direktkauf häufig 25 bis 40 Prozent. Übernimmt der Arbeitgeber die Leasingrate zusätzlich zum ohnehin geschuldeten Arbeitslohn, ist die Überlassung sogar vollständig steuerfrei. Wichtig: S-Pedelecs gelten steuerlich als Kraftfahrzeuge, für sie gilt die 0,5 %-Regel analog zum Dienstwagen. Die Angaben dienen der allgemeinen Information und ersetzen keine steuerliche Beratung.</p>
            </article>
          </div>
        </section>

        <TopAngebote />

        {/* FAQ */}
        <section className="py-20">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Häufige Fragen</h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Kontakt */}
        <section id="anfrage" className="py-20 bg-muted/40">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Anfrage stellen</h2>
            <p className="text-muted-foreground text-center mb-10">Ob Mobilitätskonzept für Ihr Unternehmen oder ein E-Bike für Sie privat – wir melden uns zeitnah.</p>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input required type="email" placeholder="E-Mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Privatperson</option>
                <option>Unternehmen – Mobilitätskonzept</option>
                <option>Unternehmen – Dienstradprogramm</option>
              </select>
              <Textarea required rows={5} placeholder="Ihre Nachricht" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" variant="hero" size="lg" className="w-full">Anfrage senden</Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mobilitaetsmanagement;
