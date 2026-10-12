import { motion, useScroll, useTransform } from "framer-motion";
import { Music } from "lucide-react";
import Seo from "@/components/Seo";
import StarrySky from "@/components/StarrySky";
import Butterfly from "@/components/Butterfly";
import { LineReveal, FadeUp } from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import QuoteMarquee from "@/components/Marquee";
import { LINKS, IMAGES } from "@/constants";

const Eyebrow = ({ children }) => (
    <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
        {children}
    </p>
);

const PARTS = [
    {
        n: "Parte I",
        t: "Dare un nome al dolore",
        d: "Il dolore che ha un nome fa meno paura. Qui impari a chiamarlo, a guardarlo, a non lasciarlo parlare da solo.",
    },
    {
        n: "Parte II",
        t: "Custodire chi ami",
        d: "Pagine per raccogliere i ricordi: la memoria come casa in cui tornare, non come prigione da cui uscire.",
    },
    {
        n: "Parte III",
        t: "Gli spazi per respirare",
        d: "Pagine bianche, da riempire solo quando ti senti. Nessuna scadenza, nessun esercizio obbligato. Solo respiro.",
    },
    {
        n: "Parte IV",
        t: "Il permesso di vivere",
        d: "La parte più delicata: darsi il permesso di tornare a sorridere, senza sentirsi in colpa verso chi non c'è più.",
    },
];

const QUOTES = [
    "Il dolore non chiede di essere sconfitto. Chiede solo di essere attraversato.",
    "L'amore che porti non pesa: scalda.",
    "Non esiste il modo giusto di dire addio. Esiste il tuo.",
];

const Libro = () => {
    const { scrollY } = useScroll();
    const skyY = useTransform(scrollY, [0, 600], [0, 110]);

    return (
        <main data-testid="libro-page">
            <Seo
                title="Il libro guidato — Il dolore ha il tuo nome"
                description="Un libro guidato per elaborare il lutto, custodire chi ami e tornare a vivere. Quattro parti, spazi per respirare e il permesso di vivere. Disponibile su Amazon."
            />

            <section className="relative overflow-hidden pt-40">
                <StarrySky parallaxY={skyY} density={80} imageOpacity={0.22} />
                <div
                    className="candle-glow pointer-events-none absolute left-[8%] top-[30%] h-[420px] w-[420px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 65%)",
                    }}
                    aria-hidden="true"
                />
                <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <FadeUp>
                            <div className="relative">
                                <div
                                    className="absolute -inset-10 rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                                    }}
                                    aria-hidden="true"
                                />
                                <motion.img
                                    src={IMAGES.coverLibro}
                                    alt="Copertina del libro guidato Il dolore ha il tuo nome di Sabrina M."
                                    className="relative mx-auto aspect-[3/4] w-full max-w-md rounded-lg border border-gold/25 object-cover shadow-[0_40px_100px_rgba(0,0,0,0.75)]"
                                    initial={{ opacity: 0, y: 40, rotate: 2 }}
                                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ rotate: -1.2, scale: 1.015 }}
                                />
                                <Butterfly className="absolute -right-4 -top-8" size="h-12 w-12" delay={1.4} />
                            </div>
                        </FadeUp>
                    </div>

                    <div>
                        <FadeUp delay={0.15}>
                            <Eyebrow>Il libro guidato · cartaceo · Amazon</Eyebrow>
                        </FadeUp>
                        <LineReveal
                            lines={["Un cammino,", "non un manuale."]}
                            className="mt-6 font-display text-4xl font-light italic leading-[1.08] text-ink sm:text-6xl"
                            delay={0.3}
                        />
                        <FadeUp delay={0.9}>
                            <p className="mt-8 max-w-xl text-base leading-loose text-mist sm:text-lg">
                                Un libro guidato per elaborare il lutto,
                                custodire chi ami e tornare a vivere. Lo sfogli
                                quando vuoi, scrivi quando puoi, ti fermi quando
                                serve. Non ti chiede di essere forte: ti chiede
                                solo di esserci, una pagina alla volta.
                            </p>
                        </FadeUp>

                        <div className="mt-14 space-y-8">
                            {PARTS.map((p, i) => (
                                <FadeUp key={p.n} delay={i * 0.08}>
                                    <div className="border-l border-gold/25 pl-6">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                                            {p.n}
                                        </p>
                                        <h3 className="mt-1.5 font-display text-2xl italic text-ink">
                                            {p.t}
                                        </h3>
                                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-mist">
                                            {p.d}
                                        </p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>

                        <FadeUp delay={0.2}>
                            <p className="mt-12 max-w-xl text-sm leading-relaxed text-mist">
                                E poi c'è <span className="italic text-ink">la lettera</span>:
                                l'ultima pagina è tua, per dire ciò che non hai
                                fatto in tempo a dire. Perché il cammino finisce
                                dove ricomincia la vita — con{" "}
                                <span className="italic text-ink">il permesso di vivere</span>.
                            </p>
                        </FadeUp>

                        <div className="mt-14 space-y-8">
                            {QUOTES.map((q, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <blockquote className="font-display text-xl italic leading-relaxed text-gold-glow sm:text-2xl">
                                        «{q}»
                                    </blockquote>
                                </FadeUp>
                            ))}
                        </div>

                        <FadeUp delay={0.25} className="mt-14">
                            <div className="flex flex-wrap items-center gap-5">
                                <CTAButton href={LINKS.amazon} sub="su Amazon" testid="libro-amazon-cta">
                                    Tienilo vicino nelle notti difficili
                                </CTAButton>
                            </div>
                            <a
                                href={LINKS.youtubeSong}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="libro-bonus-song"
                                className="mt-7 inline-flex items-center gap-2.5 text-sm italic text-mist transition-colors duration-300 hover:text-gold-glow"
                            >
                                <Music className="h-4 w-4 text-gold" />
                                Con il libro, in regalo, la canzone completa «Nel silenzio di te»
                            </a>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <QuoteMarquee />

            <section className="mx-auto max-w-3xl px-6 py-28 text-center">
                <FadeUp>
                    <Eyebrow>Se un libro intero ti sembra troppo</Eyebrow>
                    <p className="mt-6 font-display text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
                        Comincia da sette notti. Una alla volta,
                        quando la casa si fa silenziosa.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                        <CTAButton to="/le-7-notti" testid="libro-notti-cta">
                            Comincia stanotte
                        </CTAButton>
                        <CTAButton to="/lettera" testid="libro-lettera-cta">
                            Scrivi la tua lettera
                        </CTAButton>
                    </div>
                </FadeUp>
            </section>
        </main>
    );
};

export default Libro;
