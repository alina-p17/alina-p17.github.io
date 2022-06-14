import React from "react";
import "./AboutMePageTitle.css";

const AboutMePageTitle = () => {
  return (
    <div className="h-container">
      <h1 className="h1-container" style={{ color: "rgb(227, 56, 102)" }}>
        Alina{" "}
        <span>
          <p className="box b5"> {"->"} tech enthusiast 💻</p>
          <p className="box b1">{"->"} ambitious 💦</p>
          <p className="box b2"> {"->"} bookworm 📚</p>
          <p className="box b3"> {"->"} mountain lover 🌄</p>
          <p className="box b4"> {"->"} optimist 🌞</p>
        </span>
      </h1>
      <h2 className="h2-container">who is SHE?</h2>
    </div>
  );
};

export default AboutMePageTitle;
