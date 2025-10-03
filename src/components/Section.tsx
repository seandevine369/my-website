import React from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    title?: string; // optional title
    background?: React.ReactNode; // optional background, e.g., a div with gradient or animation
}

export default function Section({
                                    id,
                                    children,
                                    className = "",
                                    title = "",
                                    background,
                                }: SectionProps) {
    return (
        <section
            id={id}
            className={`flex flex-col justify-center items-center py-24 overflow-hidden relative snap-start min-h-screen ${className}`}
        >
            {/* Render background if provided */}
            {background && <>{background}</>}

            {/* Main content */}
            <div className="relative z-10 text-center">
                {title && (
                    <h2 className="text-5xl font-extrabold mb-12 tracking-tight">{title}</h2>
                )}
                {children}
            </div>
        </section>
    );
}
interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}
