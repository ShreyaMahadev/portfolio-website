import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      
        <div className="container" >
         
            {/* Circular Profile Picture */}
            <img
              src="/profile.jpg" // Replace with your image URL
              alt="Profile"
              className="profile-picture"
            />

            <h1 className="mb-4">Hola! I'm Shreya M</h1>
            <p className="lead">
              I'm a third-year Information Science Engineering student at
              Dayananda Sagar College of Engineering with a strong foundation
              in algorithms and data structures. I have hands-on experience in
              full-stack development, eager to contribute to innovative projects
              and create customer-focused solutions.
            </p>
            <p className="lead">
              Currently, I'm on a thrilling journey, exploring the enchanting
              world of Artificial Intelligence and Machine Learning. I'm a web
              developer with a passion for creating responsive and user-friendly
              websites. I specialize in React, JavaScript, and modern web
              development frameworks.
            </p>
            <a href="\Shreya_M_Resume.pdf" className="btn-custom" download>
              Resume
            </a>
          
        </div>
      
    </>
  );
}
