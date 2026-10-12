import { motion } from "framer-motion";
import { ASSETS } from "@/constants";

export const ButterflyMark = ({ className = "h-8 w-8" }) => (
    <img
        src={ASSETS.farfalla}
        alt=""
        aria-hidden="true"
        className={`object-contain ${className}`}
        draggable="false"
    />
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
            filter: "drop-shadow(0 0 16px rgba(249, 229, 150, 0.55))",
        }}
    >
        <ButterflyMark className={size} />
    </motion.div>
);

export default Butterfly;
