import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'


export default function App() {
    const scrollRef = React.createRef();

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: true,
            inertia: 0.01, // lower = more floaty, 1 = instant
            getDirection: true,
            getSpeed: true,
        });
    });

    return (
        <div>
            <div data-scroll-container className="scroll" ref={scrollRef}>
            <Navbar />
            <main className="flex-grow h-screen ">
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            </div>
        </div>
    );
}