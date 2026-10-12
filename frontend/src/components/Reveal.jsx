import { motion } from "framer-motion";

export const LineReveal = ({
    lines,
    as: Tag = "h1",
    className = "",
    lineClassName = "",
    delay = 0.2,
    stagger = 0.16,
}) => (
    <Tag className={className}>
        {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                    className={`block ${lineClassName}`}
                    initial={{ y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1.1,
                        delay: delay + i * stagger,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {line}
                </motion.span>
            </span>
        ))}
    </Tag>
);

export const FadeUp = ({
    children,
    delay = 0,
    y = 28,
    className = "",
    once = true,
}) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-60px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);
