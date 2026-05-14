import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sends a GA4 virtual page_view on every client-side route change.
 * Relies on gtag() initialized in index.html with measurement ID G-8YVWQVPMXW.
 */
export const useGAPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== "function") return;

    const path = location.pathname + location.search;
    w.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);
};
