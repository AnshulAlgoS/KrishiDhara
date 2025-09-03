import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import "./Homepage.css";

const HomePage = () => {
  const handleCropFinder = () => {
    console.log("Crop Finder Clicked");
  };

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection onStartCropFinder={handleCropFinder} />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Krishidhara — From Land to Livelihood</p>
      </footer>
    </div>
  );
};

export default HomePage;
