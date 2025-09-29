import Section from "../components/Section";

export default function SkillsSection() {
    return (
        <Section id="skills" className="bg-gray-50 text-gray-900">
            <h2 className="text-4xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="font-medium">React</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="font-medium">Node.js</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="font-medium">TypeScript</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="font-medium">PostgreSQL</p>
                </div>
            </div>
        </Section>
    );
}
