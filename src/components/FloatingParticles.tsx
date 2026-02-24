import { memo, useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
    count?: number;
    color?: string;
    maxSize?: number;
}

export default memo(function FloatingParticles({
    count = 35,
    color = "bg-white",
    maxSize = 2,
}: FloatingParticlesProps) {
    const particles = useMemo(() => {
        // Reduce particle count on mobile for performance
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const actualCount = isMobile ? Math.min(count, 12) : count;
        return Array.from({ length: actualCount }, (_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.max(1, Math.random() * maxSize),
            duration: 10 + Math.random() * 15,
            delay: Math.random() * 8,
        }));
    }, [count, maxSize]);

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={`absolute rounded-full ${color} pointer-events-none`}
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
});
