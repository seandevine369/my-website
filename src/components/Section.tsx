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
                                    sticky = false,
                                }: SectionProps) {
    return (
        <div
            data-scroll
            id={id}
            className={`relative ${
                sticky ? "min-h-screen md:min-h-[175vh]" : ""
            } ${className}`}
        >
            {/* Background */}
            {background && <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>}

            {/* Sticky Wrapper */}
            <div
                className={`${
                    sticky ? "sticky top-0 min-h-screen" : "relative"
                } flex flex-col justify-center items-center text-center`}
            >
                <div className="relative z-10 px-4 sm:px-6 py-14 md:py-20 w-full max-w-full overflow-x-hidden box-border">
                    {title && (
                        <div className="relative mb-12">
                            {/* Faint radial glow behind heading */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 h-20 md:h-32 bg-green-500/[0.07] rounded-full blur-3xl pointer-events-none" />
                            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white/90 uppercase font-['Space_Grotesk']">
                                {title}
                            </h2>
                            <div className="relative mt-3 mx-auto w-12 h-0.5 rounded-full bg-green-400/50" />
                        </div>
                    )}
                    {children}
                </div>
            </div>

            {/* Gradient section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent" />
        </div>
    );
}
