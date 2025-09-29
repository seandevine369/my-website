import { motion } from "framer-motion";

export default function Stars() {
    // Fewer motion divs but simulate more stars by making them very small and fast
    const starCount = 200; // fewer divs but each can "simulate" multiple stars
    const stars = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        durationX: Math.random() * 10 + 10, // horizontal drift duration
        durationY: Math.random() * 5 + 5,   // vertical twinkle duration
        delay: Math.random() * 5,
    }));

    return (
        <>
            {stars.map((star, index) => (
                <motion.div
                    key={index}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: 0.8,
                    }}
                    animate={{
                        x: ["0%", "2%", "0%"], // horizontal drift
                        y: ["0px", "4px", "0px"], // vertical twinkle
                        opacity: [0.8, 0.3, 0.8],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: star.durationX,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
}
