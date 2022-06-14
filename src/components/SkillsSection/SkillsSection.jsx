import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <div className="skills">
      <p>SKILLS:</p>
      <ul>
        <li className="skills-list">
          <img src="/images/html-icon.svg" alt="html-icon" />
          <p>HTML5</p>
        </li>
        <li className="skills-list">
          <img src="/images/css-icon.svg" alt="css-icon" />
          <p>CSS3</p>
        </li>
        <li className="skills-list">
          <img src="/images/javascript-icon.svg" alt="javascript-icon" />
          <p>JS+ES6</p>
        </li>
        <li className="skills-list">
          <img src="/images/react-icon.svg" alt="react-icon" />
          <p>React</p>
        </li>
        <li className="skills-list">
          <img src="/images/git-icon.svg" alt="git-icon" />
          <p>Git</p>
        </li>
        <li className="skills-list">
          <img src="/images/vscode-icon.svg" alt="vscode-icon" />
          <p>VS Code</p>
        </li>
      </ul>
    </div>
  );
};

export default SkillsSection;
