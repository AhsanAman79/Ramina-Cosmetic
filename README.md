# Ramina Cosmetics – Website

Moderne, hochwertige One-Page-Website für **Ramina Cosmetics**, das Kosmetikstudio an der Frankfurter Hauptwache. Spezialisiert auf dauerhafte Laser-Haarentfernung, Gesichtsbehandlungen, Lash- & Browlifting und Zahnaufhellung.

## Aufbau

| Datei | Zweck |
|-------|-------|
| `index.html` | Komplette Seite (Hero, Studio, Behandlungen + Preisliste, Galerie, Team, Kontakt) |
| `styles.css` | Premium-Design (Champagner-Gold, Serif/Sans-Mix, responsiv) |
| `script.js` | Scroll-/Reveal-Animationen, mobiles Menü, Galerie-Kacheln |
| `sitemap.xml`, `robots.txt` | SEO / Crawling |

## SEO

- Vollständige Meta-Tags, Open Graph & Twitter Cards
- **JSON-LD `BeautySalon`**-Schema mit Adresse, Geo-Koordinaten, Öffnungszeiten, Telefon
- Semantisches HTML, `lang="de"`, Canonical-URL
- `sitemap.xml` + `robots.txt`

## Lokal ansehen

Einfach `index.html` im Browser öffnen – keine Build-Schritte nötig (reines HTML/CSS/JS).

## Noch anzupassen

1. **Domain:** In `index.html` (Canonical, OG-URLs), `sitemap.xml` und `robots.txt` ist `https://www.raminacosmetics.de/` als Platzhalter eingetragen. Bei Bedarf durch die echte Domain ersetzen.
2. **Echte Fotos:** Die Studio-/Galeriebilder konnten nicht automatisch von Treatwell oder Instagram geladen werden (Instagram erfordert Login). Die Galerie zeigt aktuell dekorative Kacheln, die zum Instagram-Profil verlinken. Für einen echten Instagram-Feed eine Embed-Lösung einbinden (z. B. Instagram Basic Display API, EmbedSocial, LightWidget) – die Stelle ist in `script.js` markiert.
3. **`og-image.jpg`:** Ein Vorschaubild unter `/assets/og-image.jpg` ablegen für Social-Sharing.

## Kontaktdaten (Stand der Quelle)

Große Bockenheimer Straße 13, 60313 Frankfurt am Main · Tel. 01520 3888435 · reihane@gmx.de
Buchung: Treatwell · Instagram: [@ramina.cosmetics](https://www.instagram.com/ramina.cosmetics)
