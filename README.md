# Weer - Interactief Prototype (Next.js)

## Starten

```bash
npm install
npm run dev
```

Open daarna http://localhost:3000 in je browser.

## Hoe dit project in elkaar zit

Het prototype zelf (`public/weer-prototype.html`) is één op zichzelf staand
HTML-bestand met alle CSS en JavaScript er gewoon in geschreven — geen React,
geen build-stap nodig om het te laten werken. Dat is bewust zo gebouwd tijdens
het ontwikkelen: snel itereren, direct in de browser te testen.

Om dit veilig bruikbaar te maken in een Next.js-project, laadt `app/page.js`
dat bestand in een volledig-scherm `<iframe>`. Zo krijg je:

- een echte `npm run dev`-workflow met hot reload van de Next.js-pagina zelf
- het volledig werkende, al geteste prototype, zonder dat er bij het overzetten
  iets kapot kan gaan
- een normaal project met `package.json` dat je kan uitbreiden

**Let op:** de interactieve logica (temperatuur, luchtdruk, weer-animaties,
enz.) draait nog steeds als losstaand JavaScript binnen die iframe, niet als
React-componenten. Dat is een bewuste, pragmatische keuze — het bestand bevat
grote, handmatig ingevoegde SVG-tekeningen en veel DOM-manipulatie die stuk
voor stuk zou moeten worden herschreven om er "echte" React-componenten van
te maken, met een reëel risico om functionaliteit te breken zonder dat live
getest kan worden.

## Verder bouwen richting "echte" React

Wil je dit op termijn omzetten naar losse React-componenten (bijvoorbeeld om
state via React te beheren in plaats van losse DOM-manipulatie)? Dat kan
stap voor stap:

1. Begin met de statische onderdelen: zet de SVG-illustraties (achtergronden,
   molen) om in losse `.jsx`-bestanden die puur de tekening teruggeven.
2. Verplaats de interactie-logica (temperatuur-slider, drukbolletjes, de
   weer-matrix) geleidelijk naar `useState`/`useEffect` in een React-component.
3. Test na elke stap in de browser voordat je verdergaat — de bestaande
   `weer-prototype.html` blijft intussen gewoon werken als referentie.

## Bestandsstructuur

```
app/
  layout.js       basis HTML-layout, paginatitel
  page.js         laadt het prototype in een iframe
public/
  weer-prototype.html   het volledige werkende prototype
```
