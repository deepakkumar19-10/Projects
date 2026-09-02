import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import "./PlaceCard.css";

function PlaceCard({ place }) {
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(place.id, "place");

  const imageSrc = place.image?.startsWith("/")
    ? place.image
    : `/${place.image || "images/temples/default-temple.svg"}`;

  return (
    <article className="place-card">
      {/* Image */}
      <div className="place-image-wrapper">
        <img
          src={imageSrc}
          alt={place.nameHindi || place.name}
          className="place-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/temples/default-temple.svg";
          }}
        />

        <div className="image-gradient"></div>

        <span className="place-category">{place.category}</span>

        {/* Favorite Heart Button */}
        <button
          type="button"
          className={`place-fav-btn ${fav ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite({
              id: place.id,
              type: "place",
              name: place.name,
              nameHindi: place.nameHindi,
              city: place.city || "Braj",
              image: imageSrc,
              link: `/places`
            });
          }}
          title={fav ? "Remove from Wishlist" : "Save to Wishlist"}
          aria-label="Save to Wishlist"
        >
          {fav ? "❤️" : "🤍"}
        </button>

        <div className="image-title">
          <h3>{place.nameHindi}</h3>
          <p>{place.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="place-content">
        <div className="place-meta">
          <span>📍 {place.city || "Braj"}</span>
          <span>🕉️ दर्शन</span>
        </div>

        <p className="place-description">{place.shortDescription}</p>

        <div className="place-card-actions">
          {place.latitude && place.longitude && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="place-btn"
            >
              <span>{t("common.getDirections", "दिशा मार्ग देखें")}</span>
              <span className="btn-arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default PlaceCard;
