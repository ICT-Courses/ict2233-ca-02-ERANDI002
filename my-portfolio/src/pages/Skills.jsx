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