import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => (
  <div className="min-h-screen bg-background">
    <div className="container max-w-3xl py-16 px-6">
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Zurück zur Startseite</Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="text-muted-foreground">
            Rasolution – Fuhrparkmanagement<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="text-muted-foreground">
            Telefon: +49 (0) 123 456 789<br />
            E-Mail: info@rasolution.io
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p className="text-muted-foreground">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-muted-foreground">
            Rasolution<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
          <p className="text-muted-foreground">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Impressum;
