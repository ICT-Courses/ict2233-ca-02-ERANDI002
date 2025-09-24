//src/components/MainPortfolio.jsx

import React from 'react';
import Hero from '../components/Hero/Hero.jsx';
import About from'../pages/Projects.jsx';
import Project from '../pages/Projects.jsx';
import Contact from '../pages/Skills.jsx';
import Skills from '../pages/Skills.jsx';

const MainPorfolio = () => {
    return (
        <div>
            <section id ="home">
                <Hero/>
            </section>
            <section id ="about">
                <About/>
            </section>
            <section id ="skills">
                <Skills/>
            </section>
            <section id ="projects">
                <Projects/>
            </section>
            <section id ="contact">
                <Contact/>
            </section>
        </div>
    );
};

export default MainPortfolio;