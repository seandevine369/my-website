export default function Footer() {
    return (
        <footer className="bg-black text-gray-200 p-1">
            <div className="container mx-auto text-center">
                <span>
                    Copyright © {new Date().getFullYear()}
                </span>
                <span className="mx-2">|</span>
                <span className="text-white font-semibold">
                Sean Devine
                </span>
            </div>
        </footer>
    );
}