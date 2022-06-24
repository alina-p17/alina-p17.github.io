import React from "react";
import "./Project.css";

const Project = ({
  projectImgSrc,
  projectTitle,
  projectText,
  focusOn,
  counter,
  btnLive,
  btnRepo,
}) => {
  return (
    <div
      className={`project-container
        ${
          counter % 2 == 0
            ? "project-container-left"
            : "project-container-right"
        }`}
    >
      <img className="project-img" src={projectImgSrc} />
      <div className="project-text-container">
        <h3 className="project-title-left">{projectTitle}</h3>
        <p>{projectText}</p>
        <p className="project-focus">
          <span>Focused on:</span> <br />
          {focusOn}
        </p>
        <div>
          <a className="project-link" target="_blank" href={btnLive}>
            LIVE
          </a>
          <a className="project-link" target="_blank" href={btnRepo}>
            REPO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
