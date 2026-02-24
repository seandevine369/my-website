import { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg?react';

export default function Navbar() {
    const sections = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0% -50% 0%" }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="bg-black/60 backdrop-blur-md border-b border-white/5 font-bold text-lg p-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <Logo
                    className="h-5 w-auto cursor-pointer"
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0 })
                    }
                />
                <div className="text-white space-x-6 font-['Space_Grotesk']">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`hover:text-green-400 transition ${activeSection === id ? "text-green-400" : ""}`}
                        >
                            {label}
                        </a>
                        ))}
                </div>
            </div>
        </nav>
    );
}
