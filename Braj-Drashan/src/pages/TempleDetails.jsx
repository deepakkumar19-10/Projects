import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import MapView from "../components/MapView";
import temples from "../data/temples.json";
import "./TempleDetails.css";

function TempleDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useApp();

  const temple = temples.find((t) => t.id === Number(id));

  if (!temple) {
    return (
      <div className="temple-not-found page-transition">
        <h2>मंदिर की जानकारी उपलब्ध नहीं है</h2>
        <Link to="/temples" className="btn-back">
          ← सभी मंदिर सूची पर जाएं
        </Link>
      </div>
    );
  }

  const fav = isFavorite(temple.id, "temple");
  const imageSrc = temple.image?.startsWith("/")
    ? temple.image
    : `/${temple.image || "images/temples/default-temple.svg"}`;

  const templeMarker = temple.latitude && temple.longitude ? [
    {
      id: temple.id,
      name: temple.name,
      nameHindi: temple.nameHindi,
      city: temple.city,
      latitude: temple.latitude,
      longitude: temple.longitude,
      image: imageSrc,
      category: "temple"
    }
  ] : [];

  return (
    <div className="temple-details-container page-transition">
      {/* Top Action Bar */}
      <div className="details-nav-bar">
        <Link to="/temples" className="btn-back">
          ← {t("common.back", "वापस सभी मंदिर देखें")}
        </Link>

        <button
          type="button"
          className={`details-fav-btn ${fav ? "active" : ""}`}
          onClick={() =>
            toggleFavorite({
              id: temple.id,
              type: "temple",
              name: temple.name,
              nameHindi: temple.nameHindi,
              city: temple.city,
              image: imageSrc,
              link: `/temples/${temple.id}`
            })
          }
        >
          {fav ? "❤️ सुरक्षित है (Saved)" : "🤍 पसंदीदा में जोड़ें"}
        </button>
      </div>

      <div className="temple-details-card">
        <div className="details-header">
          <span className="details-city-badge">📍 {temple.city}</span>
          <h1>{temple.nameHindi}</h1>
          <h2>{temple.name}</h2>
          {temple.tagline && <p className="details-tagline">“{temple.tagline}”</p>}
        </div>

        <div className="details-main-img">
          <img
            src={imageSrc}
            alt={temple.nameHindi || temple.name}
            onError={(e) => {
              e.currentTarget.src = "/images/temples/default-temple.svg";
            }}
          />
        </div>

        <div className="details-info-grid">
          <div className="info-box">
            <h3>🕉️ {t("common.deity", "ईष्ट देव (Deity)")}</h3>
            <p>{temple.deityHindi || temple.deity}</p>
          </div>
          <div className="info-box">
            <h3>📍 {t("common.location", "स्थान (Location)")}</h3>
            <p>{temple.location}</p>
          </div>
        </div>

        <div className="details-section">
          <h3>⏰ {t("common.timings", "आरती एवं दर्शन समय (Timings)")}</h3>
          <p>
            <strong>ग्रीष्मकालीन (Summer):</strong> {temple.timings.summer}
          </p>
          <p>
            <strong>शीतकालीन (Winter):</strong> {temple.timings.winter}
          </p>
          <p>
            <strong>आरती समय (Aarti):</strong> {temple.timings.aarti}
          </p>
        </div>

        <div className="details-section">
          <h3>📖 {t("common.history", "मंदिर का इतिहास एवं महत्व (History)")}</h3>
          <p>{temple.history}</p>
        </div>

        {temple.architecture && (
          <div className="details-section">
            <h3>🏛️ स्थापत्य शैली (Architecture)</h3>
            <p>{temple.architecture}</p>
          </div>
        )}

        <div className="details-section">
          <h3>💡 {t("common.tips", "दर्शन टिप्स (Devotee Tips)")}</h3>
          <p>{temple.darshanTips}</p>
        </div>

        {/* Mini Map Location View */}
        {temple.latitude && temple.longitude && (
          <div className="details-map-section">
            <div className="details-map-header">
              <h3>🗺️ मंदिर का जीपीएस स्थान एवं मार्ग (Map & Directions)</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${temple.latitude},${temple.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-gmaps"
              >
                Google Maps में खोलें ↗
              </a>
            </div>
            <MapView
              markers={templeMarker}
              center={[temple.longitude, temple.latitude]}
              zoom={14}
              height="340px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TempleDetails;
