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
      

    return (
        <div id="projects" className={styles.projectsPage}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 dark:text-purple-300 ">My Projects</h1>

            {isLoading && <p className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4text-center text-white text-lg dark:text-purple-300">Loading repositories...</p>}
            {error && <p className="text-center text-red-500 text-lg dark:text-purple-300">Error: {error}</p>}

            {!isLoading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
                    {repos.map((repo) => (
                        <ProjectCard 
                            key={repo.id} 
                            project={{
                                title: repo.name,
                                description: repo.description || 'No description provided.',
                                githubUrl: repo.html_url,
                                image: getProjectImage(repo.name), 
                                liveDemoUrl: repo.homepage,
                            }} 
                            buttonColor="bg-purple-300 hover:bg-purple-400"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;


    

