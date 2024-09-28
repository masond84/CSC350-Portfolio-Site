import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full bg-transparent bg-opacity-70 border-b border-gray-300 z-20">
            <nav className="container mx-auto flex justify-center items-center p-4">
                {/* Centered Navigation Menu */}
                <div className="flex justify-center items-center space-x-8">
                    <Link to="/" className="text-gray-800 text-lg font-medium hover:text-gray-600">Home</Link>
                    <Link to="/about" className="text-gray-800 text-lg font-medium hover:text-gray-600">About</Link>
                    <Link to="/projects" className="text-gray-800 text-lg font-medium hover:text-gray-600">Projects</Link>
                    <Link to="/contact" className="text-gray-800 text-lg font-medium hover:text-gray-600">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;