import Section from "../components/Section";
import Galaxy from "@/components/Galaxy";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const projects: Project[] = [
    {
        title: "Chronolog Journaling App",
        tech: "Kotlin, JUnit, Gradle, Docker, PostgreSQL",
        description: [
            "Built a full-stack journaling app using Kotlin Multiplatform, Jetpack Compose Desktop, Ktor backend, and PostgreSQL/Exposed ORM.",
            "Implemented JWT auth with bcrypt-hashed passwords, Google OAuth, and role-based access.",
            "Delivered a privacy-first, offline-capable journaling app with optional sync.",
        ],
        github: "https://github.com/dummy1",
    },
    {
        title: "Plant Trait Prediction Model",
        tech: "Python, PyTorch",
        description: [
            "Ranked top 20% in a plant trait prediction competition.",
            "Used dataset of 40,000 plant images & tabular data from iNaturalist for PyTorch training.",
        ],
        github: "https://github.com/dummy2",
    },
    {
        title: "Real-Time Task Manager",
        tech: "Node.js, React.js, AWS RDS, GraphQL",
        description: [
            "Developed a real-time backend using Node.js, Express, and GraphQL with PostgreSQL.",
            "Implemented modular SQL models, connection pooling, and Jest/Supertest integration tests.",
        ],
        github: "https://github.com/dummy3",
    },
    {
        title: "OS/161 Enhancements Project",
        tech: "C, MIPS Assembly",
        description: [
            "Implemented system calls (fork, execv, waitpid, exit) & dynamic virtual memory in OS/161 kernel.",
            "Built synchronization mechanisms for kernel processes and enhanced error handling.",
        ],
        github: "https://github.com/dummy4",
    },
    {
        title: "Biquadris",
        tech: "C++",
        description: [
            "Built a two-player Tetris variant with difficulty toggles & gameplay boosts.",
            "Applied OOP design with Observer/Factory patterns, dynamic memory management, and UML-driven design.",
        ],
        github: "https://github.com/dummy5",
    },
];

export default function ProjectsSection() {
    return (
        <Section id="projects">
            {/* Animated galaxy gradient */}
            <Galaxy />
            <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-center">
                Projects
            </h2>
                <ProjectsCarousel projects={projects} />
            </div>
        </Section>
    );
}

interface Project {
    title: string;
    tech: string;
    description: string[];
    github: string;
}

function ProjectsCarousel({ projects }: { projects: Project[] }) {
    return (
        <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
                {projects.map((project, i) => (
                    <CarouselItem
                        key={i}
                        className="basis-full md:basis-2/3 lg:basis-1/2"
                    >
                        <ProjectCard {...project} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-zinc-800 text-gray-200 hover:bg-zinc-600 hover:text-gray-200 border-0"/>
            <CarouselNext className="bg-zinc-800 text-gray-200 hover:bg-zinc-600 hover:text-gray-200 border-0"/>
        </Carousel>
    );
}

function ProjectCard({ title, tech, description, github }: Project) {
    return (
        <Card className="h-full flex flex-col justify-between bg-zinc-800 shadow-xl rounded-2xl border border-zinc-800 font-mono">
            <div>
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl text-white font-bold">{title}</CardTitle>
                    <p className="text-sm uppercase tracking-wide text-indigo-400 font-medium mb-3">
                        {tech}
                    </p>
                </CardHeader>

                <CardContent className="space-y-2 text-md text-gray-200 leading-relaxed">
                    {description.map((d, idx) => (
                        <p key={idx}>{d}</p>
                    ))}
                </CardContent>
            </div>

            <div className="p-4">
                <Button variant="default" asChild>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </Button>
            </div>
        </Card>
    );
}