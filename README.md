# Google-recensioner

## Var Google-recensionerna finns
Google-recensionerna hanteras manuellt och finns sparade i filen:
`src/data/google_reviews_manual.json`

Det är i denna fil du lägger in nya kundomdömen för att de ska visas på hemsidan.

## 1. Hur man lägger till en ny Google-recension (Det enklaste sättet)

Följ dessa tre enkla steg:
1. Öppna filen `src/data/google_reviews_manual.json`.
2. Kopiera en tidigare recension i listan (från start-klammer `{` till slut-klammer `}`).
3. Klistra in den, byt ut informationen mot den nya kundens uppgifter, och spara filen!

**Exempel på vad du ska kopiera och klistra in:**
```json
    {
      "author": "Karin Bergquist",
      "rating": 5,
      "relative_time_description": "för 2 dagar sedan",
      "text": "Trevligt bemötande och bra jobb. Jag är helnöjd.",
      "source_url": "https://www.google.com/search?q=MAC+Service+Recensioner",
      "note": "Nyhet"
    },
```
*(Viktigt: Glöm inte kommatecknet `,` på slutet om det kommer en till recension efter!)*

## 2. Vilka delar ska bytas ut?
När du klistrat in exemplet ovan, byter du helt enkelt ut texten **innanför citattecknen**:

* `"author"` – Kundens namn (byt ut "Karin Bergquist").
* `"rating"` – Kundens betyg 1–5 (denna siffra ska **inte** ha citattecken, bara `5`).
* `"relative_time_description"` – När skrevs den? (t.ex. "för en timme sedan").
* `"text"` – Själva omdömet som kunden skrev.
* `"source_url"` – Länken till Google (denna behöver du oftast inte ändra).
* `"note"` – Din egen interna anteckning, till exempel "Ny recension".

**Om kunden bara lämnade ett betyg (5 stjärnor) men ingen text:**
Töm fältet `"text"` så det bara är två tomma citattecken: `"text": ""`

## 3. Vad man INTE ska ändra
> [!WARNING]
> Filen (`.json`) är mycket känslig för små skrivfel. Ett extra eller saknat kommatecken kan göra att hemsidan kraschar och recensionerna slutar fungera.

* Ändra **inte** namnet på fälten (t.ex. ändra inte `"author"` till `"namn"`).
* Ta **inte** bort några citattecken (`"`), kommatecken (`,`) eller klamrar (`{`, `}`).
* Ändra **inte** ordet `"reviews"` högst upp till något annat.
* Ändra **inte** filens grundläggande struktur.
* Ändra **inte** gamla recensioner i onödan.
* Lägg **inte** in egna påhittade recensioner, använd bara riktiga.
* Ändra **aldrig** i koden för att lägga till en recension, det räcker att uppdatera json-filen.
* Ändra **inte** i andra projektfiler om det bara är en ny recension som ska läggas till.
* Om något är oklart eller om hemsidan går sönder: Fråga om hjälp istället för att testa dig fram!

---

# Om projektet (mackoping.se)

## Projektet i korthet
Detta är källkoden till webbplatsen **mackoping.se**. Webbplatsen är byggd med React och Vite, vilket är modern teknik för att bygga snabba och användarvänliga hemsidor.

## Projektets viktigaste mappar och filer
Här är en enkel översikt över var du hittar olika saker:

* **`src/pages/`** – Här finns de olika sidorna på hemsidan (t.ex. Hem, Om oss, Kontakt).
* **`src/components/`** – Här finns webbplatsens byggstenar (t.ex. meny, sidfot, knappar).
* **`src/assets/`** – Här ligger alla bilder, logotyper och ikoner.
* **`src/data/`** – Här ligger datan som styr innehållet, bland annat filen för Google-recensioner.
* **`src/index.css` & komponenternas `.css`-filer** – Här ligger all design och styling (färger, marginaler osv).
* **`package.json`** – En viktig fil som innehåller hemsidans inställningar och de kommandon (script) som används för att starta och publicera sidan.
* **`README.md`** – Denna instruktionsmanual som du läser just nu.

## Starta webbplatsen på datorn (Testa lokalt)
Innan du publicerar en ändring ut på internet ska du alltid testa den "lokalt". Lokalt betyder att hemsidan bara körs på din egen dator och ingen annan på internet kan se den.

1. Öppna terminalen i projektmappen.
2. Om det var längesedan du jobbade med projektet, skriv: `npm install` och tryck Enter (detta installerar eventuella uppdateringar).
3. För att starta webbplatsen, skriv: `npm run dev` och tryck Enter.
4. Terminalen kommer att visa en webbadress (oftast `http://localhost:5173/`). Ctrl-klicka eller kopiera in den i din webbläsare för att se hemsidan.
5. För att stänga av hemsidan när du är klar, gå tillbaka till terminalen och tryck `Ctrl + C`.

## Bygga webbplatsen (Förbered för publicering)
När du är nöjd med dina ändringar (t.ex. du har lagt till en ny recension och sett att det fungerar lokalt) kan projektet "byggas". Att bygga projektet betyder att datorn slår ihop och packar all kod till en liten optimerad version som webbläsare på internet kan förstå mycket snabbare.

Kör detta kommando i terminalen för att bygga webbplatsen:
`npm run build`

## Publicering (Deploy)
**Publicera/deploya ALDRIG automatiskt utan att först ha testat lokalt!**

När du:
1. Har gjort din ändring (t.ex. sparat en ny recension i json-filen).
2. Har testat att den fungerar på datorn med `npm run dev`.

Då är du redo att publicera uppdateringen till mackoping.se på riktigt. 

I detta projekt görs det genom att köra följande kommando i terminalen:
`npm run deploy`

Det kommandot bygger först automatiskt ihop hemsidan (kör `npm run build` i bakgrunden) och publicerar därefter den senaste versionen till internet via GitHub Pages. Det kan ta en liten stund innan ändringen slår igenom och syns på din riktiga webbadress.
