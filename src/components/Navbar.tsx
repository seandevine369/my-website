import Logo from '../assets/logo.svg?react';

export default function Navbar() {
    const sections = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-black text-white p-4 fixed w-full z-50 shadow">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo
                    className="h-6 w-auto cursor-pointer"
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                />
                <div className="space-x-6">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`hover:text-gray-300 transition`}
                        >
                            {label}
                        </a>
                        ))}
                </div>
            </div>
        </nav>
    );
}
