import React from "react";
import "./VideoSection.css";
import plant1 from "../assets/Plant1.png";
import bg1 from "../assets/Bg1.jpeg";
import thumb1 from "../assets/thumb1.jpeg";
import thumb2 from "../assets/thumb2.jpeg";
import thumb3 from "../assets/thumb3.jpeg";
import thumb4 from "../assets/thumb4.jpeg";


const VideoSection = () => {
  // scroll function for carousel
  const scrollCarousel = (distance) => {
    document.getElementById("carousel").scrollBy({
      left: distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="video-section"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="overlay"></div>

      {/* TOP ROW */}
      <div className="top-row">
        {/* Left: Title + Subtitle */}
        <div className="title-box">
          <h1>Agroforestry</h1>
          <p>Blending tradition and innovation for a sustainable future.</p>
        </div>

        {/* Right: Plant Card */}
        <div className="plant-card glass-card">
          <img src={plant1} alt="Decorative Plant" />
          <button className="cta-btn">Buy Plant →</button>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="video-info-row">
        {/* Left: Video */}
        <div className="video-box glass-card">
          <iframe
           width="100%"
           height="100%"
           src="https://www.youtube.com/embed/IZ9aoyLDjkg"
           title="Agroforestry Video"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
          ></iframe>
        </div>


        {/* Right: Info Section */}
        <div className="info-box glass-card">
          <h2>
            Mushroom <span>Forestry</span>
          </h2>
          <p>
            This video explains the process of oyster mushroom cultivation, one of the most profitable and easy-to-grow crops for small landholders. It highlights the step-by-step method, required conditions, and earning potential. Perfect for beginners, youth entrepreneurs, and farmers looking for a high-value crop with low investment.
          </p>

          <div className="stats-boxes">
            <div className="stat glass-card">
              <h2>5–7 kg</h2>
               <p>Yield per bag (Oyster Mushrooms)</p>
            </div>
            <div className="stat glass-card">
              <h2>150-200/-</h2>
              <p>Market price per kg</p>
            </div>
            <div className="stat glass-card">
              <h2>30-40 days</h2>
              <p>Time to First Harvest</p>
            </div>
          </div>

          <button className="cta-btn">Explore Catalog →</button>
        </div>
      </div>

      {/* THIRD ROW: Explore More Videos */}
      <div className="more-videos">
        <h2>Explore More Videos</h2>
        <div className="carousel-container">
          <button
            className="scroll-btn left"
            onClick={() => scrollCarousel(-300)}
          >
            ‹
          </button>
          <div className="carousel" id="carousel">
            <div className="video-card">
              <img src={thumb1} alt="Remove Weeds" />
              <p>Remove Weeds</p>
            </div>
            <div className="video-card">
              <img src={thumb2} alt= "Plant Tips" />
            </div>
            <div className="video-card">
              <img src={thumb3} alt="Agro Methods" />
              <p>Agro Methods</p>
            </div>
            <div className="video-card">
              <img src={thumb4} alt="Soil Health" />
              <p>Soil Health</p>
            </div>
            <div className="video-card">
              <img src={thumb4} alt="Soil Health" />
              <p>Soil Health</p>
            </div>
            <div className="video-card">
              <img src={thumb4} alt="Soil Health" />
              <p>Soil Health</p>
            </div>
            <div className="video-card">
              <img src={thumb4} alt="Soil Health" />
              <p>Soil Health</p>
            </div>
          </div>
          <button
            className="scroll-btn right"
            onClick={() => scrollCarousel(300)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

