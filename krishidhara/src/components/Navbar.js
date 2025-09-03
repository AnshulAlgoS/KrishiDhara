import React, {useState} from "react";
import "./Navbar.css";
import krishiLogo from "../assets/krishiLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo + Name */}
        <div className="navbar-logo">
          <img src={krishiLogo} alt="Krishidhara Logo" className="logo-img" />
          <span className="brand-name">Krishidhara</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        {/* Menu (Links + Buttons) */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <a href="#crop-finder" onClick={() => setMenuOpen(false)}>Crop Finder</a>
            <a href="#marketplace" onClick={() => setMenuOpen(false)}>Marketplace</a>
            <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
            <a href="#mentorship" onClick={() => setMenuOpen(false)}>Mentorship</a>
          </nav>

          <div className="navbar-buttons">
            <button className="nav-cta" onClick={() => setMenuOpen(false)}>Learn & Earn</button>
            <button className="nav-primary" onClick={() => setMenuOpen(false)}>Find Your Crop</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
