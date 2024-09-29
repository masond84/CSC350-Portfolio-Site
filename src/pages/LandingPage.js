import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import backgroundImage from '../assets/images/Elon-X-Company.png';
import resume from '../assets/images/resume.svg';
import linkedIn from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import moreInfo from '../assets/images/more-info.svg';

//import heroImage from '../assets/images/Hero.jpg'
const LandingPage = () => {
    return (
        <div>
            <Header/>
            
            {/* Hero Section */}
            <section 
                className="relative bg-gray-200 h-screen flex flex-col justify-center items-center"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}    
            >
                <div className="z-10 text-center text-white">
                    <h1 className="text-5xl font-bold">Hello, My Name Is</h1>
                    <h2 className="text-6xl font-bold text-blue-400 mt-2 levitating">Elon Musk</h2>
                    <p className="text-xl mt-4">And This Is My Resume</p>
                </div>
            </section>

            {/* About Section */}
            <section class="bg-gray-900 text-white py-20">
                <div class="container mx-auto text-center px-6 md:px-12">
                    {/* Section Heading */}
                    <h2 class="text-4xl font-bold mb-4">Get To Know A Bit About Me</h2>
                    <p class="text-lg max-w-2xl mx-auto mb-12">
                        Hi! I'm Elon Musk, an entrepreneur and innovator driven by a mission to revolutionize industries and shape the future. With decades of experience leading groundbreaking companies like Tesla, SpaceX, Neuralink, and The Boring Company, I'm passionate about pushing the boundaries of technology to solve humanity's biggest challenges. Whether it's accelerating the world's transition to sustainable energy, making life multi-planetary, or advancing human-computer interfaces, my goal is to turn ambitious ideas into reality.
                    </p>
                    
                    {/* Cards Section */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Card 1: Resume */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src={resume} alt="Resume Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My Resume</h3>
                            <a 
                                href="/files/elon-musk-resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4"
                            >
                                View More
                            </a>
                        </div>
                        
                        {/* Card 2: LinkedIn */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src={linkedIn} alt="LinkedIn Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My LinkedIn</h3>
                            <a href="https://www.linkedin.com/company/dablim-solu%C3%A7%C3%B5es-gr%C3%A1ficas/" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                        
                        {/* Card 3: GitHub */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src={github} alt="GitHub Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">My GitHub</h3>
                            <a href="https://github.com/ElonMusk" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4">View More</a>
                        </div>
                        
                        {/* Card 4: More About Me */}
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <img src={moreInfo} alt="More Info Icon" class="mx-auto mb-4 w-14 h-14" />
                            <h3 class="text-xl font-bold text-gray-800 mb-2">More About Me</h3>
                            <a 
                                href="https://investinmusk.com/"
                                class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4"
                            >
                                    View More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage;