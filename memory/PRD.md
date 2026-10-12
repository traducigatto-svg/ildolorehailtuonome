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

## Implementato (12/07/2026)
- Home: hero notturno con stelle animate, farfalla dorata fluttuante, reveal riga per riga, candela pulsante, parallasse; 3 card grandi (Il libro / Le 7 notti / La lettera); marquee editoriale lento con citazioni; voce di Sabrina con firma + farfalla; sezione libro in risalto (4 parti, citazione, CTA Amazon con tag affiliato bookspace0a-21); teaser Le 7 notti; embed YouTube "Nel silenzio di te"; gift band lettera; footer social/passaparola
- /libro: copertina sticky in spotlight, racconto delle 4 parti + lettera + permesso di vivere, 3 citazioni, CTA Amazon senza prezzo, bonus canzone, ponte a Le 7 notti e La lettera
- /le-7-notti: apertura "Se stai leggendo queste righe, probabilmente è notte", anteprima 7 notti (citazioni vere notti 1/2/5), bonus "Notte zero: la canzone", sezione #in-arrivo (placeholder Beacons), ponte al libro e alla lettera
- /lettera: textarea su carta antica, "Affida al vento" (parole e petali dorati che volano via ~4.5s, poi messaggio di chiusura), "Custodiscila" (PDF jsPDF in italiano, "la-mia-lettera.pdf"), testo solo sul dispositivo
- Favicon/logo: farfalla dorata SVG originale
- .npmrc con legacy-peer-deps=true; nessun react-day-picker usato
- SEO completo in public/index.html + componente Seo per pagina

## Note / in attesa
- Asset reali (copertina libro, copertina 7 notti, logo farfalla) NON pervenuti nel job: attualmente placeholder curati (Unsplash). Sostituire in src/constants.js (IMAGES) appena ricaricati
- Link Beacons: LINKS.beacons = "#in-arrivo" in src/constants.js — sostituire con l'URL reale
- Dominio in sitemap/robots/canonical: www.ildolorehailtuonome.it (placeholder da aggiornare al dominio reale)

## Backlog
- P0: inserire asset reali (copertine, logo) e link Beacons reale
- P1: dominio reale in canonical/sitemap/OG url; og:image con copertina reale + farfalla
- P1: deploy Vercel (build statica `yarn build`, output /build)
- P2: versione stampabile della lettera con texture carta nel PDF (immagine di sfondo)
- P2: micro-audio ambientale opzionale (candela/vento) con toggle
