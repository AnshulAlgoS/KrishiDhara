import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./AddKitPage.css";

export default function AddKitPage() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    originalPrice: "",
    discount: "",
    features: [""],
    contactName: "",
    contactPhone: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (i, value) => {
    const updated = [...form.features];
    updated[i] = value;
    setForm({ ...form, features: updated });
  };

  const addFeatureField = () => {
    setForm({ ...form, features: [...form.features, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "kits"), {
        ...form,
        price: Number(form.price),
        originalPrice: Number(form.originalPrice),
        discount: Number(form.discount),
      });
      alert("Kit added successfully!");
      setForm({
        title: "",
        category: "",
        description: "",
        price: "",
        originalPrice: "",
        discount: "",
        features: [""],
        contactName: "",
        contactPhone: "",
        location: "",
      });
    } catch (err) {
      alert("Failed to add kit");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-kit-container">
        {/* Heading Section */}
        <div className="heading-section">
          <h1 className="form-title">Add New Training Kit</h1>
          <p className="form-subtitle">
            Share your expertise by creating a training kit to help other farmers
            learn new techniques and improve productivity.
          </p>
        </div>

        {/* Form Section */}
        <div className="add-kit-card">
          <form onSubmit={handleSubmit} className="add-kit-form">
            {/* Kit Name + Category */}
            <div className="form-row">
              <div className="form-group">
                <label>Kit Name</label>
                <input
                  name="title"
                  placeholder="e.g., Mushroom Cultivation Starter Kit"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="mushroom">Mushroom</option>
                  <option value="hydroponics">Hydroponics</option>
                  <option value="organic">Organic</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Detailed description of what's included in your training kit..."
              value={form.description}
              onChange={handleChange}
            />

            {/* Price Section */}
            <div className="form-row">
              <div className="form-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Original Price (₹)</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={form.originalPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={form.discount}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Key Features */}
            <label>Key Features</label>
            {form.features.map((f, i) => (
              <input
                key={i}
                placeholder="e.g., Organic spawn included"
                value={f}
                onChange={(e) => handleFeatureChange(i, e.target.value)}
              />
            ))}
            <button type="button" className="add-feature-btn" onClick={addFeatureField}>
              + Add Feature
            </button>

            {/* Image Upload Placeholder */}
            <label>Kit Images</label>
            <div className="upload-box">
              <p>Upload kit images</p>
              <small>PNG, JPG up to 10MB each</small>
              <button type="button" className="upload-btn">Choose Files</button>
            </div>

            {/* Contact Info */}
            <div className="form-row">
              <div className="form-group">
                <label>Contact Name</label>
                <input
                  name="contactName"
                  placeholder="Your name"
                  value={form.contactName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Phone</label>
                <input
                  name="contactPhone"
                  placeholder="+91 98765 43210"
                  value={form.contactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>Location</label>
            <input
              name="location"
              placeholder="City, State"
              value={form.location}
              onChange={handleChange}
            />

            {/* Buttons */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Submit Kit for Review
              </button>
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
