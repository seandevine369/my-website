export default function ContactForm() {
    return (
        <form
            className="w-full max-w-2xl mx-auto bg-zinc-900/80 p-10 rounded-2xl shadow-lg border border-zinc-700 space-y-6">
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
    );
}