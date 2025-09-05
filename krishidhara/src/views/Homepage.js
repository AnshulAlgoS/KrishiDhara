import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroSection from "../components/Herosection"
import CropFinderSection from "../components/CropFinderSection"
import MarketplaceSection from "../components/MarketplaceSection"
import "./Homepage.css"

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

      {/* Marketplace Section */}
      <section className="homepage-marketplace">
        <MarketplaceSection limit={3} />

        {/* Top-right View All button */}
        <div className="homepage-view-all">
          <button className="view-all-btn" onClick={() => navigate("/all-kits")}>
            View All Kits →
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Krishidhara — From Land to Livelihood</p>
      </footer>
    </div>
  )
}

export default HomePage
