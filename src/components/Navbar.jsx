// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">My Portfolio</a>
      <div className="navbar-links">
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a> {/* This is the new link */}
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;