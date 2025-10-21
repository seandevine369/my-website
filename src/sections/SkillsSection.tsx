import Section from "../components/Section";

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

export default function SkillsSection() {
    const bg =
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-purple-950 opacity-80" />
    return (
        <Section id="skills" title="Skills" background={bg}>
            <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-left text-2xl font-bold font-sans mb-3">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center justify-center p-2 border-0 border-green-700 rounded-xl bg-zinc-800 text-gray-200 hover:shadow-md transition"
                                >
                                    {skill.logoUrl ? (
                                        <img
                                            src={skill.logoUrl}
                                            alt={skill.name}
                                            className="w-18 h-18 mb-2 object-contain"
                                            onError={(e) => {
                                                // fallback: hide broken image
                                                (e.currentTarget as HTMLImageElement).style.display = "none";
                                            }}
                                        />
                                    ) : null}
                                    <p className="text-xs font-medium">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
