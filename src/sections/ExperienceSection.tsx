import { useInView } from "@/lib/useInView";
import Section from "../components/Section";
import FloatingParticles from "../components/FloatingParticles";

type Experience = {
    id: string
    subtitle: string
    title: string
    summary: string
    details: string[]
    logoUrl: string
    logoBg?: string
}

const experiences: Experience[] = [
    {
        id: "structa",
        title: "Structa Co",
        subtitle: "Full Stack Developer  | Jan 2025 – Apr 2025",
        summary: "Small (8 person) startup, worked on proprietary real estate development software",
        details: [
            "Rebuilt the React frontend from Figma wireframes with a component library, cutting average page latency by half",
            "Integrated Google Maps and City of Toronto zoning APIs for property search and zoning visualization",
            "Refactored the backend to MVC with Prisma and PostgreSQL, reducing database size by 43%",
        ],
        logoUrl: "/logos/structa.jpeg",
    },
    {
        id: "dsv",
        title: "DSV Building Group",
        subtitle: "Full Stack Developer | Jan 2024 – Apr 2024",
        summary: "Toronto construction company; worked in small team to develop condo customization portal from the ground up",
        details: [
            "Built a React condo customization portal from Figma wireframes, letting buyers preview finishes and cutting sales-client coordination by 50%",
            "Designed a PostgreSQL schema and Node.js/Express backend for multi-unit configurations and approvals",
            "Added API validation and Jest tests to keep data in sync between sales and construction teams",
        ],
        logoUrl: "/logos/dsv.png",
        logoBg: "bg-zinc-700",
    },
    {
        id: "ist",
        title: "University of Waterloo",
        subtitle: "Computing Consultant | Sept 2023 – Aug 2025",
        summary: "Worked for the IT help desk for the University of Waterloo; helped solve tech issues for Waterloo students, staff, faculty and alumni",
        details: [
            "Resolved 2,500+ software and firmware issues for university affiliates, averaging a 4.9-star review",
            "Documented procedures in Jira and delivered 40+ hours of new-hire training",
        ],
        logoUrl: "/logos/uwaterloo.svg",
    },
    {
        id: "multimatic",
        title: "Multimatic Inc.",
        subtitle: "Automation Developer | Sept 2022 – Dec 2022",
        summary: "Collaborated within the IT department to automate manual processes",
        details: [
            "Automated invoice approval workflows with Python and Power Automate, reducing processing time by 65%",
            "Developed a secure automated payment system handling transactions over $50,000",
        ],
        logoUrl: "/logos/multimatic.png",
    },
    {
        id: "ssnc",
        title: "SS&C Technologies",
        subtitle: "Full Stack Developer | Jan 2022 – Apr 2022",
        summary: "Worked on SS&C Lyric, a proprietary financial software API",
        details: [
            "Built a custom Apache NiFi processor to parse 10,000+ financial receipts per week",
            "Designed and deployed a real-time data pipeline for ingesting and processing receipt data",
            "Resolved 30+ issues in a Spring Boot financial software API",
        ],
        logoUrl: "/logos/ssnc.png",
    },
]

export default function ExperienceSection() {
    return (
        <Section id="experience" title="Experience" background={<FloatingParticles count={25} color="bg-green-400" maxSize={1.5} />}>
            <div className="max-w-4xl mx-auto relative">
                {/* Timeline line — hidden on mobile */}
                <div className="absolute left-8 sm:left-12 top-0 bottom-0 border-l-2 border-zinc-700 hidden sm:block" />

                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
    const { ref, visible } = useInView();

    return (
        <div
            ref={ref}
            className={`relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 transform transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Logo node on the timeline */}
            <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ${experience.logoBg ?? "bg-white"} p-2 sm:p-2.5 ring-4 ring-zinc-900 flex items-center justify-center`}>
                    <img
                        src={experience.logoUrl}
                        alt={`${experience.title} logo`}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left pb-2 pt-1 rounded-xl px-3 sm:px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-green-500/20 border border-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{experience.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">{experience.subtitle}</p>
                <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed">{experience.summary}</p>
                <ul className="list-disc list-outside pl-5 mt-3 space-y-1.5 text-left">
                    {experience.details.map((d, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
