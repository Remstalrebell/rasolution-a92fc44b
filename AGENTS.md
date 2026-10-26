
- Page titles/descriptions for every public route live in `src/hooks/useRouteMeta.ts` (articles read theirs from `src/data/ratgeber.ts`); keep `public/sitemap.xml` in sync when adding public pages — one source for crawler metadata.
- Ratgeber articles are data in `src/data/ratgeber.ts` rendered by one template page; FAQ answers stay always visible so crawlers see them.
- The bike stock list is data in `src/data/gesamtkatalog.json` (generated from the user's CSV) with filter/sort/subject logic in `src/lib/katalog.ts`; replace the JSON to update stock, keep logic covered by `src/test/katalog.test.ts`.
- Hidden affiliate pages (e.g. `/empfehlungen`, data in `src/data/empfehlungen.ts`) stay out of nav, footer and sitemap, are `noindex` via `useRouteMeta`, disallowed in every Google/Bing group of `robots.txt`, and call `useBlockAds` — keeps AdSense review limited to editorial pages.
