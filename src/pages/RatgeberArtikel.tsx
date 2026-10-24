import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, Lightbulb } from "lucide-react";
import { articles, getArticle } from "@/data/ratgeber";
import NotFound from "./NotFound";

const RatgeberArtikel = () => {
  const { slug = "" } = useParams();
  const a = getArticle(slug);
  useEffect(() => window.scrollTo(0, 0), [slug]);
  if (!a) return <NotFound />;
  const others = articles.filter((o) => o.slug !== a.slug);

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
          <p className="flex items-center gap-1 text-sm text-muted-foreground mb-10"><Clock size={14} /> {a.readMin} Min. Lesezeit · Rasolution Redaktion</p>

          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            {a.intro.map((t, i) => <p key={i}>{t}</p>)}
          </div>

          {a.sections.map((s) => (
            <section key={s.h2} className="mt-12 space-y-4">
              <h2 className="text-2xl font-semibold">{s.h2}</h2>
              {s.p?.map((t, i) => <p key={i} className="leading-relaxed text-muted-foreground">{t}</p>)}
              {s.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                  {s.list.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
              {s.sub?.map((sub) => (
                <div key={sub.h3} className="space-y-3 pt-2">
                  <h3 className="text-xl font-semibold">{sub.h3}</h3>
                  {sub.p.map((t, i) => <p key={i} className="leading-relaxed text-muted-foreground">{t}</p>)}
                </div>
              ))}
              {s.example && (
                <aside className="rounded-xl border-l-4 border-primary bg-muted/50 p-6 space-y-3">
                  <p className="flex items-center gap-2 font-semibold"><Lightbulb size={18} className="text-primary" /> {s.example.title}</p>
                  {s.example.text.map((t, i) => <p key={i} className="text-sm leading-relaxed text-muted-foreground">{t}</p>)}
                </aside>
              )}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-4">Häufige Fragen</h2>
            <Accordion type="single" collapsible>
              {a.faq.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <div className="mt-14 rounded-2xl border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold">Fragen zu Ihrem Fuhrpark?</h2>
            <p className="mt-2 text-muted-foreground">Wir beraten Sie zu Fuhrparkstrategie, Diensträdern und geprüften Refurbished E-Bikes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="hero"><Link to="/mobilitaetsmanagement">Zu den E-Bike-Angeboten</Link></Button>
              <Button asChild variant="outline"><Link to="/#contact">Kontakt aufnehmen</Link></Button>
            </div>
          </div>

          <nav className="mt-14">
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
