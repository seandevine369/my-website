import { memo, useMemo } from "react";
import { motion } from "framer-motion";

export default memo(function Footer() {
    const stars = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            size: 1 + Math.random() * 1.5,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 3,
        }));
    }, []);

    return (
        <footer className="relative bg-black overflow-hidden font-['Space_Grotesk']">
            {/* Gradient fade */}
            <div className="h-16 bg-gradient-to-b from-transparent to-black/80" />

            {/* Twinkling stars */}
            {stars.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute bg-white rounded-full pointer-events-none"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                    }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                        duration: s.duration,
                        delay: s.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Green accent line */}
            <div className="mx-auto max-w-xl h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

            {/* Text */}
            <div className="relative z-10 py-8 text-center">
                <p className="text-sm text-gray-400">
                    Designed & built by{" "}
                    <span className="text-green-400 font-semibold">Sean Devine</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
});
