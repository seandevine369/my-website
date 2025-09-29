interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center items-center px-6 py-24 ${className}`}>
            {children}
        </section>
    );
}