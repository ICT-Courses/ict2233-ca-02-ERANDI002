// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import styles from './Projects.module.css';

const Projects = () => {


    // Functional component using useState hooks to manage GitHub repos, loading, and error states 
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

}