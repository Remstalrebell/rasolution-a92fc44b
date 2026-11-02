import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RichText from "@/components/RichText";
import Ersparnisrechner from "@/components/Ersparnisrechner";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Lightbulb, ListOrdered, PenLine } from "lucide-react";
import { articles, getArticle, slugifyHeading } from "@/data/ratgeber";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

const RatgeberArtikel = () => {
  const { slug = "" } = useParams();
  const a = getArticle(slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  if (!a) return <NotFound />;
  const related = (a.related ?? []).map(getArticle).filter((o): o is NonNullable<typeof o> => !!o && o.slug !== a.slug);
  const others = articles.filter((o) => o.slug !== a.slug && !related.some((r) => r.slug === o.slug));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Button variant="ghost" asChild className="mb-6 -ml-3">
            <Link to="/ratgeber"><ArrowLeft className="h-4 w-4 mr-2" /> Alle Ratgeber-Artikel</Link>
          </Button>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{a.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{a.title}</h1>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-10">
            <span className="inline-flex items-center gap-1"><Clock size={14} /> {a.readMin} Min. Lesezeit</span>
            <span>· Rasolution Redaktion</span>
            {a.updated && <span>· Stand: {formatDate(a.updated)}</span>}
          </p>

          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            {a.intro.map((t, i) => <p key={i}><RichText text={t} /></p>)}
          </div>

          <nav aria-label="Inhaltsverzeichnis" className="mt-10 rounded-xl border bg-muted/40 p-6">
            <p className="flex items-center gap-2 font-semibold mb-3"><ListOrdered size={18} className="text-primary" /> Inhaltsverzeichnis</p>
            <ol className="list-decimal pl-6 space-y-1.5 text-sm">
              {a.tool && <li><a href="#ersparnisrechner" className="text-primary hover:underline">Ersparnisrechner (0,25-%-Regel)</a></li>}
              {a.sections.map((s) => (
                <li key={s.h2}><a href={`#${slugifyHeading(s.h2)}`} className="text-primary hover:underline">{s.h2}</a></li>
              ))}
              <li><a href="#faq" className="text-primary hover:underline">Häufige Fragen</a></li>
            </ol>
          </nav>

          {a.tool === "ersparnisrechner" && <Ersparnisrechner compact />}

          {a.sections.map((s) => (
            <section key={s.h2} id={slugifyHeading(s.h2)} className="mt-12 space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-semibold">{s.h2}</h2>
              {s.p?.map((t, i) => <p key={i} className="leading-relaxed text-muted-foreground"><RichText text={t} /></p>)}
              {s.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                  {s.list.map((t, i) => <li key={i}><RichText text={t} /></li>)}
                </ul>
              )}
              {s.sub?.map((sub) => (
                <div key={sub.h3} className="space-y-3 pt-2">
                  <h3 className="text-xl font-semibold">{sub.h3}</h3>
                  {sub.p.map((t, i) => <p key={i} className="leading-relaxed text-muted-foreground"><RichText text={t} /></p>)}
                </div>
              ))}
              {s.table && (
                <div className="overflow-x-auto rounded-xl border">
                  <table className="w-full text-sm">
                    <caption className="caption-top bg-muted/50 px-4 py-3 text-left font-semibold text-foreground">{s.table.caption}</caption>
                    <thead>
                      <tr className="border-b bg-muted/30">
                        {s.table.head.map((h) => <th key={h} scope="col" className="px-4 py-2.5 text-left font-semibold">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b last:border-0">
                          {row.map((c, ci) => <td key={ci} className="px-4 py-2.5 align-top text-muted-foreground">{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.example && (
                <aside className="rounded-xl border-l-4 border-primary bg-muted/50 p-6 space-y-3">
                  <p className="flex items-center gap-2 font-semibold"><Lightbulb size={18} className="text-primary" /> {s.example.title}</p>
                  {s.example.text.map((t, i) => <p key={i} className="text-sm leading-relaxed text-muted-foreground"><RichText text={t} /></p>)}
                </aside>
              )}
            </section>
          ))}

          <section id="faq" className="mt-14 scroll-mt-28">
            <h2 className="text-2xl font-semibold mb-4">Häufige Fragen</h2>
            <div className="space-y-6">
              {a.faq.map((f) => (
                <div key={f.q} className="border-b border-border pb-5">
                  <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="leading-relaxed text-muted-foreground"><RichText text={f.a} /></p>
                </div>
              ))}
            </div>
          </section>

          <aside aria-label="Über die Autoren" className="mt-14 flex gap-4 rounded-2xl border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><PenLine size={22} /></div>
            <div>
              <p className="font-semibold">Rasolution Redaktion</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Die Fachredaktion von Rasolution schreibt über Fuhrparkmanagement, E-Mobilität und betriebliches Mobilitätsmanagement –
                auf Basis unserer Beratungspraxis mit Unternehmen aus dem Mittelstand. Alle Artikel werden regelmäßig auf den aktuellen
                Rechtsstand geprüft; sie ersetzen keine individuelle Rechts- oder Steuerberatung.
              </p>
            </div>
          </aside>

          <div className="mt-10 rounded-2xl border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold">Fragen zu Ihrem Fuhrpark?</h2>
            <p className="mt-2 text-muted-foreground">Wir beraten Sie zu Fuhrparkstrategie, Diensträdern und geprüften Refurbished E-Bikes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="hero"><Link to="/mobilitaetsmanagement">Zu den E-Bike-Angeboten</Link></Button>
              <Button asChild variant="outline"><Link to="/#contact">Kontakt aufnehmen</Link></Button>
            </div>
          </div>

          {related.length > 0 && (
            <nav aria-label="Passende Artikel" className="mt-14">
              <h2 className="text-lg font-semibold mb-4">Passend zum Thema</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/ratgeber/${o.slug}`} className="block h-full rounded-xl border p-4 transition-colors hover:border-primary">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{o.category}</span>
                      <span className="mt-1 block font-medium leading-snug">{o.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav aria-label="Weitere Artikel" className="mt-14">
            <h2 className="text-lg font-semibold mb-4">Weitere Artikel</h2>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}><Link to={`/ratgeber/${o.slug}`} className="text-primary hover:underline">{o.title}</Link></li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RatgeberArtikel;
