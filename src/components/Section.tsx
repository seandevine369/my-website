interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`w-screen flex flex-col justify-center items-center px-6 py-24 overflow-hidden bg-black text-gray-100  relative min-h-screen ${className}`}>
            {children}
        </section>
    );
}