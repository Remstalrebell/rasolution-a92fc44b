import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <div className="container max-w-3xl py-16 px-6">
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Zurück zur Startseite</Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-medium mb-1">Allgemeine Hinweise</h3>
          <p className="text-muted-foreground">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Verantwortliche Stelle</h2>
          <p className="text-muted-foreground">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Rasolution<br />
            Fuhrparkmanagement<br />
            Musterstraße 1<br />
            12345 Musterstadt<br /><br />
            Kontakt über das Formular auf der Website
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg font-medium mb-1">Cookies</h3>
          <p className="text-muted-foreground">
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Analyse-Tools und Werbung</h2>
          <p className="text-muted-foreground">
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Ihre Rechte</h2>
          <p className="text-muted-foreground">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Datenschutz;
