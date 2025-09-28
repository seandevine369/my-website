import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 w-full">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="font-bold">Sean Devine</Link>
                <div className="space-x-4">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}