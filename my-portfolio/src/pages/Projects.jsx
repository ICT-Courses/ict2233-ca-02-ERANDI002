// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import styles from './Projects.module.css';

const Projects = () => {


    // Functional component using useState hooks to manage GitHub repos, loading, and error states 
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to asynchronously fetch GitHub repositories on component mount
    // Handles loading state, successful data retrieval, and errors

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/ERANDI002/repos');
                if (!response.ok) {
                    throw new Error(`GitHub API error! Status: ${response.status}`);
                }
                const data = await response.json();
                
            
                setRepos(data);
            } catch (err) {
                
                setError(err.message);
            } finally {
                
                setIsLoading(false);
            }
        };

         fetchRepos();
    }, []);

     const getProjectImage = (repoName) => {
        switch (repoName) {
            case 'BMI-Calculator':
                return '/project-placeholder.png'; 
            case 'Flower_Bouquet_Website-':
                return '/flower.png'; 
            case 'student-clubs-app': 
                return '/student-club.png'; 
            default:
                return '/project-placeholder.png'; 
        }
    };
    


    }

