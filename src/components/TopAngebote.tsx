import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Palette, Ruler, Gauge, ShieldCheck, Warehouse, ZoomIn } from "lucide-react";
import img1 from "@/assets/bikes/bike-1.jpg";
import img2 from "@/assets/bikes/bike-2.jpg";
import img3 from "@/assets/bikes/bike-3.jpg";
import img4 from "@/assets/bikes/bike-4.jpg";
import img5 from "@/assets/bikes/bike-5.jpg";
import img6 from "@/assets/bikes/bike-6.jpg";
import img7 from "@/assets/bikes/bike-7.jpg";
import img8 from "@/assets/bikes/bike-8.jpg";

type Cat = "Trekking" | "City" | "EMTB";
type Offer = {
  brand: string; model: string; ref: string; cat: Cat; catLabel: string; note: string;
  color: string; frame: string; km: number; uvp: number; price: number; img: string;
};

export const topOffers: Offer[] = [
  { brand: "FLYER", model: "Goroc X 6.70 ELO", ref: "9065888", cat: "EMTB", catLabel: "E-MTB Fully", note: "Allroad-Vollausstattung mit FOX-Fahrwerk, Schutzblechen & Gepäckträger", color: "Grau", frame: "47 cm (Diamant)", km: 559, uvp: 6799, price: 4249, img: img1 },
  { brand: "ADVANCED EBIKE", model: "Reco One 10-Gang", ref: "9067687", cat: "Trekking", catLabel: "Trekking E-Bike", note: "Nachhaltiger Composite-Rahmen mit Komfort-Einstieg", color: "Türkis/Hellblau", frame: "54 cm", km: 243, uvp: 5347.68, price: 3349, img: img2 },
  { brand: "Kettler", model: "Scarpia FS3", ref: "9048219", cat: "EMTB", catLabel: "E-MTB Fully", note: "RockShox-Fahrwerk & Skinwall-Bereifung", color: "Schwarz", frame: "49 cm (Diamant)", km: 603, uvp: 5299, price: 3299, img: img3 },
  { brand: "Bulls", model: "Copperhead EVO 1", ref: "9061009", cat: "EMTB", catLabel: "E-MTB Hardtail", note: "Bosch-Antrieb & Tanwall-Offroad-Reifen", color: "Türkis/Mattgrün", frame: "48 cm (Diamant)", km: 151, uvp: 4287.62, price: 2699, img: img4 },
  { brand: "Stevens", model: "E-Simeto", ref: "9064104", cat: "Trekking", catLabel: "Trekking / Urban E-Bike", note: "Wartungsarmer Riemenantrieb & Front-Rack", color: "Weiß", frame: "XL (Diamant)", km: 1660, uvp: 4214, price: 2649, img: img5 },
  { brand: "Pegasus", model: "Strong Evo 5R", ref: "9064815", cat: "City", catLabel: "City / Urban", note: "Besonders stabiles XXL-/Lasten-Konzept mit Nabenschaltung", color: "Dunkelblau", frame: "60 cm (Herren)", km: 1020, uvp: 4100, price: 2549, img: img6 },
  { brand: "Trek", model: "Powerfly 5", ref: "9066475", cat: "EMTB", catLabel: "E-MTB Hardtail", note: "Sportliches Trail-Design mit RockShox-Federgabel", color: "Grau/Türkis", frame: "S (Diamant)", km: 417, uvp: 3660, price: 2299, img: img7 },
  { brand: "Victoria", model: "Cysalo 13", ref: "9061251", cat: "City", catLabel: "City / Urban", note: "Komfort-Tiefeinsteiger mit Mittelmotor & Gepäckträger", color: "Dunkelblau", frame: "56 cm (Wave)", km: 317, uvp: 2699, price: 1699, img: img8 },
];

const filters: { key: "all" | Cat; label: string }[] = [
  { key: "all", label: `Alle Highlights (${topOffers.length})` },
  { key: "EMTB", label: "E-MTB (Fully & Hardtail)" },
  { key: "Trekking", label: "Trekking E-Bike" },
  { key: "City", label: "City / Urban" },
];

const eur = (n: number) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const pct = (o: Offer) => Math.round((1 - o.price / o.uvp) * 100);

const TopAngebote = () => {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState<Offer | null>(null);
  const [form, setForm] = useState({ subject: "", name: "", email: "", message: "" });
  const shown = filter === "all" ? topOffers : topOffers.filter((o) => o.cat === filter);

  const ask = (o: Offer) => {
    setForm((f) => ({ ...f, subject: `${o.brand} ${o.model} - Ref-ID: #${o.ref} - ${eur(o.price)}` }));
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
              <button type="button" onClick={() => setZoom(o)} className="group relative aspect-[4/3] bg-white p-4 border-b border-border" aria-label={`Bild vergrößern: ${o.brand} ${o.model}`}>
                <img src={o.img} alt={`${o.brand} ${o.model}`} loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">−{pct(o)} % ggü. UVP</span>
                <ZoomIn className="absolute bottom-3 right-3 h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <CardContent className="flex flex-1 flex-col gap-3 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.brand} · {o.catLabel}</p>
                  <h3 className="text-lg">{o.model}</h3>
                  <p className="text-xs text-muted-foreground">Ref-ID: #{o.ref}</p>
                </div>
                <p className="text-sm text-muted-foreground">{o.note}</p>
                <Badge className="w-fit gap-1 bg-success text-success-foreground hover:bg-success"><ShieldCheck size={12} /> Zustand: Exzellent</Badge>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Palette size={14} /> {o.color}</li>
                  <li className="flex items-center gap-2"><Ruler size={14} /> {o.frame}</li>
                  <li className="flex items-center gap-2"><Gauge size={14} /> {o.km.toLocaleString("de-DE")} km</li>
                </ul>
                <div className="mt-auto pt-2">
                  <p className="text-sm text-muted-foreground line-through">Ehem. UVP {eur(o.uvp)}</p>
                  <p className="text-2xl font-bold text-primary">{eur(o.price)}</p>
                  <p className="text-xs text-muted-foreground">inkl. MwSt. · Ersparnis {pct(o)} %</p>
                </div>
                <Button variant="hero" className="w-full h-auto min-h-10 px-3 py-2 text-sm whitespace-normal text-center" onClick={() => ask(o)}>Jetzt anfragen & leasen</Button>
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

      <Dialog open={!!zoom} onOpenChange={(v) => !v && setZoom(null)}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{zoom?.brand} {zoom?.model}</DialogTitle>
            <DialogDescription>Ref-ID: #{zoom?.ref} · {zoom && eur(zoom.price)} inkl. MwSt.</DialogDescription>
          </DialogHeader>
          {zoom && <div className="bg-white p-4 rounded-md"><img src={zoom.img} alt={`${zoom.brand} ${zoom.model}`} className="w-full max-h-[70vh] object-contain" /></div>}
        </DialogContent>
      </Dialog>

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
