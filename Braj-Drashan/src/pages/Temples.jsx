import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TempleCard from "../components/TempleCard";
import MapView from "../components/MapView";
import temples from "../data/temples.json";
import "./Temples.css";

function Temples() {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'map'
  const [activeTempleId, setActiveTempleId] = useState(null);

  const cities = ["All", "Vrindavan", "Mathura", "Govardhan", "Barsana", "Gokul", "Baldev"];

  const filteredTemples =
    selectedCity === "All"
      ? temples
      : temples.filter(
          (t) => t.city.toLowerCase() === selectedCity.toLowerCase()
        );

  const mapMarkers = filteredTemples.map((temple) => ({
    id: temple.id,
    name: temple.name,
    nameHindi: temple.nameHindi,
    city: temple.city,
    latitude: temple.latitude,
    longitude: temple.longitude,
    image: temple.image,
    link: `/temples/${temple.id}`,
    category: "temple"
  }));

  return (
    <div className="temples-page-container page-transition">
      <div className="temples-page-header">
        <span className="section-tag">🛕 श्री धाम दर्शन</span>
        <h1>ब्रज के प्रमुख पावन मंदिर</h1>
        <p>
          मथुरा, वृंदावन, गोवर्धन, बरसाना और गोकुल के दिव्य मंदिरों के दर्शन, आरती समय व इतिहास
        </p>

        {/* View Mode & City Filter Controls */}
        <div className="temples-controls-bar">
          {/* City Filter Tabs */}
          <div className="city-filter-tabs">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`filter-tab-btn ${selectedCity === city ? "active" : ""}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === "All" ? t("common.all", "सभी मंदिर (All)") : city}
              </button>
            ))}
          </div>

          {/* Grid vs Map Toggle */}
          <div className="view-toggle-group">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              ⏹️ {t("common.gridView", "ग्रिड दृश्य")}
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === "map" ? "active" : ""}`}
              onClick={() => setViewMode("map")}
            >
              🗺️ {t("common.mapView", "मानचित्र दृश्य")}
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering: Grid vs Map */}
      {viewMode === "map" ? (
        <div className="temples-map-section">
          <MapView
            markers={mapMarkers}
            height="550px"
            activeId={activeTempleId}
            onMarkerClick={(item) => setActiveTempleId(item.id)}
          />
        </div>
      ) : (
        <div className="temples-grid-layout">
          {filteredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Temples;
