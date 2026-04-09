import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => (
  <div className="min-h-screen bg-white">
    <div className="container max-w-3xl py-16 px-6">
      <Button variant="ghost" asChild className="mb-8 text-gray-700">
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Zurück zur Startseite</Link>
      </Button>

      <h1 className="text-3xl font-bold mb-10 text-gray-900">Impressum</h1>

      <div className="space-y-8 text-gray-800 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Angaben gemäß § 5 TMG</h2>
          <p>
            Rasolution<br />
            Ralf Jörg Schmidt<br />
            In den Geißhecken 18<br />
            73614 Schorndorf
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Kontakt</h2>
          <p>
            Telefon: +49 15679 728933<br />
            E-Mail: info@rasolution.io
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Steuernummer</h2>
          <p>82326/42187</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE253577472
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Redaktionell verantwortlich</h2>
          <p>Ralf Jörg Schmidt</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Impressum;
