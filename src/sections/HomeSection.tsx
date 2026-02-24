import { useState, useEffect } from "react";
import Section from "../components/Section";
import Stars from "../components/Stars";
import Nebula from "../components/Nebula";
import ShootingStars from "../components/ShootingStars";

export default function HomeSection() {
    const fullText = "I'm a Waterloo CS graduate based in Toronto";
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
        <Section id="home" background={<><Nebula /><Stars /><ShootingStars /></>} sticky={true}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black font-[‘Space_Grotesk’] mb-4">Hi, I’m Sean</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-mono">
                {displayedText}
                <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"} inline-block`}>|</span>
            </p>
        </Section>
    );
}
