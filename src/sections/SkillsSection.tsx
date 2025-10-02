import Section from "../components/Section";

const skills = {
    Languages: [
        { name: "JavaScript", logoUrl: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", logoUrl: "https://cdn.simpleicons.org/typescript" },
        { name: "Python", logoUrl: "https://cdn.simpleicons.org/python" },
        { name: "C++", logoUrl: "https://cdn.simpleicons.org/cplusplus" },
        { name: "Java", logoUrl: "https://iconduck.com/icons/80665/java" }, // fallback
        { name: "Kotlin", logoUrl: "https://cdn.simpleicons.org/kotlin" },
        { name: "SQL", logoUrl: "https://cdn.simpleicons.org/mysql" },
        { name: "HTML/CSS", logoUrl: "https://cdn.simpleicons.org/html5" },
    ],
    Frameworks: [
        { name: "React", logoUrl: "https://cdn.simpleicons.org/react" },
        { name: "Express.js", logoUrl: "https://cdn.simpleicons.org/express" },
        { name: "Ktor", logoUrl: "https://cdn.simpleicons.org/ktor" },
        { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Bootstrap", logoUrl: "https://cdn.simpleicons.org/bootstrap" },
        { name: "Prisma", logoUrl: "https://cdn.simpleicons.org/prisma" },
    ],
    Testing: [
        { name: "Jest", logoUrl: "https://cdn.simpleicons.org/jest" },
        { name: "Supertest", logoUrl: null }, // no reliable icon found
        { name: "JUnit", logoUrl: null }, // fallback to text
    ],
    Infrastructure: [
        { name: "AWS EC2", logoUrl: "https://commons.wikimedia.org/wiki/File:Amazon_EC2_Logo.svg" },
        { name: "AWS S3", logoUrl: "https://commons.wikimedia.org/wiki/File:AWS_Simple_Icons_Storage_Amazon_S3.svg" },
        { name: "Docker", logoUrl: "https://cdn.simpleicons.org/docker" },
        { name: "CI/CD", logoUrl: "https://cdn.simpleicons.org/gitlab" }, // or use a specific CI tool icon
        { name: "GraphQL", logoUrl: "https://cdn.simpleicons.org/graphql" },
        { name: "REST APIs", logoUrl: null }, // generic, could use API icon
    ],
    Databases: [
        { name: "PostgreSQL", logoUrl: "https://cdn.simpleicons.org/postgresql" },
        { name: "AWS RDS", logoUrl: "https://commons.wikimedia.org/wiki/File:AWS_Simple_Icons_Database_Amazon_RDS_Oracle_DB_Instance.svg" },
    ],
};

export default function SkillsSection() {
    return (
        <Section id="skills">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-purple-950 opacity-80" />
            <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-center">
                Skills
            </h2>
            <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-bold mb-3">{category}</h3>
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
                                            className="w-12 h-12 mb-2 object-contain"
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
            </div>
        </Section>
    );
}
