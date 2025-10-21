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
                            I’m a {age} year old software developer with a passion for math,
                            science and understanding how the world works. In my free time you'll
                            probably find me playing guitar, learning about chess, or lifting
                            weights in the gym.
                            <br />
                            <br />
                            I am motivated in life by making progress; whether
                            that be in my career, in my hobbies, in my relationships or in the world,
                            I am always looking for ways to do things better. I love analysing things,
                            sometimes beyond what is necessary and enjoy the process of gaining a deep
                            understanding of how things work. I try my best to get many perspectives on
                            ideas and think it is important to be exposed to differing opinions to
                            refine ideas
                            <br />
                            <br />
                            Progress iterations, learning / understanding, discussion / perspectives no
                            matter from who, always a way to do things better; you can never be too efficient,
                            just optimising for the wrong variables, important to put your foot down when you
                            know your right; there could be lots of other people quietly thinking the same thing, comfort
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
