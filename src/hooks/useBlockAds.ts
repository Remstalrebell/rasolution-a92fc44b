import { useEffect } from "react";

type AdsQueue = unknown[] & { pauseAdRequests?: number };

/**
 * Suppresses Google AdSense on the current page: pauses new ad requests and
 * hides any ad units/auto-ads already injected. Restores on unmount.
 */
export const useBlockAds = () => {
  useEffect(() => {
    const w = window as unknown as { adsbygoogle?: AdsQueue };
    const queue: AdsQueue = w.adsbygoogle || ([] as AdsQueue);
    queue.pauseAdRequests = 1;
    w.adsbygoogle = queue;

    const style = document.createElement("style");
    style.id = "block-ads";
    style.textContent =
      'ins.adsbygoogle, .google-auto-placed, .adsbygoogle-noablate, iframe[id^="aswift_"], iframe[id^="google_ads_iframe"] { display: none !important; }';
    document.head.appendChild(style);

    return () => {
      queue.pauseAdRequests = 0;
      style.remove();
    };
  }, []);
};
