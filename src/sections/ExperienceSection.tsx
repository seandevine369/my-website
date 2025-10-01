"use client"

import { useState } from "react"
import Section from "../components/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

type Experience = {
    id: string
    subtitle: string
    title: string
    summary: string
    details: string[]
}

const experiences: Experience[] = [
    {
        id: "structa",
        title: "Structa Co",
        subtitle: "Full Stack Developer  | Jan 2025 – Apr 2025",
        summary: "Small (8 person) startup, worked on proprietary real estate development software",
        details: [
            "Rebuilt a React frontend from Figma wireframes with a component library, delivering a more consistent UI and cutting average latency by half",
            "Integrated Google Maps API & City of Toronto zoning API for property searches & zoning visualization",
            "Refactored backend with MVC using Prisma & PostgreSQL, reducing DB size by 43%",
        ],
    },
    {
        id: "dsv",
        title: "DSV Building Group",
        subtitle: "Full Stack Developer | Jan 2024 – Apr 2024",
        summary: "Toronto construction company; worked in small team to develop condo customization portal from the ground up",
        details: [
            "Built a React condo customization portal from Figma wireframes, letting buyers preview finish selections & cutting sales–client coordination by 50%",
            "Designed a PostgreSQL schema & Node.js/Express backend for multi-unit configs & approvals, replacing spreadsheets & reducing miscommunication",
            "Added API validation, & Jest tests to ensure reliable data sync between sales & construction teams",
        ],
    },
    {
        id: "ist",
        title: "University of Waterloo",
        subtitle: "Computing Consultant | Sept 2023 – Aug 2025",
        summary: "Worked for the IT help desk for the University of Waterloo; helped solve tech issues for Waterloo students, staff, faculty and alumni",
        details: [
            "Resolved over 2500 software & firmware issues for UWaterloo affiliates, earning an average 4.9 star review",
            "Documented procedures in Jira & delivered 40+ hours of new-hire training for knowledge transfer",
        ],
    },
    {
        id: "multimatic",
        title: " Multimatic Inc.",
        subtitle: "Automation Developer | Sept 2022 – Dec 2022",
        summary: "Collaborated within the IT department to automate manual processes",
        details: [
            "Automated invoice approval workflows with Python & Power Automate, reducing average time by 65%",
            "Developed a secure automated payment system to process transactions exceeding $50,000",
        ],
    },
    {
        id: "ssnc",
        title: "SS&C Technologies",
        subtitle: "Full Stack Developer | Jan 2022 – Apr 2022",
        summary: "Worked on SS&C Lyric, a proprietary financial software API",
        details: [
            "Developed a custom Apache NiFi processor to parse 10,000+ financial receipts weekly",
            "Designed & deployed a data pipeline for ingesting, processing, & updating receipt data in real time",
            "Debugged and resolved over 30 issues for a financial software API platform based in Spring Boot",
        ],
    },
]

export default function ExperienceSection() {
    return (
        <Section id="experience">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-center">
                Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </Section>
    )
}

function ExperienceCard({ experience }: { experience: Experience }) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="shadow-md rounded-none bg-zinc-800 border-0">
            <CardHeader>
                <CardTitle className="text-4xl text-white font-bold">{experience.title}</CardTitle>
                <CardDescription className="uppercase tracking-wide text-gray-400 font-medium text-lg">
                    {experience.subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-200 text-lg mb-3">{experience.summary}</p>
                <Collapsible open={open} onOpenChange={setOpen}>
                    <CollapsibleContent className="overflow-hidden transition-all duration-1000 data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
                        <div className="list-disc list-inside space-y-1 text-gray-200 text-lg mb-3">
                            {experience.details.map((d, i) => (
                                <p key={i}>{d}</p>
                            ))}
                        </div>
                    </CollapsibleContent>
                    <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium flex items-center gap-1 text-gray-200 hover:bg-zinc-600 hover:text-gray-200"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <>
                                Collapse <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                            </>
                        ) : (
                            <>
                                Read more <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                            </>
                        )}
                    </Button>

                </Collapsible>
            </CardContent>
        </Card>
    )
}
