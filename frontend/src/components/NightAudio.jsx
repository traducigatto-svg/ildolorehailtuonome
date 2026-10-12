import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const NightAudio = () => {
    const ctxRef = useRef(null);
    const nodesRef = useRef(null);
    const [on, setOn] = useState(false);

    const toggle = () => {
        if (!on) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return;
            const ctx = ctxRef.current || new Ctx();
            ctxRef.current = ctx;
            ctx.resume();

            const len = ctx.sampleRate * 4;
            const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            let last = 0;
            for (let i = 0; i < len; i++) {
                const white = Math.random() * 2 - 1;
                last = (last + 0.02 * white) / 1.02;
                data[i] = last * 3.2;
            }
            const src = ctx.createBufferSource();
            src.buffer = buffer;
            src.loop = true;

            const filter = ctx.createBiquadFilter();
            filter.type = "lowpass";
            filter.frequency.value = 420;
            filter.Q.value = 0.4;

            const gain = ctx.createGain();
            gain.gain.value = 0;
            gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 2.5);

            const lfo = ctx.createOscillator();
            lfo.frequency.value = 0.08;
            const lfoGain = ctx.createGain();
            lfoGain.gain.value = 0.03;
            lfo.connect(lfoGain);
            lfoGain.connect(gain.gain);

            const lfo2 = ctx.createOscillator();
            lfo2.frequency.value = 0.05;
            const lfo2Gain = ctx.createGain();
            lfo2Gain.gain.value = 130;
            lfo2.connect(lfo2Gain);
            lfo2Gain.connect(filter.frequency);

            src.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            src.start();
            lfo.start();
            lfo2.start();
            nodesRef.current = { src, lfo, lfo2, gain };
            setOn(true);
        } else {
            const n = nodesRef.current;
            const ctx = ctxRef.current;
            if (n && ctx) {
                const t = ctx.currentTime;
                n.gain.gain.cancelScheduledValues(t);
                n.gain.gain.setValueAtTime(n.gain.gain.value, t);
                n.gain.gain.linearRampToValueAtTime(0, t + 0.8);
                setTimeout(() => {
                    try {
                        n.src.stop();
                        n.lfo.stop();
                        n.lfo2.stop();
                    } catch (e) {}
                }, 900);
                nodesRef.current = null;
            }
            setOn(false);
        }
    };

    return (
        <button
            type="button"
            data-testid="night-audio-toggle"
            onClick={toggle}
            aria-label={on ? "Disattiva l'audio della notte" : "Attiva l'audio della notte"}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-full border border-gold/30 bg-night/80 px-4 py-2.5 text-gold backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
        >
            {on ? (
                <Volume2 className="h-4 w-4" aria-hidden="true" />
            ) : (
                <VolumeX className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="font-display text-sm italic">
                {on ? "la notte suona piano" : "audio della notte"}
            </span>
        </button>
    );
};

export default NightAudio;
