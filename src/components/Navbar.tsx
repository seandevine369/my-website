import { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg?react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const sections = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className="bg-black/60 backdrop-blur-md border-b border-white/5 font-bold text-sm md:text-lg p-3 md:p-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-2 md:px-4">
                <Logo
                    className="h-4 md:h-5 w-auto cursor-pointer"
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0 })
                    }
                />

                {/* Desktop links */}
                <div className="hidden sm:flex text-white space-x-6 font-['Space_Grotesk']">
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

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden text-white p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="sm:hidden mt-2 pb-3 px-4 flex flex-col gap-3 font-['Space_Grotesk']">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className={`text-white hover:text-green-400 transition ${activeSection === id ? "text-green-400" : ""}`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
