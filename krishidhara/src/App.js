import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./views/Homepage";
import FarmerJourney from "./views/FarmerJourney";
import AllKitsPage from "./views/AllKitsPage";
import AddKitPage from "./views/AddKitPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Farmer Journey */}
        <Route path="/farmer-journey" element={<FarmerJourney />} />

        {/* Kits Pages */}
        <Route path="/all-kits" element={<AllKitsPage />} />
        <Route path="/add-kit" element={<AddKitPage />} />
      </Routes>
    </Router>
  );
}

export default App;

