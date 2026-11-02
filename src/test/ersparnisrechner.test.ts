import { describe, expect, it } from "vitest";
import {
  UVP_DEFAULT, abgabenAufVorteil, co2SavedPerBikeKg, defaultRefurbPrice, einkommensteuer, geldwerterVorteil, purchaseSavings,
} from "@/lib/ersparnisrechner";

describe("Ersparnisrechner", () => {
  it("startet mit einer UVP von 4.200 €", () => {
    expect(UVP_DEFAULT).toBe(4200);
  });

  it("geldwerter Vorteil: 1 % eines Viertels der auf volle 100 € abgerundeten UVP", () => {
    expect(geldwerterVorteil(4200)).toBe(10.5);
    expect(geldwerterVorteil(4000)).toBe(10);
    expect(geldwerterVorteil(4299)).toBe(10.5); // 4.299 → 4.200
  });

  it("Refurbished-Preis liegt automatisch 40 % unter UVP", () => {
    expect(defaultRefurbPrice(4200)).toBe(2520);
  });

  it("Kaufpreis-Ersparnis gilt pro Rad und für die gesamte Flotte", () => {
    expect(purchaseSavings(4200, 2520, 10)).toEqual({ perBike: 1680, fleet: 16800 });
  });

  it("CO₂-Ersparnis basiert auf 10 km Arbeitsweg", () => {
    // 10 km × 2 × 180 Tage × (0,14 − 0,005) kg
    expect(co2SavedPerBikeKg()).toBe(486);
  });

  it("Einkommensteuer ist bis zum Grundfreibetrag null", () => {
    expect(einkommensteuer(12348)).toBe(0);
    expect(einkommensteuer(40000)).toBeGreaterThan(0);
  });

  it("Abgaben auf den Vorteil sind kleiner als der Vorteil selbst", () => {
    const a = abgabenAufVorteil(3500, 1, 10.5);
    expect(a.total).toBeGreaterThan(0);
    expect(a.total).toBeLessThan(10.5);
  });
});
