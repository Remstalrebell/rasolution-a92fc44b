import data from "@/data/gesamtkatalog.json";

export type KatalogBike = {
  ref: string;
  marke: string;
  modell: string;
  antrieb: string;
  kategorie: string;
  rahmenform: string;
  rahmenhoehe: string;
  farbe: string;
  km: number;
  zustand: string;
  uvp: number;
  preis: number;
  ersparnis: number;
};

export const katalog = data as KatalogBike[];

export const ANTRIEB_EBIKE = "E-Bike (bis 25 km/h)";
export const ANTRIEB_BIO = "Fahrrad (ohne Motor)";

export const kategorien = ["Trekkingbike", "City / Urban", "Fully", "Hardtail", "SUV", "Crossbike", "Gravel", "Rennrad"];
export const rahmenformen = ["Diamant", "Trapez", "Wave", "Tiefeinsteiger", "Herren"];
export const zustaende = ["Exzellent", "Sehr gut"];

export type Sortierung = "preis-auf" | "preis-ab" | "km-auf" | "ersparnis";

export type KatalogFilter = {
  suche: string;
  antrieb: string;
  kategorie: string;
  rahmenform: string;
  zustand: string;
  sort: Sortierung;
};

export const ALLE = "alle";

export function filterKatalog(list: KatalogBike[], f: KatalogFilter): KatalogBike[] {
  const q = f.suche.trim().toLowerCase().replace(/^#/, "");
  const out = list.filter(
    (b) =>
      (!q || `${b.marke} ${b.modell} ${b.ref}`.toLowerCase().includes(q)) &&
      (f.antrieb === ALLE || b.antrieb === f.antrieb) &&
      (f.kategorie === ALLE || b.kategorie === f.kategorie) &&
      (f.rahmenform === ALLE || b.rahmenform === f.rahmenform) &&
      (f.zustand === ALLE || b.zustand === f.zustand),
  );
  const cmp: Record<Sortierung, (a: KatalogBike, b: KatalogBike) => number> = {
    "preis-auf": (a, b) => a.preis - b.preis,
    "preis-ab": (a, b) => b.preis - a.preis,
    "km-auf": (a, b) => a.km - b.km,
    ersparnis: (a, b) => b.ersparnis - a.ersparnis,
  };
  return out.sort(cmp[f.sort]);
}

export function kmLabel(b: KatalogBike): string {
  if (b.antrieb === ANTRIEB_BIO && b.km === 0) return "Unbekannt / Bio-Bike";
  return `${b.km.toLocaleString("de-DE")} km`;
}

export const euro = (n: number) =>
  `${n.toLocaleString("de-DE", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })} €`;

export function anfrageBetreff(b: KatalogBike): string {
  return `${b.marke} ${b.modell} (Ref-ID: #${b.ref}) – Angebotspreis: ${euro(b.preis)}`;
}

export const PRO_SEITE = 15;
