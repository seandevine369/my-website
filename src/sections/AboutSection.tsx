import Section from "../components/Section";

export default function AboutSection() {
    const bg =
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black opacity-95" />
    return (
        <Section id="about" title="About Me" background={bg}>
            <div className="px-12 md:px-32 py-16">

                {/* Flex Layout: Text + Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="max-w-3xl mx-auto text-xl leading-relaxed">
                            I’m a software developer specializing in building full-stack web
                            applications. I love creating efficient, modern interfaces and
                            solving complex problems.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src="/about-me.jpeg"
                            alt="About me"
                            className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
