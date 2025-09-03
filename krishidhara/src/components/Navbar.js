import React from "react";
import "./Navbar.css";
import krishiLogo from "../assets/krishiLogo.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <img src={krishiLogo} alt="Krishidhara Logo" />
          <span>Krishidhara</span>
        </div>

        {/* Nav Links */}
        <nav className="navbar-links">
          <a href="#crop-finder">Crop Finder</a>
          <a href="#marketplace">Marketplace</a>
          <a href="#stories">Stories</a>
          <a href="#mentorship">Mentorship</a>
        </nav>

        {/* Buttons */}
        <div className="navbar-buttons">
          <button className="nav-cta">Learn & Earn</button>
          <button className="nav-primary">Find Your Crop</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
