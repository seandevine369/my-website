import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'


export default function App() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const isMobile = window.innerWidth < 768;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current!,
            smooth: !isMobile,
            smoothMobile: false,
            inertia: 0.01,
            getDirection: true,
            getSpeed: true,
        } as any);

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div>
            <div data-scroll-container className="scroll" ref={scrollRef}>
            <Navbar />
            <main className="flex-grow" style={{ background: 'linear-gradient(180deg, #000000 0%, #000000 10%, #0f172a 25%, #1e293b 45%, #172554 60%, #0f172a 80%, #000000 100%)' }}>
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </main>
            </div>
        </div>
    );
}
