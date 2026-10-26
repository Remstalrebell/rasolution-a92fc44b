import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck, CreditCard, ExternalLink, Handshake, Info, Mic, Package, Rocket, Satellite,
  ShoppingBag, Sparkles, TrendingUp, Users, Video, Wallet, Wrench, type LucideIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import logoUrl from "@/assets/rasolution-logo.png";
import { cn } from "@/lib/utils";
import { useBlockAds } from "@/hooks/useBlockAds";
import {
  AFFILIATE_REL, TRANSPARENZ_HINWEIS, empfehlungen, filterEmpfehlungen, kategorien,
  type Empfehlung, type EmpfehlungKategorie,
} from "@/data/empfehlungen";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket, package: Package, handshake: Handshake, trending: TrendingUp, users: Users,
  badge: BadgeCheck, mic: Mic, video: Video, card: CreditCard, wallet: Wallet, wrench: Wrench,
  satellite: Satellite, bag: ShoppingBag,
};

const tabs: { key: EmpfehlungKategorie | "alle"; label: string }[] = [
  { key: "alle", label: "Alle Empfehlungen" },
  ...kategorien.map((k) => ({ key: k.key, label: k.tab })),
];

const Hinweis = ({ className }: { className?: string }) => (
  <div className={cn("flex gap-3 rounded-xl border border-hero-foreground/10 bg-hero-foreground/5 p-4 text-left text-xs leading-relaxed text-hero-muted sm:text-sm", className)}>
    <Info className="mt-0.5 h-4 w-4 shrink-0 text-hero-accent" />
    <p>{TRANSPARENZ_HINWEIS}</p>
  </div>
);

const PartnerCard = ({ e }: { e: Empfehlung }) => {
  const Icon = icons[e.icon] ?? Sparkles;
  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl border p-6 transition-all duration-300",
        e.highlight
          ? "border-hero-accent/60 bg-gradient-to-br from-hero-accent/20 via-hero-foreground/5 to-transparent md:col-span-2 md:p-8"
          : "border-hero-foreground/10 bg-hero-foreground/[0.04] hover:border-hero-accent/40",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className={cn("flex items-center justify-center rounded-xl bg-hero-accent/15 text-hero-accent", e.highlight ? "h-14 w-14" : "h-11 w-11")}>
          <Icon size={e.highlight ? 26 : 20} />
        </div>
        {e.highlight && (
          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
            Flaggschiff-Empfehlung
          </span>
        )}
      </div>
      <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-hero-accent/40 bg-hero-accent/10 px-3 py-1 text-xs font-semibold text-hero-foreground">
        <Sparkles className="h-3 w-3 text-hero-accent" />
        {e.badge}
      </span>
      <h3 className={cn("mt-3 text-hero-foreground", e.highlight ? "text-2xl md:text-3xl" : "text-lg md:text-xl")}>{e.title}</h3>
      <p className={cn("mt-2 flex-1 leading-relaxed text-hero-muted", e.highlight ? "text-base md:text-lg" : "text-sm")}>{e.description}</p>
      <a
        href={e.url}
        target="_blank"
        rel={AFFILIATE_REL}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 whitespace-normal rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:brightness-110",
          e.highlight && "md:w-auto md:self-start md:px-8",
        )}
      >
        {e.cta}
        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" />
      </a>
    </article>
  );
};

const Empfehlungen = () => {
  const [tab, setTab] = useState<EmpfehlungKategorie | "alle">("alle");
  useBlockAds();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sichtbar = filterEmpfehlungen(tab);
  const sektionen = kategorien.filter((k) => sichtbar.some((e) => e.kategorie === k.key));

  return (
    <div className="min-h-screen bg-hero text-hero-foreground">
      <header className="container flex items-center justify-center pt-8">
        <Link to="/" aria-label="Rasolution Startseite">
          <img src={logoUrl} alt="Rasolution" className="h-10 w-auto" />
        </Link>
      </header>

      <main className="container max-w-5xl pb-16">
        <section className="mx-auto max-w-3xl pt-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-hero-accent">Rasolution Partner-Hub</p>
          <h1 className="text-balance text-3xl text-hero-foreground md:text-5xl">
            Empfohlene Tools, Business-Finanzen & Digitale Einkommenssysteme
          </h1>
          <p className="mt-4 text-hero-muted md:text-lg">
            Unsere kuratierten Empfehlungen – ausgewählt für Entlastung, Transparenz und nachhaltiges Wachstum.
          </p>
          <Hinweis className="mt-6" />
        </section>

        <nav aria-label="Kategorien" className="sticky top-0 z-20 -mx-4 mt-10 bg-hero/90 px-4 py-3 backdrop-blur-md">
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center">
            {tabs.map((t) => {
              const count = filterEmpfehlungen(t.key).length;
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  aria-pressed={active}
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-hero-foreground/15 text-hero-muted hover:border-hero-accent/50 hover:text-hero-foreground",
                  )}
                >
                  {t.label} <span className="opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="mt-8 space-y-14">
          {sektionen.map((k) => (
            <section key={k.key} aria-labelledby={`sek-${k.key}`}>
              <h2 id={`sek-${k.key}`} className="mb-6 text-xl text-hero-foreground md:text-2xl">
                {k.heading}
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {sichtbar.filter((e) => e.kategorie === k.key).map((e) => (
                  <PartnerCard key={e.id} e={e} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <Hinweis className="mt-16" />
        <p className="mt-4 text-center text-xs text-hero-muted">
          {empfehlungen.length} Partner-Empfehlungen · Stand {new Date().getFullYear()}
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Empfehlungen;
