import { motion } from "framer-motion";

export const ButterflyMark = ({ className = "h-8 w-8" }) => (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        <defs>
            <radialGradient id="bfly-g" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#F9E596" />
                <stop offset="55%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8a6d1f" />
            </radialGradient>
        </defs>
        <g fill="url(#bfly-g)">
            <path d="M50 52 C40 24 14 12 10 30 C6 46 30 56 50 52 Z" />
            <path d="M50 52 C60 24 86 12 90 30 C94 46 70 56 50 52 Z" />
            <path d="M50 56 C42 62 26 70 30 80 C34 88 48 74 50 60 Z" />
            <path d="M50 56 C58 62 74 70 70 80 C66 88 52 74 50 60 Z" />
        </g>
        <ellipse cx="50" cy="56" rx="2.2" ry="10" fill="#F9E596" />
        <path
            d="M48 46 C44 38 40 34 36 32 M52 46 C56 38 60 34 64 32"
            stroke="#F9E596"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);

const Butterfly = ({ className = "", size = "h-14 w-14", delay = 0 }) => (
    <motion.div
        className={`pointer-events-none ${className}`}
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            y: [0, -14, 0, -8, 0],
            x: [0, 8, 0, -6, 0],
            rotate: [-2, 2, -2],
        }}
        transition={{
            opacity: { duration: 2, delay },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut", delay },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        }}
        style={{
            filter: "drop-shadow(0 0 14px rgba(249, 229, 150, 0.45))",
        }}
    >
        <ButterflyMark className={size} />
    </motion.div>
);

export default Butterfly;
