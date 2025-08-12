import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Project.css";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="project-card ">
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
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
      description:
        "A job interview preparation platform powered by Vapi AI Voice agents. IntervAI simulates real interview scenarios, provides instant feedback, and helps users improve their communication and technical skills.",
      techStack: ["Next.js", "Firebase", "TailWindCSS"],
      githubLink: "https://github.com/ShreyaMahadev/IntervAI",
    },
    {
      title: "Cold-Email-Generator",
      description:
        "An end to end LLM and gen ai project that will use Llama3.1 open source LLM, chromadb (vector store), Langchain and streamlit to helps you generate personalized cold emails for job applications.",
      techStack: ["Python", "LangChain", "Streamlit"],
      githubLink: "https://github.com/ShreyaMahadev/Cold-Email-Generator",
    },
    {
      title: "SliceLink",
      description:
        "A simple and efficient URL Shortener that allows users to shorten long URLs for easier sharing and management.",
      techStack: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/ShreyaMahadev/SliceLink",
    },
    {
      title: "AI Powered Credit Card Fraud Detection",
      description: "A machine learning-based system that detects fraudulent credit card transactions using Logistic Regression. This system provides a user-friendly web interface for real-time fraud detection.",
      techStack: ["Python", "Machine Learning", "Streamlit"],
      githubLink:
        "https://github.com/ShreyaMahadev/AI-Powered-Credit-Card-Fraud-Detection-System",
    },
    {
      title: "AI-Powered Code Reviewer",
      description:
        "An AI-powered code review tool that provides feedback and suggestions for code improvements.",
      techStack: ["React", "Node.js", "Express.js", "OpenAI API"],
      githubLink: "https://github.com/ShreyaMahadev/AI-Powered-Code-Reviewer",
    },
    {
      title: "Plant Disease Prediction Using CNN",
      description:
        "A deep learning-based system to predict plant diseases using Convolutional Neural Networks.",
      techStack: ["Python", "TensorFlow", "Keras"],
      githubLink:
        "https://github.com/ShreyaMahadev/Plant_Disease_Prediction_Using_CNN",
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
