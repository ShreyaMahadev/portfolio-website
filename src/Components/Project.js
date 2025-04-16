import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Project.css";

const ProjectCard = ({ title, description, techStack, githubLink, liveDemoLink }) => {
  return (
    <div className="project-card ">
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links center">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "Pollution Prediction",
      description: "An IoT-based pollution prediction system.",
      techStack: ["IOT", "Embedded C"],
      githubLink: "https://github.com/ShreyaMahadev/Pollution-Prediction",
      
    },
    {
      title: "Credit Card Fraud Detection",
      description: "An AI-powered credit card fraud detection system.",
      techStack: ["Python", "Machine Learning", "Streamlit"],
      githubLink: "https://github.com/ShreyaMahadev/AI-Powered-Credit-Card-Fraud-Detection-System",
      
    },
    {
      title: "CryptoTrackr",
      description: "A cryptocurrency tracking application providing real-time updates and analytics.",
      techStack: ["React", "TailWindCSS", "CoinGecko API"],
      githubLink: "https://github.com/ShreyaMahadev/CryptoTrackr",
    },
    
  ];

  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
