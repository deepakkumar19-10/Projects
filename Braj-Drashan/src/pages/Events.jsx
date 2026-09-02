import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MapView from "../components/MapView";
import FestivalCountdown from "../components/FestivalCountdown";
import eventsData from "../data/events.json";
import "../App.css";
import "./Events.css";

const EVENT_CATEGORIES = [
  "All",
  "Spiritual Festival",
  "Holi Celebration",
  "Aarti & Raslila",
  "Parikrama"
];

export default function Events() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'map'
  const [activeEventId, setActiveEventId] = useState(null);

  const filteredEvents =
    selectedCategory === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === selectedCategory);

  const eventMarkers = filteredEvents.map((e) => ({
    id: e.id,
    name: e.title,
    nameHindi: e.title,
    city: e.location,
    latitude: e.latitude,
    longitude: e.longitude,
    image: e.image,
    category: "event"
  }));

  return (
    <main className="events-page page-transition">
      <section className="events-hero">
        <div className="section-tag">
          <h1>🪷 {t("events.heroTag", "ब्रज उत्सव")}</h1>
        </div>
        <h1>
          Festivals & <span>Events in Braj</span>
        </h1>
        <p>
          Mathura, Vrindavan, Barsana, Gokul और Govardhan के प्रमुख आध्यात्मिक एवं सांस्कृतिक उत्सवों की संपूर्ण प्रामाणिक जानकारी।
        </p>
      </section>

      {/* Bonus Feature: Real-Time Live Festival Countdown */}
      <FestivalCountdown />

      {/* Intro Header */}
      <section className="events-intro">
        <div>
          <div className="events-intro__eyebrow">
            <h2>Divine Celebrations</h2>
          </div>
          <h2>
            ब्रज की <span>उत्सव परंपरा</span>
          </h2>
        </div>
        <p>
          ब्रज में हर पर्व केवल उत्सव नहीं बल्कि भगवान श्रीकृष्ण और राधारानी की लीलाओं से जुड़ा अलौकिक आध्यात्मिक अनुभव है।
        </p>
      </section>

      {/* Controls: Category Filter & Map Switcher */}
      <section className="events-controls-bar">
        <div className="events-categories-pills">
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`event-cat-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "All" ? t("common.all", "सभी उत्सव") : cat}
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
            🗺️ {t("common.mapView", "उत्सव मानचित्र")}
          </button>
        </div>
      </section>

      {/* Map View vs Grid View */}
      {viewMode === "map" ? (
        <section className="events-map-container">
          <div className="events-map-header">
            <h3>🗺️ ब्रज उत्सव एवं परिक्रमा मानचित्र (Celebration Venues)</h3>
            <p>विभिन्न उत्सव स्थलों के जीपीएस स्थान देखें</p>
          </div>
          <MapView
            markers={eventMarkers}
            height="520px"
            activeId={activeEventId}
            onMarkerClick={(ev) => setActiveEventId(ev.id)}
          />
        </section>
      ) : (
        <section className="events-grid">
          {filteredEvents.map((event) => (
            <article className="event-card" key={event.id || event.title}>
              <div className="event-card__image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-card__image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/temples/default-temple.svg";
                  }}
                />
                <span className="event-card__location-overlay">
                  📍 {event.location}
                </span>
              </div>

              <div className="event-card__content">
                <div className="event-card__top">
                  <span className="event-card__date"> {event.date} </span>
                  <span className="event-card__month"> {event.month} </span>
                </div>
                <h3>{event.title}</h3>
                {event.titleEn && <h4 className="event-en-title">{event.titleEn}</h4>}
                <p className="event-card__desc"> {event.desc} </p>
                
                <div className="event-card__footer">
                  <span>राधे राधे 🌸</span>
                  {event.latitude && event.longitude ? (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${event.latitude},${event.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-directions-link"
                    >
                      स्थान देखें ↗
                    </a>
                  ) : (
                    <span>ब्रज दर्शन</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
