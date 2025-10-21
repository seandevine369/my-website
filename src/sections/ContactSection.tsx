import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Footer from "@/components/Footer.tsx";
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
        hover:border-blue-500 hover:text-blue-400
        px-5 py-3 rounded-xl shadow-md transition-colors"
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </a>
    );
}

export default function ContactSection() {
    const bg =
        <>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-indigo-950 to-black opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        </>
    return (
        <Section id="contact" title="Contact Me" background={bg}>
            <p className="text-center text-lg mb-8 text-zinc-400">
                Based in Toronto, Canada 🍁 — feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {links.map((link) => (
                    <ContactLink key={link.label} {...link} />
                ))}
            </div>

            <ContactForm />
            <Footer />
        </Section>
    );
}
