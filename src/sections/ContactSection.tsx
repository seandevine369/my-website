import Section from "../components/Section";

export default function ContactSection() {
    return (
        <Section id="contact">
            <h2 className="text-5xl font-extrabold mb-12 tracking-tight text-center">
                Contact Me
            </h2>
            <p className="text-center text-lg mb-6">
                Feel free to reach out via email or connect on LinkedIn.
            </p>
            <div className="flex space-x-6">
                <a href="mailto:sdevine.ca@gmail.com" className="text-blue-500 hover:underline">Email</a>
                <a href="https://www.linkedin.com/in/seandevine112" className="text-blue-500 hover:underline" target="_blank">LinkedIn</a>
            </div>
        </Section>
    );
}
