import React from "react";
import "./HomePageContent.css";

const HomePageContent = ({ firstName, lastName }) => {
  return (
    <div className="home-content">
      <img
        className="home-content-img"
        src="/images/coding-girl.png"
        alt="female programmer working"
      />
      <div className="home-content-text">
        <h4>
          HI THERE!{" "}
          <img
            className="waving-hand-img"
            src="/images/waving-hand.png"
            alt="waving hand"
          />{" "}
          I'M
        </h4>
        <h1>
          <span>{firstName}</span> {lastName}
        </h1>
        <p>
          An ENTHUSIASTIC <span>Front-End Web Developer</span> at the beginning
          of her journey in the beautiful world of coding.
        </p>
        <p>
          I'm looking for new opportunities to bring my contribution to the web.
        </p>
      </div>
    </div>
  );
};

export default HomePageContent;
