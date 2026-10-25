import { describe, it, expect } from "vitest";
import { katalog, filterKatalog, kmLabel, anfrageBetreff, ALLE, ANTRIEB_EBIKE, ANTRIEB_BIO, PRO_SEITE, type KatalogFilter } from "@/lib/katalog";

const base: KatalogFilter = { suche: "", antrieb: ALLE, kategorie: ALLE, rahmenform: ALLE, zustand: ALLE, sort: "preis-auf" };

describe("Gesamtkatalog", () => {
  it("enthält 386 Fahrzeuge", () => {
    expect(katalog.length).toBe(386);
  });

  it("zählt 267 E-Bikes und 119 Fahrräder ohne Motor", () => {
    expect(filterKatalog(katalog, { ...base, antrieb: ANTRIEB_EBIKE }).length).toBe(267);
    expect(filterKatalog(katalog, { ...base, antrieb: ANTRIEB_BIO }).length).toBe(119);
  });

  it("findet ein Rad über die Ref-ID", () => {
    const r = filterKatalog(katalog, { ...base, suche: "9067687" });
    expect(r.map((b) => b.ref)).toEqual(["9067687"]);
  });

  it("sortiert nach Preis aufsteigend", () => {
    const r = filterKatalog(katalog, base);
    expect(r[0].preis).toBeLessThanOrEqual(r[1].preis);
    expect(r[0].preis).toBe(Math.min(...katalog.map((b) => b.preis)));
  });

  it("zeigt bei Fahrrad ohne Motor und 0 km 'Unbekannt / Bio-Bike'", () => {
    const bio = katalog.find((b) => b.antrieb === ANTRIEB_BIO && b.km === 0)!;
    expect(kmLabel(bio)).toBe("Unbekannt / Bio-Bike");
  });

  it("füllt den Betreff mit Marke, Modell, Ref-ID und Angebotspreis", () => {
    const b = katalog.find((x) => x.ref === "9067687")!;
    expect(anfrageBetreff(b)).toBe("ADVANCED EBIKE Reco One 10-Gang (Ref-ID: #9067687) – Angebotspreis: 3.349 €");
  });

  it("zeigt 15 Fahrzeuge pro Seite", () => {
    expect(PRO_SEITE).toBe(15);
  });
});
