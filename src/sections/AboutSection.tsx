import Section from "../components/Section";

export default function AboutSection() {
    return (
        <Section id="about" className="bg-white text-gray-800">
            <h2 className="text-4xl font-semibold mb-6">About Me</h2>
            <p className="max-w-3xl text-center text-lg">
                I’m a software developer specializing in building full-stack web applications.
                I love creating efficient, modern interfaces and solving complex problems.
            </p>
        </Section>
    );
}
