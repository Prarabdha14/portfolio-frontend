// src/components/Contact.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Use the new environment variable for the URL
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/contact`;
    await axios.post(apiUrl, formData);

    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Failed to send message. Please try again later.');
  }
};

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>I'm currently open to new opportunities. Feel free to reach out on any of these platforms or send me a message directly!</p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Connect With Me</h3>
            <a href="https://github.com/Prarabdha14" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub className="social-icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/prarabdha-pandey-05bbba346/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
            <a href="https://x.com/PrarabdhaPande1" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter className="social-icon" /> Twitter
            </a>
            <a href="mailto:prarabdhapandey696@gmail.com" className="social-link">
              <FaEnvelope className="social-icon" /> Email
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;