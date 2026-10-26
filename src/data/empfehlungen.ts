export type EmpfehlungKategorie = "business" | "ki" | "finanzen" | "lifestyle";

export type Empfehlung = {
  id: string;
  kategorie: EmpfehlungKategorie;
  title: string;
  badge: string;
  description: string;
  cta: string;
  url: string;
  icon: string;
  highlight?: boolean;
};

export const kategorien: { key: EmpfehlungKategorie; tab: string; heading: string }[] = [
  { key: "business", tab: "Digitales Business & Academy", heading: "Digitales Business & Affiliate-Systeme" },
  { key: "ki", tab: "KI- & Creator-Tools", heading: "KI-, Video- & YouTube-Automation Tools" },
  { key: "finanzen", tab: "Business-Kreditkarten & Finanzen", heading: "Business-Finanzen & Reisevorteile" },
  { key: "lifestyle", tab: "Starlink & Lifestyle", heading: "Infrastruktur (Starlink) & Lifestyle-Deals" },
];

/** Link attributes required for every external partner button (§ 5a UWG / Google). */
export const AFFILIATE_REL = "sponsored nofollow noopener";

export const TRANSPARENZ_HINWEIS =
  "Transparenz-Hinweis: Die mit einem Sternchen (*) gekennzeichneten Links sind sogenannte Affiliate-/Empfehlungslinks. Wenn Sie über einen solchen Link ein Produkt erwerben oder beantragen, erhalten wir eine Provision. Für Sie entstehen dadurch keinerlei Mehrkosten – im Gegenteil, oft sichern Sie sich exklusive Start-Boni.";

export const empfehlungen: Empfehlung[] = [
  {
    id: "tac-30",
    kategorie: "business",
    title: "The Affiliate Code 3.0",
    badge: "Bestseller-System",
    description:
      "Schritt-für-Schritt-Komplettanleitung zum Aufbau eines automatisierten Online-Einkommens über digitales Empfehlungsmarketing – auch ohne eigenes Produkt oder Vorwissen.",
    cta: "Zum Affiliate Code 3.0 *",
    url: "https://www.digistore24.com/redir/594457/Rasolution/",
    icon: "rocket",
    highlight: true,
  },
  {
    id: "tac-bundle",
    kategorie: "business",
    title: "The Affiliate Code – Komplett-Bundle",
    badge: "Maximaler Preisvorteil",
    description:
      "Das große Gesamtpaket: Alle Module, Vorlagen und Strategien gebündelt zum vergünstigten Komplettpreis für schnellen Durchstart.",
    cta: "Bundle-Vorteil sichern *",
    url: "https://www.digistore24.com/redir/537681/Rasolution/",
    icon: "package",
  },
  {
    id: "tac-closer",
    kategorie: "business",
    title: "TAC Closer-Coaching (High-Ticket)",
    badge: "High-Ticket Strategie",
    description: "Exklusives Coaching für hochpreisige Abschlüsse und professionelle Verkaufspsychologie im digitalen Raum.",
    cta: "Zum Closer-Coaching *",
    url: "https://www.digistore24.com/redir/539110/Rasolution/",
    icon: "handshake",
  },
  {
    id: "provibooster",
    kategorie: "business",
    title: "Provibooster",
    badge: "Conversion-Turbo",
    description:
      "Die praxiserprobte Erweiterung, um bestehende Klicks und Reichweite in messbar höhere Abschlussquoten und Provisionen zu verwandeln.",
    cta: "Provibooster entdecken *",
    url: "https://www.digistore24.com/redir/537300/Rasolution/",
    icon: "trending",
  },
  {
    id: "team-provisionen",
    kategorie: "business",
    title: "Passive Team Provisionen",
    badge: "Skalierung & Teamaufbau",
    description: "Strategie-System zum Aufbau langfristiger, wiederkehrender Team- und Strukturprovisionen.",
    cta: "Mehr zu Team-Provisionen *",
    url: "https://www.digistore24.com/redir/547538/Rasolution/",
    icon: "users",
  },
  {
    id: "tac-reseller",
    kategorie: "business",
    title: "TAC Reseller-Lizenz",
    badge: "Offizielle Lizenz",
    description:
      "Sichere dir die offiziellen Vertriebsrechte und höhere Provisionsstufen als zertifizierter Lizenzpartner des Systems.",
    cta: "Reseller-Lizenz prüfen *",
    url: "https://www.digistore24.com/redir/554806/Rasolution/",
    icon: "badge",
  },
  {
    id: "elevenlabs",
    kategorie: "ki",
    title: "ElevenLabs (KI-Voice & Audio-Studio)",
    badge: "Marktführer KI-Stimmen",
    description:
      "Branchenführende KI-Sprachgenerierung, Voice-Cloning und automatische Synchronisation für professionelle YouTube-Videos, Reels und Marketingkampagnen.",
    cta: "ElevenLabs kostenlos testen *",
    url: "https://try.elevenlabs.io/drpsh2g9hcj3",
    icon: "mic",
  },
  {
    id: "nexlev",
    kategorie: "ki",
    title: "NexLev (YouTube Automation & Niche-Finder)",
    badge: "YouTube-Wachstum",
    description:
      "Das Daten- und Analyse-Tool für erfolgreiche Faceless-YouTube-Kanäle: Profitable Nischen finden, Trends erkennen und Kanäle systematisch skalieren.",
    cta: "Zu NexLev *",
    url: "https://www.nexlev.io/?fpr=ralfiverse",
    icon: "video",
  },
  {
    id: "amex-platinum",
    kategorie: "finanzen",
    title: "American Express Business Platinum Card",
    badge: "Exklusiv: Bis zu 200.000 Membership Rewards Punkte",
    description:
      "Die ultimative Unternehmer-Kreditkarte für Fuhrpark-, Marketing- und Reiseausgaben: Weltweiter Airport-Lounge-Zugang, umfangreiche Reiseversicherungen, Liquiditätsvorteil und massiver Punkte-Willkommensbonus über unseren Einladungslink.",
    cta: "200.000 Punkte Bonus-Aktion prüfen *",
    url: "https://americanexpress.com/de-de/referral/business-platinum?ref=rALFSb9w9&XLINK=MYCP",
    icon: "card",
  },
  {
    id: "advanzia-gold",
    kategorie: "finanzen",
    title: "Advanzia Gebührenfrei Mastercard Gold",
    badge: "80 € Startguthaben + 0 € Jahresgebühr",
    description:
      "Dauerhaft 0 € Jahresgebühr, 0 % Fremdwährungsgebühren weltweit und Reiseversicherungsschutz – inklusive 80 € Bonus über unsere Empfehlung.",
    cta: "80 € Bonus sichern *",
    url: "https://refer.gebuhrenfrei.com/6dVPTb",
    icon: "wallet",
  },
  {
    id: "helferline",
    kategorie: "lifestyle",
    title: "Helferline – Professionelle Starlink-Montage",
    badge: "Fachgerechte Installation",
    description:
      "Schnelles Satelliten-Internet für Unternehmen, Betriebsstandorte oder Zuhause: Buchung eines erfahrenen Technikers für die schlüsselfertige Starlink-Montage vor Ort.",
    cta: "Montage-Service anfragen *",
    url: "https://u.eu-1.fountain.com/c207a39ea4",
    icon: "wrench",
  },
  {
    id: "saunyoto",
    kategorie: "lifestyle",
    title: "Saunyoto – Premium Starlink-Halterungen & Zubehör",
    badge: "Starlink-Hardware",
    description:
      "Robuste Dach-, Wand- und Mobil-Halterungen sowie passgenaues Zubehör für den sicheren Betrieb deiner Starlink-Antenne.",
    cta: "Zum Saunyoto-Shop *",
    url: "https://www.saunyoto.com?sca_ref=11604398.VWQQN1Ctjv&sca_crp=MjQzOTE4",
    icon: "satellite",
  },
  {
    id: "limango",
    kategorie: "lifestyle",
    title: "Limango – Exklusiver Shopping-Club für Familien & Markenmode",
    badge: "10 € Startgutschein",
    description:
      "Bis zu 70 % Rabatt auf bekannte Marken aus Mode, Outdoor, Schuhen und Lifestyle – mit 10 € Willkommensgutschein für deine erste Bestellung über unsere Einladung.",
    cta: "10 € Gutschein einlösen *",
    url: "https://www.limango.de/invite/nzHkUUEQ8OXnf344v5ylCpM1Ik2eIqmBIvOJ6I6uQqXvQB5voI37aybsKP",
    icon: "bag",
  },
];

export const filterEmpfehlungen = (kat: EmpfehlungKategorie | "alle") =>
  kat === "alle" ? empfehlungen : empfehlungen.filter((e) => e.kategorie === kat);
