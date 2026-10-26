import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { AFFILIATE_REL, empfehlungen, filterEmpfehlungen } from "@/data/empfehlungen";
import { getRouteMeta } from "@/hooks/useRouteMeta";

const pub = (f: string) => readFileSync(resolve(__dirname, "../../public", f), "utf8");

describe("Partner-Hub /empfehlungen", () => {
  it("has 13 partners split 6 / 2 / 2 / 3 across the tabs", () => {
    expect(empfehlungen).toHaveLength(13);
    expect(filterEmpfehlungen("alle")).toHaveLength(13);
    expect(filterEmpfehlungen("business")).toHaveLength(6);
    expect(filterEmpfehlungen("ki")).toHaveLength(2);
    expect(filterEmpfehlungen("finanzen")).toHaveLength(2);
    expect(filterEmpfehlungen("lifestyle")).toHaveLength(3);
  });

  it("marks every affiliate button with an asterisk", () => {
    for (const e of empfehlungen) expect(e.cta.endsWith("*")).toBe(true);
  });

  it("uses rel sponsored nofollow noopener on partner links", () => {
    expect(AFFILIATE_REL).toBe("sponsored nofollow noopener");
  });

  it("is noindex", () => {
    expect(getRouteMeta("/empfehlungen").noindex).toBe(true);
  });

  it("is blocked in robots.txt for Google and all crawlers, but not in the sitemap", () => {
    const robots = pub("robots.txt");
    for (const agent of ["Mediapartners-Google", "Googlebot", "*"]) {
      const group = robots.split(`User-agent: ${agent}\n`)[1].split("\n\n")[0];
      expect(group).toContain("Allow: /");
      expect(group).toContain("Disallow: /empfehlungen");
    }
    expect(robots).toContain("Sitemap: https://rasolution.io/sitemap.xml");
    expect(pub("sitemap.xml")).not.toContain("empfehlungen");
  });
});
