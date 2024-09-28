import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import heroImage from '../assets/images/Hero.jpg'
const LandingPage = () => {
    return (
        <div>
            <Header/>
            
            {/* Hero Section */}
            <section className="relative bg-gray-200 h-screen flex flex-col justify-center items-center">
                <img alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" />
                <div className="z-10 text-center text-white">
                    <h1 className="text-5xl font-bold">Hello, My Name Is</h1>
                    <h2 className="text-6xl font-bold text-blue-400 mt-2">Name Here</h2>
                    <p className="text-xl mt-4">And This Is My Resume</p>
                </div>
            </section>

            {/* About Section */}
            <section class="bg-gray-900 text-white py-20">
                <div class="container mx-auto text-center px-6 md:px-12">
                    {/* Section Heading */}
                    <h2 class="text-4xl font-bold mb-4">Get To Know A Bit About Me</h2>
                    <p class="text-lg max-w-2xl mx-auto mb-12">
                        Hi! I'm Emily Anderson, a Front-End Web Developer passionate about creating intuitive and user-friendly websites. With 10 years of experience in HTML, CSS, JavaScript, and React, I strive to turn creative ideas into responsive and visually appealing web designs.
                    </p>
                    
                    {/* Cards Section */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Card 1: Resume */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src="../images/Icons/resume.svg" alt="Resume Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My Resume</h3>
                            <a href="#" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                        
                        {/* Card 2: LinkedIn */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src="../images/Icons/linkedin.svg" alt="LinkedIn Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My LinkedIn</h3>
                            <a href="#" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                        
                        {/* Card 3: GitHub */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src="../images/Icons/github.svg" alt="GitHub Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My GitHub</h3>
                            <a href="#" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                        
                        {/* Card 4: More About Me */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src="../images/Icons/more-info.svg" alt="More Info Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">More About Me</h3>
                            <a href="#" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage;