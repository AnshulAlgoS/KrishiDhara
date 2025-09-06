import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer";
import "./AllKitsPage.css";

export default function AllKitsPage() {
  const [kits, setKits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const snap = await getDocs(collection(db, "kits"));
        setKits(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching kits:", error);
      }
    };
    fetchKits();
  }, []);

  return (
    <div className="all-kits-page">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="marketplace-header">
        <h2>
          All Training <span className="highlight">Kits</span>
        </h2>
        <p>
          Discover our complete collection of training kits designed to help you
          master new agricultural techniques and boost your farm's productivity.
        </p>
      </div>

      {/* Add Kit Button */}
      <div className="header-actions">
        <button
          className="add-kit-btn"
          onClick={() => navigate("/add-kit")}
        >
          + Add New Kit
        </button>
      </div>

      {/* Kits Grid */}
      <div className="kits-grid">
        {kits.length > 0 ? (
          kits.map((kit) => (
            <div key={kit.id} className="kit-card">
              {/* Discount badge */}
              {kit.discount && (
                <span className="discount-badge">{kit.discount}% OFF</span>
              )}

              {/* Emoji / Icon */}
              {kit.emoji && <div className="kit-emoji">{kit.emoji}</div>}

              {/* Title */}
              <h3>{kit.title}</h3>

              {/* Rating */}
              {kit.rating && (
                <div className="rating">
                  ⭐ {kit.rating} <span>({kit.reviews ?? 0})</span>
                </div>
              )}

              {/* Description */}
              <p className="kit-description">
                {kit.shortDescription || kit.description}
              </p>

              {/* Features */}
              {kit.features && (
                <ul className="kit-features">
                  {kit.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              {/* Prices */}
              <div className="kit-price">
                {kit.price && (
                  <span className="current-price">
                    ₹{kit.price.toLocaleString()}
                  </span>
                )}
                {kit.originalPrice && (
                  <span className="original-price">
                    ₹{kit.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Add to Cart */}
              <button className="add-to-cart-btn">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No kits available yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
