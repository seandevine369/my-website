import Section from "../components/Section";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
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
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
            />

            {/* Blurred glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-2/3 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-25"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-center">
                Projects
            </h2>

            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                    {projects.map((project, i) => (
                        <CarouselItem key={i} className="basis-full md:basis-2/3 lg:basis-1/2">
                            <Card className="h-full flex flex-col justify-between bg-white shadow-xl rounded-2xl border border-gray-200">
                                <div>
                                    <CardHeader className="text-center">
                                        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                                        <p className="text-xs uppercase tracking-wide text-green-700 font-medium mb-3">
                                            {project.tech}
                                        </p>

                                    </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700 leading-relaxed">
                                    {project.description.map((d, idx) => (
                                        <p key={idx}>{d}</p>
                                    ))}
                                </CardContent>

                            </div>
                                <div className="p-4">
                                    <Button variant="outline" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            View on GitHub
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>
        </Section>
    );
}
