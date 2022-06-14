import React from "react";
import "./AboutMePageContent.css";

const AboutMePageContent = () => {
  return (
    <div className="about-me-content">
      <section className="about-me-section">
        <div className="my-photo-container">
          <img
            className="my-photo-img"
            src="/images/personal_photo.jpg"
            alt="woman photo"
          />
          <a href="/cv/Alina-CV.pdf" download>
            {" "}
            <button>Download CV</button>
          </a>
          <div>
            <a href="https://www.linkedin.com/in/alina-paicu" target="_blank">
              <img
                className="logos linkedIn-logo"
                src="/images/linkedIn-logo.png"
                alt="LinkedIn logo"
              />
            </a>
            <a href="https://github.com/alina-p17" target="_blank">
              <img
                className="logos github-logo"
                src="/images/github-logo.webp"
                alt="GitHub logo"
              />
            </a>
          </div>
        </div>
        <p>
          I am a former pharmacist{" "}
          <img
            className="pill-img"
            src="/images/pills-image.png"
            alt="pill image"
          />{" "}
          who found out that is never too late to reinvent yourself and to do
          what you love. I've discovered the passion and the beauty of writing
          code and bringing applications to life, SO in the last couple of
          months I've dedicated myself to becoming better and better at this. I
          started my journey in Web Development with{" "}
          <span style={{ color: "rgb(30,144,255)" }}>
            Informal School of IT
          </span>
          , a large platform in Romania with industry professionals who kept
          motivating and challenging me with different interesting projects.
          With hours of courses as well as self study, I'm now{" "}
          <span style={{ color: "rgb(30,144,255)" }}>
            looking for new opportunities
          </span>{" "}
          to show my skills and to continue to grow as a{" "}
          <span style={{ color: "rgb(227, 56, 102)" }}>Web Developer</span>.
        </p>
      </section>
    </div>
  );
};

export default AboutMePageContent;
