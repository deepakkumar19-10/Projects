import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import places from "../data/places.json";
import PlaceCard from "../components/PlaceCard";
import MapView from "../components/MapView";
import "./Temples.css"; // Shares unified controls and layout

function Places() {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [activePlaceId, setActivePlaceId] = useState(null);

  const cities = ["All", "Mathura", "Vrindavan", "Gokul", "Govardhan", "Barsana", "Baldev"];

  const filteredPlaces =
    selectedCity === "All"
      ? places
      : places.filter((p) => p.city?.toLowerCase() === selectedCity.toLowerCase());

  const mapMarkers = filteredPlaces.map((place) => ({
    id: place.id,
    name: place.name,
    nameHindi: place.nameHindi,
    city: place.city,
    latitude: place.latitude,
    longitude: place.longitude,
    image: place.image,
    link: `/places`,
    category: "place"
  }));

  return (
    <div className="temples-page-container page-transition">
      <div className="temples-page-header">
        <span className="section-tag">📍 {t("nav.places", "स्थल एवं घाट")}</span>
        <h1>ब्रज के प्रमुख दर्शनीय स्थान</h1>
        <p>
          मथुरा, वृंदावन, गोकुल, गोवर्धन और बरसाना के पावन कुंड, पर्वत एवं ऐतिहासिक स्थल
        </p>

        {/* Controls Bar */}
        <div className="temples-controls-bar">
          <div className="city-filter-tabs">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`filter-tab-btn ${selectedCity === city ? "active" : ""}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === "All" ? t("common.all", "सभी स्थल (All)") : city}
              </button>
            ))}
          </div>

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

      {viewMode === "map" ? (
        <div className="temples-map-section">
          <MapView
            markers={mapMarkers}
            height="550px"
            activeId={activePlaceId}
            onMarkerClick={(item) => setActivePlaceId(item.id)}
          />
        </div>
      ) : (
        <div className="temples-grid-layout">
          {filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Places;
