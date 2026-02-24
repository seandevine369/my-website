import Section from "../components/Section";
import FloatingParticles from "../components/FloatingParticles";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import * as React from "react";

const links = [
    {
        href: "mailto:sdevine.ca@gmail.com",
        label: "Email",
        icon: Mail,
    },
    {
        href: "https://www.linkedin.com/in/seandevine112",
        label: "LinkedIn",
        icon: Linkedin,
        target: "_blank",
    },
    {
        href: "https://github.com/seandevine369",
        label: "GitHub",
        icon: Github,
        target: "_blank",
    },
    {
        href: "/Sean_Devine.pdf",
        label: "Resume",
        icon: FileText,
        target: "_blank",
    },
];

type ContactLinkProps = {
    href: string;
    label: string;
    icon: React.ElementType;
    target?: string;
};

function ContactLink({ href, label, icon: Icon, target }: ContactLinkProps) {
    return (
        <a
            href={href}
            target={target}
            className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700
        hover:border-green-500 hover:text-green-400
        px-5 py-3 rounded-xl shadow-md transition-colors"
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </a>
    );
}

export default function ContactSection() {
    return (
        <Section id="contact" title="Get In Touch" sticky={false} background={<FloatingParticles count={20} />}>
            <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-sm sm:max-w-md mx-auto">
                Feel free to reach out — I'm always open to new opportunities and conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {links.map((link) => (
                    <ContactLink key={link.label} {...link} />
                ))}
            </div>
        </Section>
    );
}
