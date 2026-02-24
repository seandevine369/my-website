import { memo } from "react";
import { motion } from "framer-motion";

const ORBS = [
    { color: "bg-purple-800/20", size: 600, mobileSize: 250, top: "10%", left: "5%", duration: 20 },
    { color: "bg-green-900/15", size: 500, mobileSize: 220, top: "40%", left: "60%", duration: 25 },
    { color: "bg-blue-800/20", size: 700, mobileSize: 280, top: "45%", left: "20%", duration: 18 },
    { color: "bg-indigo-900/[0.18]", size: 450, mobileSize: 200, top: "15%", left: "70%", duration: 27 },
    { color: "bg-emerald-950/[0.12]", size: 400, mobileSize: 180, top: "55%", left: "45%", duration: 15 },
];

export default memo(function Nebula() {
    return (
        <>
            {ORBS.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${orb.color} mix-blend-screen pointer-events-none`}
                    style={{
                        width: `clamp(${orb.mobileSize}px, 40vw, ${orb.size}px)`,
                        height: `clamp(${orb.mobileSize}px, 40vw, ${orb.size}px)`,
                        top: orb.top,
                        left: orb.left,
                        filter: "blur(100px)",
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 30, -20, 0],
                        y: [0, -20, 15, 0],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Horizontal accent glow band */}
            <motion.div
                className="absolute left-0 w-full h-[80px] md:h-[120px] bg-gradient-to-r from-transparent via-blue-800/10 to-transparent mix-blend-screen pointer-events-none"
                style={{
                    top: "45%",
                    filter: "blur(80px)",
                    background:
                        "linear-gradient(to right, transparent, rgba(30, 64, 175, 0.18) 40%, rgba(6, 78, 59, 0.14) 60%, transparent)",
                }}
                animate={{ opacity: [0.5, 0.85, 0.5] }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </>
    );
});
