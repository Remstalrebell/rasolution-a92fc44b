import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Palette, Ruler, Gauge, ShieldCheck, Warehouse } from "lucide-react";

type Cat = "Trekking" | "City" | "EMTB";
type Offer = {
  brand: string; model: string; ref: string; cat: Cat; catLabel: string;
  color: string; frame: string; km: number; uvp: number; price: number;
};

export const topOffers: Offer[] = [
  { brand: "FLYER", model: "Goroc X 6.70 ELO", ref: "9065888", cat: "EMTB", catLabel: "E-MTB Fully", color: "Grau", frame: "47 cm (Diamant)", km: 559, uvp: 6799, price: 4249 },
  { brand: "ADVANCED EBIKE", model: "Reco One 10-Gang", ref: "9067687", cat: "Trekking", catLabel: "Trekking E-Bike", color: "Türkis", frame: "54 cm", km: 243, uvp: 5347.68, price: 3349 },
  { brand: "Kettler", model: "Scarpia FS3", ref: "9048219", cat: "EMTB", catLabel: "E-MTB Fully", color: "Schwarz", frame: "49 cm (Diamant)", km: 603, uvp: 5299, price: 3299 },
  { brand: "Bulls", model: "Copperhead EVO 1", ref: "9061009", cat: "EMTB", catLabel: "E-MTB Hardtail", color: "Türkis", frame: "48 cm (Diamant)", km: 151, uvp: 4287.62, price: 2699 },
  { brand: "Stevens", model: "E-Simeto", ref: "9064104", cat: "Trekking", catLabel: "Trekking E-Bike", color: "Weiß", frame: "XL (Trapez)", km: 1660, uvp: 4214, price: 2649 },
  { brand: "Pegasus", model: "Strong Evo 5R", ref: "9064815", cat: "City", catLabel: "City / Urban", color: "Blau", frame: "60 cm (Herren)", km: 1020, uvp: 4100, price: 2549 },
  { brand: "Trek", model: "Powerfly 5", ref: "9066475", cat: "EMTB", catLabel: "E-MTB Hardtail", color: "Türkis", frame: "S (Diamant)", km: 417, uvp: 3660, price: 2299 },
  { brand: "Victoria", model: "Cysalo 13", ref: "9061251", cat: "City", catLabel: "City / Urban", color: "Blau", frame: "56 cm (Wave / Tiefeinsteiger)", km: 317, uvp: 2699, price: 1699 },
];

const filters: { key: "all" | Cat; label: string }[] = [
  { key: "all", label: `Alle Modelle (${topOffers.length})` },
  { key: "Trekking", label: "Trekking E-Bike" },
  { key: "City", label: "City / Urban" },
  { key: "EMTB", label: "E-MTB (Fully & Hardtail)" },
];

const eur = (n: number) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const pct = (o: Offer) => Math.round((1 - o.price / o.uvp) * 100);

const Placeholder = ({ o }: { o: Offer }) => (
  <div className="relative h-44 rounded-t-xl overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center border-b border-border">
    <svg viewBox="0 0 200 110" className="h-24 w-auto text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="45" cy="78" r="26" /><circle cx="155" cy="78" r="26" />
      <path d="M45 78 L85 40 L135 40 L155 78 M85 40 L100 78 L45 78 M100 78 L135 40" />
      <path d="M78 38 h42" strokeWidth="8" />
    </svg>
    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{o.catLabel}</span>
    <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">−{pct(o)} %</span>
    <span className="absolute bottom-2 right-3 text-[10px] text-muted-foreground/70">Symbolbild</span>
  </div>
);

const TopAngebote = () => {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ subject: "", name: "", email: "", message: "" });
  const shown = filter === "all" ? topOffers : topOffers.filter((o) => o.cat === filter);

  const ask = (o: Offer) => {
    setForm((f) => ({ ...f, subject: `Anfrage: ${o.brand} ${o.model} (Ref-ID #${o.ref})` }));
    setOpen(true);
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nE-Mail: ${form.email}\n\nNachricht:\n${form.message}`;
    window.location.href = `mailto:info@rasolution.io?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  };

  return (
    <section id="top-angebote" className="py-20 bg-muted/40">
      <div className="container">
        <div className="text-center mb-10">
          <h2>Aktuelle Top-Angebote: Geprüfte Leasingrückläufer & Refurbished E-Bikes</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">8 ausgewählte Fahrzeuge aus unserem Bestand – alle Preise inkl. MwSt.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <Button key={f.key} size="sm" variant={filter === f.key ? "default" : "outline"} onClick={() => setFilter(f.key)}>
              {f.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((o) => (
            <Card key={o.ref} className="flex flex-col overflow-hidden">
              <Placeholder o={o} />
              <CardContent className="flex flex-1 flex-col gap-3 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.brand}</p>
                  <h3 className="text-lg">{o.model}</h3>
                  <p className="text-xs text-muted-foreground">Ref-ID: #{o.ref}</p>
                </div>
                <Badge variant="secondary" className="w-fit gap-1"><ShieldCheck size={12} /> Exzellent (Geprüft)</Badge>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Palette size={14} /> {o.color}</li>
                  <li className="flex items-center gap-2"><Ruler size={14} /> {o.frame}</li>
                  <li className="flex items-center gap-2"><Gauge size={14} /> {o.km.toLocaleString("de-DE")} km</li>
                </ul>
                <div className="mt-auto pt-2">
                  <p className="text-sm text-muted-foreground line-through">UVP {eur(o.uvp)}</p>
                  <p className="text-2xl font-bold text-primary">{eur(o.price)}</p>
                  <p className="text-xs text-muted-foreground">inkl. MwSt. · Ersparnis {pct(o)} %</p>
                </div>
                <Button variant="hero" className="w-full" onClick={() => ask(o)}>Verfügbarkeit & Leasing anfragen</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-primary/30 bg-card p-8 text-center shadow-lg">
          <Warehouse className="mx-auto mb-3 text-primary" size={32} />
          <h3>Über 1.200 weitere geprüfte E-Bikes & Leasingrückläufer auf Lager!</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Sie suchen eine bestimmte Marke, Rahmenhöhe oder eine komplette Firmenflotte? Fragen Sie jetzt unseren tagesaktuellen Gesamtbestand an.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-6">
            <a href="#anfrage">Gesamtbestand anfragen</a>
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verfügbarkeit & Leasing anfragen</DialogTitle>
            <DialogDescription>Unverbindlich – wir melden uns zeitnah mit Verfügbarkeit und Leasingkonditionen.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="top-betreff">Betreff</Label>
              <Input id="top-betreff" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input required type="email" placeholder="E-Mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <Textarea rows={4} placeholder="Ihre Nachricht (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" variant="hero" className="w-full">Anfrage senden</Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TopAngebote;
