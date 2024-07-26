import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">
                    Visual-Algo
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Algorithms</Link>
                    <Link to="/" className="text-white hover:text-gray-400">About</Link>
                    <Link to="/" className="text-white hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
