// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div 
      id="abt" 
      className="container mx-auto px-4 py-16 text-purple-500 transition-colors duration-500 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-purple-300 pt-24  ">About Me</h1>

        <div className="md:flex md:space-x-16 md:gap-16">

       <section className="mb-12 md:w-1/2 p-6 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden flex flex-col transform transition duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-teal-400 pb-2 inline-block "> 
              About Me
            </h2>
                {/* About Me Section*/}
                
            <p className="text-lg leading-relaxed ">
              Hello! I'm Erandi Wickramaarachchi, an undergraduate at the University of Sri
              Jayewardenepura pursuing a <span className="font-semibold">Bachelor of
              Science Honours in Information Technology</span>. I am passionate about
              <span className="font-semibold"> UI/UX design</span> and
              <span className="font-semibold"> web application development</span>,
              with a strong focus on creating modern, responsive, and user-friendly
              digital experiences. I enjoy problem-solving, collaborating with others,
              and continuously learning new technologies to deliver innovative and
              efficient solutions.
            </p>
          </section>
                {/* Education Section */}

          <section className="mb-12 md:w-1/2 p-6 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden flex flex-col transform transition duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-teal-400 pb-2 inline-block">
              Education
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                <span className="font-semibold">Bachelor of Science (Hons) in Information Technology</span>,
                University of Sri Jayewardenepura (2024 – Present) – Undergraduate
              </li>
              <li>
                <span className="font-semibold">Diploma in Computer Applications</span>,
                Bechmark Education Institute (2022 – 2023)
              </li>
              <li>
                <span className="font-semibold">Advanced Level</span>, AP/KG/Hemamali Maha Vidyalaya (2022)
              </li>
              <li>
                <span className="font-semibold">Ordinary Level</span>, WP/KE/Vishaka Balika Vidyalaya, Sapugaskanda (2018)
              </li>
            </ul>
          </section>
          </div>
        </div>
      </div>
    
  );
};

export default About;

