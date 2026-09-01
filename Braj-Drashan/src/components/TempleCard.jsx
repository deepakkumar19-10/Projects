// src/components/TempleCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./TempleCard.css";

function TempleCard({ temple }) {
  return (
    <div className="temple-card">
      <div className="temple-card-image-wrap">
        <img
          src={temple.image}
          alt={temple.nameHindi}
          onError={(e) => {
            e.target.src = "/images/temples/default-temple.jpg";
          }}
        />
        <span className="temple-card-city">{temple.city}</span>
      </div>

      <div className="temple-card-content">
        <h3 className="temple-card-title-hi">{temple.nameHindi}</h3>
        <h4 className="temple-card-title-en">{temple.name}</h4>
        <p className="temple-card-deity">
          <strong>ईष्ट देव:</strong> {temple.deity}
        </p>
        <p className="temple-card-desc">{temple.shortDescription}</p>

        {/* दर्शन देखें / और देखें Button */}
        <Link to={`/temples/${temple.id}`} className="temple-card-btn">
          दर्शन देखें →
        </Link>
      </div>
    </div>
  );
}

export default TempleCard;
