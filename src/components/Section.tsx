import React from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    background?: React.ReactNode;
    sticky?: boolean;
}

export default function Section({
                                    id,
                                    children,
                                    className = "",
                                    title = "",
                                    background,
                                    sticky = true,
                                }: SectionProps) {
    return (
        <div
            data-scroll
            id={id}
            className={`relative ${
                sticky ? "min-h-[325vh] md:min-h-[175vh]" : "min-h-screen"
            } ${className}`}
        >
            {/* Background */}
            {background && <div className="absolute inset-0 z-0">{background}</div>}

            {/* Sticky Wrapper */}
            <div
                className={`${
                    sticky ? "sticky top-0" : "relative"
                } flex flex-col justify-center items-center text-center min-h-screen`}
            >
                <div className="relative z-10 px-6 py-24">
                    {title && (
                        <h2 className="text-5xl font-extrabold mb-12 tracking-tight">
                            {title}
                        </h2>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
