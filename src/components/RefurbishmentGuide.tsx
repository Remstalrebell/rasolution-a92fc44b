import { Lightbulb } from "lucide-react";

const Callout = ({ children }: { children: React.ReactNode }) => (
  <aside className="my-12 flex gap-4 rounded-xl border border-accent/30 bg-accent/10 p-5">
    <Lightbulb className="mt-0.5 shrink-0 text-accent" size={22} />
    <p className="text-sm leading-relaxed text-foreground">{children}</p>
  </aside>
);

const RefurbishmentGuide = () => (
  <section className="py-20">
    <article className="container max-w-[68ch] text-base leading-[1.8] text-foreground/90 [&_h2]:mb-6 [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      <h2>Professionelles E-Bike Refurbishment: Transparenz &amp; Qualität für Ihr Dienstfahrrad</h2>
      <p>
        Ein Leasingrückläufer ist kein „gebrauchtes Fahrrad" im klassischen Sinne. Die meisten Räder
        kommen nach 36 Monaten Nutzungsdauer aus regelmäßig gewarteten Dienstrad-Verträgen zurück und
        durchlaufen anschließend einen <strong>standardisierten, mehrstufigen Aufbereitungsprozess</strong>.
        Ziel ist ein Fahrrad, das technisch und optisch einem Neurad möglichst nahekommt – nachvollziehbar
        dokumentiert und mit Gewährleistung.
      </p>
      <h3>1. Sicht- und Rahmenprüfung</h3>
      <p>
        Zunächst wird der Rahmen gründlich gereinigt und auf Risse, Dellen und Verformungen untersucht.
        Ergänzend kommen <strong>Ultraschall- und Belastungstests</strong> zum Einsatz, um die strukturelle
        Unversehrtheit auch an nicht sichtbaren Stellen wie Schweißnähten und Tretlagergehäuse sicherzustellen.
      </p>
      <h3>2. Akkudiagnose &amp; Kapazitätsmessung</h3>
      <p>
        Über die Diagnosesoftware des Herstellers (z. B. Bosch oder Shimano) werden Ladezyklen, Fehlerspeicher
        und der <strong>State of Health (SoH)</strong> des Akkus ausgelesen. Nur Akkus mit
        <strong> mindestens 85 % Restkapazität</strong> verbleiben im Fahrrad – alle anderen werden ersetzt.
      </p>
      <h3>3. Komponententausch</h3>
      <ul>
        <li>Bremsbeläge und Bremsflüssigkeit</li>
        <li>Kette und Kassette</li>
        <li>Reifen</li>
        <li>Software-Updates für Motor und Display</li>
      </ul>
      <h3>4. Probefahrt &amp; Zertifizierung</h3>
      <p>
        Zum Abschluss folgt eine Probefahrt unter realen Bedingungen. Alle Messwerte werden
        <strong> protokolliert</strong>, sodass Sie jederzeit nachvollziehen können, in welchem Zustand Ihr
        Rad übergeben wurde.
      </p>

      <Callout>
        <strong>Wussten Sie schon?</strong> Ein refurbished E-Bike spart im Schnitt rund 150 kg CO₂ im
        Vergleich zum Neukauf.
      </Callout>

      <h2>Warum sich refurbished E-Bikes für Unternehmen und Privatpersonen lohnen</h2>
      <p>
        Refurbished E-Bikes verbinden Nachhaltigkeit mit wirtschaftlicher Vernunft. Wer sich für ein
        aufbereitetes Rad entscheidet, verlängert den Lebenszyklus eines hochwertigen Produkts und erhält
        gleichzeitig volle Funktionalität zu einem deutlich geringeren Preis.
      </p>
      <h3>Ökologischer Fußabdruck</h3>
      <p>
        Ein aufbereitetes E-Bike spart gegenüber einer Neuproduktion <strong>ca. 60–70 % CO₂</strong> ein.
        Der Grund: Die besonders energieintensive Herstellung von Rahmen und Akku entfällt vollständig. Für
        Unternehmen ist das ein messbarer Beitrag zur eigenen Klimabilanz.
      </p>
      <h3>Kostenvorteil</h3>
      <p>
        Die Preisersparnis liegt bei <strong>bis zu 40–50 % gegenüber der ursprünglichen UVP</strong> des
        Herstellers – bei voller Funktionalität und gesetzlicher Gewährleistung. So werden auch hochwertige
        Modelle mit starken Motoren und großen Akkus für Belegschaften und Privatkunden erschwinglich.
      </p>
      <ul>
        <li>Geprüfte Markenqualität statt Billigprodukt</li>
        <li>Transparente Dokumentation des Zustands</li>
        <li>Schnelle Verfügbarkeit ohne lange Lieferzeiten</li>
      </ul>

      <Callout>
        <strong>Praxis-Tipp:</strong> Auch refurbished E-Bikes lassen sich über ein Dienstrad-Leasing
        finanzieren – die Steuervorteile gelten genauso wie beim Neurad.
      </Callout>

      <h2>B2B-Fuhrparklösungen: Die 0,25%-Regelung einfach erklärt</h2>
      <p>
        Dienstrad-Leasing per <strong>Gehaltsumwandlung</strong> ist eines der attraktivsten Mobilitätsmodelle
        für Unternehmen. Der Arbeitgeber least das Rad und überlässt es den Beschäftigten, die monatliche Rate
        wird direkt vom Bruttogehalt einbehalten.
      </p>
      <h3>Vorteile für Arbeitnehmer</h3>
      <p>
        Durch die Verrechnung über das Bruttogehalt sinken Steuer- und Sozialabgaben. Gleichzeitig muss nur
        ein geringer geldwerter Vorteil versteuert werden: <strong>0,25 % des Bruttolistenpreises</strong>
        pro Monat. Im Vergleich zum Direktkauf sparen Beschäftigte dadurch je nach Steuerklasse deutlich.
      </p>
      <h3>Vorteile für Arbeitgeber</h3>
      <ul>
        <li><strong>Einsparung von Lohnnebenkosten</strong> durch die reduzierte Bemessungsgrundlage</li>
        <li><strong>Steigerung der Arbeitgeberattraktivität</strong> bei Recruiting und Mitarbeiterbindung</li>
        <li><strong>Beitrag zu ESG- und Nachhaltigkeitszielen</strong> durch emissionsarme Mobilität</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Hinweis: Diese Informationen ersetzen keine individuelle Steuerberatung.
      </p>
    </article>
  </section>
);

export default RefurbishmentGuide;
