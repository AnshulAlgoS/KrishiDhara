import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./views/Homepage";
import FarmerJourney from "./views/FarmerJourney"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/farmer-journey" element={<FarmerJourney />} />
      </Routes>
    </Router>
  );
}

export default App;

