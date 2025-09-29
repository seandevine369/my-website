import Section from "../components/Section";

export default function HomeSection() {
    return (
        <Section id="home" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <h1 className="text-5xl font-bold mb-4">Hi, I’m Sean Devine</h1>
            <p className="text-xl max-w-2xl text-center">
                I build modern web applications with React, Vite, and Tailwind CSS. Scroll down to see my work.
            </p>
        </Section>
    );
}
