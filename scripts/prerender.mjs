// Static-HTML-Prerendering: rendert jede Sitemap-Route mit React SSR in dist/<route>/index.html.
import { build } from "vite";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrOut = path.join(root, "node_modules/.prerender");

await build({ logLevel: "warn", build: { ssr: "src/entry-server.tsx", outDir: ssrOut, emptyOutDir: true } });
const { render } = await import(pathToFileURL(path.join(ssrOut, "entry-server.js")).href);

const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/rasolution\.io([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const route of routes) {
  const { html, meta, schema } = render(route);
  const url = "https://rasolution.io" + route;
  let out = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(meta.description)}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(meta.title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(meta.description)}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`)
    .replace("</head>", `  <link rel="canonical" href="${url}" />\n  <meta property="og:url" content="${url}" />\n  <meta name="robots" content="index, follow" />\n  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  if (!html.includes("<h1")) console.warn(`⚠ Kein <h1> in ${route}`);
  console.log(`prerendered ${route}`);
}
fs.rmSync(ssrOut, { recursive: true, force: true });
