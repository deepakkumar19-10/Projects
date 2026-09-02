import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import "./TempleCard.css";

function TempleCard({ temple }) {
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(temple.id, "temple");

  const imageSrc = temple.image?.startsWith("/")
    ? temple.image
    : `/${temple.image || "images/temples/default-temple.svg"}`;

  return (
    <article className="temple-card">
      <div className="temple-card-image-wrap">
        <img
          src={imageSrc}
          alt={temple.nameHindi || temple.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/temples/default-temple.svg";
          }}
        />
        <span className="temple-card-city">📍 {temple.city}</span>

        {/* Favorite Heart Button */}
        <button
          type="button"
          className={`temple-fav-btn ${fav ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite({
              id: temple.id,
              type: "temple",
              name: temple.name,
              nameHindi: temple.nameHindi,
              city: temple.city,
              image: imageSrc,
              link: `/temples/${temple.id}`
            });
          }}
          title={fav ? "Remove from Favorites" : "Save to Favorites"}
          aria-label="Save to Favorites"
        >
          {fav ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="temple-card-content">
        <h3 className="temple-card-title-hi">{temple.nameHindi}</h3>
        <h4 className="temple-card-title-en">{temple.name}</h4>
        <p className="temple-card-deity">
          <strong>{t("common.deity", "ईष्ट देव")}:</strong> {temple.deityHindi || temple.deity}
        </p>
        <p className="temple-card-desc">{temple.shortDescription}</p>

        <div className="temple-card-actions">
          <Link to={`/temples/${temple.id}`} className="temple-card-btn">
            {t("common.viewDarshan", "दर्शन देखें")} →
          </Link>
          {temple.latitude && temple.longitude && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${temple.latitude},${temple.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="temple-card-map-btn"
              title="Open in Google Maps"
            >
              🗺️
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default TempleCard;
