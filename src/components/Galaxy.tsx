import { motion } from "framer-motion";

export default function Galaxy() {
    return (
        <>
            {/* Animated galaxy gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-950 via-indigo-900 to-black"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
            />

            {/* Blurred glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-800 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-2/3 left-1/2 w-72 h-72 bg-purple-800 rounded-full mix-blend-screen filter blur-3xl opacity-25"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
        </>
    );
}
