//src/Hero/Hero.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';


const Hero = () => {
    return (
        <div
            id="hero"
            className="flex flex-col items-center justify-center h-screen relative"
        >
            <div className="flex flex-col md:flex-row w-full justify-center items-center max-w-[1200px] 
            mx-auto px-4 md:px-8 relative z-10">
                {/* Main Content Container */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">




                    {/* Left Side (for desktop): Social Media Icons */}
                    {/* On mobile, these will be hidden and a different set of icons will show */}
                    <div className="hidden md:flex flex-col gap-4 absolute left-0 top-1/2 -translate-y-1/2">
                        <a href="https://www.linkedin.com/in/erandi-wickramaarachchi-6393b5312/" target="_blank"
                        
                        rel="noopener noreferrer" className="p-3 bg-purple-400/10 rounded-full 
                        cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn size={20} className="text-purple-600" />
                        </a>
                        <a href="https://github.com/ERANDI002" target="_blank" rel="noopener noreferrer" 
                        className="p-3 bg-purple-400/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub size={20} className="text-purple-600" />
                        </a>
                        <a href="https://www.instagram.com/erandi_wickramaarachchi_/?utm_source=qr&igsh=bXl6ZGF0azVyaHlx#"
                         target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-400/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram size={20} className="text-purple-600" />
                        </a>
                    </div>
                    



                    {/* Profile Picture */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg mb-8 md:mb-0 flex transform transition duration-300 hover:scale-105">
                        <img
                            src="/erandi.png"
                            alt="Profile"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    



                    {/* Right Side: Hero Text and Buttons */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        {/* Social Media Icons for Mobile View */}
                        <div className="flex md:hidden gap-4 mb-4">
                            <a href="https://www.linkedin.com/in/erandi-wickramaarachchi-6393b5312/" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-400/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn size={20} className="text-purple-600" />
                            </a>
                            <a href="https://github.com/ERANDI002" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-400/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub size={20} className="text-purple-600" />
                            </a>
                            <a href="https://www.instagram.com/erandi_wickramaarachchi_/?utm_source=qr&igsh=bXl6ZGF0azVyaHlx#" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-400/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaInstagram size={20} className="text-purple-600" />
                            </a>
                        </div>
                         <h1 className="text-4xl md:text-6xl font-bold mb-2 text-purple-900 flex  transform transition duration-300 hover:scale-105 dark:text-white">
                            Hi, I'm <span className="text-purple-400"></span>
                        </h1>



                        <h2 className="text-4xl md:text-6xl font-bold text-purple-400 mb-4 flex transform transition duration-300 hover:scale-105">
                         <TypeAnimation
                                sequence={[
                                    'Erandi Wickramarachchi',
                                    2000,
                                    'UI/UX Designer',
                                    2000,
                                    'Web Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </h2>
                         <p className=" text-lg text-purple-500 max-w-xl mb-8 font-bold text-center md:text-left
                          transition-colors duration-500 dark:text-white">
                             I am an undergraduate at the University of Sri Jayewardenepura, 
                             specializing in Information Technology and passionate about developing innovative software solutions.
                        </p>
                        <div className="flex gap-10 mt-8 justify-center ">
                            <a href= "#contact" className="px-6 py-3 font-bold border-4 border-purple-600 
                            text-purple-600 rounded-full hover:bg-white/10 ease-in duration-200 flex justify-center 
                            items-center dark:text-white flex transform transition duration-300 hover:scale-105">
                                Contact Me
                            </a>
                            <a href="/erandi-cv.pdf" download="Erandi_wickramaarachchi_CV.pdf" className="px-6 py-3 bg-purple-600 
                            text-white rounded-full hover:bg-purple-700 ease-in duration-200 flex justify-center 
                            items-center flex transform transition duration-300 hover:scale-105">
                                <span className="flex items-center gap-2">
                                    <FaDownload /> Download CV
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
                        
                       