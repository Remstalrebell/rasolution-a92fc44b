import { describe, expect, it } from "vitest";
import { articles } from "@/data/ratgeber";
import { getArticleSchema } from "@/lib/articleSchema";

describe("Article trust metadata", () => {
  it("attributes all ten articles to the named adviser and publisher", () => {
    expect(articles).toHaveLength(10);
    for (const article of articles) {
      const schema = getArticleSchema(article);
      expect(schema["@type"]).toBe("Article");
      expect(schema.author).toMatchObject({ "@type": "Person", name: "Ralf Jörg Schmidt" });
      expect(schema.publisher).toEqual({ "@type": "Organization", name: "RASOLUTION" });
      expect(schema.headline).toBe(article.title);
      expect(schema.dateModified).toBe("2026-11-21");
      expect(schema.mainEntityOfPage).toBe(`https://rasolution.lovable.app/ratgeber/${article.slug}`);
      expect(schema.citation.length).toBeGreaterThanOrEqual(2);
    }
  });
  it("never fabricates an undocumented publication date", () => {
    const article = articles[0];
    expect(getArticleSchema({ ...article, published: undefined })).not.toHaveProperty("datePublished");
    expect(getArticleSchema({ ...article, published: "2026-11-06" }).datePublished).toBe("2026-11-06");
  });
  it("staggers the first four publication dates from 26 October through 1 November 2026", () => {
    expect(articles.slice(0, 4).map((a) => getArticleSchema(a).datePublished)).toEqual([
      "2026-10-26", "2026-10-28", "2026-10-30", "2026-11-01",
    ]);
  });
  it("staggers the six new publication dates from 2 through 6 November 2026", () => {
    expect(articles.slice(4).map((a) => getArticleSchema(a).datePublished)).toEqual([
      "2026-11-02", "2026-11-03", "2026-11-04", "2026-11-05", "2026-11-06", "2026-11-06",
    ]);
  });
  it("links the requested original laws to their relevant topics", () => {
    const tax = articles.find((a) => a.slug === "dienstwagen-vs-dienstrad-steuervorteile");
    const uvv = articles.find((a) => a.slug === "uvv-pruefung-dienstraeder-pkw");
    const csrd = articles.find((a) => a.slug === "csrd-scope-3-fuhrpark");
    expect(tax?.sources.map((s) => s.url)).toContain("https://www.gesetze-im-internet.de/estg/__3.html");
    expect(uvv?.sources.map((s) => s.url)).toContain("https://publikationen.dguv.de/regelwerk/dguv-vorschriften/1125/fahrzeuge");
    expect(csrd?.sources.map((s) => s.url)).toContain("https://eur-lex.europa.eu/eli/dir/2022/2464/oj?locale=de");
  });
});