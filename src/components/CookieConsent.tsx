import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "rasolution_cookie_consent_v1";

type Consent = { essential: true; analytics: boolean; marketing: boolean };

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6">
      <div
        className="mx-auto max-w-3xl rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl p-6 md:p-7 text-slate-100"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.95)" }}
      >
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/20 p-2.5 shrink-0">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-white">Cookie-Einstellungen</h2>
            <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
              Wir verwenden Cookies, um diese Website optimal bereitzustellen sowie Reichweite und Nutzung anonym auszuwerten.
              Sie entscheiden, was Sie zulassen.{" "}
              <Link to="/datenschutz" className="underline text-slate-200 hover:text-white">Datenschutz</Link>.
            </p>

            {details && (
              <div className="mt-5 space-y-3 rounded-lg bg-white/5 p-4">
                <Row label="Essenziell" desc="Notwendig für den Betrieb der Seite." checked disabled />
                <Row label="Analyse" desc="Anonyme Statistiken zur Verbesserung." checked={analytics} onChange={setAnalytics} />
                <Row label="Marketing" desc="Personalisierte Inhalte & Kampagnen-Tracking." checked={marketing} onChange={setMarketing} />
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="sm" onClick={() => save({ essential: true, analytics: true, marketing: true })}>
                Alle akzeptieren
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => save({ essential: true, analytics, marketing })}>
                Auswahl speichern
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10"
                onClick={() => save({ essential: true, analytics: false, marketing: false })}>
                Nur essenziell
              </Button>
              <button onClick={() => setDetails((d) => !d)} className="ml-auto text-xs text-slate-400 hover:text-white underline">
                {details ? "Details ausblenden" : "Details anzeigen"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, desc, checked, onChange, disabled }: { label: string; desc: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) => (
  <div className="flex items-center justify-between gap-4">
    <div>
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="text-xs text-slate-400">{desc}</p>
    </div>
    <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} />
  </div>
);

export default CookieConsent;
