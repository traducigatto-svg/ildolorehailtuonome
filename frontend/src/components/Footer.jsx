import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { ButterflyMark } from "@/components/Butterfly";
import { FadeUp } from "@/components/Reveal";
import { LINKS, NAV_ITEMS } from "@/constants";

const GiftBand = () => (
    <section
        data-testid="gift-band"
        className="relative overflow-hidden border-t border-gold/10"
    >
        <div
            className="candle-glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
                background:
                    "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 65%)",
            }}
            aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
            <FadeUp>
                <ButterflyMark className="mx-auto mb-8 h-9 w-9 opacity-80" />
                <p className="font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
                    Un piccolo pensiero per te che mi segui:
                    <span className="text-gold-glow"> scrivi la tua lettera.</span>
                </p>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                    Un posto, solo tuo, dove dire ciò che non hai fatto in tempo a
                    dire. Nessuno la leggerà mai.
                </p>
                <Link
                    to="/lettera"
                    data-testid="gift-band-cta"
                    className="mt-10 inline-block rounded-full border border-gold/50 px-8 py-3 font-display text-lg italic tracking-wide text-gold transition-[background-color,color,border-color] duration-300 hover:border-gold hover:bg-gold hover:text-night"
                >
                    Scrivi la tua lettera
                </Link>
            </FadeUp>
        </div>
    </section>
);

const Footer = () => {
    const { pathname } = useLocation();
    return (
        <footer data-testid="footer" className="relative">
            {pathname !== "/lettera" && <GiftBand />}
            <div className="gold-hairline" />
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <ButterflyMark className="h-6 w-6" />
                            <span className="font-display text-lg italic text-gold-glow">
                                Il dolore ha il tuo nome
                            </span>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
                            Se conosci qualcuno che sta attraversando una notte
                            difficile, fagli arrivare questa pagina. A volte il
                            passaparola è una carezza.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={LINKS.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="social-instagram"
                            aria-label="Instagram @il_dolore_ha_il_tuo_nome"
                            className="rounded-full border border-gold/25 p-3 text-gold transition-[background-color,border-color] duration-300 hover:border-gold hover:bg-gold/10"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a
                            href={LINKS.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="social-facebook"
                            aria-label="Facebook ildolorehailtuonome"
                            className="rounded-full border border-gold/25 p-3 text-gold transition-[background-color,border-color] duration-300 hover:border-gold hover:bg-gold/10"
                        >
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a
                            href={LINKS.youtubeSong}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="social-youtube"
                            aria-label="La canzone Nel silenzio di te su YouTube"
                            className="rounded-full border border-gold/25 p-3 text-gold transition-[background-color,border-color] duration-300 hover:border-gold hover:bg-gold/10"
                        >
                            <Youtube className="h-4 w-4" />
                        </a>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gold/10 pt-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            data-testid={`footer-${item.testid}`}
                            className="font-display text-sm italic tracking-wide text-mist transition-colors duration-300 hover:text-gold-glow"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <span className="ml-auto text-xs text-mist/60">
                        © {new Date().getFullYear()} Sabrina M. — con cura, nella
                        notte.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
