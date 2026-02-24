import Section from "../components/Section";
import FloatingParticles from "../components/FloatingParticles";
import { useInView } from "@/lib/useInView";

export default function AboutSection() {
    const { ref: textRef, visible: textVisible } = useInView();
    const { ref: imgRef, visible: imgVisible } = useInView();

    return (
        <Section id="about" title="About Me" background={<FloatingParticles count={30} />}>
            <div className="max-w-6xl mx-auto">

                {/* Flex Layout: Text + Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
                    {/* Text */}
                    <div
                        ref={textRef}
                        className={`flex-1 text-center md:text-left transform transition-all duration-700 ease-out ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="max-w-3xl mx-auto space-y-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed border-l-0 md:border-l-2 border-green-400/30 pl-0 md:pl-6">
                            <p>
                                I'm a software developer with a passion for math, science, and understanding how the world works. I enjoy breaking down complex problems, analyzing systems, and finding ways to make things more efficient — whether that means experimenting until I get it right or learning from others' perspectives to sharpen my own thinking.
                            </p>
                            <p>
                                Outside of coding, you'll probably find me playing guitar, exploring chess strategies, reading about science and technology, or at the gym. I'm always looking for ways to learn, grow, and understand things more deeply.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        ref={imgRef}
                        className={`max-w-xs sm:max-w-sm md:max-w-lg flex-1 flex justify-center md:justify-end transform transition-all duration-700 ease-out delay-200 ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
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
