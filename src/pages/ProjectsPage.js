import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import heroBackground from '../assets/images/projects-hero.jpg';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
const ProjectsPage = () => {
    return (
        <div>
            <Header/>
            
            <section 
                class="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div class="absolute inset-0 bg-white  opacity-20"></div>

                <div class="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 max-w-2xl">
                    <h1 class="text-5xl font-bold text-slate-100 leading-tight mb-4">
                        Showcasing My Innovation, One Project at A Time
                    </h1>
                    <p class="text-lg font-medium text-slate-200 mb-8 max-w-lg">
                        Explore a collection of projects that reflect my journey of innovation and impact. From electric vehicles to reusable rockets, each project is a testament to pushing the boundaries of technology for a better future.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://github.com/ElonMusk" class="bg-[#5D5A88] text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-[#4b4873] transition duration-300">
                            <span>My GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#projects-section" class="bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-100 transition duration-300">
                            My Projects
                        </a>
                    </div>
                </div>
            </section>

            <section  id="projects-section" class="py-16 bg-[#222222]">
                <div class="container mx-auto px-8 sm:px-12 lg:px-16 text-center">
                    <h2 class="text-4xl font-bold text-[#5D5A88] mb-4">Browse My Projects</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        From Mars-bound spacecraft to revolutionary energy solutions, below are some of my favorite innovations. View my GitHub for more detailed technical projects.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project1} 
                                alt="SpaceX Reusable Rockets" 
                                class="h-48 w-full object-cover"
                                title="SpaceX Reusable Rockets" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">SpaceX Reusable Rockets</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    The world’s first reusable rocket system, aimed at reducing the cost of space exploration and making life multi-planetary. Discover how we've launched and landed rockets with precision, paving the way for human settlement on Mars.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project2} 
                                alt="Tesla Autopilot" 
                                class="h-48 w-full object-cover"
                                title="Tesla Autopilot" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Tesla Autopilot</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    A comprehensive suite of advanced driver-assistance systems, designed to enhance safety and enable autonomous driving. Learn how Tesla's software and hardware work together to transform transportation.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project3} 
                                alt="Starlink Satellite Network" 
                                class="h-48 w-full object-cover"
                                title="Starlink Satellite Network" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Starlink Satellite Network</h3>
                                <p class="text-gray-600 text-base mb-4">
                                A constellation of low Earth orbit satellites that provide high-speed internet to underserved regions. Discover how we're building the infrastructure to make the world more connected.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project4} 
                                alt="The Boring Company" 
                                class="h-48 w-full object-cover"
                                title="The Boring Company" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">The Boring Company</h3>
                                <p class="text-gray-600 text-base mb-4">
                                Revolutionizing urban transportation with underground tunnels that alleviate traffic congestion. Find out how our tunneling technology makes fast, cost-effective urban transit possible.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project5} 
                                alt="Neuralink" 
                                class="h-48 w-full object-cover"
                                title="Neuralink" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Neuralink</h3>
                                <p class="text-gray-600 text-base mb-4">
                                Connecting humans and computers with high-bandwidth brain-machine interfaces. Dive into our advancements in neuroscience and technology aimed at helping those with neurological conditions.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                src={project6} 
                                alt="Tesla Energy Solutions" 
                                class="h-48 w-full object-cover"
                                title="Tesla Energy Solutions" 
                            />
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Tesla Energy Solutions</h3>
                                <p class="text-gray-600 text-base mb-4">
                                Powering the world sustainably with innovative solar and energy storage solutions. Learn more about how we're creating a cleaner energy ecosystem with Powerwall, Solar Roof, and utility-scale energy products.
                                </p>
                                <div class="flex justify-center">
                                    <a href="#" class="text-[#5D5A88] border border-[#5D5A88] font-semibold py-2 px-4 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300 flex items-center space-x-2 whitespace-nowrap">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-gradient-to-r from-gray-200 to-gray-400 py-16">
                <div class="container mx-auto text-center">
                    <h3 class="text-sm font-bold text-[#5D5A88] uppercase mb-4">More Projects</h3>
                    <h2 class="text-4xl font-semibold text-gray-900 mb-8">Like The Projects I Worked On? Let's Find A Way To Work Together.</h2>
                </div>

                <div class="flex justify-center space-x-4">
                    <a href="/ContactPage.jsx" class="bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-100 transition duration-300">
                        Contact Me                
                    </a>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectsPage;