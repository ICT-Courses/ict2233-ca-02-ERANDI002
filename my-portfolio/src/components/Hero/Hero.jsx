import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGitHub,FaInstagram , FaDownload} from 'react-icons/fa';

const Hero =() => {
    return (
        <div 
        id ="hero"
        className ="flex flex-col md:row items-center justify-center -screen text-white relative p 50 "
        
        >
        <div className = "flex flex-col md:flex-row w-full justify-center max-w-[1200px] mx-auto relative z-10">
      {/*Left side: Social Media Icons*/}
        <div className = "absolute left-0 top-10 flex flex-col gap-4">
        
         <a href ="www.linkedin.com/in/erandi-wickramaarachchi-6393b5312/" target="_blank" rel="noopener noreferrer" className = "p-3 bg-white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaLinkedin size={20} className="text-white"/>
         </a>

         <a href ="https://github.com/ERANDI002" target="_blank" rel="noopener noreferrer" className = "p-3 bg-white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaGitHub size={20} className="text-white"/>
         </a>

         <a href ="https://www.instagram.com/erandi_wickramaarachchi_/?utm_source=qr&igsh=bXl6ZGF0azVyaHlx#" target="_blank" rel="noopener noreferrer" className = "p-3 bg-white/10 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
         <FaInstagram size={20} className="text-white"/>
         </a> 

        </div>

        {/* Center:Profile Picture */}

        <div className ="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className = "relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
           <img 
           src= "/erandi.png"
           alt="Profile"
           className="object-cover w-full h-full"
           ></img> 
           </div> 

           {/*Texts  */}
           <div className="text-left md:text-left ml-24">
            <h1 className="text-4xl md:6xl font-bold mb-2">
                Hi, I'm <span className="text-purpule-400 mb-4">
                    </span>
                    </h1>
                    </div> 

            {/*Type Animation for the dynamic text*/}
            <h2 className= "text-4xl md:text-6xl font-bold text-purpule-400 mb-4">
                <TypeAnimation 
                    sequence={[
                        'Erandi Wathasala',
                        2000,
                         'Web Developer' ,
                        2000,
                          'UI/UX Designer',
                         2000, 
                    ]}
                    wrapper="span"
                    repeat={Infinity} 
                       />
             </h2>        
           
        
        
        
        
        
        
        </div>
        </div>
        </div>


    );
}