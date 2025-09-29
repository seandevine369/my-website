import Section from "../components/Section";
import Stars from "../components/Stars";

export default function HomeSection() {
    return (
        <Section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
            <Stars />
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Hi, I’m Sean Devine</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    I build modern web applications with React, Vite, and Tailwind CSS. Scroll down to see my work.
                </p>
            </div>
        </Section>
    );
}
