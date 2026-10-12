import Marquee from "react-fast-marquee";
import { ButterflyMark } from "@/components/Butterfly";

const QUOTES = [
    "Non devi essere forte. Devi solo arrivare a domani.",
    "È la prova che hai amato, non che hai sbagliato.",
    "La persona che hai perso non è sparita dalla tua vita.",
    "Non devi smettere di amare per ricominciare a vivere.",
    "Non restare solo stanotte.",
];

const QuoteMarquee = () => (
    <div
        data-testid="quote-marquee"
        className="border-y border-gold/10 bg-night-soft/60 py-7"
        aria-hidden="true"
    >
        <Marquee speed={18} gradient={false} pauseOnHover>
            {QUOTES.map((q, i) => (
                <span key={i} className="mx-10 flex items-center gap-10">
                    <span className="whitespace-nowrap font-display text-xl italic tracking-wide text-mist sm:text-2xl">
                        {q}
                    </span>
                    <ButterflyMark className="h-4 w-4 opacity-50" />
                </span>
            ))}
        </Marquee>
    </div>
);

export default QuoteMarquee;
