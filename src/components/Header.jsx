// src/components/Header.jsx

import React from 'react';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home" className="hero-section">
      <div className="hero-content">
        <h1>Prarabdha Pandey</h1>
        <p className="hero-subtitle">AI & Full Stack Developer</p>

        <TypeAnimation
          sequence={[
            'I build intelligent web applications.',
            2000,
            'I turn complex data into insights.',
            2000,
            'I create seamless user experiences.',
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="hero-animation"
        />

        <a href="#projects" className="hero-button">View My Work</a>

        <div className="hero-socials">
          <a href="https://github.com/Prarabdha14" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/prarabdha-pandey-05bbba346/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://x.com/PrarabdhaPande1" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:prarabdhapandey696@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;