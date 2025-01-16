import React from "react";
import "./App.css";
// import './Components/Navbar.css';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="container-fluid">
        <About />
        <h1 className="display-1 text-center">Welcome to My Portfolio</h1>
        <p className="lead text-center">
          I'm a software engineer, web developer, and freelance graphic
          designer.
        </p>
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
    </>
  );
}

export default App;
