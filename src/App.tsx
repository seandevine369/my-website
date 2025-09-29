import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
            <main className="flex-grow">
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}