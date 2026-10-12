# PRD — "Il dolore ha il tuo nome"

## Problem statement (originale)
Sito emotivo statico (frontend puro, deployabile su Vercel) che vende con delicatezza:
1. PRINCIPALE: libro guidato cartaceo "Il dolore ha il tuo nome" (Amazon, SENZA prezzi)
2. PRIMO PASSO: "Le 7 notti" digitale (Beacons — link in arrivo, placeholder attivo)
3. DONO: "La lettera" — presente in ogni pagina, scrittura on-page, testo solo sul dispositivo, "Affida al vento" (animazione) e "Custodiscila" (PDF client-side)

Atmosfera: notte, farfalla dorata, cielo stellato, luce di candela che pulsa, vento. Tono mai aggressivo. Su Sabrina: poche righe calde, firma "Sabrina M." + farfalla, niente foto. SEO mirato, OG card, dati strutturati Book, sitemap. Canzone "Nel silenzio di te" (YouTube kOFFR8dTbak). Social: IG @il_dolore_ha_il_tuo_nome, FB /ildolorehailtuonome.

## Architettura
- Frontend React (CRA + craco), JSX (ambiente vincolato a .js/.jsx — niente TypeScript in questo ambiente)
- Tailwind + framer-motion + lenis (smooth scroll) + react-fast-marquee + jspdf
- Nessun backend usato: sito interamente statico
- Routing: /, /libro, /le-7-notti, /lettera
- Link e immagini centralizzati in src/constants.js (swap asset in un solo punto)

## Personas
- Persona in lutto che cerca conforto di notte, da telefono
- Chi vuole regalare il libro a qualcuno che soffre
- Follower social di Sabrina che arrivano dal passaparola

## Requisiti core (statici)
- Nessun prezzo in nessuna pagina
- Menù a vista in alto (no tendina) con le 3 pagine + Home
- "La lettera" presente in ogni pagina (nav pill + gift band nel footer)
- PDF lettera generato lato client, nessun server/email/account
- SEO: title/description, keyword naturali, OG/Twitter card, JSON-LD Book, sitemap.xml, robots.txt

## Implementato (12/10/2026 — giro di correzioni funnel)
- Tutti i pulsanti prodotto (libro e 7 notti, ovunque compaiano: home, /libro, /le-7-notti, /lettera) portano DIRETTAMENTE al link d'acquisto (Amazon / Beacons) con target=_blank, mai alla pagina interna
- Tolta la dicitura "su Beacons" dalle CTA delle 7 notti (resta "su Amazon" per il libro)
- /lettera: soft CTA anche per chi non invia — "nel libro guidato c'è tanto spazio per scrivere" → /libro
- /libro: sotto "Ascolta la canzone che ho scritto" ora appare il link visibile youtu.be/kOFFR8dTbak
- Copertine non più mozzate: video libro a ratio naturale (fix mobile), card home con object-contain, highlight libro a 2:3

## Implementato (12/10/2026 — revisione con asset reali)
- Asset reali integrati: copertina libro, copertina Le 7 notti, logo tondo (sfondo reso trasparente, cerchio) in /public/assets
- Farfalla VERA estratta dal logo (PNG trasparente con glow): nav, hero, firme, marquee, favicon, PDF
- /libro: video animato della copertina (asset utente) in spotlight al posto dell'immagine statica; riga bonus sostituita con "Ascolta la canzone che ho scritto, «Nel silenzio di te» — ti ci rivedrai"
- /le-7-notti: link Beacons reale attivo su entrambe le CTA; rimossa sezione "in arrivo"
- Footer: rimossa icona YouTube (canale Minna Bomber); embed home con maschera che copre titolo/nome canale + youtube-nocookie + modestbranding
- Scrollbar dorata (WebKit + Firefox)
- PDF lettera illustrato: carta antica a tutta pagina, farfalla dorata in testa, sigillo-logo in chiusura
- Audio della notte: toggle fisso in basso a sinistra, vento sintetico via WebAudio (nessun file esterno)

## Implementato (12/07/2026 — prima versione)
- Home: hero notturno con stelle animate, farfalla dorata fluttuante, reveal riga per riga, candela pulsante, parallasse; 3 card grandi (Il libro / Le 7 notti / La lettera); marquee editoriale lento con citazioni; voce di Sabrina con firma + farfalla; sezione libro in risalto (4 parti, citazione, CTA Amazon con tag affiliato bookspace0a-21); teaser Le 7 notti; embed YouTube "Nel silenzio di te"; gift band lettera; footer social/passaparola
- /libro: copertina sticky in spotlight, racconto delle 4 parti + lettera + permesso di vivere, 3 citazioni, CTA Amazon senza prezzo, ponte a Le 7 notti e La lettera
- /le-7-notti: apertura "Se stai leggendo queste righe, probabilmente è notte", anteprima 7 notti (citazioni vere notti 1/2/5), bonus "Notte zero: la canzone", ponte al libro e alla lettera
- /lettera: textarea su carta antica, "Affida al vento" (parole e petali dorati che volano via ~4.5s, poi messaggio di chiusura), "Custodiscila" (PDF illustrato), testo solo sul dispositivo
- SEO completo in public/index.html + componente Seo per pagina; og:image = copertina reale

## Note / in attesa
- Dominio in sitemap/robots/canonical: www.ildolorehailtuonome.it (placeholder da aggiornare al dominio reale)

## Backlog
- P1: dominio reale in canonical/sitemap/OG url
- P1: deploy Vercel (build statica `yarn build`, output /build)
- P2: nessuno al momento — utente ha chiuso il giro di modifiche ("questo sarà l'unico cambiamento che faremo")
