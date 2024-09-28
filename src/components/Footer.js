import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className="w-full bg-[#222222] text-gray-400 py-8">
            {/* First Row: Navigation menu and social icons */}
            <div className="container mx-auto relative flex items-center justify-center px-4">
                {/* Centered Navigation Menu */}
                <div className="flex justify-center items-center space-x-8">
                    <Link to="/" className="text-gray-400 text-lg font-medium hover:text-gray-200">Home</Link>
                    <Link to="/about" className="text-gray-400 text-lg font-medium hover:text-gray-200">About</Link>
                    <Link to="/projects" className="text-gray-400 text-lg font-medium hover:text-gray-200">Project</Link>
                    <Link to="/contact" className="text-gray-400 text-lg font-medium hover:text-gray-200">Contact</Link>
                </div>
                {/* Social Media Icons */}
                <div className="absolute right-0 flex space-x-4 pr-20">
                    <a href="#" className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 w-10 h-10 flex items-center justify-center rounded-lg">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 w-10 h-10 flex items-center justify-center p-3 rounded-lg">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 w-10 h-10 flex items-center justify-center p-3 rounded-lg">
                        <FaInstagram />
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 w-10 h-10 flex items-center justify-center p-3 rounded-lg">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4 py-4">
                <hr className="border-gray-600" />
            </div>

            {/* Second Row Copyright */}
            <div className="container mx-auto text-center text-gray-500 px-4">
                <p>&copy; 2024 My Resume | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;