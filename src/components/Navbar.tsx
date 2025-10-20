import Logo from '../assets/logo.svg?react';

export default function Navbar() {
    const sections = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-black font-bold text-lg p-4 fixed w-full z-50">
            <div className="flex justify-between items-center">
                <Logo
                    className="h-5 w-auto cursor-pointer"
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0 })
                    }
                />
                <div className="text-white space-x-6">
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
