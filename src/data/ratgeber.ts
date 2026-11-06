/**
 * Text fields may contain inline links in the form [Linktext](/pfad) –
 * they are rendered as internal links (see RichText component).
 */
export type Section = {
  h2: string;
  p?: string[];
  list?: string[];
  sub?: { h3: string; p: string[] }[];
  /** Praxistabelle: rows must have the same number of cells as head */
  table?: { caption: string; head: string[]; rows: string[][] };
  example?: { title: string; text: string[] };
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  teaser: string;
  category: string;
  readMin: number;
  /** ISO date (YYYY-MM-DD) of the last editorial update */
  updated?: string;
  intro: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  /** Slugs of related articles shown below the text */
  related?: string[];
  /** Interactive tool embedded after the intro */
  tool?: "ersparnisrechner";
};

export const slugifyHeading = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const baseArticles: Article[] = [
  {
    slug: "dienstwagen-vs-dienstrad-steuervorteile",
    title: "Dienstwagen vs. Dienstrad: Die 0,25%-Regelung & Steuervorteile im Fuhrpark 2026",
    metaTitle: "Dienstwagen vs. Dienstrad: 0,25%-Regelung & Steuervorteile 2026 | Rasolution",
    description: "Wie Dienstwagen und Dienstrad steuerlich behandelt werden: 1%- und 0,25%-Regel, Gehaltsumwandlung, steuerfreie Überlassung und Rechenbeispiele für den Fuhrpark 2026.",
    teaser: "1%-Regel, 0,25%-Regel, Gehaltsumwandlung oder steuerfreie Überlassung – so vergleichen Sie Dienstwagen und Dienstrad sachlich und mit Zahlen.",
    category: "Steuern & Recht",
    readMin: 7,
    intro: [
      "Wer im Unternehmen über Mobilität entscheidet, steht 2026 selten vor der Frage „Auto oder Fahrrad?“. Gefragt ist ein Mix, der zu Arbeitswegen, Kundenterminen und Budget passt. Ein wichtiger Hebel ist dabei die steuerliche Behandlung: Dienstwagen und Dienstrad werden beide als geldwerter Vorteil versteuert, wenn sie auch privat genutzt werden dürfen – aber nach sehr unterschiedlichen Regeln.",
      "Dieser Ratgeber erklärt die Grundlagen verständlich, zeigt typische Rechenbeispiele und benennt die Punkte, die Fuhrparkverantwortliche vor der Einführung eines Dienstradprogramms klären sollten. Er ersetzt keine steuerliche Beratung, hilft aber dabei, die richtigen Fragen zu stellen.",
    ],
    sections: [
      {
        h2: "Grundprinzip: Der geldwerte Vorteil",
        p: [
          "Stellt ein Arbeitgeber ein Fahrzeug auch zur privaten Nutzung zur Verfügung, erhält der Mitarbeitende einen Sachbezug. Dieser Vorteil wird dem Bruttolohn hinzugerechnet und unterliegt der Lohnsteuer und in der Regel den Sozialabgaben. Statt jede private Fahrt aufzuzeichnen, erlaubt der Gesetzgeber eine pauschale Bewertung anhand des Bruttolistenpreises beziehungsweise der unverbindlichen Preisempfehlung (UVP).",
          "Genau an dieser Bemessungsgrundlage unterscheiden sich Dienstwagen und Dienstrad – und genau hier entstehen die Steuervorteile, die Dienstradprogramme so attraktiv machen.",
        ],
      },
      {
        h2: "Der Dienstwagen: 1%-Regel und Vergünstigungen für E-Autos",
        sub: [
          {
            h3: "Verbrenner und klassische Dienstwagen",
            p: [
              "Für einen Dienstwagen mit Verbrennungsmotor wird monatlich 1 Prozent des inländischen Bruttolistenpreises als geldwerter Vorteil angesetzt. Hinzu kommen 0,03 Prozent des Listenpreises je Entfernungskilometer zwischen Wohnung und erster Tätigkeitsstätte, sofern der Wagen auch für den Arbeitsweg genutzt wird. Alternativ ist die Fahrtenbuchmethode möglich, die allerdings lückenlos geführt werden muss.",
            ],
          },
          {
            h3: "Elektro- und Hybridfahrzeuge",
            p: [
              "Für reine Elektrofahrzeuge wird die Bemessungsgrundlage auf ein Viertel reduziert – faktisch gilt dann eine 0,25%-Regel, solange der Bruttolistenpreis unter der gesetzlichen Höchstgrenze liegt. Für ab Juli 2025 angeschaffte Fahrzeuge liegt diese Grenze bei 100.000 Euro. Teurere E-Autos und viele Plug-in-Hybride werden mit der halben Bemessungsgrundlage (0,5 %) bewertet. Die genauen Voraussetzungen hängen vom Anschaffungszeitpunkt und bei Hybriden von Reichweite oder CO₂-Ausstoß ab.",
            ],
          },
        ],
      },
      {
        h2: "Das Dienstrad: So funktioniert die 0,25%-Regelung",
        p: [
          "Für Fahrräder und Pedelecs bis 25 km/h, die einem Mitarbeitenden auch privat überlassen werden, gilt seit 2020 eine besonders günstige Bewertung: Angesetzt wird monatlich 1 Prozent eines Viertels der auf volle 100 Euro abgerundeten UVP. Das entspricht 0,25 Prozent der UVP. Diese Regelung ist derzeit bis Ende 2030 befristet.",
          "Wichtig ist die Unterscheidung zwischen zwei Modellen:",
        ],
        list: [
          "Gehaltsumwandlung: Die Leasingrate wird aus dem Bruttogehalt gezahlt. Der Mitarbeitende versteuert nur den geldwerten Vorteil nach der 0,25%-Regel und spart durch das geringere Bruttogehalt Steuern und Sozialabgaben.",
          "Zusätzlich zum Arbeitslohn: Übernimmt der Arbeitgeber die Rate zusätzlich zum ohnehin geschuldeten Gehalt, ist die Überlassung nach § 3 Nr. 37 EStG vollständig steuerfrei.",
          "S-Pedelecs (bis 45 km/h) gelten als Kraftfahrzeuge. Für sie gelten die Dienstwagenregeln, nicht die Fahrradregelung.",
        ],
        example: {
          title: "Rechenbeispiel: E-Bike mit 4.000 Euro UVP",
          text: [
            "Ein Mitarbeitender wählt ein Trekking-E-Bike mit einer UVP von 4.000 Euro. Der geldwerte Vorteil beträgt 1 % von 1.000 Euro, also 10 Euro im Monat. Bei Gehaltsumwandlung sinkt das Bruttogehalt um die Leasingrate inklusive Versicherung, gleichzeitig kommen 10 Euro Sachbezug hinzu.",
            "Je nach Steuerklasse, Gehalt und Leasingangebot liegt die Ersparnis gegenüber einem privaten Kauf häufig im Bereich von 20 bis 40 Prozent. Die genaue Höhe sollte immer mit dem Rechner des Leasinganbieters und den echten Gehaltsdaten ermittelt werden.",
          ],
        },
      },
      {
        h2: "Direkter Vergleich für den Fuhrpark",
        p: [
          "Ein Dienstwagen bleibt für Außendienst, Servicetechniker und lange Strecken oft unverzichtbar. Für Pendelwege bis etwa 15 Kilometer, innerstädtische Termine und den Weg zwischen Standorten ist das Dienstrad aber steuerlich wie wirtschaftlich häufig die bessere Wahl.",
        ],
        sub: [
          {
            h3: "Kosten für das Unternehmen",
            p: [
              "Ein Dienstwagen verursacht neben Leasing oder Abschreibung laufende Kosten für Energie, Versicherung, Wartung, Reifen und Parkfläche. Ein Dienstrad über Gehaltsumwandlung ist für den Arbeitgeber dagegen weitgehend kostenneutral; oft spart er sogar anteilige Sozialversicherungsbeiträge. Ein Zuschuss zur Leasingrate erhöht die Attraktivität zusätzlich.",
            ],
          },
          {
            h3: "Nutzen für Mitarbeitende und Klimabilanz",
            p: [
              "Das Dienstrad ist ein geschätzter Benefit, fördert Bewegung im Alltag und reduziert CO₂-Emissionen auf dem Arbeitsweg. Die Entfernungspauschale kann für die Strecke zur Arbeit weiterhin in der Einkommensteuererklärung angesetzt werden.",
            ],
          },
        ],
      },
      {
        h2: "Praxisbeispiel: Mischmodell in einem Mittelständler",
        p: [
          "Ein Handelsunternehmen mit 120 Mitarbeitenden und 25 Poolfahrzeugen stellt fest, dass mehrere Fahrzeuge vor allem für kurze Fahrten zwischen zwei Standorten im Abstand von sechs Kilometern genutzt werden. Statt zwei auslaufende Leasingverträge zu verlängern, führt das Unternehmen ein Dienstradprogramm ein und stellt zusätzlich drei Pool-E-Bikes für Fahrten zwischen den Standorten bereit.",
          "Das Ergebnis nach einem Jahr: geringere Fuhrparkkosten, weniger Parkplatzdruck und ein Benefit, den die Personalabteilung im Recruiting aktiv kommuniziert. Die Dienstwagen bleiben dort erhalten, wo sie wirklich gebraucht werden.",
        ],
      },
      {
        h2: "Checkliste vor der Einführung",
        list: [
          "Überlassungsvertrag und Nutzungsrichtlinie (Car- bzw. Bike-Policy) erstellen",
          "Leasingpartner und Versicherungspaket (Diebstahl, Schaden, Verschleiß) auswählen",
          "Lohnabrechnung und Betriebsrat frühzeitig einbinden",
          "Regelung für Ausscheiden, Elternzeit und längere Krankheit festlegen",
          "Entscheiden, ob neue oder geprüfte Refurbished-Räder angeboten werden",
        ],
      },
    ],
    faq: [
      { q: "Gilt die 0,25%-Regel auch für gebrauchte E-Bikes?", a: "Maßgeblich ist die UVP zum Zeitpunkt der Inverkehrbringung des Rades. Bei Leasing über die Gehaltsumwandlung richten sich die Details nach dem Angebot des Leasinganbieters; viele Programme lassen inzwischen auch hochwertige Refurbished-Modelle zu." },
      { q: "Können Mitarbeitende mehrere Dienstfahrräder nutzen?", a: "Grundsätzlich ja, jedes überlassene Rad wird dann separat mit dem geldwerten Vorteil bewertet. Viele Arbeitgeber begrenzen die Anzahl auf ein bis zwei Räder pro Person." },
      { q: "Was passiert am Ende der Leasinglaufzeit?", a: "Üblich sind Laufzeiten von 36 Monaten. Danach wird das Rad zurückgegeben oder – je nach Anbieter – zu einem Restwert übernommen. Die steuerlichen Folgen einer Übernahme sollten vorab geklärt werden." },
      { q: "Ersetzt dieser Ratgeber eine Steuerberatung?", a: "Nein. Die Angaben dienen der allgemeinen Information, Stand 2026. Für die konkrete Umsetzung empfehlen wir die Abstimmung mit Ihrer Steuerberatung und Ihrer Lohnbuchhaltung." },
    ],
  },
  {
    slug: "refurbished-ebikes-b2b-fuhrpark",
    title: "Refurbished E-Bikes im Unternehmen: Nachhaltigkeit, ESG-Kriterien & Kosteneffizienz",
    metaTitle: "Refurbished E-Bikes im Unternehmen: ESG & Kosteneffizienz | Rasolution",
    description: "Warum aufbereitete Leasingrückläufer für Unternehmensflotten sinnvoll sind: CO₂-Einsparung, ESG- und CSRD-Bezug, Qualitätsprozess, Kostenvorteile und Praxisbeispiel.",
    teaser: "Aufbereitete Leasingrückläufer sparen Ressourcen und Budget. So bewerten Sie Qualität, ESG-Wirkung und Wirtschaftlichkeit für Ihre Flotte.",
    category: "Nachhaltigkeit",
    readMin: 7,
    intro: [
      "Nachhaltigkeit ist für viele Unternehmen keine reine Imagefrage mehr. Kunden, Banken und Bewerber fragen nach messbaren Beiträgen zum Klimaschutz, und berichtspflichtige Unternehmen geben diese Erwartungen an ihre Lieferkette weiter. Gleichzeitig stehen Budgets unter Druck. Refurbished E-Bikes – professionell aufbereitete Leasingrückläufer – verbinden beide Ziele.",
      "In diesem Beitrag erfahren Sie, wie der Aufbereitungsprozess abläuft, welchen Beitrag gebrauchte E-Bikes zu ESG-Zielen leisten und wann sich der Einsatz in einer Unternehmensflotte wirtschaftlich lohnt.",
    ],
    sections: [
      {
        h2: "Was sind Refurbished E-Bikes?",
        p: [
          "Ein großer Teil hochwertiger E-Bikes wird heute über Dienstradprogramme geleast. Nach Ablauf der meist 36-monatigen Laufzeit kommen diese Räder zurück – häufig mit vergleichsweise geringer Laufleistung, regelmäßiger Wartung und lückenloser Versicherung während der Nutzung. Spezialisierte Aufbereiter aus unserem zertifizierten Refurbishment-Partnernetzwerk prüfen diese Räder, setzen sie instand und bringen sie mit Prüfprotokoll erneut in den Markt.",
          "Im Unterschied zum privaten Gebrauchtkauf ist der Zustand dokumentiert und nachvollziehbar. Sie erhalten geprüfte Qualität mit 12 Monaten gesetzlicher Händler-Gewährleistung auf geprüfte Gebrauchtware.",
        ],
      },
      {
        h2: "Der Aufbereitungsprozess Schritt für Schritt",
        list: [
          "Eingangsprüfung: Rahmen, Gabel und Anbauteile werden auf Schäden und Risse untersucht und dokumentiert.",
          "Diagnose der Elektronik: Motor, Display und Steuerung werden mit der Software des Herstellers ausgelesen, Fehlerspeicher geprüft und Updates eingespielt.",
          "Akkutest: Die verbleibende Kapazität (State of Health) wird gemessen. Akkus mit zu geringer Restkapazität werden ersetzt.",
          "Verschleißteile: Kette, Ritzel, Bremsbeläge, Reifen und Züge werden nach Bedarf getauscht.",
          "Einstellung und Probefahrt: Schaltung und Bremsen werden justiert, das Rad wird auf einer Testfahrt geprüft.",
          "Endkontrolle und Freigabe: Erst mit bestandenem Prüfprotokoll geht das Rad in den Verkauf.",
        ],
      },
      {
        h2: "Nachhaltigkeit und ESG: Was gebrauchte E-Bikes leisten",
        sub: [
          {
            h3: "CO₂-Fußabdruck der Herstellung",
            p: [
              "Die Herstellung eines E-Bikes verursacht je nach Modell und Akkugröße grob 100 bis 200 Kilogramm CO₂-Äquivalente. Den größten Anteil haben Rahmen, Akku und Motor. Wird ein bestehendes Rad weiter genutzt, entfällt dieser Herstellungsaufwand für ein neues Rad weitgehend – nur die ersetzten Verschleißteile fallen ins Gewicht.",
            ],
          },
          {
            h3: "Bezug zu ESG und Nachhaltigkeitsberichten",
            p: [
              "In der Nachhaltigkeitsberichterstattung spielen Arbeitswege der Mitarbeitenden als Teil der Scope-3-Emissionen eine Rolle, ebenso Themen der Kreislaufwirtschaft. Ein Dienstrad- oder Poolrad-Programm mit Refurbished-Modellen liefert hier gleich zwei Argumente: weniger Pkw-Kilometer auf dem Arbeitsweg und eine verlängerte Nutzungsdauer vorhandener Produkte.",
              "Für die Dokumentation empfiehlt es sich, Anzahl der Räder, geschätzte Pendelkilometer und die Herkunft der Räder strukturiert zu erfassen. So lassen sich die Effekte im Bericht nachvollziehbar darstellen.",
            ],
          },
          {
            h3: "Soziale Komponente",
            p: [
              "ESG umfasst auch das „S“: Gesundheit und Zufriedenheit der Mitarbeitenden. Regelmäßige Bewegung auf dem Arbeitsweg wirkt sich positiv auf das Wohlbefinden aus, und ein Dienstrad wird von vielen Beschäftigten als attraktiver Benefit wahrgenommen.",
            ],
          },
        ],
      },
      {
        h2: "Kosteneffizienz: Wo der Vorteil entsteht",
        p: [
          "Refurbished E-Bikes werden in der Regel 30 bis 45 Prozent unter der ursprünglichen UVP angeboten. Für Unternehmen, die Poolräder kaufen, sinkt damit direkt der Investitionsbedarf. Bei Dienstradprogrammen sinkt die Leasingrate, was die Hürde für Mitarbeitende senkt und die Teilnahmequote erhöht.",
          "Moderne Mittelmotoren sind auf hohe Laufleistungen ausgelegt, und ein geprüfter Akku mit hoher Restkapazität bietet für typische Pendelstrecken mehr als genug Reichweite. Der Leistungsunterschied zum Neurad ist im Alltag daher meist gering, der Preisunterschied dagegen deutlich.",
        ],
      },
      {
        h2: "Praxisbeispiel: Poolräder für einen Werksstandort",
        example: {
          title: "Werksgelände mit drei Hallen",
          text: [
            "Ein produzierendes Unternehmen nutzt auf einem weitläufigen Werksgelände bisher zwei Elektro-Kleinfahrzeuge für Wege zwischen Verwaltung, Lager und Produktion. Ergänzend werden sechs Refurbished Trekking-E-Bikes mit Gepäckträger angeschafft. Durch den Preisvorteil gegenüber Neurädern konnten zwei zusätzliche Räder für dasselbe Budget beschafft werden.",
            "Die Räder werden zentral geladen, quartalsweise gewartet und über eine einfache Buchungsliste vergeben. Die Kleinfahrzeuge stehen seither für Transporte zur Verfügung, für die sie tatsächlich gebraucht werden.",
          ],
        },
      },
      {
        h2: "Worauf Unternehmen beim Einkauf achten sollten",
        list: [
          "Prüfprotokoll und dokumentierte Akku-Restkapazität anfordern",
          "Gewährleistungsbedingungen schriftlich festhalten",
          "Rahmengrößen passend zu den Nutzenden auswählen",
          "Wartungsintervalle und einen regionalen Servicepartner einplanen",
          "Versicherung gegen Diebstahl und Beschädigung abschließen",
        ],
      },
    ],
    faq: [
      { q: "Sind Refurbished E-Bikes genauso sicher wie neue Räder?", a: "Wenn sie professionell aufbereitet und geprüft wurden, ja. Entscheidend sind die dokumentierte Prüfung von Rahmen, Bremsen und Elektronik sowie der Austausch verschlissener Teile." },
      { q: "Wie alt sind die Räder typischerweise?", a: "Die meisten Leasingrückläufer sind etwa drei Jahre alt, da Dienstrad-Leasingverträge üblicherweise 36 Monate laufen." },
      { q: "Können Refurbished E-Bikes im Dienstrad-Leasing genutzt werden?", a: "Ja, viele Leasinganbieter akzeptieren inzwischen auch gebrauchte Räder von zertifizierten Händlern. Wir klären das gern für Ihr konkretes Programm." },
      { q: "Wie viele Räder kann Rasolution liefern?", a: "Über unser zertifiziertes Refurbishment-Partnernetzwerk haben wir Zugriff auf einen Bestand von mehr als 1.200 geprüften E-Bikes. So sind auch einheitliche Modelle für ganze Teams möglich." },
    ],
  },
  {
    slug: "fuhrparkmanagement-kosten-senken-tco",
    title: "Modernes Fuhrparkmanagement: 7 Strategien zur Senkung der Total Cost of Ownership (TCO)",
    metaTitle: "Fuhrparkmanagement: 7 Strategien zur Senkung der TCO | Rasolution",
    description: "Total Cost of Ownership im Fuhrpark verstehen und senken: Datenbasis, Car-Policy, Auslastung, Elektrifizierung, Schadenmanagement, Fahrerverhalten und Dienstrad als Ergänzung.",
    teaser: "Der Kaufpreis ist nur ein Teil der Rechnung. Mit diesen sieben Strategien senken Sie die Gesamtkosten Ihrer Flotte nachhaltig.",
    category: "Fuhrparkmanagement",
    readMin: 8,
    intro: [
      "Wer Fuhrparkkosten senken will, schaut oft zuerst auf Leasingraten und Rabatte. Die tatsächlichen Kosten eines Fahrzeugs entstehen aber über die gesamte Nutzungsdauer – durch Wertverlust, Energie, Wartung, Versicherung, Schäden und Verwaltung. Dieses Gesamtbild nennt man Total Cost of Ownership, kurz TCO.",
      "Die folgenden sieben Strategien haben sich in der Praxis bewährt. Sie lassen sich in Flotten jeder Größe anwenden und bauen aufeinander auf.",
    ],
    sections: [
      {
        h2: "Was gehört zur Total Cost of Ownership?",
        p: [
          "Zur TCO zählen alle Kosten, die ein Fahrzeug vom Kauf oder Leasingbeginn bis zur Rückgabe oder zum Verkauf verursacht. Dazu gehören Wertverlust beziehungsweise Leasingrate, Kraftstoff oder Strom, Wartung und Reifen, Versicherung, Kfz-Steuer, Schäden, Ausfallzeiten sowie interne Verwaltungskosten. Der Wertverlust ist dabei oft der größte Einzelposten, während Verwaltungskosten häufig unterschätzt werden.",
        ],
      },
      {
        h2: "Strategie 1: Eine saubere Datenbasis schaffen",
        p: [
          "Ohne verlässliche Zahlen bleibt jede Optimierung ein Bauchgefühl. Erfassen Sie für jedes Fahrzeug Laufleistung, Energieverbrauch, Werkstattkosten, Schäden und Standzeiten an einer zentralen Stelle. Schon eine strukturierte Auswertung über zwölf Monate zeigt meist, welche Fahrzeuge oder Fahrzeugklassen überdurchschnittlich teuer sind.",
        ],
      },
      {
        h2: "Strategie 2: Eine klare Car-Policy formulieren",
        p: [
          "Die Car-Policy legt fest, wer welches Fahrzeug erhält, welche Ausstattung zulässig ist und welche Regeln für Tanken, Laden und Privatnutzung gelten. Eine gut gemachte Policy begrenzt Sonderwünsche, die den Wiederverkaufswert kaum steigern, und schafft Transparenz für Mitarbeitende. Sie sollte regelmäßig überprüft und um Alternativen wie Dienstrad oder Mobilitätsbudget ergänzt werden.",
        ],
      },
      {
        h2: "Strategie 3: Auslastung erhöhen und Pools bilden",
        p: [
          "Viele Fahrzeuge stehen den größten Teil des Tages still. Wenn persönliche Fahrzeuge selten genutzt werden, kann ein gemeinsam gebuchter Pool die Anzahl der benötigten Fahrzeuge reduzieren. Eine digitale Buchung macht sichtbar, wann wirklich Bedarf besteht.",
        ],
        example: {
          title: "Rechenbeispiel Poolbildung",
          text: [
            "Ein Standort hält zehn Poolfahrzeuge vor. Die Auswertung zeigt, dass gleichzeitig nie mehr als sieben Fahrzeuge unterwegs sind. Werden drei Leasingverträge zum Laufzeitende nicht verlängert, entfallen deren komplette Kosten für Rate, Versicherung, Wartung und Stellplatz – ohne Einschränkung im Alltag.",
          ],
        },
      },
      {
        h2: "Strategie 4: Elektrifizierung mit Augenmaß",
        p: [
          "Elektrofahrzeuge haben häufig höhere Anschaffungskosten, aber niedrigere Energie- und Wartungskosten sowie steuerliche Vorteile bei der Dienstwagenbesteuerung. Ob sich der Umstieg rechnet, hängt vom Fahrprofil ab: Fahrzeuge mit planbaren Tagesstrecken und Lademöglichkeit am Standort oder zu Hause sind die besten Kandidaten.",
          "Berücksichtigen Sie in der Rechnung auch Ladeinfrastruktur, Stromtarife und mögliche Erlöse aus der THG-Quote. Eine Umstellung in Wellen, beginnend mit den am besten geeigneten Fahrzeugen, reduziert das Risiko.",
        ],
      },
      {
        h2: "Strategie 5: Schadenmanagement professionalisieren",
        p: [
          "Schäden verursachen nicht nur Reparaturkosten, sondern auch Ausfallzeiten, höhere Versicherungsprämien und Abschläge bei der Leasingrückgabe. Ein klarer Prozess für die Schadenmeldung, feste Partnerwerkstätten und eine Auswertung der Schadenhäufigkeit nach Fahrzeug und Fahrer helfen, Kosten zu senken. Vor der Leasingrückgabe lohnt sich eine eigene Begutachtung, um überhöhte Nachforderungen zu vermeiden.",
        ],
      },
      {
        h2: "Strategie 6: Fahrerverhalten positiv beeinflussen",
        p: [
          "Vorausschauendes Fahren senkt Verbrauch, Verschleiß und Unfallrisiko. Fahrsicherheitstrainings, transparente Verbrauchsauswertungen und kleine Anreize wirken oft stärker als Vorgaben. Telematik kann unterstützen, sollte aber datenschutzkonform und mit Einbindung des Betriebsrats eingeführt werden.",
        ],
      },
      {
        h2: "Strategie 7: Mobilität ganzheitlich denken",
        p: [
          "Nicht jede Fahrt braucht ein Auto. Dienst- und Poolräder, ÖPNV-Tickets oder ein Mobilitätsbudget können Fahrzeuge auf kurzen Strecken ersetzen. Gerade geprüfte Refurbished E-Bikes bieten einen günstigen Einstieg. So sinken nicht nur die Fuhrparkkosten, sondern auch der Bedarf an Parkfläche und die CO₂-Emissionen.",
        ],
      },
      {
        h2: "Praxisbeispiel: TCO-Analyse in drei Schritten",
        sub: [
          {
            h3: "Bestandsaufnahme",
            p: ["Ein Dienstleister mit 40 Fahrzeugen erfasst zunächst sämtliche Kosten der letzten zwölf Monate je Fahrzeug. Dabei fallen mehrere Fahrzeuge mit sehr geringer Laufleistung und hohen Schadenkosten auf."],
          },
          {
            h3: "Maßnahmenplan",
            p: ["Auf Basis der Daten werden Pools gebildet, die Car-Policy überarbeitet und für Fahrzeuge mit passendem Fahrprofil ein Umstieg auf Elektro geplant. Zusätzlich wird ein Dienstradprogramm eingeführt."],
          },
          {
            h3: "Kontrolle",
            p: ["Quartalsweise wird geprüft, ob die Maßnahmen wirken. Wichtige Kennzahlen sind Kosten pro Kilometer, Auslastung, Schadenquote und Anzahl der Fahrzeuge pro Mitarbeitendem."],
          },
        ],
      },
    ],
    faq: [
      { q: "Ab welcher Flottengröße lohnt sich eine TCO-Analyse?", a: "Schon ab etwa zehn Fahrzeugen ergeben sich meist sichtbare Einsparpotenziale. Bei größeren Flotten ist eine regelmäßige TCO-Betrachtung unverzichtbar." },
      { q: "Ist Leasing immer günstiger als Kauf?", a: "Nein. Leasing schont die Liquidität und erleichtert die Planung, Kauf kann bei langer Haltedauer und hoher Auslastung günstiger sein. Entscheidend ist der Vergleich der Gesamtkosten über die geplante Nutzungsdauer." },
      { q: "Welche Kennzahlen sollte ich regelmäßig prüfen?", a: "Bewährt haben sich Kosten pro Kilometer, Auslastung der Poolfahrzeuge, Schadenquote, Energieverbrauch und Standzeiten in der Werkstatt." },
      { q: "Wie unterstützt Rasolution bei der Umsetzung?", a: "Wir analysieren Ihre Flotte, entwickeln eine passende Strategie und begleiten die Umsetzung – von der Car-Policy bis zur Integration von Diensträdern." },
    ],
  },
  {
    slug: "ebike-akku-lebensdauer-pflege-flotte",
    title: "E-Bike Akku-Guide: State of Health (SoH), Lebensdauer & Pflege im Flottenalltag",
    metaTitle: "E-Bike Akku: State of Health, Lebensdauer & Pflege in der Flotte | Rasolution",
    description: "Was der State of Health eines E-Bike-Akkus aussagt, wie lange Akkus halten und wie Sie Akkus in Unternehmensflotten richtig laden, lagern und prüfen.",
    teaser: "Der Akku ist das teuerste Bauteil eines E-Bikes. So erkennen Sie seinen Zustand und verlängern seine Lebensdauer im Flottenbetrieb.",
    category: "Technik & Wartung",
    readMin: 7,
    intro: [
      "Der Akku entscheidet über Reichweite, Zuverlässigkeit und einen großen Teil des Werts eines E-Bikes. Ein Ersatzakku kostet je nach Hersteller und Kapazität häufig mehrere hundert Euro. Für Unternehmen mit Pool- oder Diensträdern lohnt es sich daher, den Zustand der Akkus zu kennen und sie richtig zu behandeln.",
      "Dieser Guide erklärt den Begriff State of Health, typische Lebensdauern und konkrete Pflegeregeln, die sich im Flottenalltag einfach umsetzen lassen.",
    ],
    sections: [
      {
        h2: "Was bedeutet State of Health (SoH)?",
        p: [
          "Der State of Health beschreibt, wie viel der ursprünglichen Kapazität ein Akku noch speichern kann. Ein neuer Akku mit 625 Wattstunden hat einen SoH von 100 Prozent. Kann er nach einigen Jahren nur noch 530 Wattstunden speichern, liegt der SoH bei etwa 85 Prozent. Die Reichweite sinkt entsprechend, das Rad bleibt aber voll nutzbar.",
          "Nicht zu verwechseln ist der SoH mit dem State of Charge (SoC), also dem aktuellen Ladestand. Der SoC zeigt, wie voll der Akku gerade ist, der SoH, wie groß der „Tank“ insgesamt noch ist.",
        ],
        sub: [
          {
            h3: "Wie wird der SoH gemessen?",
            p: [
              "Fachwerkstätten lesen den Akku mit der Diagnosesoftware des jeweiligen Systemherstellers aus. Dabei werden Ladezyklen, Fehlerspeicher und die verbleibende Kapazität ermittelt. Bei professionell aufbereiteten Leasingrückläufern gehört diese Messung zum Prüfprotokoll.",
            ],
          },
        ],
      },
      {
        h2: "Wie lange hält ein E-Bike-Akku?",
        p: [
          "Moderne Lithium-Ionen-Akkus sind je nach Hersteller und Nutzung für mehrere hundert bis rund tausend volle Ladezyklen ausgelegt. Ein Vollzyklus entspricht dabei einer kompletten Ladung von 0 auf 100 Prozent; zwei Ladungen von 50 Prozent zählen zusammen als ein Zyklus.",
          "Bei typischer Pendelnutzung mit einigen tausend Kilometern pro Jahr bedeutet das eine Lebensdauer von vielen Jahren. Neben den Zyklen spielt auch das kalendarische Altern eine Rolle: Hitze, dauerhaft voller Ladezustand und lange Lagerung im leeren Zustand beschleunigen den Kapazitätsverlust.",
        ],
      },
      {
        h2: "Die wichtigsten Pflegeregeln",
        sub: [
          {
            h3: "Richtig laden",
            p: [
              "Laden Sie nur mit dem Original-Ladegerät und bei Raumtemperatur. Nach kalten Fahrten im Winter sollte der Akku sich vor dem Laden erst aufwärmen. Ein Akku muss nicht nach jeder Fahrt voll geladen werden; ein mittlerer Ladebereich ist für die Lebensdauer schonender als ständiges Laden auf 100 Prozent.",
            ],
          },
          {
            h3: "Richtig lagern",
            p: [
              "Für längere Pausen, etwa im Winter, empfiehlt sich ein Ladestand von etwa 30 bis 60 Prozent und eine trockene, kühle Umgebung ohne Frost. Akkus sollten nicht wochenlang vollständig entladen liegen, da eine Tiefentladung die Zellen dauerhaft schädigen kann. Prüfen Sie den Ladestand bei langer Lagerung alle paar Wochen.",
            ],
          },
          {
            h3: "Hitze und Schäden vermeiden",
            p: [
              "Direkte Sonne im Sommer, das Abstellen im heißen Auto oder Stürze können dem Akku schaden. Ein äußerlich beschädigter Akku sollte nicht mehr geladen, sondern von einer Fachwerkstatt geprüft werden.",
            ],
          },
        ],
      },
      {
        h2: "Akkumanagement im Flottenalltag",
        p: [
          "In Unternehmensflotten werden Akkus oft von wechselnden Personen genutzt. Damit die Pflegeregeln eingehalten werden, braucht es einfache, klare Prozesse.",
        ],
        list: [
          "Fester Ladeort mit Rauchmelder, ausreichend Abstand zu brennbaren Materialien und nicht in Flucht- und Rettungswegen",
          "Kurze Einweisung für alle Nutzenden zum Laden und Abstellen",
          "Akkus mit Nummern versehen, um Zustand und Nutzung zuordnen zu können",
          "SoH bei der jährlichen Inspektion auslesen und dokumentieren",
          "Grenzwert festlegen, ab dem ein Akku ersetzt oder für kürzere Strecken eingeplant wird",
        ],
      },
      {
        h2: "Praxisbeispiel: Akku-Rotation in einem Poolrad-System",
        example: {
          title: "Zwölf Poolräder, unterschiedliche Strecken",
          text: [
            "Ein Unternehmen betreibt zwölf Poolräder für Kundentermine in der Stadt. Bei der jährlichen Inspektion zeigt sich, dass drei Akkus nur noch einen SoH von unter 75 Prozent haben, während die übrigen über 90 Prozent liegen.",
            "Statt sofort neue Akkus zu kaufen, werden die drei Räder für kurze Wege innerhalb der Innenstadt eingeplant, die Räder mit den besten Akkus für längere Strecken. Erst wenn die Reichweite auch dafür nicht mehr genügt, werden die Akkus ersetzt. So werden die Investitionen über mehrere Jahre verteilt.",
          ],
        },
      },
      {
        h2: "Was der SoH beim Kauf gebrauchter E-Bikes bedeutet",
        p: [
          "Beim Kauf eines Refurbished E-Bikes ist der dokumentierte Akkuzustand eines der wichtigsten Kriterien. Ein seriöser Anbieter misst die Restkapazität und tauscht Akkus mit zu geringem SoH aus. Achten Sie zusätzlich auf eine klar geregelte Händler-Gewährleistung – bei Rädern aus unserem zertifizierten Refurbishment-Partnernetzwerk gelten 12 Monate gesetzliche Gewährleistung auf geprüfte Gebrauchtware.",
        ],
      },
    ],
    faq: [
      { q: "Ab welchem SoH sollte ein Akku ersetzt werden?", a: "Eine feste Grenze gibt es nicht. Entscheidend ist, ob die verbleibende Reichweite für die geplanten Strecken ausreicht. Viele Flottenbetreiber planen den Tausch, wenn die Reichweite im Alltag spürbar nicht mehr genügt." },
      { q: "Schadet es dem Akku, ihn über Nacht zu laden?", a: "Moderne Ladegeräte schalten bei voller Ladung ab. Aus Sicherheitsgründen sollte aber an einem geeigneten Ort mit Rauchmelder geladen werden; dauerhaft voller Ladezustand ist zudem nicht ideal für die Lebensdauer." },
      { q: "Kann man die Kapazität eines Akkus wiederherstellen?", a: "Nein, verlorene Kapazität lässt sich nicht zurückgewinnen. Einige Fachbetriebe bieten jedoch das Neubestücken mit neuen Zellen an; ob das sinnvoll ist, hängt vom Hersteller und von der Garantie ab." },
      { q: "Wie entsorge ich alte Akkus richtig?", a: "Akkus gehören nicht in den Hausmüll. Händler und Wertstoffhöfe nehmen sie zurück und führen sie dem Recycling zu." },
    ],
  },
];

const newArticles: Article[] = [
  {
    slug: "fuhrpark-tco-senken-massnahmenplan",
    title: "Fuhrpark-TCO senken: Ein Maßnahmenplan in 7 Schritten",
    metaTitle: "Fuhrpark-TCO senken: Maßnahmenplan in 7 Schritten | Rasolution",
    description: "So senken Unternehmen die Gesamtbetriebskosten ihres Fuhrparks: Datenbasis schaffen, Auslastung prüfen, Beschaffung, Energie, Wartung, Schäden und Verwaltung optimieren.",
    teaser: "Von der Datenbasis bis zur Schadenquote: sieben konkrete Schritte, mit denen Fuhrparkverantwortliche die Total Cost of Ownership spürbar reduzieren.",
    category: "Kosten & Strategie",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Die Kosten eines Fuhrparks bestehen nur zu einem Teil aus Leasingrate oder Kaufpreis. Energie, Wartung, Reifen, Versicherung, Schäden, Steuern und der interne Verwaltungsaufwand summieren sich über die Nutzungsdauer oft auf mehr als das Doppelte der reinen Fahrzeugkosten. Wer die Total Cost of Ownership (TCO) senken will, muss deshalb das gesamte System betrachten.",
      "Die Grundlagen der TCO-Rechnung erklärt unser Artikel [Fuhrparkmanagement: Kosten senken mit TCO](/ratgeber/fuhrparkmanagement-kosten-senken-tco). Dieser Beitrag ist der praktische Folgeschritt: ein Maßnahmenplan, den Sie Schritt für Schritt im eigenen Unternehmen umsetzen können.",
    ],
    sections: [
      {
        h2: "Schritt 1: Eine belastbare Datenbasis schaffen",
        p: [
          "Ohne Zahlen keine Steuerung. In vielen mittelständischen Unternehmen liegen Fuhrparkdaten verteilt in Leasingverträgen, Tankkartenabrechnungen, Werkstattrechnungen und Excel-Listen. Der erste Schritt ist, diese Daten pro Fahrzeug zusammenzuführen: Anschaffung oder Leasingrate, Kilometerstand, Energie- und Kraftstoffkosten, Wartung, Reifen, Versicherung, Schäden und Standzeiten.",
          "Ein einfaches Fuhrpark-Dashboard reicht für den Anfang. Wichtig ist, dass die Daten monatlich aktualisiert werden und Kosten pro Kilometer sowie pro Fahrzeug und Monat sichtbar sind. Erst dann lassen sich Ausreißer erkennen.",
        ],
      },
      {
        h2: "Schritt 2: Auslastung prüfen und Flotte richtig dimensionieren",
        p: [
          "Fahrzeuge, die selten bewegt werden, verursachen trotzdem fast die vollen Fixkosten. Eine Auslastungsanalyse zeigt, welche Fahrzeuge unter einer sinnvollen Jahresfahrleistung bleiben. Häufig lassen sich einzelne personenbezogene Fahrzeuge durch [Poolfahrzeuge](/ratgeber/poolfahrzeuge-effizient-verwalten), Carsharing oder Diensträder ersetzen.",
        ],
        list: [
          "Fahrzeuge mit sehr niedriger Jahresfahrleistung identifizieren",
          "Fahrtzwecke analysieren: Kundentermine, Pendeln, Transport, Kurzstrecke",
          "Kurzstrecken unter zehn Kilometern als Potenzial für E-Bikes markieren",
          "Ersatzbeschaffung erst nach Bedarfsprüfung freigeben",
        ],
      },
      {
        h2: "Schritt 3: Beschaffung und Car Policy optimieren",
        p: [
          "Die Car Policy legt fest, welche Fahrzeuge in welcher Ausstattung bestellt werden dürfen. Eine moderne Policy orientiert sich an TCO statt am Listenpreis: Ein etwas teureres Elektrofahrzeug kann über die Laufzeit günstiger sein als ein Verbrenner, wenn Energie-, Wartungs- und Steuerkosten einbezogen werden.",
          "Auch die Laufzeit und Kilometerleistung von Leasingverträgen sind Stellschrauben. Zu niedrig angesetzte Kilometer führen zu Mehrkilometerkosten, zu hoch angesetzte zu unnötig hohen Raten. Ein jährlicher Abgleich zwischen Vertrag und tatsächlicher Fahrleistung lohnt sich fast immer.",
        ],
      },
      {
        h2: "Schritt 4: Energie- und Kraftstoffkosten senken",
        p: [
          "Energie ist einer der größten variablen Kostenblöcke. Bei Elektrofahrzeugen macht es einen großen Unterschied, ob am Firmenstandort, zu Hause oder an öffentlichen Schnellladern geladen wird. Eine eigene [Ladeinfrastruktur](/ratgeber/ladeinfrastruktur-im-unternehmen) mit gesteuertem Laden senkt die Kosten pro Kilowattstunde deutlich.",
          "Bei Verbrennern helfen Tankkarten mit Rabatten, Auswertungen auffälliger Tankvorgänge und Fahrertrainings. Eine vorausschauende Fahrweise kann den Verbrauch messbar reduzieren und verringert gleichzeitig den Verschleiß.",
        ],
      },
      {
        h2: "Schritt 5: Wartung, Reifen und Prüfungen bündeln",
        p: [
          "Ungeplante Werkstattaufenthalte kosten doppelt: die Reparatur selbst und die Ausfallzeit. Feste Wartungsintervalle, gebündelte Reifenwechsel und Rahmenverträge mit Werkstätten schaffen Planbarkeit. Auch gesetzliche Pflichten wie die [UVV-Prüfung](/ratgeber/uvv-pruefung-dienstraeder-pkw) sollten zentral terminiert werden.",
        ],
      },
      {
        h2: "Schritt 6: Schäden und Versicherung aktiv managen",
        p: [
          "Die Schadenquote beeinflusst direkt die Versicherungsprämie. Ein strukturiertes Schadenmanagement erfasst jeden Schaden, analysiert Ursachen und leitet Maßnahmen ab, etwa Fahrsicherheitstrainings für bestimmte Fahrergruppen. Klare Regeln zur Schadensmeldung und eine faire Selbstbeteiligung sensibilisieren die Nutzenden.",
        ],
      },
      {
        h2: "Schritt 7: Verwaltung digitalisieren",
        p: [
          "Führerscheinkontrolle, Fahrzeugübergaben, Fahrtenbücher und Rechnungsprüfung binden viel Arbeitszeit. Digitale Lösungen automatisieren diese Prozesse und reduzieren Fehler. Der Verwaltungsaufwand wird in TCO-Rechnungen häufig vergessen, obwohl er pro Fahrzeug einen spürbaren Anteil ausmacht.",
        ],
        table: {
          caption: "Typische Hebel und ihre Wirkung",
          head: ["Maßnahme", "Kostenblock", "Aufwand"],
          rows: [
            ["Flotte verkleinern / Pool bilden", "Fixkosten", "mittel"],
            ["Leasingkilometer anpassen", "Leasing", "gering"],
            ["Laden am Standort", "Energie", "mittel bis hoch"],
            ["Wartung bündeln", "Wartung", "gering"],
            ["Schadenmanagement", "Versicherung", "mittel"],
            ["Digitale Verwaltung", "Verwaltung", "mittel"],
          ],
        },
      },
      {
        h2: "Praxisbeispiel: 40 Fahrzeuge im Vertrieb",
        example: {
          title: "Mittelständischer Großhändler",
          text: [
            "Ein Großhändler mit 40 Vertriebsfahrzeugen führt die Daten aus Leasing, Tankkarte und Werkstatt in einer Übersicht zusammen. Dabei zeigt sich, dass sechs Fahrzeuge weniger als 8.000 Kilometer im Jahr fahren und mehrere Leasingverträge deutlich zu hohe Kilometer enthalten.",
            "Die sechs Fahrzeuge werden durch drei Poolfahrzeuge und vier Diensträder ersetzt, die Verträge bei der nächsten Gelegenheit angepasst. Zusammen mit gebündelter Wartung sinken die laufenden Kosten spürbar – ohne dass die Erreichbarkeit der Kunden leidet.",
          ],
        },
      },
    ],
    faq: [
      { q: "Wie schnell lassen sich TCO-Einsparungen erzielen?", a: "Einige Hebel wie die Anpassung von Leasingkilometern oder gebündelte Wartung wirken innerhalb weniger Monate. Strukturelle Änderungen wie die Umstellung auf Elektrofahrzeuge zeigen ihre Wirkung über die Vertragslaufzeit." },
      { q: "Brauche ich dafür eine Fuhrparksoftware?", a: "Für kleine Flotten reicht anfangs eine gut gepflegte Tabelle. Ab etwa 20 bis 30 Fahrzeugen lohnt sich meist eine spezialisierte Lösung, weil der manuelle Aufwand sonst stark steigt." },
      { q: "Welche Kennzahl ist am wichtigsten?", a: "Die Kosten pro Kilometer und die Kosten pro Fahrzeug und Monat sind die aussagekräftigsten Kennzahlen, weil sie alle Kostenblöcke vergleichbar machen." },
    ],
    related: ["fuhrparkmanagement-kosten-senken-tco", "poolfahrzeuge-effizient-verwalten"],
  },
  {
    slug: "csrd-scope-3-fuhrpark",
    title: "CSRD & Scope-3-Emissionen im Fuhrpark: Was Unternehmen jetzt wissen müssen",
    metaTitle: "CSRD & Scope-3 im Fuhrpark: Leitfaden für Unternehmen | Rasolution",
    description: "Wie Fuhrpark und Mitarbeitermobilität in die Nachhaltigkeitsberichterstattung nach CSRD einfließen: Scope 1, 2 und 3, Datenerhebung, Pendelverkehr und Maßnahmen.",
    teaser: "Fuhrpark und Pendelwege sind ein wesentlicher Teil der CO₂-Bilanz. So ordnen Sie Emissionen richtig zu und erheben belastbare Daten für den Nachhaltigkeitsbericht.",
    category: "Nachhaltigkeit & ESG",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Mit der europäischen Corporate Sustainability Reporting Directive (CSRD) wird Nachhaltigkeitsberichterstattung für deutlich mehr Unternehmen zum Thema – direkt als berichtspflichtiges Unternehmen oder indirekt, weil große Kunden Daten von ihren Lieferanten anfordern. Zeitplan und Schwellenwerte wurden auf EU-Ebene mehrfach angepasst; welche Pflichten konkret gelten, sollte jedes Unternehmen mit seiner Steuer- oder Wirtschaftsprüfung klären.",
      "Unabhängig vom genauen Stichtag gilt: Der Fuhrpark und die Mobilität der Mitarbeitenden gehören zu den größten beeinflussbaren Emissionsquellen vieler Dienstleistungs- und Handelsunternehmen. Dieser Ratgeber zeigt, wie Sie die Emissionen richtig zuordnen und welche Maßnahmen wirken.",
    ],
    sections: [
      {
        h2: "Scope 1, 2 und 3 – die Grundbegriffe",
        p: [
          "Die Berichterstattung orientiert sich am Greenhouse Gas Protocol, das Emissionen in drei Bereiche einteilt. Für den Fuhrpark ist die Zuordnung entscheidend, weil sie bestimmt, welche Daten erhoben werden müssen.",
        ],
        table: {
          caption: "Zuordnung von Mobilitätsemissionen",
          head: ["Bereich", "Bedeutung", "Beispiele im Fuhrpark"],
          rows: [
            ["Scope 1", "Direkte Emissionen aus eigenen Quellen", "Kraftstoff von firmeneigenen oder geleasten Verbrennern"],
            ["Scope 2", "Indirekte Emissionen aus eingekaufter Energie", "Strom für Elektrofahrzeuge und E-Bikes am Firmenstandort"],
            ["Scope 3", "Weitere indirekte Emissionen der Wertschöpfungskette", "Pendelwege der Mitarbeitenden, Geschäftsreisen mit Bahn und Flug, Herstellung der Fahrzeuge"],
          ],
        },
      },
      {
        h2: "Warum Scope 3 im Mobilitätsbereich so relevant ist",
        p: [
          "Pendelwege der Mitarbeitenden (Kategorie 7 im GHG Protocol) und Geschäftsreisen (Kategorie 6) werden oft unterschätzt. Bei Unternehmen ohne eigene Produktion können sie einen erheblichen Teil der Gesamtemissionen ausmachen. Gleichzeitig sind sie gut beeinflussbar – etwa durch Jobtickets, Diensträder, Homeoffice-Regelungen oder Fahrgemeinschaften.",
          "Auch die Herstellung der Fahrzeuge fällt in Scope 3. Hier kommt die Wiederaufbereitung ins Spiel: Ein [Refurbished E-Bike](/ratgeber/refurbished-ebikes-b2b-fuhrpark) verlängert die Nutzungsdauer eines bereits produzierten Rades und vermeidet Emissionen aus einer Neuproduktion.",
        ],
      },
      {
        h2: "Datenerhebung in der Praxis",
        p: [
          "Für Scope 1 und 2 liegen die Daten meist schon vor: Tankkartenabrechnungen liefern Kraftstoffmengen, Ladekarten und Stromzähler den Energieverbrauch. Wichtig ist, dass diese Daten pro Fahrzeug und Zeitraum vollständig und nachvollziehbar dokumentiert werden.",
          "Für Pendelwege ist eine Mitarbeiterbefragung der übliche Weg. Abgefragt werden Entfernung, Verkehrsmittel und Anzahl der Präsenztage. Mit anerkannten Emissionsfaktoren lassen sich daraus die Emissionen hochrechnen.",
        ],
        list: [
          "Tankkarten- und Ladedaten pro Fahrzeug zusammenführen",
          "Strommix des Standorts dokumentieren (Ökostrom-Nachweise aufbewahren)",
          "Jährliche, anonymisierte Pendelbefragung durchführen",
          "Geschäftsreisen über Reisebuchung oder Abrechnung erfassen",
          "Emissionsfaktoren und Annahmen schriftlich festhalten",
        ],
      },
      {
        h2: "Wirksame Maßnahmen zur Reduktion",
        sub: [
          { h3: "Elektrifizierung der Flotte", p: ["Elektrofahrzeuge verschieben Emissionen von Scope 1 nach Scope 2. Wird mit Ökostrom oder eigener Photovoltaik geladen, sinken die bilanzierten Emissionen deutlich. Voraussetzung ist eine passende [Ladeinfrastruktur](/ratgeber/ladeinfrastruktur-im-unternehmen)."] },
          { h3: "Dienstrad-Programme", p: ["Diensträder ersetzen Autofahrten auf kurzen Pendelstrecken und reduzieren Scope-3-Emissionen direkt. Die steuerlichen Rahmenbedingungen erklärt unser Artikel zur [0,25-%-Regel](/ratgeber/dienstwagen-vs-dienstrad-steuervorteile)."] },
          { h3: "Flotte verkleinern", p: ["Jedes Fahrzeug, das nicht benötigt wird, spart Emissionen aus Betrieb und Herstellung. Gut organisierte Poolfahrzeuge können mehrere personenbezogene Fahrzeuge ersetzen."] },
        ],
      },
      {
        h2: "Praxisbeispiel: Lieferantenanfrage eines Großkunden",
        example: {
          title: "Dienstleister mit 120 Mitarbeitenden",
          text: [
            "Ein IT-Dienstleister erhält von einem großen Kunden einen Fragebogen zu seiner CO₂-Bilanz. Bisher wurden keine Mobilitätsdaten systematisch erfasst. Innerhalb von drei Monaten werden Tankkarten- und Stromdaten zusammengeführt und eine Pendelbefragung durchgeführt.",
            "Ergebnis: Die Pendelwege verursachen mehr Emissionen als die eigenen 15 Firmenfahrzeuge. Das Unternehmen führt daraufhin ein Dienstradprogramm ein und kann dem Kunden eine konkrete Reduktionsmaßnahme nennen.",
          ],
        },
      },
    ],
    faq: [
      { q: "Muss mein Unternehmen nach CSRD berichten?", a: "Das hängt von Größe, Umsatz und Kapitalmarktorientierung ab; die Schwellenwerte wurden auf EU-Ebene angepasst. Lassen Sie die konkrete Pflicht von Ihrer Steuer- oder Wirtschaftsprüfung bestätigen. Auch ohne eigene Pflicht fordern Kunden häufig Daten an." },
      { q: "Gehören Pendelwege wirklich zur Unternehmensbilanz?", a: "Ja, im GHG Protocol zählen sie als Scope-3-Kategorie 7. Ob sie wesentlich sind und berichtet werden müssen, ergibt sich aus der Wesentlichkeitsanalyse." },
      { q: "Zählt Laden zu Hause als Scope 2?", a: "Das hängt davon ab, wer den Strom bezahlt und wie die Bilanzgrenzen definiert sind. Wichtig ist eine einheitliche, dokumentierte Methode." },
    ],
    related: ["refurbished-ebikes-b2b-fuhrpark", "ladeinfrastruktur-im-unternehmen"],
  },
  {
    slug: "ladeinfrastruktur-im-unternehmen",
    title: "Ladeinfrastruktur im Unternehmen: Planung für E-Autos und E-Bikes",
    metaTitle: "Ladeinfrastruktur im Unternehmen planen: E-Autos & E-Bikes | Rasolution",
    description: "Wie Unternehmen Ladepunkte für Elektrofahrzeuge und E-Bikes planen: Bedarfsanalyse, Netzanschluss, Lastmanagement, Abrechnung, Brandschutz und Kosten.",
    teaser: "Wie viele Ladepunkte brauchen Sie wirklich? Von der Bedarfsanalyse über Lastmanagement bis zum sicheren Laden von E-Bike-Akkus.",
    category: "E-Mobilität",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Die Elektrifizierung des Fuhrparks steht und fällt mit der Ladeinfrastruktur. Wer Elektrofahrzeuge anschafft, ohne das Laden zu planen, riskiert Warteschlangen an wenigen Ladepunkten, hohe Kosten an öffentlichen Schnellladern und unzufriedene Mitarbeitende.",
      "Dieser Ratgeber zeigt, wie Sie den Bedarf ermitteln, welche technischen Fragen vorab zu klären sind und worauf Sie beim Laden von E-Bike-Akkus achten sollten. Die konkrete Umsetzung gehört immer in die Hände eines Elektrofachbetriebs.",
    ],
    sections: [
      {
        h2: "Bedarfsanalyse: Wie viele Ladepunkte sind nötig?",
        p: [
          "Nicht jedes Fahrzeug braucht einen eigenen Ladepunkt. Entscheidend sind Standzeiten und Tagesfahrleistung. Ein Fahrzeug, das täglich 60 Kilometer fährt und acht Stunden auf dem Firmenparkplatz steht, kann an einer normalen Wallbox mit 11 kW problemlos nachgeladen werden – oft auch abwechselnd mit einem zweiten Fahrzeug.",
        ],
        list: [
          "Anzahl der Elektrofahrzeuge heute und in drei bis fünf Jahren",
          "Durchschnittliche Tagesfahrleistung und Standzeit am Standort",
          "Laden von Mitarbeiter- und Besucherfahrzeugen gewünscht?",
          "Anzahl der E-Bikes und Poolräder",
          "Bestehende oder geplante Photovoltaikanlage",
        ],
      },
      {
        h2: "Netzanschluss und Lastmanagement",
        p: [
          "Die verfügbare Anschlussleistung des Gebäudes ist häufig der begrenzende Faktor. Zehn Wallboxen mit je 11 kW würden gleichzeitig 110 kW benötigen – mehr, als viele Gewerbeanschlüsse hergeben. Ein dynamisches Lastmanagement verteilt die verfügbare Leistung intelligent auf die angeschlossenen Fahrzeuge und vermeidet teure Leistungsspitzen.",
          "Ladeeinrichtungen müssen beim Netzbetreiber angemeldet werden, ab einer bestimmten Leistung ist eine Genehmigung erforderlich. Planen Sie dafür ausreichend Vorlaufzeit ein.",
        ],
        table: {
          caption: "Ladeoptionen im Überblick",
          head: ["Option", "Leistung", "Typischer Einsatz"],
          rows: [
            ["Wallbox AC", "11–22 kW", "Laden während der Arbeitszeit"],
            ["DC-Schnelllader", "ab 50 kW", "Fahrzeuge mit kurzen Standzeiten, Mehrschichtbetrieb"],
            ["Laden zu Hause", "meist 11 kW", "Dienstwagen mit privater Nutzung"],
            ["E-Bike-Ladeplatz", "Steckdose / Ladeschrank", "Diensträder und Poolräder"],
          ],
        },
      },
      {
        h2: "Abrechnung und steuerliche Aspekte",
        p: [
          "Wird auch privat genutzter Dienstwagen am Firmenstandort geladen, stellt sich die Frage der Abrechnung. Das Aufladen von Elektrofahrzeugen und E-Bikes im Betrieb des Arbeitgebers ist nach derzeitiger Rechtslage unter bestimmten Voraussetzungen steuerfrei; Details und Befristungen sollten mit der Steuerberatung geklärt werden. Beim Laden zu Hause erstatten viele Unternehmen die Stromkosten über eine Pauschale oder einen geeichten Zähler.",
          "Ladekarten und ein Backend mit Nutzerverwaltung schaffen Transparenz: Sie zeigen, wer wann wie viel geladen hat, und liefern gleichzeitig die Daten für die [CO₂-Bilanz](/ratgeber/csrd-scope-3-fuhrpark).",
        ],
      },
      {
        h2: "E-Bikes sicher laden",
        p: [
          "Für Diensträder und Poolräder reicht technisch oft eine normale Steckdose. Wichtiger als die Leistung ist die Sicherheit: Lithium-Ionen-Akkus sollten an einem festen, gut belüfteten Ort mit Rauchmelder geladen werden, nicht in Fluchtwegen und nicht neben brennbaren Materialien. Akku-Ladeschränke mit Brandschutzausstattung sind für größere Flotten eine sinnvolle Investition.",
          "Wie Sie die Lebensdauer der Akkus zusätzlich verlängern, beschreibt unser Ratgeber zur [E-Bike-Akku-Pflege](/ratgeber/ebike-akku-lebensdauer-pflege-flotte).",
        ],
      },
      {
        h2: "Kosten und Förderung",
        p: [
          "Die Kosten hängen stark vom Standort ab: Eine Wallbox selbst ist vergleichsweise günstig, Tiefbau, Leitungsverlegung und eventuelle Netzanschlusserweiterung können den Großteil ausmachen. Förderprogramme von Bund, Ländern und Kommunen ändern sich häufig; prüfen Sie vor der Beauftragung, welche Programme aktuell verfügbar sind.",
        ],
      },
      {
        h2: "Praxisbeispiel: Schrittweiser Ausbau",
        example: {
          title: "Firmenstandort mit 25 Stellplätzen",
          text: [
            "Ein Unternehmen plant, in drei Jahren zwölf Elektrofahrzeuge zu betreiben. Statt sofort zwölf Wallboxen zu installieren, werden Leerrohre für alle Stellplätze verlegt und zunächst sechs Wallboxen mit Lastmanagement in Betrieb genommen.",
            "Zusätzlich entsteht im Erdgeschoss ein abschließbarer E-Bike-Raum mit Rauchmelder und Ladeschrank. Weitere Ladepunkte können später ohne erneuten Tiefbau ergänzt werden.",
          ],
        },
      },
    ],
    faq: [
      { q: "Brauche ich für jedes E-Auto eine Wallbox?", a: "Nein. Bei langen Standzeiten können sich zwei oder mehr Fahrzeuge einen Ladepunkt teilen, besonders mit Lastmanagement und einer Belegungsregel." },
      { q: "Muss die Ladeinfrastruktur angemeldet werden?", a: "Ja, Ladeeinrichtungen sind beim Netzbetreiber anzumelden, ab einer bestimmten Leistung ist eine Zustimmung erforderlich. Das übernimmt in der Regel der Elektrofachbetrieb." },
      { q: "Können E-Bikes im Büro geladen werden?", a: "Ja, wenn ein geeigneter Ort mit Brandschutzvorkehrungen festgelegt ist. Laden in Fluchtwegen oder unbeaufsichtigt neben brennbaren Materialien sollte vermieden werden." },
    ],
    related: ["csrd-scope-3-fuhrpark", "ebike-akku-lebensdauer-pflege-flotte"],
  },
  {
    slug: "uvv-pruefung-dienstraeder-pkw",
    title: "UVV-Prüfung bei Diensträdern & PKW: Pflichten für Arbeitgeber",
    metaTitle: "UVV-Prüfung Dienstrad & Dienstwagen: Pflichten & Ablauf | Rasolution",
    description: "Was die UVV-Prüfung für Dienstwagen und Diensträder bedeutet: rechtliche Grundlagen, Prüfintervalle, Fahrerunterweisung, Führerscheinkontrolle und Dokumentation.",
    teaser: "Halterhaftung ernst nehmen: Was Arbeitgeber bei der jährlichen Prüfung von Firmenfahrzeugen und Diensträdern beachten müssen.",
    category: "Steuern & Recht",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Wer seinen Mitarbeitenden Fahrzeuge zur Verfügung stellt, übernimmt Verantwortung für deren sicheren Zustand. In der Praxis wird diese Pflicht oft unter dem Begriff „UVV-Prüfung“ zusammengefasst – benannt nach den Unfallverhütungsvorschriften der Berufsgenossenschaften.",
      "Dieser Ratgeber erklärt, woher die Pflichten kommen, was geprüft werden sollte und wie Diensträder einzuordnen sind. Er ersetzt keine Rechtsberatung; maßgeblich sind die Vorgaben Ihrer Berufsgenossenschaft und Ihre Gefährdungsbeurteilung.",
    ],
    sections: [
      {
        h2: "Rechtliche Grundlagen",
        p: [
          "Für Kraftfahrzeuge ist vor allem die DGUV Vorschrift 70 „Fahrzeuge“ relevant. Sie verlangt, dass Fahrzeuge bei Bedarf, mindestens aber einmal jährlich, durch eine sachkundige Person auf ihren betriebssicheren Zustand geprüft werden und das Ergebnis schriftlich festgehalten wird. Ergänzend gelten das Arbeitsschutzgesetz und die Betriebssicherheitsverordnung.",
          "Die UVV-Prüfung ersetzt nicht die Hauptuntersuchung (HU) nach der Straßenverkehrs-Zulassungs-Ordnung. Beide Prüfungen haben unterschiedliche Zwecke und sollten getrennt geplant werden – auch wenn manche Werkstätten sie kombiniert anbieten.",
        ],
      },
      {
        h2: "Was wird bei Dienstwagen geprüft?",
        list: [
          "Bremsen, Lenkung, Beleuchtung und Reifen",
          "Sicherheitsgurte, Airbag-Warnleuchten und Spiegel",
          "Warndreieck, Warnweste und Verbandkasten",
          "Ladungssicherung bei Transportern",
          "Sichtbare Schäden an Karosserie und Scheiben",
        ],
        p: [
          "Die Prüfung muss durch eine sachkundige Person erfolgen, etwa eine Kfz-Fachwerkstatt oder entsprechend qualifizierte Mitarbeitende. Wichtig ist eine nachvollziehbare Dokumentation mit Datum, Prüfumfang, Ergebnis und Unterschrift.",
        ],
      },
      {
        h2: "Gilt die Prüfpflicht auch für Diensträder?",
        p: [
          "Fahrräder und E-Bikes bis 25 km/h sind keine Kraftfahrzeuge im Sinne der DGUV Vorschrift 70. Werden sie aber als Arbeitsmittel überlassen – etwa als Poolrad für Dienstfahrten –, ergibt sich aus der Betriebssicherheitsverordnung die Pflicht, Art, Umfang und Fristen der Prüfung in der Gefährdungsbeurteilung festzulegen. In der Praxis hat sich eine jährliche Inspektion durch einen Fachhändler bewährt.",
          "S-Pedelecs bis 45 km/h gelten dagegen als Kraftfahrzeuge und fallen unter die Regeln für Fahrzeuge. Bei geleasten Diensträdern ist die jährliche Inspektion häufig ohnehin Bestandteil des Servicepakets.",
        ],
        table: {
          caption: "Prüfpflichten im Überblick",
          head: ["Fahrzeug", "Grundlage", "Übliches Intervall"],
          rows: [
            ["PKW / Transporter", "DGUV Vorschrift 70", "mindestens jährlich"],
            ["S-Pedelec (45 km/h)", "DGUV Vorschrift 70", "mindestens jährlich"],
            ["Pedelec / Fahrrad als Arbeitsmittel", "BetrSichV, Gefährdungsbeurteilung", "meist jährlich"],
            ["Privat genutztes Leasing-Dienstrad", "Leasing- und Überlassungsvertrag", "laut Vertrag"],
          ],
        },
      },
      {
        h2: "Fahrerunterweisung und Führerscheinkontrolle",
        p: [
          "Zur Halterverantwortung gehört nicht nur der technische Zustand. Arbeitgeber müssen Fahrerinnen und Fahrer regelmäßig unterweisen – zu Ladungssicherung, Verhalten bei Unfällen oder dem sicheren Umgang mit E-Bike-Akkus. Bei Kraftfahrzeugen kommt die regelmäßige Führerscheinkontrolle hinzu; viele Unternehmen prüfen halbjährlich.",
        ],
      },
      {
        h2: "Dokumentation und Organisation",
        p: [
          "Im Schadensfall muss das Unternehmen nachweisen können, dass es seinen Pflichten nachgekommen ist. Eine zentrale Übersicht mit Prüfterminen, Prüfberichten, Unterweisungsnachweisen und Führerscheinkontrollen ist deshalb unverzichtbar. Digitale Fuhrparklösungen erinnern automatisch an Fristen und archivieren Nachweise revisionssicher. Wie sich gebündelte Prüfungen auf die Kosten auswirken, zeigt unser [TCO-Maßnahmenplan](/ratgeber/fuhrpark-tco-senken-massnahmenplan).",
        ],
      },
      {
        h2: "Praxisbeispiel: Prüftag für die gesamte Flotte",
        example: {
          title: "Handwerksbetrieb mit 18 Fahrzeugen und 6 Poolrädern",
          text: [
            "Ein Handwerksbetrieb vereinbart mit einer Werkstatt einen festen jährlichen Prüftag für alle Transporter. Am selben Tag prüft ein Fahrradfachhändler die sechs Poolräder vor Ort.",
            "Die Unterweisung der Mitarbeitenden findet direkt im Anschluss statt. So sind alle Nachweise an einem Termin erledigt, und die Fahrzeuge fallen nur wenige Stunden aus.",
          ],
        },
      },
    ],
    faq: [
      { q: "Ist die UVV-Prüfung gesetzlich vorgeschrieben?", a: "Die Pflicht ergibt sich aus der DGUV Vorschrift 70 der Berufsgenossenschaften sowie dem Arbeitsschutzrecht. Sie ist für Unternehmen verbindlich, auch wenn sie nicht in der StVZO steht." },
      { q: "Wer darf die Prüfung durchführen?", a: "Eine sachkundige Person mit entsprechender Ausbildung und Erfahrung, zum Beispiel eine Kfz-Werkstatt oder geschulte eigene Mitarbeitende." },
      { q: "Was passiert, wenn die Prüfung versäumt wird?", a: "Bei einem Unfall kann die Berufsgenossenschaft Regress nehmen, und es drohen persönliche Haftungsrisiken für Verantwortliche. Auch der Versicherungsschutz kann betroffen sein." },
    ],
    related: ["poolfahrzeuge-effizient-verwalten", "dienstwagen-vs-dienstrad-steuervorteile"],
  },
  {
    slug: "poolfahrzeuge-effizient-verwalten",
    title: "Poolfahrzeuge effizient verwalten: Buchung, Auslastung und Kosten",
    metaTitle: "Poolfahrzeuge effizient verwalten: Leitfaden | Rasolution",
    description: "Wie Unternehmen Poolfahrzeuge und Poolräder effizient organisieren: Bedarfsermittlung, Buchungssystem, Schlüsselmanagement, Nutzungsregeln, Steuern und Kennzahlen.",
    teaser: "Weniger Fahrzeuge, bessere Auslastung: So organisieren Sie einen Fahrzeugpool, der im Alltag funktioniert – inklusive E-Bikes.",
    category: "Fuhrpark-Organisation",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Personenbezogene Dienstwagen stehen oft einen Großteil der Arbeitszeit auf dem Parkplatz. Poolfahrzeuge, die von mehreren Mitarbeitenden gemeinsam genutzt werden, können die Auslastung deutlich steigern und die Anzahl benötigter Fahrzeuge senken.",
      "Damit ein Pool funktioniert, braucht er klare Regeln und eine einfache Organisation. Dieser Ratgeber zeigt, wie Sie den Bedarf ermitteln, Buchung und Übergabe organisieren und den Pool sinnvoll um E-Bikes ergänzen.",
    ],
    sections: [
      {
        h2: "Den richtigen Poolumfang ermitteln",
        p: [
          "Grundlage ist eine Analyse der tatsächlichen Fahrten: Wie viele Dienstfahrten finden pro Tag statt, wie lang sind sie und zu welchen Uhrzeiten? Entscheidend ist nicht der Durchschnitt, sondern die Spitzenlast – etwa an Tagen mit vielen Kundenterminen.",
          "Eine Faustregel gibt es nicht. Viele Unternehmen starten mit einem kleineren Pool, beobachten die Auslastung einige Monate und ergänzen bei Bedarf. Für Engpässe kann ein Rahmenvertrag mit einer Autovermietung oder Carsharing einspringen.",
        ],
      },
      {
        h2: "Buchung und Schlüsselmanagement",
        p: [
          "Ein Pool steht und fällt mit der Verfügbarkeit. Ein digitales Buchungssystem zeigt in Echtzeit, welche Fahrzeuge frei sind, und verhindert Doppelbuchungen. Für die Schlüsselübergabe bieten sich elektronische Schlüsselschränke oder digitale Zugangslösungen per App an.",
        ],
        list: [
          "Online-Buchung mit Kalenderintegration",
          "Automatische Erinnerung an Rückgabe und Tankstand bzw. Ladestand",
          "Elektronischer Schlüsselschrank oder digitaler Fahrzeugzugang",
          "Digitale Übergabeprotokolle mit Fotos bei Schäden",
          "Automatische Fahrtenerfassung für die Abrechnung",
        ],
      },
      {
        h2: "Klare Nutzungsregeln",
        p: [
          "Eine Poolordnung regelt, wer buchen darf, wie lange im Voraus, welche Fahrten Vorrang haben und in welchem Zustand das Fahrzeug zurückgegeben wird. Elektrofahrzeuge sollten nach der Rückgabe an die [Ladeinfrastruktur](/ratgeber/ladeinfrastruktur-im-unternehmen) angeschlossen werden. Klare Regeln zur Schadensmeldung und zur Sauberkeit verhindern Konflikte zwischen den Nutzenden.",
          "Auch Poolfahrzeuge unterliegen der jährlichen [UVV-Prüfung](/ratgeber/uvv-pruefung-dienstraeder-pkw); bei geteilten Fahrzeugen ist eine kurze Sichtkontrolle vor jeder Fahrt zusätzlich sinnvoll.",
        ],
      },
      {
        h2: "Steuerliche Behandlung",
        p: [
          "Werden Poolfahrzeuge ausschließlich für Dienstfahrten genutzt und ist die private Nutzung wirksam untersagt, entsteht in der Regel kein geldwerter Vorteil. Das Verbot sollte schriftlich geregelt und stichprobenartig kontrolliert werden. Dürfen Poolfahrzeuge auch für den Arbeitsweg oder privat genutzt werden, gelten andere Regeln; das sollte mit der Steuerberatung abgestimmt werden.",
        ],
      },
      {
        h2: "E-Bikes als Ergänzung des Pools",
        p: [
          "Für kurze Strecken in der Stadt sind E-Bikes oft schneller als das Auto – ohne Parkplatzsuche. Ein gemischter Pool aus Fahrzeugen und Rädern entlastet die Autos für längere Fahrten. [Geprüfte Refurbished E-Bikes](/mobilitaetsmanagement) sind dafür eine kostengünstige und nachhaltige Option.",
        ],
        table: {
          caption: "Kennzahlen für das Pool-Controlling",
          head: ["Kennzahl", "Aussage", "Zielrichtung"],
          rows: [
            ["Auslastungsquote", "Anteil gebuchter Zeit an verfügbarer Zeit", "hoch, ohne Engpässe"],
            ["Abgelehnte Buchungen", "Wie oft kein Fahrzeug verfügbar war", "niedrig"],
            ["Kosten pro Kilometer", "Wirtschaftlichkeit des Pools", "sinkend"],
            ["Schäden pro 10.000 km", "Sorgfalt der Nutzenden", "niedrig"],
          ],
        },
      },
      {
        h2: "Praxisbeispiel: Vom Dienstwagen zum Pool",
        example: {
          title: "Verwaltung mit 30 Mitarbeitenden im Außendienst",
          text: [
            "Eine Verwaltung stellt zwölf personenbezogene Fahrzeuge mit geringer Fahrleistung auf einen Pool aus sieben Fahrzeugen und fünf E-Bikes um. Ein Buchungssystem mit digitalem Schlüsselschrank wird eingeführt.",
            "Nach sechs Monaten zeigt die Auswertung eine deutlich höhere Auslastung und kaum abgelehnte Buchungen. Die freiwerdenden Leasingverträge werden nicht verlängert.",
          ],
        },
      },
    ],
    faq: [
      { q: "Ab wie vielen Fahrzeugen lohnt sich ein Buchungssystem?", a: "Schon ab drei bis fünf Poolfahrzeugen spart ein digitales System Abstimmungsaufwand und verhindert Doppelbuchungen." },
      { q: "Wer haftet bei Schäden an Poolfahrzeugen?", a: "Das regelt die Poolordnung in Verbindung mit dem Arbeitsrecht. Digitale Übergabeprotokolle helfen, Schäden einer Fahrt zuzuordnen." },
      { q: "Dürfen Poolfahrzeuge mit nach Hause genommen werden?", a: "Das ist möglich, hat aber steuerliche Folgen. Ohne private Nutzung entsteht in der Regel kein geldwerter Vorteil; Ausnahmen sollten klar geregelt sein." },
    ],
    related: ["fuhrpark-tco-senken-massnahmenplan", "uvv-pruefung-dienstraeder-pkw"],
  },
  {
    slug: "leasingruecklaeufer-kaufen-vs-neu-leasing",
    title: "Leasingrückläufer kaufen vs. Neu-Leasing: Was rechnet sich für Unternehmen?",
    metaTitle: "Leasingrückläufer kaufen vs. Neu-Leasing: Vergleich | Rasolution",
    description: "Leasingrückläufer kaufen oder neu leasen? Vergleich von Kosten, Liquidität, Wertverlust, Gewährleistung, Technik und Nachhaltigkeit für Fahrzeuge und E-Bikes.",
    teaser: "Gebraucht kaufen oder neu leasen? Ein sachlicher Vergleich von Kosten, Risiko und Flexibilität – für Firmenwagen und E-Bikes.",
    category: "Kosten & Strategie",
    readMin: 6,
    updated: "2026-11-06",
    intro: [
      "Leasing ist für viele Unternehmen der Standard bei der Fahrzeugbeschaffung: planbare Raten, aktuelle Technik, wenig Kapitalbindung. Gleichzeitig kommen jedes Jahr zahlreiche gut gepflegte Leasingrückläufer auf den Markt – Fahrzeuge und E-Bikes, die erst wenige Jahre alt sind und deutlich unter dem Neupreis angeboten werden.",
      "Welche Variante wirtschaftlicher ist, hängt von Nutzungsdauer, Fahrleistung und Liquidität ab. Dieser Ratgeber vergleicht beide Wege und zeigt, worauf Sie beim Kauf von Rückläufern achten sollten.",
    ],
    sections: [
      {
        h2: "Der größte Kostenfaktor: Wertverlust",
        p: [
          "Fahrzeuge verlieren in den ersten Jahren den größten Teil ihres Wertes. Beim Neu-Leasing zahlt das Unternehmen diesen Wertverlust über die Raten. Wer einen Leasingrückläufer kauft, übernimmt das Fahrzeug, nachdem der stärkste Wertverlust bereits eingetreten ist.",
          "Bei E-Bikes ist der Effekt ähnlich: Geprüfte Rückläufer aus Dienstrad-Programmen sind häufig erheblich günstiger als die UVP. Nach einer fachgerechten Aufbereitung sind sie technisch oft in sehr gutem Zustand.",
        ],
      },
      {
        h2: "Gegenüberstellung",
        table: {
          caption: "Leasingrückläufer kaufen vs. Neu-Leasing",
          head: ["Kriterium", "Rückläufer kaufen", "Neu-Leasing"],
          rows: [
            ["Anschaffungskosten", "deutlich unter Neupreis", "keine, monatliche Rate"],
            ["Liquidität", "einmalige Kapitalbindung (oder Finanzierung)", "geschont"],
            ["Wertverlust", "gering, Großteil bereits eingetreten", "über Rate bezahlt"],
            ["Technik", "meist ein bis drei Jahre alt", "aktuellster Stand"],
            ["Gewährleistung", "gesetzliche Gewährleistung des Händlers", "Herstellergarantie"],
            ["Flexibilität", "frei verkäuflich, keine Rückgabeprüfung", "feste Laufzeit, Rückgabebewertung"],
            ["Nachhaltigkeit", "Weiternutzung vorhandener Produkte", "Neuproduktion"],
          ],
        },
      },
      {
        h2: "Wann sich der Kauf von Rückläufern lohnt",
        list: [
          "Lange geplante Nutzungsdauer von vier Jahren und mehr",
          "Fahrzeuge für Pool, Werkstatt oder Kurzstrecke, bei denen Repräsentation keine Rolle spielt",
          "Ausreichende Liquidität oder günstige Finanzierung",
          "Wunsch nach Unabhängigkeit von Rückgabebewertungen und Mehrkilometerkosten",
          "Nachhaltigkeitsziele, bei denen Weiternutzung zählt",
        ],
      },
      {
        h2: "Wann Neu-Leasing die bessere Wahl ist",
        p: [
          "Neu-Leasing spielt seine Stärken aus, wenn Planbarkeit und aktuellste Technik wichtig sind – etwa bei repräsentativen Fahrzeugen, sehr hohen Fahrleistungen mit Full-Service-Vertrag oder wenn Liquidität geschont werden soll. Auch bei Dienstrad-Programmen über Gehaltsumwandlung ist Leasing das übliche Modell. Wichtig: Auch gebrauchte E-Bikes können über spezialisierte Anbieter geleast werden; die steuerlichen Grundlagen erklärt unser Artikel zur [0,25-%-Regel](/ratgeber/dienstwagen-vs-dienstrad-steuervorteile).",
        ],
      },
      {
        h2: "Worauf Sie beim Kauf achten sollten",
        sub: [
          { h3: "Dokumentierter Zustand", p: ["Lassen Sie sich Prüfprotokolle, Wartungsnachweise und bei E-Bikes den Akkuzustand (State of Health) vorlegen. Warum der Akku entscheidend ist, lesen Sie im Ratgeber zur [Akku-Lebensdauer](/ratgeber/ebike-akku-lebensdauer-pflege-flotte)."] },
          { h3: "Gewährleistung", p: ["Bei Rädern aus unserem zertifizierten Refurbishment-Partnernetzwerk gelten 12 Monate gesetzliche Gewährleistung auf geprüfte Gebrauchtware. Achten Sie generell auf klare, schriftliche Gewährleistungsbedingungen."] },
          { h3: "Gesamtkosten statt Kaufpreis", p: ["Vergleichen Sie die Gesamtkosten über die geplante Nutzungsdauer, inklusive Wartung, Verschleißteilen und Restwert. Unser [TCO-Maßnahmenplan](/ratgeber/fuhrpark-tco-senken-massnahmenplan) hilft bei der Struktur."] },
        ],
      },
      {
        h2: "Praxisbeispiel: Poolräder für einen Standort",
        example: {
          title: "Zehn E-Bikes für Dienstfahrten",
          text: [
            "Ein Unternehmen benötigt zehn E-Bikes für Dienstfahrten zwischen zwei Standorten. Statt zehn neue Räder zu leasen, werden geprüfte Leasingrückläufer mit dokumentiertem Akkuzustand gekauft.",
            "Die Anschaffungskosten liegen deutlich unter dem Neupreis, die Räder sind nach Aufbereitung technisch einwandfrei. Weil die Räder ausschließlich dienstlich genutzt werden und lange im Einsatz bleiben sollen, ist der Kauf über die geplante Nutzungsdauer günstiger als ein Leasingvertrag.",
          ],
        },
      },
    ],
    faq: [
      { q: "Sind Leasingrückläufer qualitativ schlechter?", a: "Nicht zwingend. Leasingfahrzeuge werden meist regelmäßig gewartet. Entscheidend ist eine fachgerechte Prüfung und Aufbereitung mit dokumentiertem Zustand." },
      { q: "Kann ich gebrauchte E-Bikes auch leasen?", a: "Ja, einige Anbieter ermöglichen das Leasing geprüfter Gebrauchträder. Sprechen Sie uns zu den aktuellen Möglichkeiten an." },
      { q: "Wie wirkt sich der Kauf steuerlich aus?", a: "Gekaufte Fahrzeuge werden abgeschrieben, Leasingraten sind Betriebsausgaben. Die Auswirkungen auf Ihr Unternehmen sollten mit der Steuerberatung abgestimmt werden." },
    ],
    related: ["refurbished-ebikes-b2b-fuhrpark", "fuhrpark-tco-senken-massnahmenplan"],
  },
];

export const articles: Article[] = [
  { ...baseArticles[0], tool: "ersparnisrechner" },
  ...baseArticles.slice(1),
  ...newArticles,
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
