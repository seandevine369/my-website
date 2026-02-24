import { motion } from "framer-motion";

export default function Galaxy() {
    return (
        <>
            {/* Blurred glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-700 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-2/3 left-1/2 w-72 h-72 bg-blue-950 rounded-full mix-blend-screen filter blur-3xl opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-900 rounded-full mix-blend-screen filter blur-3xl opacity-15"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-15"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
        </>
    );
}
