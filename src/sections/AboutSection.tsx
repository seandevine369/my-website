import Section from "../components/Section";

export default function AboutSection() {
    const bg =
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-900 to-black opacity-95" />

    /* Calculate age dynamically */
    const birthDate = new Date("2002-10-10");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasHadBirthdayThisYear) age--;

    return (
        <Section id="about" title="About Me" background={bg}>
            <div className="px-12 lg:px-32 py-16">

                {/* Flex Layout: Text + Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="max-w-3xl mx-auto text-s sm:text-m md:text-l lg:text-xl leading-relaxed">
                            I’m a {age}-year-old software developer with a passion for math, science, and understanding how the world works. When I’m not coding, you’ll probably find me playing guitar, exploring chess strategies, reading about science and technology, or lifting weights at the gym.
                            <br /><br />
                            I’m motivated by progress—both personal and professional. I enjoy analyzing systems, breaking down problems, and figuring out how to make things more efficient or effective. Sometimes that means experimenting until I get it right; often times it’s learning from others’ perspectives to refine my own thinking. I value discussion and diverse opinions because they often reveal insights you wouldn’t find on your own. I find that many times the best ideas can come from the people you expect the least.
                            <br /><br />
                            Ultimately, I’m always looking for ways to learn, grow, and understand more deeply. Whether through code, music, strategy games, or conversation, I enjoy the challenge of figuring out how things work and finding better ways to do them.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg flex-1 flex justify-center md:justify-end">
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
