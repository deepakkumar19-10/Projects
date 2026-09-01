// src/pages/TempleDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import temples from "../data/temples.json";
import "./TempleDetails.css";

function TempleDetails() {
  const { id } = useParams();

  // JSON में से ID के आधार पर मंदिर खोजना
  const temple = temples.find((t) => t.id === Number(id));

  // अगर गलत ID हो तो Fallback
  if (!temple) {
    return (
      <div className="temple-not-found">
        <h2>मंदिर की जानकारी उपलब्ध नहीं है</h2>
        <Link to="/temples" className="btn-back">
          ← सभी मंदिर सूची पर जाएं
        </Link>
      </div>
    );
  }

  return (
    <div className="temple-details-container">
      {/* Back Button */}
      <Link to="/temples" className="btn-back">
        ← वापस सभी मंदिर देखें (Back to Temples)
      </Link>

      <div className="temple-details-card">
        <div className="details-header">
          <h1>{temple.nameHindi}</h1>
          <h2>
            {temple.name} ({temple.city})
          </h2>
        </div>

        <div className="details-main-img">
          <img src={temple.image} alt={temple.name} />
        </div>

        <div className="details-info-grid">
          <div className="info-box">
            <h3>ईष्ट देव (Deity)</h3>
            <p>{temple.deity}</p>
          </div>
          <div className="info-box">
            <h3>स्थान (Location)</h3>
            <p>{temple.location}</p>
          </div>
        </div>

        <div className="details-section">
          <h3>आरती एवं दर्शन समय (Timings)</h3>
          <p>
            <strong>ग्रीष्मकालीन (Summer):</strong> {temple.timings.summer}
          </p>
          <p>
            <strong>शीतकालीन (Winter):</strong> {temple.timings.winter}
          </p>
          <p>
            <strong>आरती समय:</strong> {temple.timings.aarti}
          </p>
        </div>

        <div className="details-section">
          <h3>मंदिर का इतिहास एवं महत्व (History)</h3>
          <p>{temple.history}</p>
        </div>

        <div className="details-section">
          <h3>दर्शन टिप्स (Devotee Tips)</h3>
          <p>{temple.darshanTips}</p>
        </div>
      </div>
    </div>
  );
}

export default TempleDetails;
