import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bike, Leaf, Users, Receipt, BatteryCharging, ShieldCheck, Ruler, Euro, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// Beispiele aus dem Bestand von BIKE2FUTURE (Stand 09/2026) – Verfügbarkeit & Preise tagesaktuell auf Anfrage
const bikes = [
  { cat: "Trekking / SUV", name: "Gazelle Arroyo C7", year: "2025", km: "458 km", uvp: "3.358,95 €", price: "1.899,00 €" },
  { cat: "SUV Fully", name: "Ortler Bozen SUV Fully", year: "2023", km: "1.427 km", uvp: "4.159,98 €", price: "1.999,00 €" },
  { cat: "Cross / Trekking", name: "Bulls Cross Rider Evo 1", year: "2023", km: "1.264 km", uvp: "4.126,90 €", price: "2.039,00 €" },
  { cat: "SUV", name: "Conway Xyron SUV 2.7", year: "2025", km: "1.987 km", uvp: "3.579,00 €", price: "2.119,00 €" },
  { cat: "E-MTB", name: "KTM Macina E. Mountain 29", year: "2024", km: "1.361 km", uvp: "4.190,96 €", price: "2.289,00 €" },
  { cat: "E-MTB Fully", name: "Bulls Sonic Evo AM 1", year: "2024", km: "585 km", uvp: "3.999,00 €", price: "2.359,00 €" },
  { cat: "Premium E-MTB", name: "Haibike Allmtn 2", year: "2025", km: "291 km", uvp: "5.244,00 €", price: "3.049,00 €" },
  { cat: "Premium E-MTB", name: "Conway eWME 6.9", year: "2022", km: "1.776 km", uvp: "5.788,95 €", price: "3.039,00 €" },
  { cat: "Freeride E-MTB", name: "Haibike Nduro 8 Freeride", year: "2023", km: "1 km", uvp: "8.056,95 €", price: "4.199,00 €" },
];

const toNum = (s: string) => parseFloat(s.replace(/[^\d,]/g, "").replace(",", "."));
const saving = (b: { uvp: string; price: string }) => Math.round((1 - toNum(b.price) / toNum(b.uvp)) * 100);

// ============= Produkt-Katalog Refurbished & E-Bikes (Beispielangebote – echte Händlerkonditionen folgen) =============
type RefurbBike = {
  cat: "City" | "Trekking" | "E-MTB";
  brand: string;
  model: string;
  motor: string;
  battery: number; // Wh
  km: number;
  frame: "S" | "M" | "L";
  uvp: number;
  price: number;
  badge: string;
};

const refurbBikes: RefurbBike[] = [
  { cat: "City", brand: "Gazelle", model: "Ultimate C8 HMB", motor: "Bosch Performance Line", battery: 500, km: 890, frame: "M", uvp: 3499, price: 2349, badge: "Refurbished – Zustand: Sehr gut" },
  { cat: "City", brand: "Kalkhoff", model: "Endeavour 5.B Move", motor: "Bosch Performance Line", battery: 625, km: 1120, frame: "S", uvp: 3899, price: 2549, badge: "Geprüfter Leasingrückläufer" },
  { cat: "Trekking", brand: "Cube", model: "Touring Hybrid EXC 625", motor: "Bosch Performance Line CX", battery: 625, km: 1540, frame: "L", uvp: 4199, price: 2799, badge: "Refurbished – Zustand: Sehr gut" },
  { cat: "Trekking", brand: "KTM", model: "Macina Style 740", motor: "Bosch Performance Line", battery: 625, km: 980, frame: "M", uvp: 4599, price: 2999, badge: "Geprüfter Leasingrückläufer" },
  { cat: "E-MTB", brand: "Haibike", model: "AllTrail 5 27.5", motor: "Yamaha PW-S2", battery: 720, km: 760, frame: "M", uvp: 4999, price: 3299, badge: "Refurbished – Zustand: Sehr gut" },
  { cat: "E-MTB", brand: "Bulls", model: "Sonic EVO AM 3", motor: "Bosch Performance Line CX", battery: 750, km: 415, frame: "L", uvp: 5499, price: 3649, badge: "Geprüfter Leasingrückläufer" },
];

const eur = (n: number) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const pct = (b: RefurbBike) => Math.round((1 - b.price / b.uvp) * 100);

const BikeImage = ({ brand }: { brand: string }) => (
  <div className="relative h-44 rounded-t-xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center border-b border-border">
    <svg viewBox="0 0 200 110" className="h-24 w-auto text-white/25" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="45" cy="78" r="26" />
      <circle cx="155" cy="78" r="26" />
      <path d="M45 78 L85 40 L135 40 L155 78 M85 40 L100 78 L45 78 M100 78 L135 40" />
      <path d="M78 38 h42" strokeWidth="8" />
    </svg>
    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">{brand}</span>
    <span className="absolute bottom-2 right-3 text-[10px] text-white/30">Platzhalter-Bild</span>
  </div>
);

const faqs = [
  { q: "Welche Garantie erhalte ich auf ein Refurbished E-Bike?", a: "Auf jedes gebrauchte E-Bike aus dem Bestand unseres Partners BIKE2FUTURE gibt es ohne Aufpreis eine erweiterte Garantie von 24 Monaten auf Akku und Motor – die teuersten Komponenten eines E-Bikes. Zusätzlich gelten die gesetzlichen Gewährleistungsrechte." },
  { q: "Wie läuft der Aufbereitungsprozess (Refurbishment) ab?", a: "Jeder Leasingrückläufer durchläuft einen mehrstufigen Prozess: Eingangsprüfung und Dokumentation, vollständige Reinigung, Diagnose von Motor und Elektronik per Herstellersoftware, Akkutest mit Kapazitätsmessung, Austausch aller Verschleißteile nach Bedarf, Einstellung von Schaltung und Bremsen sowie eine abschließende Probefahrt. Erst nach bestandener Endkontrolle erhält das Fahrrad ein Prüfprotokoll und wird freigegeben." },
  { q: "Wie und wohin wird geliefert?", a: "Wir liefern deutschlandweit fahrbereit vormontiert per Speditionsversand, in der Regel innerhalb von 5 bis 10 Werktagen. Lenker und Pedale sind mit wenigen Handgriffen montiert; eine Anleitung liegt bei. In der Region Stuttgart / Rems-Murr ist auch eine persönliche Übergabe mit Einweisung möglich." },
  { q: "Kann mein Unternehmen Diensträder über Rasolution beziehen?", a: "Ja. Wir unterstützen Unternehmen bei der Konzeption eines Dienstradprogramms – von der Auswahl eines geeigneten Leasingpartners über die Überlassungsverträge bis zur Integration in das bestehende Mobilitäts- und Fuhrparkkonzept." },
  { q: "Sind Refurbished E-Bikes auch für Privatpersonen erhältlich?", a: "Selbstverständlich. Leasingrückläufer bieten Privatpersonen eine attraktive Möglichkeit, hochwertige Markenräder deutlich unter der unverbindlichen Preisempfehlung zu erwerben – mit geprüfter Technik und Gewährleistung." },
];

const Mobilitaetsmanagement = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "Privatperson", message: "" });

  // Produkt-Katalog: Filter & Anfrage-Modal
  const [filters, setFilters] = useState({ cat: "Alle", frame: "Alle", price: "Alle" });
  const [inquiry, setInquiry] = useState({ subject: "", name: "", email: "", message: "" });
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const filteredBikes = refurbBikes.filter(
    (b) =>
      (filters.cat === "Alle" || b.cat === filters.cat) &&
      (filters.frame === "Alle" || b.frame === filters.frame) &&
      (filters.price === "Alle" ||
        (filters.price === "u2500" && b.price <= 2500) ||
        (filters.price === "2500-3500" && b.price > 2500 && b.price <= 3500) ||
        (filters.price === "ueber3500" && b.price > 3500))
  );

  const openInquiry = (b: RefurbBike) => {
    setInquiry({ subject: `Anfrage: ${b.brand} ${b.model} (${b.cat})`, name: "", email: "", message: "" });
    setInquiryOpen(true);
  };

  const submitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${inquiry.name}\nE-Mail: ${inquiry.email}\n\n${inquiry.message}`;
    window.location.href = `mailto:info@rasolution.io?subject=${encodeURIComponent(inquiry.subject)}&body=${encodeURIComponent(body)}`;
    setInquiryOpen(false);
  };

  useEffect(() => {
    document.title = "Mobilitätsmanagement & Refurbished E-Bikes | Rasolution";
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
              <Button variant="hero" size="lg" onClick={() => scrollTo("katalog")}>Zum Katalog</Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("anfrage")}>Beratung anfragen</Button>
            </div>
          </div>
        </section>

        {/* Ratgeber */}
        <section className="py-20">
          <div className="container max-w-4xl space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ratgeber: Mobilität neu gedacht</h2>
              <p className="text-muted-foreground">Fundiertes Wissen für Unternehmen, Fuhrparkverantwortliche und private Radfahrer.</p>
            </div>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Leaf className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Die Vorteile von Refurbished Leasingrückläufern – ökologisch & ökonomisch</h3></div>
              <p className="leading-relaxed text-muted-foreground">Die Herstellung eines E-Bikes verursacht je nach Modell zwischen 100 und 200 Kilogramm CO₂-Äquivalente – der größte Anteil entfällt auf Rahmen, Motor und Akku. Wer sich für ein aufbereitetes Fahrrad entscheidet, verlängert den Lebenszyklus bereits produzierter Ressourcen und vermeidet einen erheblichen Teil dieser Emissionen. Leasingrückläufer stammen meist aus Dienstradprogrammen und wurden in der Regel drei Jahre lang gepflegt, regelmäßig gewartet und durch Vollkaskoversicherungen abgesichert genutzt.</p>
              <p className="leading-relaxed text-muted-foreground">Ökonomisch überzeugen Refurbished E-Bikes durch einen deutlichen Preisvorteil: Ersparnisse von 30 bis 45 Prozent gegenüber der unverbindlichen Preisempfehlung sind üblich – bei nahezu identischer Leistungsfähigkeit. Moderne Mittelmotoren sind auf Laufleistungen von weit über 20.000 Kilometern ausgelegt, und Akkus verlieren in drei Jahren typischerweise nur 10 bis 20 Prozent ihrer Kapazität. Durch den professionellen Aufbereitungsprozess mit Diagnose, Verschleißteiltausch und Prüfprotokoll erhalten Käufer Transparenz und Sicherheit, die ein privater Gebrauchtkauf selten bietet.</p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Users className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Wie Unternehmen von Diensträdern profitieren</h3></div>
              <p className="leading-relaxed text-muted-foreground">Diensträder sind längst mehr als ein Trend – sie sind ein strategisches Instrument im modernen Mobilitätsmanagement. Jeder Arbeitsweg, der statt mit dem Pkw mit dem E-Bike zurückgelegt wird, spart bei einer Pendelstrecke von 10 Kilometern pro Jahr rund 400 bis 500 Kilogramm CO₂ ein. Für Unternehmen, die im Rahmen der Nachhaltigkeitsberichterstattung (CSRD) ihre Scope-3-Emissionen erfassen, ist das ein messbarer Beitrag zur Klimabilanz.</p>
              <p className="leading-relaxed text-muted-foreground">Gleichzeitig stärken Diensträder die Mitarbeiterbindung: Sie sind ein geschätzter Benefit, fördern Gesundheit und Wohlbefinden und senken nachweislich krankheitsbedingte Fehlzeiten. In Zeiten des Fachkräftemangels wird ein attraktives Mobilitätsangebot zum Wettbewerbsvorteil im Recruiting. Zudem reduziert sich der Bedarf an Parkflächen und Poolfahrzeugen – ein Effekt, der sich direkt in den Fuhrparkkosten niederschlägt. Rasolution verknüpft Dienstradprogramme mit dem bestehenden Fuhrpark zu einem ganzheitlichen Mobilitätskonzept.</p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3"><Receipt className="h-7 w-7 text-primary" /><h3 className="text-2xl font-semibold">Steuervorteile nutzen – die 0,25 %-Regel einfach erklärt</h3></div>
              <p className="leading-relaxed text-muted-foreground">Wird ein Dienstrad per Gehaltsumwandlung überlassen, ist der geldwerte Vorteil für die private Nutzung zu versteuern. Seit 2020 gilt dafür die sogenannte 0,25 %-Regel: Monatlich werden lediglich 0,25 Prozent eines Viertels der auf volle 100 Euro abgerundeten unverbindlichen Preisempfehlung als geldwerter Vorteil angesetzt. Bei einem E-Bike mit einer UVP von 4.000 Euro sind das nur 10 Euro pro Monat, die dem zu versteuernden Einkommen hinzugerechnet werden.</p>
              <p className="leading-relaxed text-muted-foreground">Da die Leasingrate aus dem Bruttogehalt gezahlt wird, sinken Steuer- und Sozialabgaben – Arbeitnehmer sparen gegenüber dem Direktkauf häufig 25 bis 40 Prozent. Übernimmt der Arbeitgeber die Leasingrate zusätzlich zum ohnehin geschuldeten Arbeitslohn, ist die Überlassung sogar vollständig steuerfrei. Wichtig: S-Pedelecs gelten steuerlich als Kraftfahrzeuge, für sie gilt die 0,5 %-Regel analog zum Dienstwagen. Die Angaben dienen der allgemeinen Information und ersetzen keine steuerliche Beratung.</p>
            </article>
          </div>
        </section>

        {/* Katalog */}
        <section id="katalog" className="py-20 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Katalog: Geprüfte Leasingrückläufer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Ausgewählte Leasingrückläufer aus dem Bestand unseres Partners BIKE2FUTURE – professionell aufbereitet, mit 24 Monaten Garantie auf Akku und Motor. Preise inkl. MwSt., Verfügbarkeit tagesaktuell auf Anfrage.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bikes.map((b) => (
                <Card key={b.name} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{b.cat}</Badge>
                      <Bike className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{b.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 gap-3 text-sm">
                    <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Zustand: Refurbished – Sehr gut</div>
                    <div className="flex items-center gap-2"><BatteryCharging className="h-4 w-4 text-primary" /> Modelljahr {b.year} · Laufleistung {b.km}</div>
                    <div className="text-muted-foreground line-through">UVP {b.uvp}</div>
                    <div className="flex items-baseline justify-between pt-2 border-t border-border">
                      <span className="text-2xl font-bold">{b.price}</span>
                      <span className="font-semibold text-primary">−{saving(b)} % ggü. UVP</span>
                    </div>
                    <Button className="mt-auto" onClick={() => { setForm((f) => ({ ...f, type: "Privatperson", message: `Ich interessiere mich für: ${b.name} (${b.cat}).` })); scrollTo("anfrage"); }}>
                      Unverbindlich anfragen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-10">
              Weitere Modelle von Cube, Trek, KTM, Haibike, Bulls u. v. m. vermitteln wir auf Anfrage – auch als Gebrauchtrad-Leasing über den Arbeitgeber.
            </p>
          </div>
        </section>

        {/* Produkt-Katalog Refurbished & E-Bikes */}
        <section id="produkt-katalog" className="py-20">
          <div className="container">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4">Produkt-Katalog</Badge>
              <h2 className="text-3xl font-bold mb-4">Refurbished & E-Bikes – geprüfte Qualität</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Aufbereitete Marken-E-Bikes mit geprüftem Akku und Motor – inklusive 24 Monaten Garantie auf Akku und Motor über unseren Partner BIKE2FUTURE. Beispielhafte Auswahl; Verfügbarkeit und Konditionen auf Anfrage.
              </p>
            </div>

            {/* Filterzeile */}
            <div className="mb-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-end justify-center gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1.5"><Bike className="h-3.5 w-3.5" /> Kategorie</Label>
                <select
                  className="w-full sm:w-40 h-10 rounded-md border border-input bg-background px-3 text-sm"
                  value={filters.cat}
                  onChange={(e) => setFilters({ ...filters, cat: e.target.value })}
                >
                  <option>Alle</option>
                  <option>City</option>
                  <option>Trekking</option>
                  <option>E-MTB</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1.5"><Ruler className="h-3.5 w-3.5" /> Rahmengröße</Label>
                <select
                  className="w-full sm:w-40 h-10 rounded-md border border-input bg-background px-3 text-sm"
                  value={filters.frame}
                  onChange={(e) => setFilters({ ...filters, frame: e.target.value })}
                >
                  <option>Alle</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1.5"><Euro className="h-3.5 w-3.5" /> Preisbereich</Label>
                <select
                  className="w-full sm:w-48 h-10 rounded-md border border-input bg-background px-3 text-sm"
                  value={filters.price}
                  onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                >
                  <option value="Alle">Alle Preise</option>
                  <option value="u2500">bis 2.500 €</option>
                  <option value="2500-3500">2.500 – 3.500 €</option>
                  <option value="ueber3500">über 3.500 €</option>
                </select>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-10"
                onClick={() => setFilters({ cat: "Alle", frame: "Alle", price: "Alle" })}
              >
                Zurücksetzen
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBikes.map((b) => (
                <Card key={b.model} className="flex flex-col overflow-hidden">
                  <BikeImage brand={b.brand} />
                  <CardContent className="flex flex-col flex-1 gap-3 pt-5 text-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{b.brand}</p>
                        <h3 className="text-lg font-semibold leading-tight">{b.model}</h3>
                      </div>
                      <Badge variant="outline" className="shrink-0">{b.cat}</Badge>
                    </div>
                    <p className="flex items-center gap-2 text-muted-foreground"><Zap className="h-4 w-4 text-primary" /> {b.motor}</p>
                    <Badge variant="secondary" className="w-fit font-normal">{b.badge}</Badge>
                    <div className="grid grid-cols-3 gap-2 rounded-md bg-muted/60 p-3 text-center">
                      <div>
                        <p className="font-semibold">{b.battery} Wh</p>
                        <p className="text-xs text-muted-foreground">Akku</p>
                      </div>
                      <div>
                        <p className="font-semibold">{b.km.toLocaleString("de-DE")} km</p>
                        <p className="text-xs text-muted-foreground">Laufleistung</p>
                      </div>
                      <div>
                        <p className="font-semibold">{b.frame}</p>
                        <p className="text-xs text-muted-foreground">Rahmen</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground line-through">UVP {eur(b.uvp)}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-bold">{eur(b.price)}</span>
                        <span className="font-semibold text-primary">−{pct(b)} % ggü. UVP</span>
                      </div>
                    </div>
                    <Button className="mt-auto" onClick={() => openInquiry(b)}>Fahrrad & Leasing anfragen</Button>
                  </CardContent>
                </Card>
              ))}
              {filteredBikes.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-12">
                  Keine Modelle für diese Filterkombination – bitte Filter anpassen oder unverbindlich anfragen.
                </p>
              )}
            </div>
          </div>
        </section>

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

      {/* Anfrage-Modal Produkt-Katalog */}
      <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fahrrad & Leasing anfragen</DialogTitle>
            <DialogDescription>
              Unverbindliche Anfrage – wir melden uns zeitnah mit Verfügbarkeit, Zustand und Leasingkonditionen.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitInquiry} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="anfrage-betreff">Betreff</Label>
              <Input
                id="anfrage-betreff"
                required
                value={inquiry.subject}
                onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                required
                placeholder="Name"
                value={inquiry.name}
                onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
              />
              <Input
                required
                type="email"
                placeholder="E-Mail"
                value={inquiry.email}
                onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
              />
            </div>
            <Textarea
              rows={4}
              placeholder="Ihre Nachricht (optional)"
              value={inquiry.message}
              onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
            />
            <Button type="submit" variant="hero" className="w-full">Anfrage senden</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Mobilitaetsmanagement;
