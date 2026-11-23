import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRoutes } from "./App";
import { getRouteMeta } from "./hooks/useRouteMeta";
import { getArticle } from "./data/ratgeber";
import { getArticleSchema } from "./lib/articleSchema";

/** Build-time only: renders one route to static HTML plus its head data. */
export const render = (path: string) => {
  const html = renderToString(
    <QueryClientProvider client={new QueryClient()}>
      <TooltipProvider>
        <StaticRouter location={path}>
          <AppRoutes />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
  const meta = getRouteMeta(path);
  const article = path.startsWith("/ratgeber/") ? getArticle(path.slice(10)) : undefined;
  const schema = article
    ? getArticleSchema(article)
    : { "@context": "https://schema.org", "@type": "WebPage", name: meta.title, description: meta.description, url: "https://rasolution.io" + path, publisher: { "@type": "Organization", name: "Rasolution" } };
  return { html, meta, schema };
};
