import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import yatraPlans from "../data/yatra.json";
import "./Yatra.css";

function Yatra() {
  const { t } = useTranslation();
  const { setIsPlannerOpen } = useApp();
  const [activePlan, setActivePlan] = useState(yatraPlans[0]);

  return (
    <div className="yatra-page-container page-transition">
      <div className="yatra-page-header">
        <span className="section-tag">📅 {t("nav.yatra", "यात्रा गाइड")}</span>
        <h1>ब्रज यात्रा एवं प्लान ट्रिप गाइड</h1>
        <p>
          1 दिन से 6 दिन की प्रामाणिक यात्रा योजना, आरती समय, मार्ग, सुलभ वाहन एवं सुझाव
        </p>
        <button
          type="button"
          className="btn-open-custom-planner"
          onClick={() => setIsPlannerOpen(true)}
        >
          ✨ अपनी पसंद से कस्टम यात्रा प्लान बनाएं →
        </button>
      </div>

      {/* Day Selector Tabs */}
      <div className="yatra-day-tabs">
        {yatraPlans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className={`yatra-tab-btn ${activePlan.id === plan.id ? "active" : ""}`}
            onClick={() => setActivePlan(plan)}
          >
            {plan.day}
          </button>
        ))}
      </div>

      {/* Selected Day Full Plan Details */}
      <div className="yatra-detail-card">
        <div className="yatra-card-top">
          <span className="badge-day">{activePlan.day}</span>
          <h2>{activePlan.title}</h2>
          {activePlan.titleEn && <h4 className="yatra-en-title">{activePlan.titleEn}</h4>}
          <p className="yatra-tagline">{activePlan.tagline}</p>
        </div>

        {/* Places Tag Pills */}
        {activePlan.places && activePlan.places.length > 0 && (
          <div className="yatra-places-included">
            <strong>📍 प्रमुख दर्शनीय स्थल:</strong>
            <div className="yatra-place-tags">
              {activePlan.places.map((place, idx) => (
                <span key={idx} className="yatra-place-tag">
                  {place}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="yatra-meta-bar">
          <div>
            <strong>🚗 सुलभ वाहन:</strong> {activePlan.transport}
          </div>
          <div>
            <strong>💰 अनुमानित खर्च:</strong> {activePlan.estimatedBudget}
          </div>
          <div>
            <strong>⏰ उत्तम समय:</strong> {activePlan.bestTime}
          </div>
        </div>

        <div className="yatra-timeline-section">
          <h3>दैनिक दर्शन कार्यक्रम (Step-by-Step Schedule)</h3>
          <ul className="timeline-list">
            {activePlan.stops.map((stop, index) => (
              <li key={index} className="timeline-item">
                <span className="timeline-dot"></span>
                <p>{stop}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="yatra-tips-box">
          <h4>💡 यात्री विशेष सुझाव (Devotee Tip)</h4>
          <p>{activePlan.tips}</p>
        </div>
      </div>
    </div>
  );
}

export default Yatra;
