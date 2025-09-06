import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroSection from "../components/Herosection"
import CropFinderSection from "../components/CropFinderSection"
import MarketplaceSection from "../components/MarketplaceSection"
import "./Homepage.css"
import logo from "../assets/krishiLogo.png"; 
import Footer from "../components/footer"


const HomePage = () => {
  const navigate = useNavigate()

  const handleCropFinder = (data) => {
    console.log("Crop Finder Data:", data)
  }

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection onStartCropFinder={handleCropFinder} />
      <CropFinderSection onFindCrop={handleCropFinder} />

      <section className="homepage-marketplace">
        <MarketplaceSection limit={3} />

        <div className="homepage-view-all">
          <button
            className="view-all-btn"
            onClick={() => navigate("/all-kits")}
          >
            View All Kits →
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
