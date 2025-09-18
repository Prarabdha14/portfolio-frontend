// src/components/ProjectCard.jsx

import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* This new footer div groups the bottom elements */}
      <div className="card-footer">
        <div className="project-tech">
          {tech.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;