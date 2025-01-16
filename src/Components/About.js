import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      
      <section id="about">
        <div className="container text-center">
          <div className="overlay">
            <h1 className="mb-4" style={{ fontWeight: "bold", fontSize: "3rem" }}>
              Hola! I'm Shreya M
            </h1>
            <p className="lead" style={{ fontSize: "1.2rem" }}>
              I'm a third year formation Science engineering student at Dayananda Sagar College of Engineering with a strong foundation in algorithms, data
              structures with hands-on experience in
              full-stack development. Eager to contribute
              to innovative projects and create customer-focused solutions.
            </p>
            <p className="lead" style={{ fontSize: "1.2rem" }}>
              Currently, I'm on a thrilling journey, exploring the enchanting
              world of Artificial Intelligence and Machine Learning.  I'm a web developer with a passion for creating responsive and
            user-friendly websites. I specialize in React, JavaScript, and
            modern web development frameworks.
            </p>
            <a href="#resume" className="btn-custom">
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}