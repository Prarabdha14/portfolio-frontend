// src/components/Projects.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { useInView } from 'react-intersection-observer';

const projectData = [
  {
    _id: '1',
    title: 'MERN Stack Portfolio',
    description: 'This personal portfolio website, built from the ground up to showcase my skills in full-stack development. Features a React frontend.',
    tech: ['React', 'Node.js', 'Express', 'Vite'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    _id: '2',
    title: 'Constitution Bot',
    description: 'An interactive chatbot designed to answer questions about the Indian Constitution, providing users with accessible legal and civic information.',
    tech: ['Python', 'NLTK', 'Flask', 'React'],
    githubLink: 'https://github.com/Prarabdha14/Constitutional-rag',
    liveLink: 'https://huggingface.co/spaces/prarabdha14/constitutional-ai-bot',
  },
  {
    _id: '3',
    title: 'Customer Churn Prediction',
    description: 'A machine learning model to predict customer churn, deployed as a web service. Helps businesses identify at-risk customers proactively.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    githubLink: 'https://github.com/Prarabdha14/Churn-deployment',
    liveLink: 'https://churn-frontend-react.onrender.com/', // This link is now updated
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="projects-section">
      <div ref={ref} className={`projects-content ${inView ? 'section-visible' : 'section-hidden'}`}>
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;