import type { AttributedArticle } from "@/data/ratgeber";

export const getArticleSchema = (article: Omit<AttributedArticle, "published"> & { published?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  inLanguage: "de-DE",
  mainEntityOfPage: `https://rasolution.lovable.app/ratgeber/${article.slug}`,
  author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
  publisher: { "@type": "Organization", name: article.publisher },
  ...(article.published ? { datePublished: article.published } : {}),
  dateModified: article.updated,
  citation: article.sources.map((source) => source.url),
});