//scr/components/ProjectCard/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project}) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center 
        text-center transform transition duration-300 hover:scale-105 ">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-4 mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                 className="bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-500 transition duration-300">
          GitHub
        </a>

      </div>
            
     </div>
    );
};

export default ProjectCard;
