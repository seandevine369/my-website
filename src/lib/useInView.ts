import { useState, useRef, useEffect } from "react";

export function useInView(threshold = 0, rootMargin = "0% 0% -5% 0%") {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setVisible(entry.isIntersecting));
            },
            { threshold, rootMargin }
        );

        const el = ref.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [threshold, rootMargin]);

    return { ref, visible };
}
