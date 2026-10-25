export type Section = {
  h2: string;
  p?: string[];
  list?: string[];
  sub?: { h3: string; p: string[] }[];
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
  intro: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
};

export const articles: Article[] = [
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

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
