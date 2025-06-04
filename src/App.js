import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ThemeToggle from "./Components/ThemeToggle";
import ScrollToTop from "./Components/ScrollToTop";
import LoadingSpinner from "./Components/LoadingSpinner";
import './Components/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });

    setTimeout(() => {
      setLoading(false);
      setShowName(true);
    }, 1500);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ThemeToggle />
      <ScrollToTop />
      <Navbar />
      <div id="home" className="container-fluid">
        <h1 
          className={`display-1 text-center welcome-text ${showName ? 'slide-in-left' : ''}`}
          data-aos="fade-down"
        >
          Welcome to My Portfolio
        </h1>
        <p 
          className="lead text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I'm an engineering student and full-stack developer
        </p>
      </div>
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>
      <div id="projects" data-aos="fade-up">
        <Project />
      </div>
      <div id="contact" data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;