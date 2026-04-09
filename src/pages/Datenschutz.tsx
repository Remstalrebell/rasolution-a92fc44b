import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => (
  <div className="min-h-screen bg-white">
    <div className="container max-w-3xl py-16 px-6">
      <Button variant="ghost" asChild className="mb-8 text-gray-700">
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Zurück zur Startseite</Link>
      </Button>

      <h1 className="text-3xl font-bold mb-10 text-gray-900">Datenschutzerklärung</h1>

      <div className="space-y-8 text-gray-800 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer nachfolgend aufgeführten Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Rasolution<br />
            Ralf Jörg Schmidt<br />
            In den Geißhecken 18<br />
            73614 Schorndorf<br /><br />
            Telefon: +49 15679 728933<br />
            E-Mail: info@rasolution.io
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Hosting</h2>
          <p>
            Diese Website wird bei <strong>Netlify, Inc.</strong> (44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA) gehostet. Netlify kann beim Aufruf dieser Website technische Daten wie Ihre IP-Adresse, den verwendeten Browser, die Uhrzeit des Zugriffs und die aufgerufene URL erfassen. Diese Daten werden zur Bereitstellung und Sicherung der Website verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify unter <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">netlify.com/privacy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Quellcodeverwaltung</h2>
          <p>
            Der Quellcode dieser Website wird über <strong>GitHub, Inc.</strong> (88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) verwaltet. GitHub verarbeitet dabei keine personenbezogenen Daten der Webseitenbesucher. Weitere Informationen finden Sie unter <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">GitHub Privacy Statement</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (Name, E-Mail-Adresse, Betreff, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Die Daten werden über einen <code>mailto:</code>-Link direkt an unser E-Mail-Postfach übermittelt. Es findet keine serverseitige Speicherung Ihrer Formulardaten statt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Cookies</h2>
          <p>
            Diese Website verwendet Cookies nur in technisch notwendigem Umfang (z. B. zur Speicherung von Einstellungen). Es werden keine Tracking- oder Werbe-Cookies eingesetzt. Sie können die Speicherung von Cookies in Ihren Browsereinstellungen deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden. Ferner steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">8. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Datenschutz;
