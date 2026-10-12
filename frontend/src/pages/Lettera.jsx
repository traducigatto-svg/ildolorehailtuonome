import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Wind, PenLine } from "lucide-react";
import { jsPDF } from "jspdf";
import Seo from "@/components/Seo";
import StarrySky from "@/components/StarrySky";
import Butterfly, { ButterflyMark } from "@/components/Butterfly";
import { LineReveal, FadeUp } from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

const Eyebrow = ({ children }) => (
    <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
        {children}
    </p>
);

const WindRelease = ({ words, onDone }) => {
    const petals = useMemo(
        () =>
            Array.from({ length: 22 }, (_, i) => ({
                id: i,
                left: `${10 + Math.random() * 70}%`,
                top: `${35 + Math.random() * 45}%`,
                dx: 300 + Math.random() * 700,
                dy: -(250 + Math.random() * 450),
                rot: 120 + Math.random() * 400,
                delay: Math.random() * 0.9,
                size: 5 + Math.random() * 8,
            })),
        [],
    );

    useEffect(() => {
        const t = setTimeout(onDone, 4600);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <div
            data-testid="wind-release"
            className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
            aria-hidden="true"
        >
            {words.map((w, i) => (
                <motion.span
                    key={`w-${i}`}
                    className="absolute font-display italic text-gold-glow/90"
                    style={{ left: w.left, top: w.top, fontSize: w.size }}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        x: w.dx,
                        y: w.dy,
                        rotate: w.rot,
                        filter: ["blur(0px)", "blur(0px)", "blur(4px)"],
                    }}
                    transition={{ duration: 3.8, delay: w.delay, ease: [0.16, 0.6, 0.4, 1] }}
                >
                    {w.text}
                </motion.span>
            ))}
            {petals.map((p) => (
                <motion.div
                    key={`p-${p.id}`}
                    className="absolute rounded-t-full"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size * 1.4,
                        background:
                            "linear-gradient(135deg, rgba(249,229,150,0.9), rgba(212,175,55,0.35))",
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        x: p.dx,
                        y: p.dy,
                        rotate: p.rot,
                    }}
                    transition={{ duration: 4, delay: p.delay, ease: [0.16, 0.6, 0.4, 1] }}
                />
            ))}
        </div>
    );
};

const downloadPdf = (text) => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageHeight = 297;
    const margin = 24;
    let y = 34;

    doc.setFont("times", "italic");
    doc.setFontSize(20);
    doc.text("La mia lettera", margin, y);
    y += 9;
    doc.setFontSize(10);
    doc.setTextColor(120, 105, 70);
    doc.text(
        new Date().toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
        margin,
        y,
    );
    y += 12;
    doc.setDrawColor(180, 155, 90);
    doc.line(margin, y, 186, y);
    y += 12;

    doc.setFontSize(12.5);
    doc.setTextColor(45, 38, 24);
    const lines = doc.splitTextToSize(text, 162);
    lines.forEach((line) => {
        if (y > pageHeight - 30) {
            doc.addPage();
            y = 30;
        }
        doc.text(line, margin, y);
        y += 7.2;
    });

    if (y > pageHeight - 34) {
        doc.addPage();
        y = 30;
    }
    y += 10;
    doc.setFontSize(10);
    doc.setTextColor(120, 105, 70);
    doc.text("— scritta nel silenzio · il dolore ha il tuo nome", margin, y);

    doc.save("la-mia-lettera.pdf");
};

const Lettera = () => {
    const [text, setText] = useState("");
    const [phase, setPhase] = useState("writing");

    const words = useMemo(() => {
        if (phase !== "releasing") return [];
        return text
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 60)
            .map((t, i) => ({
                text: t,
                left: `${12 + Math.random() * 60}%`,
                top: `${40 + Math.random() * 40}%`,
                dx: 260 + Math.random() * 700,
                dy: -(220 + Math.random() * 420),
                rot: -40 + Math.random() * 80,
                delay: i * 0.045,
                size: 14 + Math.random() * 10,
            }));
    }, [phase, text]);

    const release = () => {
        if (!text.trim()) return;
        setPhase("releasing");
    };

    const keep = () => {
        if (!text.trim()) return;
        downloadPdf(text);
    };

    return (
        <main data-testid="lettera-page" className="relative min-h-screen overflow-hidden">
            <Seo
                title="La lettera — Un dono per te · Il dolore ha il tuo nome"
                description="Un posto, solo tuo, dove dire ciò che non hai fatto in tempo a dire. Scrivi la tua lettera e affidala al vento, oppure custodiscila. Resta solo sul tuo dispositivo."
            />
            <StarrySky density={70} imageOpacity={0.18} />
            <div
                className="candle-glow pointer-events-none absolute right-[10%] top-[18%] h-[380px] w-[380px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,0.13) 0%, transparent 65%)",
                }}
                aria-hidden="true"
            />
            <Butterfly className="absolute left-[10%] top-[22%] hidden lg:block" size="h-10 w-10" delay={2} />

            <div className="relative mx-auto max-w-3xl px-6 pb-32 pt-40">
                <FadeUp>
                    <Eyebrow>Un dono, per te</Eyebrow>
                </FadeUp>
                <LineReveal
                    lines={["La lettera"]}
                    className="mt-6 font-display text-5xl font-light italic text-ink sm:text-6xl"
                    delay={0.25}
                />
                <FadeUp delay={0.7}>
                    <p className="mt-8 max-w-xl font-display text-xl italic leading-relaxed text-ink/90 sm:text-2xl">
                        Questo è un piccolo pensiero per te. Un posto, solo tuo,
                        dove dire ciò che non hai fatto in tempo a dire.
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-loose text-mist sm:text-base">
                        Scrivi pure. Nessuno la leggerà mai. Quando avrai
                        finito, potrai affidarla al vento — e lasciarla andare.
                        Il testo resta solo sul tuo dispositivo: nessun server,
                        nessuna email, nessun account.
                    </p>
                </FadeUp>

                <AnimatePresence mode="wait">
                    {phase !== "done" ? (
                        <motion.div
                            key="paper"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16, transition: { duration: 0.5 } }}
                            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-14"
                        >
                            <div className="letter-paper relative rounded-md p-8 shadow-[0_40px_100px_rgba(0,0,0,0.7)] sm:p-12">
                                <PenLine
                                    className="absolute right-8 top-8 h-5 w-5 text-[#8a6d1f]/50"
                                    aria-hidden="true"
                                />
                                <label htmlFor="letter-textarea" className="sr-only">
                                    Scrivi la tua lettera
                                </label>
                                <textarea
                                    id="letter-textarea"
                                    data-testid="letter-textarea"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Caro, cara… comincia pure da dove vuoi."
                                    rows={12}
                                    className="letter-textarea w-full font-display text-xl italic leading-loose"
                                />
                            </div>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                                <CTAButton onClick={release} testid="release-to-wind-button">
                                    <span className="inline-flex items-center gap-2.5">
                                        <Wind className="h-4 w-4" />
                                        Affida al vento
                                    </span>
                                </CTAButton>
                                <CTAButton onClick={keep} sub="scarica il PDF" testid="keep-letter-button">
                                    <span className="inline-flex items-center gap-2.5">
                                        <Download className="h-4 w-4" />
                                        Custodiscila
                                    </span>
                                </CTAButton>
                            </div>
                            {phase === "releasing" && (
                                <WindRelease
                                    words={words}
                                    onDone={() => {
                                        setText("");
                                        setPhase("done");
                                    }}
                                />
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="done"
                            data-testid="letter-released-message"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-20 text-center"
                        >
                            <ButterflyMark className="mx-auto mb-8 h-12 w-12" />
                            <p className="mx-auto max-w-xl font-display text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
                                È andata, leggera. E tu sei ancora qui —
                                <span className="text-gold-glow"> e questo basta.</span>
                            </p>
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
                                <CTAButton to="/le-7-notti" testid="lettera-notti-cta">
                                    Resta con me per sette notti
                                </CTAButton>
                                <CTAButton to="/libro" testid="lettera-libro-cta">
                                    Scopri il libro guidato
                                </CTAButton>
                            </div>
                            <button
                                type="button"
                                data-testid="write-another-letter"
                                onClick={() => setPhase("writing")}
                                className="mt-8 font-display text-base italic text-mist underline decoration-gold/30 underline-offset-4 transition-colors duration-300 hover:text-gold-glow"
                            >
                                Scrivi un'altra lettera
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default Lettera;
