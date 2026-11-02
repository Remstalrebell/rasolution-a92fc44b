/**
 * Dienstrad- & Refurbished-Ersparnisrechner.
 * Vereinfachte Näherung – ersetzt keine Lohnabrechnung oder Steuerberatung.
 */

export const UVP_MIN = 1000;
export const UVP_MAX = 8000;
export const UVP_DEFAULT = 4200;
/** Refurbished-Preis standardmäßig rund 40 % unter UVP */
export const REFURB_DISCOUNT = 0.4;
export const BIKES_MIN = 1;
export const BIKES_MAX = 50;

/** CO₂-Annahmen Pendelverkehr */
export const COMMUTE_KM_ONE_WAY = 10;
export const BIKE_DAYS_PER_YEAR = 180;
export const CAR_KG_CO2_PER_KM = 0.14;
export const EBIKE_KG_CO2_PER_KM = 0.005;

export type Steuerklasse = 1 | 2 | 3 | 4 | 5 | 6;

/** 0,25-%-Regel: 1 % eines Viertels der auf volle 100 € abgerundeten UVP pro Monat */
export const geldwerterVorteil = (uvp: number) => {
  const rounded = Math.floor(Math.max(0, uvp) / 100) * 100;
  return Math.round((rounded / 4) * 0.01 * 100) / 100;
};

export const defaultRefurbPrice = (uvp: number) => Math.round(uvp * (1 - REFURB_DISCOUNT));

export const purchaseSavings = (uvp: number, refurbPrice: number, bikes: number) => {
  const perBike = Math.max(0, uvp - refurbPrice);
  return { perBike, fleet: perBike * Math.max(0, Math.floor(bikes)) };
};

/** Eingesparte kg CO₂ pro Jahr und Rad gegenüber Pkw-Pendeln (10 km einfache Strecke) */
export const co2SavedPerBikeKg = () =>
  Math.round(COMMUTE_KM_ONE_WAY * 2 * BIKE_DAYS_PER_YEAR * (CAR_KG_CO2_PER_KM - EBIKE_KG_CO2_PER_KM));

/** Einkommensteuertarif § 32a EStG (Tarif 2026) */
export const einkommensteuer = (zvE: number) => {
  const x = Math.floor(Math.max(0, zvE));
  if (x <= 12348) return 0;
  if (x <= 17799) {
    const y = (x - 12348) / 10000;
    return Math.floor((914.51 * y + 1400) * y);
  }
  if (x <= 69878) {
    const z = (x - 17799) / 10000;
    return Math.floor((173.1 * z + 2397) * z + 1034.87);
  }
  if (x <= 277825) return Math.floor(0.42 * x - 11135.63);
  return Math.floor(0.45 * x - 19470.38);
};

const GRUNDFREIBETRAG = 12348;
/** Arbeitnehmeranteile Sozialversicherung 2026 (Näherung) */
const SV_KV_PV = 0.0875 + 0.018; // KV inkl. Ø-Zusatzbeitrag + PV
const SV_RV_AV = 0.093 + 0.013;
const BBG_KV_MONAT = 5812.5;
const BBG_RV_MONAT = 8450;

/** Grobe Jahressteuer nach Steuerklasse (vereinfachtes Modell) */
const jahresSteuer = (bruttoJahr: number, klasse: Steuerklasse) => {
  const vorsorge = Math.min(bruttoJahr * 0.12, 12000);
  let zvE = bruttoJahr - vorsorge - (klasse === 6 ? 0 : 1230 + 36);
  if (klasse === 2) zvE -= 4260;
  if (klasse === 3) return 2 * einkommensteuer(zvE / 2);
  // Klasse V/VI: ohne Grundfreibetrag
  if (klasse === 5 || klasse === 6) return einkommensteuer(zvE + GRUNDFREIBETRAG);
  return einkommensteuer(zvE);
};

/** Monatliche Steuer- und Abgabenlast auf den geldwerten Vorteil (Näherung) */
export const abgabenAufVorteil = (bruttoMonat: number, klasse: Steuerklasse, vorteilMonat: number) => {
  const base = Math.max(0, bruttoMonat);
  const steuer = (jahresSteuer((base + vorteilMonat) * 12, klasse) - jahresSteuer(base * 12, klasse)) / 12;
  const soliFrei = true; // Soli fällt für die allermeisten Arbeitnehmenden nicht mehr an
  const kvAnteil = Math.max(0, Math.min(base + vorteilMonat, BBG_KV_MONAT) - Math.min(base, BBG_KV_MONAT));
  const rvAnteil = Math.max(0, Math.min(base + vorteilMonat, BBG_RV_MONAT) - Math.min(base, BBG_RV_MONAT));
  const sv = kvAnteil * SV_KV_PV + rvAnteil * SV_RV_AV;
  return { steuer: Math.round(steuer * 100) / 100, sv: Math.round(sv * 100) / 100, total: Math.round((steuer + sv) * 100) / 100, soliFrei };
};
