import Section from "../components/Section";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Footer from "@/components/Footer.tsx";

export default function ContactSection() {
    return (
        <Section id="contact">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-indigo-950 to-black opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
            <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-12 tracking-tight text-center">
                Contact Me
            </h2>
            <p className="text-center text-lg mb-8 text-zinc-400">
                Based in Toronto, Canada 🍁 — feel free to reach out!
            </p>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                    href="mailto:sdevine.ca@gmail.com"
                    className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700
                     hover:border-blue-500 hover:text-blue-400
                     px-5 py-3 rounded-xl shadow-md transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/seandevine112"
                    target="_blank"
                    className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700
                     hover:border-blue-500 hover:text-blue-400
                     px-5 py-3 rounded-xl shadow-md transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/seandevine"
                    target="_blank"
                    className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700
                     hover:border-blue-500 hover:text-blue-400
                     px-5 py-3 rounded-xl shadow-md transition-colors"
                >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700
                     hover:border-blue-500 hover:text-blue-400
                     px-5 py-3 rounded-xl shadow-md transition-colors"
                >
                    <FileText className="w-5 h-5" />
                    <span>Resume</span>
                </a>
            </div>

            {/* Contact Form */}
            <form className="w-full max-w-2xl mx-auto bg-zinc-900/80 p-10 rounded-2xl shadow-lg border border-zinc-700 space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-6">Send me a message</h3>

                <div>
                    <label className="block mb-2 text-sm font-medium text-zinc-300">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-zinc-300">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-zinc-300">Message</label>
                    <textarea
                        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        rows={5}
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold
                     py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    Send Message
                </button>
            </form>
                <Footer />
            </div>
        </Section>
    );
}
