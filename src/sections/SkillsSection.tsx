import Section from "../components/Section";
import { useInView } from "@/lib/useInView";

const skills = {
    Languages: [
        { name: "JavaScript", logoUrl: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", logoUrl: "https://cdn.simpleicons.org/typescript" },
        { name: "Python", logoUrl: "https://cdn.simpleicons.org/python" },
        { name: "C++", logoUrl: "https://cdn.simpleicons.org/cplusplus" },
        { name: "Java", logoUrl: "https://www.vectorlogo.zone/logos/java/java-icon.svg" }, // fallback
        { name: "Kotlin", logoUrl: "https://cdn.simpleicons.org/kotlin" },
        { name: "HTML/CSS", logoUrl: "https://cdn.simpleicons.org/html5" },
    ],
    Frameworks: [
        { name: "React", logoUrl: "https://cdn.simpleicons.org/react" },
        { name: "Express.js", logoUrl: "https://cdn.simpleicons.org/express" },
        { name: "Ktor", logoUrl: "https://cdn.simpleicons.org/ktor" },
        { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Bootstrap", logoUrl: "https://cdn.simpleicons.org/bootstrap" },
        { name: "Prisma", logoUrl: "https://cdn.simpleicons.org/prisma" },
        { name: "Jest", logoUrl: "https://cdn.simpleicons.org/jest" },
    ],
    Infrastructure: [
        { name: "AWS EC2", logoUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS S3", logoUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS RDS", logoUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "Docker", logoUrl: "https://cdn.simpleicons.org/docker" },
        { name: "GraphQL", logoUrl: "https://cdn.simpleicons.org/graphql" },
        { name: "PostgreSQL", logoUrl: "https://cdn.simpleicons.org/postgresql" },
    ],
};

function SkillCategory({ category, items, index }: { category: string; items: { name: string; logoUrl: string }[]; index: number }) {
    const { ref, visible } = useInView();
    return (
        <div
            ref={ref}
            className={`transform transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <h3 className="text-left text-2xl font-bold font-sans mb-3">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {items.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-800 text-gray-200 hover:bg-zinc-700 hover:scale-105 hover:ring-1 hover:ring-indigo-400/50 transition-all duration-200"
                    >
                        {skill.logoUrl ? (
                            <img
                                src={skill.logoUrl}
                                alt={skill.name}
                                className="w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18 mb-2 object-contain"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = "none";
                                }}
                            />
                        ) : null}
                        <p className="text-xs font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const bg =
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-purple-950 opacity-80" />
    return (
        <Section id="skills" title="Skills" background={bg}>
            <div className="max-w-6xl mx-auto space-y-4">
                {Object.entries(skills).map(([category, items], index) => (
                    <SkillCategory key={category} category={category} items={items} index={index} />
                ))}
            </div>
        </Section>
    );
}
