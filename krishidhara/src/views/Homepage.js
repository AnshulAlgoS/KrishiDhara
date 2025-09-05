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
          <button
            className="view-all-btn"
            onClick={() => navigate("/all-kits")}
          >
            View All Kits →
          </button>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Logo + Tagline */}
          <div className="footer-col">
            <div className="footer-brand">
              <img
                src="krishilogo.png"
                alt="Krishi Dhara Logo"
                className="footer-logo"
              />
              <h2>Krishi Dhara</h2>
            </div>
            <p>
              Empowering agriculture with knowledge and sustainable
              development.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/mentoshi">Mentoshi</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/cropfinder">CropFinder</a></li>
              <li><a href="/marketplace">Marketplace</a></li>
            </ul>
          </div>

       
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
              <li>
                <a href="mailto:info@krishidhara.com">
                  info@krishidhara.com
                </a>
              </li>
            </ul>
          </div>

        
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Krishi Dhara — From Land to Livelihood
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
