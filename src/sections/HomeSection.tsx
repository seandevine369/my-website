"use client"

import { useState, useEffect } from "react";
import Section from "../components/Section";
import Stars from "../components/Stars";

export default function HomeSection() {
    const fullText = "I'm a Waterloo CS graduate based in Toronto. Scroll down to see my work.";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(typingInterval);
        }, 75); // typing speed (ms per letter)

        return () => clearInterval(typingInterval);
    }, []);

    // Cursor blinking
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500); // blinking speed

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <Section id="home">
            <Stars />
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-black font-sans mb-4">Hi, I’m Sean</h1>
                <p className="text-xl max-w-2xl mx-auto font-mono">
                    {displayedText}
                    <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"} inline-block`}>|</span>
                </p>
            </div>
        </Section>
    );
}
