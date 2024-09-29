import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    return (
        <div>
            <Header/>
            
            <section class="relative w-full h-screen bg-cover bg-center">
                <div class="absolute inset-0 bg-white  opacity-60"></div>

                <div class="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 max-w-2xl">
                    <h1 class="text-5xl font-bold text-[#5D5A88] leading-tight mb-4">
                        Showcasing My Innovation, One Project at A Time
                    </h1>
                    <p class="text-lg font-medium text-black mb-8 max-w-lg">
                        Explore a collection of projects that highlight my journey as a developer. From web applications to data-driven solutions, each project is designed with the best practices.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="bg-[#5D5A88] text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-[#4b4873] transition duration-300">
                            <span>My GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-100 transition duration-300">
                            My Projects
                        </a>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-[#222222]">
                <div class="container mx-auto px-8 sm:px-12 lg:px-16 text-center">
                    <h2 class="text-4xl font-bold text-[#5D5A88] mb-4">Browse My Projects</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        From Cutting Edge Algorithms To Complex Web Apps. Below Are A List of My Favorite Projects. View my GitHub to see more.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        <div class="max-w-sm w-full lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                            <div class="h-48 bg-cover bg-center" title="Project Image"></div>
                            
                            <div class="p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
                                <p class="text-gray-600 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
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
                    <a href="#" class="border border-[#5D5A88] text-[#5D5A88] font-medium py-3 px-8 rounded-full hover:bg-[#5D5A88] hover:text-white transition duration-300">
                        View GitHub
                    </a>

                    <a href="#" class="bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-100 transition duration-300">
                        Contact Me                
                    </a>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectsPage;