import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";

export default function App() {
    return (
        <div>
            <Navbar />
            <main className="flex-grow h-screen overflow-y-scroll snap-y snap-manditory">
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}