import { motion, useScroll, useTransform } from "framer-motion";
import { Music, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import StarrySky from "@/components/StarrySky";
import Butterfly from "@/components/Butterfly";
import { LineReveal, FadeUp } from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import { LINKS, IMAGES } from "@/constants";

const Eyebrow = ({ children }) => (
    <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
        {children}
    </p>
);

const NIGHTS = [
    {
        n: "Notte 1",
        t: "Arrivare a domani",
        quote: "Non devi essere forte. Devi solo arrivare a domani.",
    },
    {
        n: "Notte 2",
        t: "Non è una colpa",
        quote: "È la prova che hai amato, non che hai sbagliato.",
    },
    {
        n: "Notte 3",
        t: "Il corpo che ricorda",
        quote: null,
        d: "Quando le mani cercano ciò che non c'è più.",
    },
    {
        n: "Notte 4",
        t: "Le ore più buie",
        quote: null,
        d: "Piccoli gesti per attraversare il punto più basso della notte.",
    },
    {
        n: "Notte 5",
        t: "Chi non è sparito",
        quote: "La persona che hai perso non è sparita dalla tua vita.",
    },
    {
        n: "Notte 6",
        t: "Respirare di nuovo",
        quote: null,
        d: "Il primo respiro che non chiede scusa.",
    },
    {
        n: "Notte 7",
        t: "Una crepa di luce",
        quote: null,
        d: "Non la guarigione. Solo l'inizio di un po' di tregua.",
    },
];

const Notti = () => {
    const { scrollY } = useScroll();
    const skyY = useTransform(scrollY, [0, 600], [0, 110]);

    return (
        <main data-testid="notti-page">
            <Seo
                title="Le 7 notti — Parole per attraversare il lutto quando è buio"
                description="Se un libro intero ti sembra troppo, comincia da sette notti. Letture brevi, piccoli gesti e parole di conforto per chi ha perso una persona cara."
            />

            <section className="relative overflow-hidden pt-40">
                <StarrySky parallaxY={skyY} density={90} imageOpacity={0.24} />
                <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 lg:grid-cols-2">
                    <div>
                        <FadeUp delay={0.1}>
                            <Eyebrow>Il primo passo · digitale</Eyebrow>
                        </FadeUp>
                        <LineReveal
                            lines={["Se stai leggendo", "queste righe,", "probabilmente è notte."]}
                            className="mt-6 font-display text-4xl font-light italic leading-[1.1] text-ink sm:text-5xl"
                            delay={0.3}
                        />
                        <FadeUp delay={1}>
                            <p className="mt-8 max-w-lg text-base leading-loose text-mist sm:text-lg">
                                «Le 7 notti» — letture brevi, piccoli gesti e
                                parole per attraversare il lutto quando è buio.
                                Per chi non ha la forza di un libro intero, ma
                                ha bisogno che qualcuno resti sveglio con lei,
                                con lui.
                            </p>
                            <div className="mt-10">
                                <CTAButton href={LINKS.beacons} testid="notti-beacons-cta">
                                    Resta con me per sette notti
                                </CTAButton>
                            </div>
                        </FadeUp>
                    </div>
                    <FadeUp delay={0.25} className="relative">
                        <div
                            className="absolute -inset-8 rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)",
                            }}
                            aria-hidden="true"
                        />
                        <motion.img
                            src={IMAGES.coverNotti}
                            alt="Copertina de Le 7 notti: onde scure nella notte"
                            className="relative mx-auto aspect-[3/4] w-full max-w-sm rounded-lg border border-gold/25 object-cover shadow-[0_40px_100px_rgba(0,0,0,0.75)]"
                            initial={{ opacity: 0, y: 40, rotate: -2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ rotate: 1.2, scale: 1.015 }}
                        />
                        <Butterfly className="absolute -left-2 -top-6" size="h-10 w-10" delay={1.6} />
                    </FadeUp>
                </div>
            </section>

            <section className="border-t border-gold/10 bg-night-soft/40">
                <div className="mx-auto max-w-4xl px-6 py-28">
                    <FadeUp className="text-center">
                        <Eyebrow>Un'anteprima</Eyebrow>
                        <h2 className="mt-6 font-display text-3xl font-light italic text-ink sm:text-4xl">
                            Le sette notti
                        </h2>
                    </FadeUp>
                    <div className="mt-16 space-y-2">
                        {NIGHTS.map((night, i) => (
                            <FadeUp key={night.n} delay={i * 0.06}>
                                <div
                                    data-testid={`night-${i + 1}`}
                                    className="group flex flex-col gap-2 border-b border-gold/10 px-2 py-7 transition-colors duration-500 hover:bg-gold/5 sm:flex-row sm:items-baseline sm:gap-8 sm:px-6"
                                >
                                    <span className="w-24 shrink-0 font-display text-lg italic text-gold">
                                        {night.n}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-2xl italic text-ink">
                                            {night.t}
                                        </h3>
                                        {night.quote ? (
                                            <p className="mt-2 font-display text-lg italic leading-relaxed text-gold-glow">
                                                «{night.quote}»
                                            </p>
                                        ) : (
                                            <p className="mt-2 text-sm leading-relaxed text-mist">
                                                {night.d}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    <FadeUp delay={0.2} className="mt-12 flex justify-center">
                        <a
                            href={LINKS.youtubeSong}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="notti-bonus-song"
                            className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 px-6 py-3 text-sm italic text-mist transition-[border-color,color] duration-300 hover:border-gold hover:text-gold-glow"
                        >
                            <Music className="h-4 w-4 text-gold" />
                            Bonus — Notte zero: la canzone «Nel silenzio di te»
                        </a>
                    </FadeUp>
                </div>
            </section>

            <section
                id="in-arrivo"
                data-testid="notti-in-arrivo"
                className="relative overflow-hidden"
            >
                <div
                    className="candle-glow pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 65%)",
                    }}
                    aria-hidden="true"
                />
                <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-36">
                    <FadeUp>
                        <Eyebrow>Disponibile a breve</Eyebrow>
                        <p className="mt-6 font-display text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
                            «Le 7 notti» sta arrivando.
                        </p>
                        <p className="mx-auto mt-5 max-w-md text-sm leading-loose text-mist sm:text-base">
                            Il passo è quasi pronto. Segui{" "}
                            <a
                                href={LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="notti-instagram-link"
                                className="text-gold underline decoration-gold/30 underline-offset-4 transition-colors duration-300 hover:text-gold-glow"
                            >
                                @il_dolore_ha_il_tuo_nome
                            </a>{" "}
                            per sapere quando sarà disponibile — sarà una delle
                            prime cose che dirò.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="border-t border-gold/10">
                <div className="mx-auto max-w-3xl px-6 py-24 text-center">
                    <FadeUp>
                        <p className="font-display text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
                            Quando ti sentirai pronta, pronto, il libro ti
                            aspetta. E intanto, la lettera è già tua.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                            <CTAButton to="/libro" testid="notti-libro-cta">
                                Scopri il libro guidato
                            </CTAButton>
                            <Link
                                to="/lettera"
                                data-testid="notti-lettera-cta"
                                className="group inline-flex items-center gap-2 px-4 py-3 font-display text-lg italic text-mist transition-colors duration-300 hover:text-gold-glow"
                            >
                                Scrivi la tua lettera
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
};

export default Notti;
