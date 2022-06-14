import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixedNavbar">
      <nav>
        <img
          className="header-img"
          src="/images/html-tag.png"
          alt="black html tag"
        />
        <ul>
          <li>
            <Link to="/">HOME</Link>
            <Link to="/about-me">ABOUT ME</Link>
            <Link to="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
