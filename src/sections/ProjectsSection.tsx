import Section from "../components/Section";

export default function ProjectsSection() {
    return (
        <Section id="projects" className="bg-gray-100 text-gray-900">
            <h2 className="text-4xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                    <p>A brief description of a cool project I built with React and Tailwind.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-2xl font-bold mb-2">Project 2</h3>
                    <p>A brief description of another project, showcasing modern web technologies.</p>
                </div>
            </div>
        </Section>
    );
}
