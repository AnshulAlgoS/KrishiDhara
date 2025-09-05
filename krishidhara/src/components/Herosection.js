import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  
import "./HeroSection.css";
import bgImage from "../assets/hero-back.jpg";

const HeroSection = ({ onStartCropFinder }) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-tag">
            You're in India 🌾 | Perfect for growing Rice
          </p>
          <h1 className="hero-title">
            Your Land.<br />Your Dreams.<br />
            <span>Our Science.</span>
          </h1>
          <p className="hero-subtitle">
            Transform every acre into opportunity with AI-powered insights,
            market connections, and expert mentorship.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="primary-btn" onClick={onStartCropFinder}>
              Start Crop Finder
            </button>

            {/* Link instead of button */}
            <Link to="/farmer-journey" className="secondary-btn">
              Watch a Farmer's Journey →
            </Link>
          </div>

          {/* Trending Section */}
          <div className="hero-trending">
            <p>
              🌱 <strong>Trending in India:</strong> Rice Cultivation — High
              demand • ₹45,000/acre potential • 120-day cycle
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
