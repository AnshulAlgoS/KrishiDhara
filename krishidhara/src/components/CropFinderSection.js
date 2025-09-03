import React, {useState} from "react";
import {LocateFixed} from "lucide-react"; 
import "./CropFinderSection.css";
import cropIllustration from "../assets/crop-illustration.jpg";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

const CropFinderSection = ({onFindCrop}) => {
  const [landSize, setLandSize] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchCoordinates = async () => {
    if(!city || !state) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=India&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const fetchCityState = async (lat, lon) => {
    if (!lat || !lon) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      if (!res.ok) throw new Error("Failed to fetch city/state");
      const data = await res.json();

      if (data.address) {
        if (data.address.state) setState(data.address.state);
        if (data.address.city) setCity(data.address.city);
        else if (data.address.town) setCity(data.address.town);
        else if (data.address.village) setCity(data.address.village);
      }
    } catch (error) {
      console.error("Error fetching city/state:", error);
    }
  };

  const handleLocationFetch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(6);
          const lon = pos.coords.longitude.toFixed(6);
          setLatitude(lat);
          setLongitude(lon);
          fetchCityState(lat, lon);
        },
        (err) => alert("Unable to fetch location: " + err.message),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFindCrop({landSize, state, city, latitude, longitude});
  };

  return (
    <section className="cropfinder-section">
      <div className="cropfinder-container">
        {/* Left */}
        <div className="cropfinder-left">
          <span className="tag">🌱 Smart Crop Planning</span>
          <h2 className="cropfinder-title">
            Discover Your Perfect <span>Crop Match</span>
          </h2>
          <p className="cropfinder-subtitle">
            Our AI analyzes your land, location, and market conditions to recommend 
            the most profitable crops for your farm.
          </p>
        </div>

        {/* Right */}
        <div className="cropfinder-right">
          <img src={cropIllustration} alt="Crop Illustration" className="crop-image"/>

          <form className="cropfinder-form" onSubmit={handleSubmit}>
            <input 
              type="number" 
              placeholder="Land Size (in acres)" 
              value={landSize} 
              onChange={(e)=>setLandSize(e.target.value)}
              required
            />

            <select value={state} onChange={(e)=>setState(e.target.value)} required>
              <option value="">Select State</option>
              {indianStates.map((s)=>(<option key={s} value={s}>{s}</option>))}
            </select>

            <input 
              type="text" 
              placeholder="Enter City / Village" 
              value={city} 
              onChange={(e)=>setCity(e.target.value)}
              onBlur={fetchCoordinates}
              required
            />

            <div className="geo-inputs">
              <input 
                type="text" 
                placeholder="Latitude" 
                value={latitude} 
                onChange={(e)=>setLatitude(e.target.value)}
                onBlur={()=> latitude && longitude && fetchCityState(latitude, longitude)}
              />
              <input 
                type="text" 
                placeholder="Longitude" 
                value={longitude} 
                onChange={(e)=>setLongitude(e.target.value)}
                onBlur={()=> latitude && longitude && fetchCityState(latitude, longitude)}
              />
              <button type="button" className="location-btn" onClick={handleLocationFetch}>
  <LocateFixed size={18} strokeWidth={2.2}/>
  <span>Get Your Location</span>
</button>

            </div>

            <button type="submit" className="submit-btn">Find Best Crops →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CropFinderSection;
