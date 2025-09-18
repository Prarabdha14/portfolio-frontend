// src/components/About.jsx

import React from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer'; // Import the hook

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about-section">
      <div ref={ref} className={`about-content ${inView ? 'section-visible' : 'section-hidden'}`}>
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer specializing in bridging the gap between intelligent AI models and dynamic user experiences. My passion lies in architecting complete solutions that bring complex, data-driven ideas to life.
        </p>
        <p>
          I leverage the MERN stack to build robust platforms for AI-powered applications. This means crafting intuitive front-ends with <strong>React</strong> where users can interact with machine learning models, and engineering powerful <strong>Node.js</strong> and <strong>Express</strong> APIs to process data and deliver intelligent insights. My journey is driven by a deep curiosity for not just how to build applications, but how to make them smarter. Whether it's deploying a predictive model or designing a responsive UI, I am dedicated to writing clean, efficient code that solves real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;