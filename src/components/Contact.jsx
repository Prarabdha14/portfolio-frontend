// src/components/Contact.jsx

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? Please fill out the form below and I'll get back to you as soon as possible!</p>
        
        {/* PASTE YOUR <IFRAME> CODE FROM GOOGLE FORMS HERE */}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdJj3sW2n7gIBnEEvbVnB4Q3uLN-3tcVXzk21hOh4MeY0LLfg/viewform?embedded=true" 
          width="100%" 
          height="713" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0">
            Loading…
        </iframe>

      </div>
    </section>
  );
};

export default Contact;