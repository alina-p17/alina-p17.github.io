import React from "react";
import AboutMePageContent from "../components/AboutMePageContent";
import SkillsSection from "../components/SkillsSection";
import AboutMePageTitle from "../components/AboutMePageTitle";

const AboutMe = () => {
  return (
    <div>
      <AboutMePageTitle />
      <AboutMePageContent />
      <SkillsSection />
    </div>
  );
};

export default AboutMe;
