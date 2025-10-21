import * as React from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = React.useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/mqayobdp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                console.error(data);
            }
        } catch (err) {
            setStatus("error");
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto bg-zinc-900/80 p-10 rounded-2xl shadow-lg border border-zinc-700 space-y-6"
        >
            <h3 className="text-2xl font-semibold text-center mb-6">Get in Touch</h3>

            <div>
                <label className="block mb-2 text-sm text-left font-bold text-zinc-300">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label className="block mb-2 text-left text-sm font-bold text-zinc-300">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block mb-2 text-left text-sm font-bold text-zinc-300">Message</label>
                <textarea
                    name="message"
                    required
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    rows={5}
                    placeholder="Write your message..."
                ></textarea>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold
                             py-3 px-4 rounded-lg transition-colors duration-200"
            >
                {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback messages */}
            {status === "success" && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-center">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}