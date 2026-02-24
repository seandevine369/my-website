import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const STREAKS = [
    { top: "10%", left: "20%", width: 80, rotation: 25, delay: 0, pause: 10 },
    { top: "30%", left: "60%", width: 100, rotation: 15, delay: 3, pause: 12 },
    { top: "50%", left: "40%", width: 90, rotation: 35, delay: 6, pause: 8 },
    { top: "20%", left: "80%", width: 85, rotation: 20, delay: 9, pause: 15 },
    { top: "70%", left: "10%", width: 95, rotation: 30, delay: 4, pause: 11 },
];

export default memo(function ShootingStars() {
    const streaks = useMemo(() => STREAKS, []);

    return (
        <>
            {streaks.map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-white via-white/60 to-transparent rounded-full pointer-events-none"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.width * 0.6,
                        height: i % 2 === 0 ? 1 : 2,
                        rotate: s.rotation,
                    }}
                    animate={{
                        x: [0, 150],
                        y: [0, 75],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        delay: s.delay,
                        repeat: Infinity,
                        repeatDelay: s.pause,
                        ease: "easeOut",
                    }}
                />
            ))}
        </>
    );
});
