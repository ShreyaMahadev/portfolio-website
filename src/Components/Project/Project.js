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
      title: "IntervAI",
      description: "A job interview preparation platform powered by Vapi AI Voice agents.",
      techStack: ["Next.js", "Firebase", "TailWindCSS"],
      githubLink: "https://github.com/ShreyaMahadev/IntervAI",
    },
    {
      title: "SliceLink",
      description: "A simple and efficient URL Shortener that allows users to shorten long URLs for easier sharing and management.",
      techStack: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/ShreyaMahadev/SliceLink",
      
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
    {
      title: "Plant Disease Prediction Using CNN",
      description: "A deep learning-based system to predict plant diseases using Convolutional Neural Networks.",
      techStack: ["Python", "TensorFlow", "Keras"],
      githubLink: "https://github.com/ShreyaMahadev/Plant_Disease_Prediction_Using_CNN",
    },
    {
      title: "Generating Hand Written Digits using DCGAN",
      description: "A deep learning project that generates handwritten digits using Deep Convolutional Generative Adversarial Networks (DCGAN).",
      techStack: ["Python", "TensorFlow", "Keras", "DCGAN"],
      githubLink: "https://github.com/ShreyaMahadev/Generating-Hand-Written-Digits-using-DCGAN",
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
