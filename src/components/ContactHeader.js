import React from 'react';
import { Link } from 'react-router-dom';

const ContactHeader = () => {
    return (
        <header
            className="w-full bg-transparent bg-opacity-70 z-20"
            style={{
                background: "linear-gradient(0deg, rgba(101, 85, 143, 0.3), rgba(101, 85, 143, 0.3)), url('/images/nav.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "16px 0",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <nav className="container mx-auto flex justify-center items-center">
                {/* Centered Navigation Menu */}
                <div className="flex justify-center items-center space-x-8">
                    <Link to="/" className="text-gray-800 text-lg font-medium hover:text-gray-600">Home</Link>
                    <Link to="/about" className="text-gray-800 text-lg font-medium hover:text-gray-600">About</Link>
                    <Link to="/projects" className="text-gray-800 text-lg font-medium hover:text-gray-600">Projects</Link>
                    <Link to="/contact" className="text-gray-800 text-lg font-medium hover:text-gray-600">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default ContactHeader;
