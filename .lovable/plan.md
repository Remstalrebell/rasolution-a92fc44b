

## Hero-Layout Korrektur

### Änderungen in `src/components/HeroSection.tsx`

**1. Stealth-Button mit CSS-only group-hover (statt useState)**
- Entferne den `useState`-Hook und die `onMouseEnter`/`onClick`-Handler
- Füge dem Textblock-Container die Tailwind-Klasse `group` hinzu
- Setze den Button-Wrapper auf `opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:pointer-events-auto`
- Damit ist der Button garantiert unsichtbar beim Laden und erscheint nur bei Hover über den Textblock

**2. Stufenloser Gradient-Blur (eine einzige Ebene)**
- Behalte den einen `backdrop-blur-xl`-Bereich
- Vereinfache die `maskImage` auf einen echten linearen Verlauf: `linear-gradient(to right, transparent 0%, black 100%)` — keine Zwischenstufen
- ClipPath bleibt als Keilform

**3. Textumbruch & Symmetrie**
- Headline: „Fuhrparkmanagement" auf einer Zeile, „mit System." auf der nächsten → Umbruch via `<br />` nach „Fuhrparkmanagement", `whitespace-nowrap` entfernen
- Reihenfolge: Effizienz steigern. → Kosten senken. (bleibt wie aktuell)
- Subtext: Manueller Umbruch via `<br />` nach „...und digitale Umsetzung"
- Positionierung bleibt bei `pt-[12vh]`, rechtsbündig

