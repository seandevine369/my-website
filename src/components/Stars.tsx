import { memo, useMemo } from "react";

function Stars() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const starCount = isMobile ? 60 : 200;

    const stars = useMemo(() =>
        Array.from({ length: starCount }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 5,
        })),
    [starCount]);

    return (
        <>
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-twinkle"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
        </>
    );
}

export default memo(Stars);
