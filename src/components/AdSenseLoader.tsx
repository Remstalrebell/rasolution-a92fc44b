import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ADSENSE_PUBLISHER, isAdSenseAllowed } from "@/lib/adsense";

type AdsQueue = unknown[] & { pauseAdRequests?: number };

/** A single route-aware owner; removing a script cannot undo executed third-party code. */
const AdSenseLoader = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const allowed = isAdSenseAllowed(pathname);
    const w = window as unknown as { adsbygoogle?: AdsQueue };
    const queue = w.adsbygoogle ?? ([] as AdsQueue);
    w.adsbygoogle = queue;
    queue.pauseAdRequests = allowed ? 0 : 1;

    const blocker = document.createElement("style");
    blocker.id = "adsense-route-blocker";
    blocker.textContent = 'ins.adsbygoogle, .google-auto-placed, .adsbygoogle-noablate, iframe[id^="aswift_"], iframe[id^="google_ads_iframe"] { display: none !important; }';

    if (!allowed) {
      document.getElementById("adsense-script")?.remove();
      document.head.appendChild(blocker);
      return () => { blocker.remove(); };
    }

    if (!document.getElementById("adsense-script")) {
      const script = document.createElement("script");
      script.id = "adsense-script";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER}`;
      document.head.appendChild(script);
    }

    return () => { queue.pauseAdRequests = 1; };
  }, [pathname]);
  return null;
};

export default AdSenseLoader;