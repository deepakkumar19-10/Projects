// src/pages/Temples.jsx
import React, { useState } from "react";
import TempleCard from "../components/TempleCard";
import temples from "../data/temples.json";
import "./Temples.css";

function Temples() {
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = ["All", "Vrindavan", "Mathura", "Govardhan", "Barsana", "Gokul", "Baldev"];

  const filteredTemples =
    selectedCity === "All"
      ? temples
      : temples.filter(
          (t) => t.city.toLowerCase() === selectedCity.toLowerCase(),
        );

  return (
    <div className="temples-page-container">
      <div className="temples-page-header">
        <h1>ब्रज के प्रमुख पावन मंदिर</h1>
        <p>
          मथुरा, वृंदावन, गोवर्धन एवं बरसाना के दिव्य मंदिरों के दर्शन एवं आरती
          समय
        </p>

        {/* City Filter Tabs */}
        <div className="city-filter-tabs">
          {cities.map((city) => (
            <button
              key={city}
              className={`filter-tab-btn ${selectedCity === city ? "active" : ""}`}
              onClick={() => setSelectedCity(city)}
            >
              {city === "All" ? "सभी मंदिर (All)" : city}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Temples */}
      <div className="temples-grid-layout">
        {filteredTemples.map((temple) => (
          <TempleCard key={temple.id} temple={temple} />
        ))}
      </div>
    </div>
  );
}

export default Temples;
