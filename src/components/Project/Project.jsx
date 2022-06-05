import React from "react";
import "./Project.css";

const Project = ({
  projectImgSrc,
  projectTitle,
  projectText,
  focusOn,
  counter,
}) => {
  if (counter % 2 == 0) {
    return (
      <div
        className={
          counter % 2 == 0
            ? "project-container-left"
            : "project-container-right"
        }
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
            <button className="project-btn">LIVE</button>
            <button className="project-btn">REPO</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          counter % 2 == 0
            ? "project-container-left"
            : "project-container-right"
        }
      >
        <div className="project-text-container">
          <h3 className="project-title-right">{projectTitle}</h3>
          <p>{projectText}</p>
          <p className="project-focus">
            <span>Focused on:</span>
            <br />
            {focusOn}
          </p>
          <div>
            <button className="project-btn">
              <a target="_blank" href="/live-projects/rock-paper-scissors">
                LIVE
              </a>
            </button>
            <button className="project-btn">
              <a
                target="_blank"
                href="https://github.com/alina-p17/alina-p17.github.io/tree/main/public/live-projects/rock-paper-scissors"
              >
                REPO
              </a>
            </button>
          </div>
        </div>
        <img className="project-img" src={projectImgSrc} />
      </div>
    );
  }
};

export default Project;
