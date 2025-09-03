import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import CropFinderSection from "../components/CropFinderSection"; 
import "./Homepage.css";

const HomePage = () => {
  const handleCropFinder = (data) => {
    console.log("Crop Finder Data:", data);
    // You can integrate Firebase/AI API call here later
  };

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection onStartCropFinder={handleCropFinder} />
      <CropFinderSection onFindCrop={handleCropFinder} /> 
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Krishidhara — From Land to Livelihood</p>
      </footer>
    </div>
  );
};

export default HomePage;
