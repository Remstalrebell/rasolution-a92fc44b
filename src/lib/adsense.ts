export const ADSENSE_PUBLISHER = "ca-pub-4300168677415631";

const editorialPaths = new Set(["/", "/mobilitaetsmanagement", "/ratgeber", "/leistungen", "/marketing"]);

/** Default-deny: legal, affiliate, contact and internal pages never load ads. */
export const isAdSenseAllowed = (pathname: string) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return editorialPaths.has(path) || /^\/ratgeber\/[^/]+$/.test(path);
};