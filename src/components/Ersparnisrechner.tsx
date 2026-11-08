import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Calculator, Leaf, PiggyBank, Receipt } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { topOffers } from "@/components/TopAngebote";

const presets = [
  { icon: "🔥", label: "Top-Deal: FLYER Goroc X", offer: topOffers[0] },
  { icon: "🚲", label: "ADVANCED Reco One", offer: topOffers[1] },
  { icon: "⚡", label: "KETTLER Scarpia FS3", offer: topOffers[2] },
];
import {
  BIKES_MAX, BIKES_MIN, BIKE_DAYS_PER_YEAR, COMMUTE_KM_ONE_WAY, UVP_DEFAULT, UVP_MAX, UVP_MIN,
  abgabenAufVorteil, co2SavedPerBikeKg, defaultRefurbPrice, geldwerterVorteil, purchaseSavings,
  type Steuerklasse,
} from "@/lib/ersparnisrechner";

const eur = (n: number, digits = 0) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: digits, maximumFractionDigits: digits });
const num = (n: number) => n.toLocaleString("de-DE");
const klassen: { v: Steuerklasse; l: string }[] = [
  { v: 1, l: "I" }, { v: 2, l: "II" }, { v: 3, l: "III" }, { v: 4, l: "IV" }, { v: 5, l: "V" }, { v: 6, l: "VI" },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, Number.isFinite(v) ? v : min));

const Result = ({ icon: Icon, label, value, hint }: { icon: typeof Calculator; label: string; value: string; hint: string }) => (
  <div className="rounded-xl border bg-card p-5">
    <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><Icon className="h-4 w-4 text-primary" /> {label}</p>
    <p className="mt-2 text-2xl font-bold tabular-nums">{value}</p>
    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{hint}</p>
  </div>
);

const Ersparnisrechner = ({ id = "ersparnisrechner", compact = false }: { id?: string; compact?: boolean }) => {
  const withBikes = !compact;
  const [preset, setPreset] = useState<number | null>(withBikes ? 0 : null);
  const [uvp, setUvpRaw] = useState(withBikes ? topOffers[0].uvp : UVP_DEFAULT);
  const [manual, setManual] = useState(withBikes);
  const [manualPrice, setManualPriceRaw] = useState(withBikes ? topOffers[0].price : defaultRefurbPrice(UVP_DEFAULT));
  const setUvp = (v: number) => { setUvpRaw(v); setPreset(null); };
  const setManualPrice = (v: number) => { setManualPriceRaw(v); setPreset(null); };
  const choose = (i: number | null) => {
    setPreset(i);
    if (i === null) return;
    const o = presets[i].offer;
    setUvpRaw(o.uvp); setManual(true); setManualPriceRaw(o.price);
  };
  const bike = preset !== null ? presets[preset].offer : null;
  const scrollToAnfrage = () => document.getElementById("anfrage")?.scrollIntoView({ behavior: "smooth" });
  const [gehalt, setGehalt] = useState(3500);
  const [klasse, setKlasse] = useState<Steuerklasse>(1);
  const [bikes, setBikes] = useState(10);

  const price = manual ? manualPrice : defaultRefurbPrice(uvp);
  const r = useMemo(() => {
    const gwv = geldwerterVorteil(uvp);
    return {
      gwv,
      abgaben: abgabenAufVorteil(gehalt, klasse, gwv),
      savings: purchaseSavings(uvp, price, bikes),
      co2: co2SavedPerBikeKg(),
    };
  }, [uvp, price, gehalt, klasse, bikes]);

  return (
    <section id={id} className={compact ? "my-12" : "py-20 bg-muted/40"} aria-labelledby={`${id}-title`}>
      <div className={compact ? "" : "w-full max-w-[1760px] mx-auto px-4 sm:px-8 xl:px-16 2xl:px-24"}>
        <div className={compact ? "mb-6" : "text-center mb-10"}>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Interaktives Tool</p>
          <h2 id={`${id}-title`} className="text-2xl md:text-3xl font-bold">Dienstrad- &amp; Refurbished-Ersparnisrechner (0,25-%-Regel)</h2>
          <p className={`mt-3 text-muted-foreground ${compact ? "" : "max-w-2xl mx-auto"}`}>
            Berechnen Sie den geldwerten Vorteil, die Kaufpreis-Ersparnis gegenüber einem Neurad und die CO₂-Einsparung Ihrer Flotte – live, ohne Anmeldung.
          </p>
        </div>

        {withBikes && (
          <div className="mb-6 space-y-5">
            <div>
              <p className="mb-2 text-sm font-semibold">Mit echtem Top-Bike rechnen:</p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Schnellwahl Top-Bike">
                {presets.map((p, i) => (
                  <Button key={p.label} size="sm" variant={preset === i ? "default" : "outline"} aria-pressed={preset === i} onClick={() => choose(i)}>
                    {p.icon} {p.label} ({eur(p.offer.price)} statt {eur(Math.round(p.offer.uvp))})
                  </Button>
                ))}
                <Button size="sm" variant={preset === null ? "default" : "outline"} aria-pressed={preset === null} onClick={() => choose(null)}>
                  ✏️ Eigene Werte frei eingeben
                </Button>
              </div>
            </div>
            {bike && (
              <Card className="overflow-hidden border-primary/40 shadow-lg">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <img src={bike.img} alt={`${bike.brand} ${bike.model}`} className="h-56 w-full object-cover md:h-full" loading="lazy" />
                  <CardContent className="space-y-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">🔥 Aktuelles Top-Highlight im Rechenbeispiel</p>
                    <h3 className="text-xl font-bold">{bike.brand} {bike.model}</h3>
                    <p className="text-sm text-muted-foreground">{bike.catLabel} · Zustand: Exzellent · {num(bike.km)} km · Ref-ID #{bike.ref}</p>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="text-sm text-muted-foreground line-through">Ehem. UVP {eur(Math.round(bike.uvp))}</span>
                      <span className="text-2xl font-bold text-primary">{eur(bike.price)}</span>
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-sm font-semibold text-primary">
                        {eur(Math.round(bike.uvp - bike.price))} Direkt-Ersparnis / -{Math.round((1 - bike.price / bike.uvp) * 100)} %
                      </span>
                    </div>
                    <p className="text-sm">Geldwerter Vorteil (0,25-%-Regel): nur <strong>{eur(geldwerterVorteil(bike.uvp), 2)} / Monat</strong></p>
                    <Button variant="hero" onClick={scrollToAnfrage}>Dieses Top-Bike anfragen</Button>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        )}

        <Card>
          <CardContent className={`grid gap-8 pt-6 ${compact ? "" : "lg:grid-cols-2"}`}>
            <div className="space-y-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor={`${id}-uvp`}>Ehemaliger Brutto-Listenpreis (UVP)</Label>
                  <Input id={`${id}-uvp`} type="number" inputMode="numeric" min={UVP_MIN} max={UVP_MAX} step={50} value={uvp}
                    onChange={(e) => setUvp(clamp(Number(e.target.value), UVP_MIN, UVP_MAX))} className="w-32 text-right" />
                </div>
                <Slider aria-label="UVP" min={UVP_MIN} max={UVP_MAX} step={50} value={[uvp]} onValueChange={([v]) => setUvp(v)} />
                <p className="flex justify-between text-xs text-muted-foreground"><span>{eur(UVP_MIN)}</span><span>{eur(UVP_MAX)}</span></p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor={`${id}-price`}>Unser Refurbished-Kaufpreis</Label>
                  <Input id={`${id}-price`} type="number" inputMode="numeric" min={0} step={10} disabled={!manual} value={price}
                    onChange={(e) => setManualPrice(clamp(Number(e.target.value), 0, UVP_MAX))} className="w-32 text-right" />
                </div>
                <div className="flex items-center gap-3">
                  <Switch id={`${id}-manual`} checked={manual} onCheckedChange={(c) => { setManual(c); setPreset(null); if (c) setManualPriceRaw(defaultRefurbPrice(uvp)); }} />
                  <Label htmlFor={`${id}-manual`} className="text-sm font-normal text-muted-foreground">
                    {manual ? "Preis manuell angepasst" : "Automatisch rund 40 % unter UVP – zum Anpassen einschalten"}
                  </Label>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${id}-gehalt`}>Bruttomonatsgehalt</Label>
                  <Input id={`${id}-gehalt`} type="number" inputMode="numeric" min={0} step={100} value={gehalt}
                    onChange={(e) => setGehalt(clamp(Number(e.target.value), 0, 30000))} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${id}-klasse`}>Steuerklasse</Label>
                  <select id={`${id}-klasse`} value={klasse} onChange={(e) => setKlasse(Number(e.target.value) as Steuerklasse)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                    {klassen.map((k) => <option key={k.v} value={k.v}>Steuerklasse {k.l}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor={`${id}-bikes`}>Geplante Fahrräder im Unternehmen</Label>
                  <Input id={`${id}-bikes`} type="number" inputMode="numeric" min={BIKES_MIN} max={BIKES_MAX} value={bikes}
                    onChange={(e) => setBikes(clamp(Math.round(Number(e.target.value)), BIKES_MIN, BIKES_MAX))} className="w-24 text-right" />
                </div>
                <Slider aria-label="Anzahl Fahrräder" min={BIKES_MIN} max={BIKES_MAX} step={1} value={[bikes]} onValueChange={([v]) => setBikes(v)} />
              </div>
            </div>

            <div className="space-y-4" aria-live="polite">
              <Result icon={Receipt} label="Geldwerter Vorteil (0,25-%-Regel)" value={`${eur(r.gwv, 2)} / Monat`}
                hint={`1 % eines Viertels der auf volle 100 € abgerundeten UVP. Darauf fallen bei Steuerklasse ${klassen[klasse - 1].l} und ${eur(gehalt)} Brutto ca. ${eur(r.abgaben.total, 2)} Steuern und Sozialabgaben im Monat an (Näherung).`} />
              <Result icon={PiggyBank} label="Kaufpreis-Ersparnis Refurbished vs. Neurad" value={`${eur(r.savings.perBike)} pro Rad`}
                hint={`Bei ${bikes} ${bikes === 1 ? "Rad" : "Rädern"} spart Ihr Unternehmen im Direktkauf insgesamt ${eur(r.savings.fleet)} gegenüber dem Neupreis.`} />
              <Result icon={Leaf} label="Eingesparte CO₂-Emissionen pro Jahr" value={`${num(r.co2 * bikes)} kg CO₂`}
                hint={`${num(r.co2)} kg pro Rad: ${COMMUTE_KM_ONE_WAY} km Arbeitsweg (einfach) an ${BIKE_DAYS_PER_YEAR} Tagen mit dem E-Bike statt mit dem Pkw.`} />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Vereinfachte Beispielrechnung nach Rechtsstand 2026 ohne Kirchensteuer. Sie ersetzt keine Lohnabrechnung und keine steuerliche Beratung. Übernimmt der Arbeitgeber das Dienstrad zusätzlich zum Gehalt, ist die Überlassung nach § 3 Nr. 37 EStG steuerfrei.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Ersparnisrechner;
