import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/ratgeber";

const Ratgeber = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
          <div className="container max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">Ratgeber</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "hsl(var(--hero-fg, 0 0% 100%))" }}>
              Fachwissen für Fuhrpark & Mobilität
            </h1>
            <p className="text-lg md:text-xl" style={{ color: "hsl(var(--hero-muted))" }}>
              Praxisnahe Artikel zu Steuern, Kosten, Nachhaltigkeit und Technik – für Fuhrparkverantwortliche, Personalabteilungen und Geschäftsführung.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="container max-w-5xl grid gap-6 md:grid-cols-2">
            {articles.map((a) => (
              <Card key={a.slug} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col gap-4 pt-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wider">{a.category}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {a.readMin} Min. Lesezeit</span>
                  </div>
                  <h2 className="text-xl font-semibold leading-snug">
                    <Link to={`/ratgeber/${a.slug}`} className="hover:text-primary transition-colors">{a.title}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground flex-1">{a.teaser}</p>
                  <Link to={`/ratgeber/${a.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    Artikel lesen <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ratgeber;
