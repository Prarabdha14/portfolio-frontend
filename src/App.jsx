// src/App.jsx

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;