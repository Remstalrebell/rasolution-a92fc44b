
- Page titles/descriptions for every public route live in `src/hooks/useRouteMeta.ts` (articles read theirs from `src/data/ratgeber.ts`); keep `public/sitemap.xml` in sync when adding public pages — one source for crawler metadata.
- Ratgeber articles are data in `src/data/ratgeber.ts` rendered by one template page; FAQ answers stay always visible so crawlers see them.
