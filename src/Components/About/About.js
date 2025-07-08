import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="container">
        {/* Circular Profile Picture */}
        <img
          src="/profile.jpg" // Replace with your image URL
          alt="Profile"
          className="profile-picture"
        />

        <h1 className="mb-4">Hola! I'm Shreya M</h1>
        <p className="lead">
          I'm a final-year Information Science Engineering student at Dayananda
          Sagar College of Engineering with a strong foundation in data
          structures and algorithms. I specialize in MERN stack development,
          with hands-on experience in building responsive, user-friendly web
          applications using React, Node.js, Express, and MongoDB.
          <br />
          <br />
          Currently, I'm broadening my expertise by exploring the dynamic fields of Machine
          Learning and DevOps. I'm focused on understanding model development,
          deployment workflows, and infrastructure automation to complement my
          development skills and build end-to-end intelligent solutions.
        </p>
        <div className="resume-link-container">
          <a href="/Shreya_M_Resume.pdf" target="_blank"
            rel="noopener noreferrer" className="resume-link">
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
