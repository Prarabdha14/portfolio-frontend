// src/components/Certifications.jsx

import React from 'react';
import './Certifications.css';
import { useInView } from 'react-intersection-observer';

// Your certification data
const certificationsData = [
  {
    name: 'OCI Generative AI Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=927341FA4B30A400837968CEFFC4B240A0DF392D0A6AE87C53E6A10E67A4C0DD',
  },
  {
    name: 'Computer Vision Masterclass',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-f376080d-21e7-4e5a-a1b7-21c33d6cf995/',
  },
  {
    name: 'ISRO-BAH 2025 Hackathon',
    issuer: 'Hack2Skill',
    link: 'https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P31289',
  },
];

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="certifications-section">
      <div ref={ref} className={`certifications-container ${inView ? 'section-visible' : 'section-hidden'}`}>
        <h2>Certifications & Credentials</h2>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3>{cert.name}</h3>
              <p className="cert-issuer">Issued by: {cert.issuer}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;