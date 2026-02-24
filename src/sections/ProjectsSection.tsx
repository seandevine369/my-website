import Section from "../components/Section";
import Galaxy from "@/components/Galaxy";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { useInView } from "@/lib/useInView";
import { ExternalLink, Github } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const projects: Project[] = [
    {
        title: "Chronolog",
        tech: "Kotlin, Ktor, PostgreSQL",
        summary: "Full-stack journaling app with JWT auth, Google OAuth, and offline-first sync.",
        github: "https://github.com/dummy1",
        accent: "from-amber-500 to-orange-500",
    },
    {
        title: "Plant Trait Predictor",
        tech: "Python, PyTorch",
        summary: "Top 20% in a Kaggle competition using 40K plant images for trait prediction.",
        github: "https://github.com/dummy2",
        accent: "from-green-500 to-teal-500",
    },
    {
        title: "Real-Time Task Manager",
        tech: "Node.js, React, GraphQL, AWS",
        summary: "Real-time backend with GraphQL subscriptions, connection pooling, and full test coverage.",
        github: "https://github.com/seandevine369/real-time-task-manager",
        accent: "from-blue-500 to-cyan-500",
    },
    {
        title: "OS/161 Kernel",
        tech: "C, MIPS Assembly",
        summary: "Implemented fork, execv, waitpid system calls and dynamic virtual memory in OS/161.",
        github: "https://github.com/dummy4",
        accent: "from-red-500 to-pink-500",
    },
    {
        title: "Biquadris",
        tech: "C++",
        summary: "Two-player Tetris variant with OOP design using Observer and Factory patterns.",
        github: "https://github.com/seandevine369/biquadris",
        accent: "from-violet-500 to-purple-500",
    },
];

export default function ProjectsSection() {
    const { ref, visible } = useInView();

    return (
        <Section id="projects" title="Projects" background={<Galaxy />}>
            <div
                ref={ref}
                className={`max-w-6xl mx-auto space-y-8 transform transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                {/* Featured: Voluntus — compact */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-green-500 via-green-400 to-green-500">
                    <div className="rounded-2xl bg-zinc-900/90 backdrop-blur-sm px-6 py-5 md:px-8 md:py-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Info */}
                            <div className="flex-1 text-center md:text-left shrink-0 md:max-w-sm">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-300 bg-green-500/20 rounded-full border border-green-400/30">
                                        Featured
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Voluntus</h3>
                                </div>
                                <p className="text-xs uppercase tracking-wide text-green-400 font-medium font-mono mb-3">
                                    Kotlin, Jetpack Compose, Next.js, NestJS, AWS
                                </p>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4 max-w-lg">
                                    Android app replacing paper-based tracking of Ontario's mandatory 40-hour community service requirement. Students log hours, supervisors approve via email, administrators track everything in a real-time dashboard.
                                </p>
                                <Button size="sm" asChild className="bg-green-600 hover:bg-green-500 text-white">
                                    <a href="https://voluntus.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Visit Site
                                    </a>
                                </Button>
                            </div>

                            {/* Phone screenshots — only on md+ where side-by-side layout works */}
                            <div className="hidden md:flex items-end justify-center gap-3 flex-1">
                                {[
                                    { src: "/voluntus-dashboard.jpg", alt: "Voluntus dashboard" },
                                    { src: "/voluntus-loghours.jpg", alt: "Voluntus log hours" },
                                    { src: "/voluntus-organizations.jpg", alt: "Voluntus organizations" },
                                ].map((img, i) => (
                                    <div
                                        key={i}
                                        className={`w-24 sm:w-28 md:w-32 shrink-0 ${i === 1 ? "-mb-2" : ""}`}
                                    >
                                        <div className="rounded-[1.2rem] overflow-hidden border-2 border-zinc-700/80 shadow-lg shadow-green-500/5">
                                            <img src={img.src} alt={img.alt} className="w-full h-auto" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other projects — stacked on mobile, carousel on sm+ */}
                <div className="sm:hidden space-y-4">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
                <div className="hidden sm:block">
                    <Carousel className="w-full" opts={{ align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {projects.map((project, i) => (
                                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                                    <ProjectCard {...project} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="w-10 h-10 -translate-x-4 bg-zinc-800/80 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/50" />
                        <CarouselNext className="w-10 h-10 translate-x-4 bg-zinc-800/80 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/50" />
                    </Carousel>
                </div>
            </div>
        </Section>
    );
}

interface Project {
    title: string;
    tech: string;
    summary: string;
    github?: string;
    accent: string;
}

function ProjectCard({ title, tech, summary, github, accent }: Project) {
    return (
        <Card className="h-full flex flex-col justify-between bg-zinc-800/70 backdrop-blur-sm rounded-xl border border-zinc-700/40 hover:border-zinc-600/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Accent strip */}
            <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />
            <div className="flex flex-col flex-1">
                <CardHeader className="pb-2">
                    <p className="text-[10px] uppercase tracking-wider text-green-400/70 font-medium font-mono mb-0.5">
                        {tech}
                    </p>
                    <CardTitle className="text-base text-white font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1">
                    <p className="text-sm text-gray-400 leading-relaxed">{summary}</p>
                </CardContent>
                {github && (
                    <div className="px-6 pb-4">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-400 transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            View Source
                        </a>
                    </div>
                )}
            </div>
        </Card>
    );
}
