import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import StarrySky from "@/components/StarrySky";
import Butterfly, { ButterflyMark } from "@/components/Butterfly";
import { LineReveal, FadeUp, FadeIn } from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import QuoteMarquee from "@/components/Marquee";
import { LINKS, IMAGES } from "@/constants";

const Eyebrow = ({ children }) => (
    <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
        {children}
    </p>
);

const CARDS = [
    {
        to: "/libro",
        testid: "card-libro",
        img: IMAGES.coverLibro,
        alt: "Copertina del libro guidato Il dolore ha il tuo nome di Sabrina M.",
        contain: true,
        eyebrow: "Il cuore",
        title: "Il libro",
        desc: "Un libro guidato per elaborare il lutto, custodire chi ami e tornare a vivere.",
    },
    {
        to: "/le-7-notti",
        testid: "card-notti",
        img: IMAGES.coverNotti,
        alt: "Copertina de Le 7 notti di Sabrina M.: una lanterna accesa davanti alla notte",
        contain: true,
        eyebrow: "Il primo passo",
        title: "Le 7 notti",
        desc: "Se un libro intero ti sembra troppo, comincia da sette notti.",
    },
    {
        to: "/lettera",
        testid: "card-lettera",
        img: IMAGES.paper,
        alt: "Carta antica su cui scrivere la propria lettera",
        contain: false,
        eyebrow: "Un dono",
        title: "La lettera",
        desc: "Un posto, solo tuo, dove dire ciò che non hai fatto in tempo a dire.",
    },
];

const CHAPTERS = [
    { n: "I", t: "Dare un nome al dolore", d: "Perché ciò che ha un nome fa meno paura." },
    { n: "II", t: "Custodire chi ami", d: "La memoria come casa, non come prigione." },
    { n: "III", t: "Gli spazi per respirare", d: "Pagine da riempire solo quando ti senti." },
    { n: "IV", t: "Il permesso di vivere", d: "Tornare a sorridere senza sentirti in colpa." },
];

const Hero = () => {
    const { scrollY } = useScroll();
    const skyY = useTransform(scrollY, [0, 700], [0, 140]);
    return (
        <section
            data-testid="hero"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            <StarrySky parallaxY={skyY} density={110} />
            <div
                className="candle-glow pointer-events-none absolute -bottom-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(212,175,55,0.14) 0%, transparent 60%)",
                }}
                aria-hidden="true"
            />
            <Butterfly className="absolute right-[12%] top-[24%] hidden md:block" size="h-16 w-16" delay={1.6} />
            <Butterfly className="absolute left-[8%] top-[62%] hidden lg:block" size="h-9 w-9" delay={2.4} />
            <div className="relative mx-auto w-full max-w-5xl px-6 pb-28 pt-40">
                <FadeUp delay={0.1}>
                    <Eyebrow>Per chi sta attraversando un lutto</Eyebrow>
                </FadeUp>
                <LineReveal
                    lines={["Se la sera tutto", "diventa più difficile…"]}
                    className="mt-8 font-display text-4xl font-light italic leading-[1.08] tracking-wide text-ink sm:text-6xl"
                    delay={0.35}
                />
                <FadeUp delay={1.1} className="mt-10 max-w-2xl">
                    <p className="text-base leading-loose text-mist sm:text-lg">
                        «Le 7 notti» nasce per quei momenti. Non per spiegarti
                        come vivere il lutto, ma per offrirti qualche parola
                        sincera quando non sai da dove cominciare.
                    </p>
                </FadeUp>
                <FadeUp delay={1.4} className="mt-12 flex flex-wrap items-center gap-4">
                    <CTAButton href={LINKS.beacons} testid="hero-cta-notti">
                        Resta con me per sette notti
                    </CTAButton>
                    <Link
                        to="/libro"
                        data-testid="hero-cta-libro"
                        className="group inline-flex items-center gap-2 px-4 py-3 font-display text-lg italic text-mist transition-colors duration-300 hover:text-gold-glow"
                    >
                        Scopri il libro
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </FadeUp>
            </div>
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ opacity: [0.25, 0.7, 0.25] }}
                transition={{ duration: 3, repeat: Infinity }}
                aria-hidden="true"
            >
                <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </motion.div>
        </section>
    );
};

const ProductCards = () => (
    <section data-testid="product-cards" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <FadeUp>
            <Eyebrow>Tre modi per restare vicini</Eyebrow>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-light italic leading-snug text-ink sm:text-4xl">
                Scegli da dove cominciare. Non c'è un ordine giusto.
            </h2>
        </FadeUp>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
            {CARDS.map((c, i) => (
                <FadeUp key={c.to} delay={i * 0.15}>
                    <Link
                        to={c.to}
                        data-testid={c.testid}
                        className="group relative block overflow-hidden rounded-2xl border border-gold/15 bg-[#0A0E1A]"
                    >
                        <div className="aspect-[3/4] overflow-hidden">
                            <img
                                src={c.img}
                                alt={c.alt}
                                loading="lazy"
                                className={`h-full w-full transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.03] ${
                                    c.contain
                                        ? "object-contain opacity-90 group-hover:opacity-100"
                                        : "object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90"
                                }`}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-7">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-gold/90">
                                {c.eyebrow}
                            </p>
                            <h3 className="mt-2 font-display text-3xl italic text-ink">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-mist">
                                {c.desc}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 font-display text-base italic text-gold-glow">
                                entra
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </span>
                        </div>
                    </Link>
                </FadeUp>
            ))}
        </div>
    </section>
);

const SabrinaVoice = () => (
    <section data-testid="sabrina-voice" className="relative border-t border-gold/10 bg-night-soft/40">
        <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
            <FadeUp>
                <Eyebrow>La voce di Sabrina</Eyebrow>
            </FadeUp>
            <div className="mt-12 space-y-10">
                {[
                    "Non mi interessa apparire.",
                    "Ho perso qualcuno anch'io, e ho imparato cosa fa male e cosa, invece, tiene insieme.",
                    "Qui dico semplicemente le parole che avrei voluto sentirmi dire quella notte.",
                    "Immagina un'amica che ti prende per mano e resta, in silenzio, finché serve.",
                ].map((line, i) => (
                    <FadeUp key={i} delay={i * 0.12}>
                        <p className="font-display text-2xl font-light italic leading-relaxed text-ink/90 sm:text-3xl">
                            {line}
                        </p>
                    </FadeUp>
                ))}
            </div>
            <FadeIn delay={0.3} className="mt-16 flex items-center justify-end gap-4">
                <span className="font-display text-2xl italic text-gold-glow">
                    Sabrina M.
                </span>
                <ButterflyMark className="h-8 w-8" />
            </FadeIn>
        </div>
    </section>
);

const BookHighlight = () => (
    <section data-testid="book-highlight" className="relative overflow-hidden">
        <div
            className="candle-glow pointer-events-none absolute right-[-10%] top-[10%] h-[480px] w-[480px] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)",
            }}
            aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 sm:py-36 lg:grid-cols-2">
            <FadeUp className="relative">
                <div
                    className="absolute -inset-8 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                />
                <motion.img
                    src={IMAGES.coverLibro}
                    alt="Copertina del libro guidato Il dolore ha il tuo nome"
                    loading="lazy"
                    className="relative mx-auto aspect-[2/3] w-full max-w-sm rounded-lg border border-gold/25 object-cover shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                    whileHover={{ rotate: -1.2, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <Butterfly className="absolute -right-2 -top-6" size="h-10 w-10" delay={0.8} />
            </FadeUp>
            <div>
                <FadeUp>
                    <Eyebrow>Il libro guidato · cartaceo</Eyebrow>
                    <h2 className="mt-6 font-display text-3xl font-light italic leading-snug text-ink sm:text-5xl">
                        Il dolore ha il tuo nome
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-loose text-mist sm:text-lg">
                        Un libro guidato per elaborare il lutto, custodire chi
                        ami e tornare a vivere. Non un manuale: un cammino da
                        fare insieme, una pagina alla volta.
                    </p>
                </FadeUp>
                <div className="mt-10 space-y-5">
                    {CHAPTERS.map((c, i) => (
                        <FadeUp key={c.n} delay={i * 0.1}>
                            <div className="flex items-baseline gap-4 border-b border-gold/10 pb-4">
                                <span className="font-display text-lg italic text-gold">
                                    {c.n}.
                                </span>
                                <div>
                                    <p className="font-display text-xl italic text-ink">
                                        {c.t}
                                    </p>
                                    <p className="mt-1 text-sm text-mist">{c.d}</p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
                <FadeUp delay={0.4}>
                    <blockquote className="mt-10 border-l-2 border-gold/50 pl-6 font-display text-xl italic leading-relaxed text-gold-glow sm:text-2xl">
                        «Non devi smettere di amare per ricominciare a vivere.
                        Puoi portarlo con te.»
                    </blockquote>
                    <div className="mt-10 flex flex-wrap items-center gap-5">
                        <CTAButton href={LINKS.amazon} sub="su Amazon" testid="home-book-amazon-cta">
                            Lascia che ti accompagni
                        </CTAButton>
                    </div>
                    <p className="mt-6 text-sm italic text-mist">
                        Non restare solo stanotte.{" "}
                        <a
                            href={LINKS.beacons}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="home-micro-cta-notti"
                            className="text-gold underline decoration-gold/30 underline-offset-4 transition-colors duration-300 hover:text-gold-glow"
                        >
                            Comincia da sette notti.
                        </a>
                    </p>
                </FadeUp>
            </div>
        </div>
    </section>
);

const NottiTeaser = () => (
    <section data-testid="notti-teaser" className="relative overflow-hidden border-t border-gold/10 bg-night-soft/40">
        <StarrySky image={false} density={45} />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
            <FadeUp>
                <Eyebrow>Il primo passo · digitale</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-light italic leading-snug text-ink sm:text-4xl">
                    Se un libro intero ti sembra troppo,
                    <span className="text-gold-glow"> comincia da sette notti.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-loose text-mist">
                    Letture brevi, piccoli gesti e parole per attraversare il
                    lutto quando è buio. Una notte alla volta, senza fretta.
                </p>
                <div className="mt-10">
                    <CTAButton href={LINKS.beacons} testid="home-notti-cta">
                        Comincia stanotte
                    </CTAButton>
                </div>
            </FadeUp>
        </div>
    </section>
);

const Song = () => (
    <section data-testid="song-section" className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
        <FadeUp className="text-center">
            <Eyebrow>La canzone</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-light italic text-ink sm:text-4xl">
                Nel silenzio di te
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-loose text-mist">
                Le stesse parole, in musica. Da ascoltare quando la casa è
                troppo silenziosa.
            </p>
        </FadeUp>
        <FadeUp delay={0.2} className="mt-12">
            <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    <div className="aspect-video">
                        <iframe
                            src={LINKS.youtubeEmbed}
                            title="Nel silenzio di te — la canzone"
                            data-testid="youtube-embed"
                            className="h-full w-full"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-0 h-16 rounded-t-2xl bg-gradient-to-b from-night via-night/90 to-transparent"
                    data-testid="youtube-channel-mask"
                    aria-hidden="true"
                />
            </div>
        </FadeUp>
    </section>
);

const Home = () => (
    <main data-testid="home-page">
        <Seo
            title="Il dolore ha il tuo nome — Un libro guidato per elaborare il lutto"
            description="Un libro guidato per elaborare il lutto, custodire chi ami e tornare a vivere. Parole di conforto per chi ha perso una persona cara, Le 7 notti e una lettera da affidare al vento."
        />
        <Hero />
        <ProductCards />
        <QuoteMarquee />
        <SabrinaVoice />
        <BookHighlight />
        <NottiTeaser />
        <Song />
    </main>
);

export default Home;
