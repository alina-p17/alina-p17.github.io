import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <div className="skills">
      <p>SKILLS:</p>
      <ul>
        <li className="skills-list">
          <img src="/images/html-icon.svg" alt="html-icon" />
          HTML5
        </li>
        <li className="skills-list">
          <img src="/images/css-icon.svg" alt="css-icon" />
          CSS3
        </li>
        <li className="skills-list">
          <img src="/images/javascript-icon.svg" alt="javascript-icon" />
          JS+ES6
        </li>
        <li className="skills-list">
          <img src="/images/react-icon.svg" alt="react-icon" />
          React
        </li>
        <li className="skills-list">
          <img src="/images/github-logo.webp" alt="github-icon" />
          GitHub
        </li>
        <li className="skills-list">
          <img src="/images/vscode-icon.svg" alt="vscode-icon" />
          VS Code
        </li>
      </ul>
    </div>
  );
};

export default SkillsSection;
