import React from "react";
import { Link, useParams } from "react-router-dom";
import yatraPlans from "../data/yatra.json";
import "../App.css";
import "./YatraDetails.css";

function YatraDetails() {
  const { id } = useParams();
  const yatra = yatraPlans.find((plan) => plan.id === Number(id));

  if (!yatra) {
    return (
      <div className="yatra-details-page page-transition">
        <div className="yatra-details-container">
          <h1>यात्रा योजना नहीं मिली</h1>
          <Link to="/yatra" className="back-link">
            ← सभी यात्रा योजनाएँ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="yatra-details-page page-transition">
      <div className="yatra-details-container">
        <Link to="/yatra" className="back-link">
          ← सभी यात्रा योजनाएँ देखें
        </Link>

        <div className="yatra-details-card">
          <div className="yatra-details-header">
            <span className="yatra-details-duration">
              🕐 {yatra.duration}
            </span>

            <h1>{yatra.titleHindi || yatra.title}</h1>
            <p className="yatra-en-sub">{yatra.titleEn || yatra.title}</p>
            <p className="yatra-details-description">
              {yatra.description || yatra.tagline}
            </p>
          </div>

          <div className="yatra-details-body">
            <div className="yatra-route-section">
              <h2>यात्रा में शामिल प्रमुख स्थान</h2>

              <div className="yatra-route-list">
                {yatra.places && yatra.places.map((place, index) => (
                  <div key={index} className="yatra-route-item">
                    <span className="route-number">{index + 1}</span>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>

            {yatra.stops && yatra.stops.length > 0 && (
              <div className="yatra-timeline-detail">
                <h2>दैनिक दर्शन समय सारणी</h2>
                <ul className="yatra-stops-list">
                  {yatra.stops.map((stop, sIdx) => (
                    <li key={sIdx} className="yatra-stop-row">
                      <span className="stop-marker">⏰</span>
                      <span>{stop}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="yatra-tips">
              <h2>💡 यात्रा सुझाव</h2>
              <p>
                {yatra.tips ||
                  "यात्रा शुरू करने से पहले मंदिरों के दर्शन समय और स्थानीय परिस्थितियों की जानकारी अवश्य प्राप्त करें।"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default YatraDetails;
