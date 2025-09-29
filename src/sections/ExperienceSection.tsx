import Section from "../components/Section";

export default function ExperienceSection() {
    return (
        <Section id="experience" className="bg-gray-100 text-gray-800">
            <h2 className="text-4xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6 max-w-3xl">
                <div className="p-6 bg-gray-50 rounded-lg shadow">
                    <h3 className="text-2xl font-bold">Software Developer — DSV Building Group</h3>
                    <p className="text-sm text-gray-600 mb-2">Toronto, ON | 2023</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Built a React.js-powered condo customization platform with a Node.js backend.</li>
                        <li>Implemented GraphQL APIs and WebSocket communication for real-time features.</li>
                    </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow">
                    <h3 className="text-2xl font-bold">Automation Developer — Multimatic Inc.</h3>
                    <p className="text-sm text-gray-600 mb-2">Markham, ON | 2022</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Engineered backend infrastructure with Node.js for a resource allocation module.</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
