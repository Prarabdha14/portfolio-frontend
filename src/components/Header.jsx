// src/components/Header.jsx

import React from 'react';
import './Header.css';
import { TypeAnimation } from 'react-type-animation'; // Import the new component

const Header = () => {
  return (
    <header id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Prarabdha Pandey</h1>
          <p className="hero-subtitle">AI & Full Stack Developer</p>

          {/* This is the new animated text component */}
          <TypeAnimation
            sequence={[
              'I build intelligent web applications.',
              2000, // Waits 2s
              'I turn complex data into insights.',
              2000, // Waits 2s
              'I create seamless user experiences.',
              2000, // Waits 2s
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="hero-animation"
          />

          <a href="#projects" className="hero-button">View My Work</a>
        </div>
        <img src="/profile-pic.jpg" alt="Prarabha Pandey" className="hero-img" />
      </div>
    </header>
  );
};

export default Header;