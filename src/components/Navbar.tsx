export default function Navbar() {
    const sections = [
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <button
                    onClick={() => window.scrollTo({
                        top: 0,
                        left: 0
                    })} // scroll to top
                    className="font-bold hover:text-gray-300 transition"
                >
                    Sean Devine
                </button>
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
