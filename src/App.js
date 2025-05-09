import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './Components/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="container-fluid"> 
        <h1 className="display-1 text-center welcome-text slide-in-left">Welcome to My Portfolio</h1>
        <p className="lead text-center">
          I'm an engineering student and full-stack developer
    
        </p>  
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
