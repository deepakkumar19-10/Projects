import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import yatraPlans from "../data/yatra.json";
import "./YatraPlannerModal.css";

function YatraPlannerModal() {
  const { t } = useTranslation();
  const { isPlannerOpen, setIsPlannerOpen } = useApp();
  const [selectedDays, setSelectedDays] = useState(3);
  const [pace, setPace] = useState("moderate");

  if (!isPlannerOpen) return null;

  const filteredPlans = yatraPlans.slice(0, selectedDays);

  return (
    <div className="planner-modal-overlay" onClick={() => setIsPlannerOpen(false)}>
      <div className="planner-modal" onClick={(e) => e.stopPropagation()}>
        <div className="planner-modal-header">
          <div className="planner-title">
            <span className="planner-icon">✨</span>
            <div>
              <h3>{t("planner.modalTitle", "स्मार्ट ब्रज यात्रा प्लानर")}</h3>
              <p>अपनी पसंद के अनुसार अनुकूलित यात्रा कार्यक्रम तैयार करें</p>
            </div>
          </div>
          <button
            type="button"
            className="planner-close-btn"
            onClick={() => setIsPlannerOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="planner-modal-body">
          {/* Days Selection */}
          <div className="planner-section">
            <label className="planner-label">
              1. कितने दिनों की यात्रा प्लान करना चाहते हैं? (Select Duration):
            </label>
            <div className="day-pills">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  className={`day-pill ${selectedDays === num ? "active" : ""}`}
                  onClick={() => setSelectedDays(num)}
                >
                  {num} दिन
                </button>
              ))}
            </div>
          </div>

          {/* Pace Selection */}
          <div className="planner-section">
            <label className="planner-label">2. दर्शन की गति (Travel Pace):</label>
            <div className="pace-options">
              <label className={`pace-card ${pace === "relaxed" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="pace"
                  value="relaxed"
                  checked={pace === "relaxed"}
                  onChange={() => setPace("relaxed")}
                />
                <div>
                  <strong>आरामदायक (Relaxed)</strong>
                  <span>प्रतिदिन 2-3 प्रमुख मंदिर, वरिष्ठ जनों के लिए उपयुक्त</span>
                </div>
              </label>

              <label className={`pace-card ${pace === "moderate" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="pace"
                  value="moderate"
                  checked={pace === "moderate"}
                  onChange={() => setPace("moderate")}
                />
                <div>
                  <strong>संतुलित (Balanced)</strong>
                  <span>मंदिर दर्शन + विश्राम + स्थानीय ब्रज भोजन का आनंद</span>
                </div>
              </label>

              <label className={`pace-card ${pace === "fast" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="pace"
                  value="fast"
                  checked={pace === "fast"}
                  onChange={() => setPace("fast")}
                />
                <div>
                  <strong>तीव्र दर्शन (Fast-track)</strong>
                  <span>अधिकतम स्थल एवं परिक्रमा कम समय में</span>
                </div>
              </label>
            </div>
          </div>

          {/* Generated Itinerary Preview */}
          <div className="generated-itinerary">
            <h4>📋 आपकी {selectedDays}-दिवसीय यात्रा की रूपरेखा:</h4>
            <div className="itinerary-days-list">
              {filteredPlans.map((plan) => (
                <div key={plan.id} className="itinerary-day-row">
                  <span className="itinerary-day-tag">{plan.day}</span>
                  <div className="itinerary-day-info">
                    <h5>{plan.title}</h5>
                    <p>
                      <strong>प्रमुख स्थल:</strong> {plan.places.join(" • ")}
                    </p>
                    <span className="itinerary-budget">💰 {plan.estimatedBudget} | 🚗 {plan.transport}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="planner-modal-footer">
          <Link
            to="/yatra"
            className="btn-go-yatra"
            onClick={() => setIsPlannerOpen(false)}
          >
            विस्तृत टाइमलाइन व गाइड देखें →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YatraPlannerModal;
