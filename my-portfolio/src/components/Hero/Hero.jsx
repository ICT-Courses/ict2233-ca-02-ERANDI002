import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGitHub,FaInstagram , FaDownload} from 'react-icons/fa';

const Hero =() => {
    return (
        <div 
        id ="hero"
        className ="flex flex-col md:row items-center justify-center -screen text-white relative p 50 "
        
        >
        <div className = "flex flex-col md:flex-row w-full justfiy-center max-w-[1200px] mx-auto relative z-10">
      {/*Left side: Social Media Icons*/}
        <div className = "absolute left-0 top-10 flex flex-col gap-4">
         <a href ="www.linkedin.com/in/erandi-wickramaarachchi-6393b5312/" target="-blank" rel="noopener noreferrer" className = "p-3 bg white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaLinkedinIn size={20} className="text-white"/>
         </a>

         <a href ="https://github.com/ERANDI002" target="-blank" rel="noopener noreferrer" className = "p-3 bg white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaGithub size={20} className="text-white"/>
         </a>

         <a href ="https://www.instagram.com/erandi_wickramaarachchi_/?utm_source=qr&igsh=bXl6ZGF0azVyaHlx#" target="-blank" rel="noopener noreferrer" className = "p-3 bg white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaInstagram size={20} className="text-white"/>
         </a> 
        </div>







            </div>
        </div>


    );
}