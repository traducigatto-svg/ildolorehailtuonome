import { useMemo } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants";

const StarrySky = ({
    density = 90,
    image = true,
    imageOpacity = 0.28,
    parallaxY = null,
}) => {
    const stars = useMemo(
        () =>
            Array.from({ length: density }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: Math.random() * 2.2 + 0.8,
                dur: `${3 + Math.random() * 6}s`,
                delay: `${Math.random() * 6}s`,
            })),
        [density],
    );

    return (
        <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            {image && (
                <motion.div
                    className="absolute -inset-[12%]"
                    style={parallaxY ? { y: parallaxY } : undefined}
                >
                    <img
                        src={IMAGES.nightSky}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ opacity: imageOpacity }}
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-transparent to-night" />
                </motion.div>
            )}
            {stars.map((s) => (
                <span
                    key={s.id}
                    className="star"
                    style={{
                        left: s.left,
                        top: s.top,
                        width: s.size,
                        height: s.size,
                        "--dur": s.dur,
                        "--delay": s.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default StarrySky;
