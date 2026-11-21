import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AdSenseLoader from "@/components/AdSenseLoader";
import { ADSENSE_PUBLISHER, isAdSenseAllowed } from "@/lib/adsense";
import { getRouteMeta } from "@/hooks/useRouteMeta";

afterEach(() => {
  cleanup();
  document.getElementById("adsense-script")?.remove();
  document.getElementById("adsense-route-blocker")?.remove();
});

describe("AdSense route policy", () => {
  it.each(["/", "/mobilitaetsmanagement", "/ratgeber", "/ratgeber/csrd-scope-3-fuhrpark", "/leistungen", "/marketing"])("allows editorial page %s", (path) => {
    expect(isAdSenseAllowed(path)).toBe(true);
  });
  it.each(["/empfehlungen", "/kontakt", "/impressum", "/datenschutz", "/ueber-uns", "/warum-wir", "/app", "/login", "/admin-control", "/vidiq"])("blocks excluded page %s", (path) => {
    expect(isAdSenseAllowed(path)).toBe(false);
  });
  it("preserves the exact publisher ID", () => {
    expect(ADSENSE_PUBLISHER).toBe("ca-pub-4300168677415631");
  });
  it("keeps recommendations noindex but allows following links", () => {
    expect(getRouteMeta("/empfehlungen")).toMatchObject({ noindex: true, follow: true });
  });
  it("loads one script on an editorial route, removes it on exclusion and resumes on return", () => {
    const view = render(<MemoryRouter initialEntries={["/"]}><AdSenseLoader /></MemoryRouter>);
    expect(document.querySelectorAll("#adsense-script")).toHaveLength(1);
    expect(document.getElementById("adsense-script")?.getAttribute("src")).toContain("client=ca-pub-4300168677415631");
    view.unmount();
    const excluded = render(<MemoryRouter initialEntries={["/datenschutz"]}><AdSenseLoader /></MemoryRouter>);
    expect(document.getElementById("adsense-script")).toBeNull();
    expect(document.getElementById("adsense-route-blocker")).not.toBeNull();
    expect((window as unknown as { adsbygoogle: { pauseAdRequests: number } }).adsbygoogle.pauseAdRequests).toBe(1);
    excluded.unmount();
    render(<MemoryRouter initialEntries={["/ratgeber"]}><Routes><Route path="*" element={<AdSenseLoader />} /></Routes></MemoryRouter>);
    expect(document.querySelectorAll("#adsense-script")).toHaveLength(1);
    expect((window as unknown as { adsbygoogle: { pauseAdRequests: number } }).adsbygoogle.pauseAdRequests).toBe(0);
  });
});