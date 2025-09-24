// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import styles from './Projects.module.css';

const Projects = () => {


    // Functional component using useState hooks to manage GitHub repos, loading, and error states 
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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


}