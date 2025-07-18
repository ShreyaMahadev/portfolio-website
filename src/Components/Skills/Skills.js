import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E44D26" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#264DE4" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#06B6D4" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaGithub />, name: "GitHub", color: "#333333" },
    { icon: <FaReact />, name: "ReactJS", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiExpress style={{ color: '#ffffff' }} />, name: "ExpressJS", color: "#ffffff" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
    { icon: <FaNodeJs />, name: "NodeJS", color: "#83CD29" },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
