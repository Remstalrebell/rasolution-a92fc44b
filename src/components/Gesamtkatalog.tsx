import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  katalog, filterKatalog, kmLabel, anfrageBetreff, euro,
  kategorien, rahmenformen, zustaende, ALLE, ANTRIEB_EBIKE, ANTRIEB_BIO, PRO_SEITE,
  type KatalogFilter, type Sortierung,
} from "@/lib/katalog";

const anzahl = (antrieb: string) => katalog.filter((b) => b.antrieb === antrieb).length;
const selectCls = "h-10 w-full rounded-md border border-input bg-background px-3 text-sm";
const start: KatalogFilter = { suche: "", antrieb: ALLE, kategorie: ALLE, rahmenform: ALLE, zustand: ALLE, sort: "preis-auf" };

const Gesamtkatalog = ({ onAsk }: { onAsk: (subject: string) => void }) => {
  const [f, setF] = useState<KatalogFilter>(start);
  const [page, setPage] = useState(1);
  const list = useMemo(() => filterKatalog(katalog, f), [f]);
  const pages = Math.max(1, Math.ceil(list.length / PRO_SEITE));
  const cur = Math.min(page, pages);
  const rows = list.slice((cur - 1) * PRO_SEITE, cur * PRO_SEITE);

  const set = (patch: Partial<KatalogFilter>) => { setF((s) => ({ ...s, ...patch })); setPage(1); };
  const go = (p: number) => {
    setPage(p);
    document.getElementById("gesamtbestand")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="gesamtbestand" className="mt-16 scroll-mt-24">
      <div className="text-center mb-8">
        <h2>Aktueller Gesamtbestand: {katalog.length} sofort verfügbare E-Bikes & Fahrräder (Geprüfte Leasingrückläufer)</h2>
        <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
          Über diese Top-Auswahl hinaus haben wir Zugriff auf insgesamt über 1.300 Fahrzeuge für Unternehmensflotten, Dienstrad-Leasing und Privatkauf.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <div className="relative sm:col-span-2 lg:col-span-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            aria-label="Suche nach Marke, Modell oder Ref-ID"
            placeholder='Marke, Modell oder Ref-ID suchen (z. B. "Cube", "KTM", "9067687")'
            className="pl-9"
            value={f.suche}
            onChange={(e) => set({ suche: e.target.value })}
          />
        </div>
        <select aria-label="Antriebsart" className={`${selectCls} lg:col-span-2`} value={f.antrieb} onChange={(e) => set({ antrieb: e.target.value })}>
          <option value={ALLE}>Antriebsart: Alle ({katalog.length})</option>
          <option value={ANTRIEB_EBIKE}>{ANTRIEB_EBIKE} ({anzahl(ANTRIEB_EBIKE)})</option>
          <option value={ANTRIEB_BIO}>{ANTRIEB_BIO} ({anzahl(ANTRIEB_BIO)})</option>
        </select>
        <select aria-label="Kategorie" className={selectCls} value={f.kategorie} onChange={(e) => set({ kategorie: e.target.value })}>
          <option value={ALLE}>Kategorie: Alle</option>
          {kategorien.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
        <select aria-label="Rahmenform" className={selectCls} value={f.rahmenform} onChange={(e) => set({ rahmenform: e.target.value })}>
          <option value={ALLE}>Rahmenform: Alle</option>
          {rahmenformen.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
        <select aria-label="Zustand" className={selectCls} value={f.zustand} onChange={(e) => set({ zustand: e.target.value })}>
          <option value={ALLE}>Zustand: Alle</option>
          {zustaende.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
        <select aria-label="Sortierung" className={selectCls} value={f.sort} onChange={(e) => set({ sort: e.target.value as Sortierung })}>
          <option value="preis-auf">Preis aufsteigend</option>
          <option value="preis-ab">Preis absteigend</option>
          <option value="km-auf">Kilometerstand aufsteigend</option>
          <option value="ersparnis">Höchste Ersparnis</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-sm text-muted-foreground">
        <span>{list.length} {list.length === 1 ? "Fahrzeug" : "Fahrzeuge"} gefunden</span>
        {JSON.stringify(f) !== JSON.stringify(start) && (
          <Button variant="ghost" size="sm" onClick={() => set(start)}>Filter zurücksetzen</Button>
        )}
      </div>

      <div className="rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ref-ID</TableHead>
              <TableHead>Marke & Modell</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Laufleistung</TableHead>
              <TableHead>Zustand</TableHead>
              <TableHead>Preis</TableHead>
              <TableHead><span className="sr-only">Anfrage</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow><TableCell colSpan={7} className="py-10 text-center text-muted-foreground">Keine Fahrzeuge für diese Auswahl gefunden.</TableCell></TableRow>
            )}
            {rows.map((b) => (
              <TableRow key={b.ref}>
                <TableCell className="font-mono text-xs whitespace-nowrap">#{b.ref}</TableCell>
                <TableCell className="min-w-[180px]">
                  <p className="font-semibold text-foreground">{b.marke} {b.modell}</p>
                  <Badge variant="outline" className="mt-1 text-[10px] font-medium">{b.antrieb}</Badge>
                </TableCell>
                <TableCell className="min-w-[160px] text-sm text-muted-foreground">
                  {b.kategorie} · {b.rahmenform}<br />{b.rahmenhoehe} · {b.farbe}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm">{kmLabel(b)}</TableCell>
                <TableCell>
                  <Badge className={b.zustand === "Exzellent" ? "bg-success text-success-foreground hover:bg-success whitespace-nowrap" : "bg-info text-info-foreground hover:bg-info whitespace-nowrap"}>
                    {b.zustand}
                  </Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-xs text-muted-foreground line-through">{euro(b.uvp)}</p>
                  <p className="font-bold text-foreground">{euro(b.preis)} <span className="text-xs font-normal text-muted-foreground">inkl. MwSt.</span></p>
                  <Badge variant="destructive" className="mt-1">-{b.ersparnis}%</Badge>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="hero" className="px-3 text-sm whitespace-nowrap" onClick={() => onAsk(anfrageBetreff(b))}>
                    Jetzt anfragen
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pages > 1 && (
        <nav aria-label="Seiten" className="mt-4 flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled={cur === 1} onClick={() => go(cur - 1)} aria-label="Vorherige Seite"><ChevronLeft size={16} /></Button>
          <span className="text-sm text-muted-foreground px-2">Seite {cur} von {pages}</span>
          <Button variant="outline" size="sm" disabled={cur === pages} onClick={() => go(cur + 1)} aria-label="Nächste Seite"><ChevronRight size={16} /></Button>
        </nav>
      )}
    </div>
  );
};

export default Gesamtkatalog;
