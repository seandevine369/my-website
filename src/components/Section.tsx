interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`flex flex-col justify-center items-center py-24 overflow-hidden relative snap-start min-h-screen ${className}`}>
            {children}
        </section>
    );
}