// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaDatabase, FaCogs } from 'react-icons/fa'; // Import the icons you need
import { SiMongodb, SiMysql, SiPostman, SiFigma } from 'react-icons/si';

const skills = {
    frontend: [
        { name: 'React JS', icon: <FaReact size={30} className="text-teal-400" />, description: 'Building interactive UIs' },
        { name: 'JavaScript', icon: <FaJsSquare size={30} className="text-yellow-400" />, description: 'Dynamic web development' },
        { name: 'HTML', icon: <FaHtml5 size={30} className="text-orange-600" />, description: 'Structuring the web' },
        { name: 'CSS', icon: <FaCss3Alt size={30} className="text-blue-500" />, description: 'Styling the web' }
    ],
    backend: [
        { name: 'Node.js', icon: <FaNodeJs size={30} className="text-green-500" />, description: 'Server-side JavaScript' },
        { name: 'Express.js', icon: <FaCogs size={30} className="text-gray-400" />, description: 'Web framework for Node.js' },
        { name: 'Java', icon: <FaJava size={30} className="text-red-500" />, description: 'Enterprise-grade applications' },
        { name: 'C', icon: <FaCogs size={30} className="text-blue-600" />, description: 'Low-level programming' }
    ],
    databases: [
        { name: 'MongoDB', icon: <SiMongodb size={30} className="text-green-500" />, description: 'NoSQL database' },
        { name: 'MySQL', icon: <SiMysql size={30} className="text-blue-400" />, description: 'Relational database' },
        { name: 'Postman', icon: <SiPostman size={30} className="text-orange-500" />, description: 'API testing tool' },
        { name: 'Figma', icon: <SiFigma size={30} className="text-purple-400" />, description: 'Design & prototyping' }
    ]
};


const Skills = () => {
    return (
    
            <div id= "#skills" className="container mx-auto px-4 py-16 "
    >
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-purple-300 pt-24 ">Skills & Technologies</h2>
                    <p className="text-gray-400">Here are the technologies and tools I work with to bring ideas to life.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col transform transition duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-pink-500">Frontend</h3>
                        <div className="space-y-4">
                            {skills.frontend.map((skill, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 bg-gray-700 rounded-md text-white">
                                    {skill.icon}
                                    <div>
                                        <p className="font-medium text-lg">{skill.name}</p>
                                        <p className="text-sm text-gray-400">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col transform transition duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Backend</h3>
                        <div className="space-y-4">
                            {skills.backend.map((skill, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 bg-gray-700 rounded-md text-white">
                                    {skill.icon}
                                    <div>
                                        <p className="font-medium text-lg">{skill.name}</p>
                                        <p className="text-sm text-gray-400">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Databases & Tools */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col transform transition duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Databases & Tools</h3>
                        <div className="space-y-4">
                            {skills.databases.map((skill, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 bg-gray-700 rounded-md text-white">
                                    {skill.icon}
                                    <div>
                                        <p className="font-medium text-lg">{skill.name}</p>
                                        <p className="text-sm text-gray-400">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default Skills;