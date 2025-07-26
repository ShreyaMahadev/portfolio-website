
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiDocker,
  SiPostman,
  SiGit,
  SiNumpy,
  SiPandas,
  SiKeras,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import "./Skills.css";

const skillCategories = [
  {
    title: "Full-Stack Development",
    skills: [
      { icon: <FaHtml5 />, name: "HTML", color: "#E44D26" },
      { icon: <FaCss3Alt />, name: "CSS", color: "#264DE4" },
      { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: <FaReact />, name: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, name: "Node.js", color: "#83CD29" },
      { icon: <SiExpress />, name: "Express", color: "#ffffff" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      { icon: <SiNumpy />, name: "NumPy", color: "#013243" },
      { icon: <SiPandas />, name: "Pandas", color: "#150458" },
      { icon: <FaCode />, name: "Matplotlib", color: "#11557c" },
      { icon: <SiKeras />, name: "Keras", color: "#D00000" },
      { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
      { icon: <SiPytorch />, name: "PyTorch", color: "#EE4C2C" },
      { icon: <SiScikitlearn />, name: "Scikit-learn", color: "#F7931E" },
      { icon: <SiOpencv />, name: "OpenCV", color: "#5C3EE8" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGithub />, name: "GitHub", color: "#333333" },
      { icon: <SiGit />, name: "Git", color: "#F05032" },
      { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
      { icon: <FaCode />, name: "Visual Studio Code", color: "#007ACC" },
      { icon: <SiPostman />, name: "Postman", color: "#FF6C37" }
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-category-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category-card">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0 18px 24px 18px" }}>
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
