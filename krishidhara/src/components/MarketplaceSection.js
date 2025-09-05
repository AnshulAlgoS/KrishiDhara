import React, { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { ShoppingCart } from "lucide-react"
import "./marketplaceSection.css"

const MarketplaceSection = ({ limit }) => {
    const [kits, setKits] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const fetchKits = async () => {
            try {
                // 🔥 ab "kits" collection se fetch hoga
                const querySnapshot = await getDocs(collection(db, "kits"))
                const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setKits(data)
            } catch (error) {
                console.error("Error fetching kits:", error)
            }
        }
        fetchKits()
    }, [])

    // visible kits logic
    const visibleKits = limit
        ? kits.slice(0, limit)
        : showAll
            ? kits
            : kits.slice(0, 4)

    return (
        <section className="marketplace-section">
            <div className="marketplace-header">
                <h2>
                    Everything You Need to <span className="highlight">Grow & Sell</span>
                </h2>
                <p>
                    Premium training kits, quality inputs, and a platform to connect with buyers for your fresh produce.
                </p>
            </div>

            <div className="kits-grid">
                {kits.length === 0 && <p>Loading kits...</p>}
                {visibleKits.map((kit) => (
                    <div key={kit.id} className="kit-card">
                        {kit.discount && <span className="discount-badge">{kit.discount}% OFF</span>}

                        {kit.emoji && <div className="kit-emoji">{kit.emoji}</div>}

                        <h3>{kit.title}</h3>

                        {kit.rating && (
                            <div className="rating">
                                ⭐ {kit.rating} <span>({kit.reviews ?? 0})</span>
                            </div>
                        )}

                        <p className="kit-description">{kit.shortDescription || kit.description}</p>

                        {kit.features && (
                            <ul className="kit-features">
                                {kit.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}

                        <div className="kit-price">
                            {kit.price && (
                                <span className="current-price">₹{kit.price.toLocaleString()}</span>
                            )}
                            {kit.originalPrice && (
                                <span className="original-price">₹{kit.originalPrice.toLocaleString()}</span>
                            )}
                        </div>

                        <button className="add-to-cart-btn">
                            <ShoppingCart size={18} /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MarketplaceSection
