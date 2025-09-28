export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-6 mt-8">
            <div className="container mx-auto text-center">
                © {new Date().getFullYear()} Sean Devine — Built with React + Vite
            </div>
        </footer>
    );
}