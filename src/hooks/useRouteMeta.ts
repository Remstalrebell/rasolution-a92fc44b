import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getArticle } from "@/data/ratgeber";

const SITE = "https://rasolution.io";

type Meta = { title: string; description: string; noindex?: boolean };

export const routeMeta: Record<string, Meta> = {
  "/": {
    title: "Rasolution | Fuhrparkmanagement & E-Mobilität mit System",
    description: "Strategische Beratung und digitale Umsetzung für Unternehmen mit großen Flotten: Fuhrparkmanagement, E-Mobilität, Kosten senken und Effizienz steigern.",
  },
  "/marketing": {
    title: "Business-Ressourcen & Onlinemarketing | Rasolution",
    description: "Ausgewählte Tools für digitales Business, Automatisierung und Business-Finanzen – für Entlastung und Transparenz im Unternehmensalltag.",
  },
  "/mobilitaetsmanagement": {
    title: "Mobilitätsmanagement & Refurbished E-Bikes | Rasolution",
    description: "Geprüfte Leasingrückläufer und Refurbished E-Bikes deutlich unter UVP, Ratgeber zu Diensträdern und der 0,25 %-Regel sowie Mobilitätskonzepte für Unternehmen.",
  },
  "/ratgeber": {
    title: "Ratgeber Fuhrpark & Mobilität | Rasolution",
    description: "Fachartikel zu Dienstrad-Steuervorteilen, Refurbished E-Bikes, TCO im Fuhrparkmanagement und E-Bike-Akkus – praxisnah für Unternehmen.",
  },
  "/impressum": {
    title: "Impressum | Rasolution",
    description: "Impressum und Anbieterkennzeichnung von Rasolution, Schorndorf – Angaben gemäß § 5 DDG.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | Rasolution",
    description: "Datenschutzerklärung von Rasolution: Hosting, Kontaktformular, Cookies, Analyse- und Marketing-Tools sowie Ihre Rechte nach DSGVO.",
  },
  "/login": { title: "Login | Rasolution", description: "Interner Login-Bereich von Rasolution.", noindex: true },
  "/wartung": { title: "Wartungsarbeiten | Rasolution", description: "Hier entsteht Rasolution. Wir optimieren gerade unsere Systeme für Sie.", noindex: true },
};

const fallback: Meta = { title: "Rasolution", description: routeMeta["/"].description, noindex: true };

export const getRouteMeta = (path: string): Meta => {
  if (routeMeta[path]) return routeMeta[path];
  if (path.startsWith("/ratgeber/")) {
    const a = getArticle(path.slice("/ratgeber/".length));
    if (a) return { title: a.metaTitle, description: a.description };
  }
  if (path.startsWith("/app")) return { title: "Dashboard | Rasolution", description: fallback.description, noindex: true };
  return fallback;
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/** Sets a unique title, description, canonical and robots tag for every route. */
export const useRouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const m = getRouteMeta(path);
    const url = SITE + (path === "/" ? "/" : path);

    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", m.title);
    setMeta("name", "twitter:description", m.description);
    setMeta("name", "robots", m.noindex ? "noindex, nofollow" : "index, follow");

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname]);
};
