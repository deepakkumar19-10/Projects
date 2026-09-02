import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import MapView from "../components/MapView";
import foodData from "../data/food.json";
import "../App.css";
import "./Food.css";

const CATEGORIES = ["All", "मिठाई", "नाश्ता", "पारंपरिक", "पेय", "Street Food"];

export default function Food() {
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'map'
  const [activeFoodId, setActiveFoodId] = useState(null);

  const filteredFoods =
    selectedCategory === "All"
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  const foodMarkers = filteredFoods.map((f) => ({
    id: f.id,
    name: f.name,
    nameHindi: f.nameHindi,
    city: f.place,
    latitude: f.latitude,
    longitude: f.longitude,
    image: f.image,
    category: "food"
  }));

  return (
    <main className="food-page page-transition">
      <section className="food-hero">
        <div className="food-hero-text">
          <span className="section-tag">🍽️ {t("food.heroTag", "Where Flavor Meets Faith")}</span>
          <h1>
            स्वाद भी <span>भक्ति भी</span>
          </h1>
          <p>
            ब्रज दर्शन केवल मंदिरों और तीर्थों तक सीमित नहीं है। Mathura के पेड़े, वृंदावन की लस्सी, कचौरी-सब्जी और मक्खन मलाई का दिव्य स्वाद भी इस पावन यात्रा का अभिन्न अंग है।
          </p>
        </div>
        <div className="food-hero__symbol">🍯</div>
      </section>

      {/* Category Pills & View Switcher */}
      <section className="food-controls-bar">
        <div className="food-categories-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`food-cat-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "All" ? t("common.all", "सभी व्यंजन") : cat}
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
            🗺️ {t("common.mapView", "फूड मैप")}
          </button>
        </div>
      </section>

      {/* Content: Map View vs Grid View */}
      {viewMode === "map" ? (
        <section className="food-map-container">
          <div className="food-map-header">
            <h3>🗺️ ब्रज के प्रसिद्ध भोजनालय, दुकानें व मिष्ठान भंडार</h3>
            <p>मार्कर पर क्लिक करें और प्रसिद्ध दुकानों का स्थान देखें</p>
          </div>
          <MapView
            markers={foodMarkers}
            height="520px"
            activeId={activeFoodId}
            onMarkerClick={(f) => setActiveFoodId(f.id)}
          />
        </section>
      ) : (
        <section className="food-grid">
          {filteredFoods.map((food) => {
            const fav = isFavorite(food.id, "food");
            return (
              <article className="food-card" key={food.id || food.name}>
                <div className="food-card__image-container">
                  <img
                    src={food.image}
                    alt={food.nameHindi || food.name}
                    className="food-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/images/temples/default-temple.svg";
                    }}
                  />
                  <span className="food-card__location-overlay">
                    📍 {food.place}
                  </span>

                  {/* Favorite Button */}
                  <button
                    type="button"
                    className={`food-fav-btn ${fav ? "active" : ""}`}
                    onClick={() =>
                      toggleFavorite({
                        id: food.id,
                        type: "food",
                        name: food.name,
                        nameHindi: food.nameHindi,
                        city: food.place,
                        image: food.image,
                        link: "/food"
                      })
                    }
                    title={fav ? "Remove from favorites" : "Add to favorites"}
                  >
                    {fav ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="food-card__content">
                  <div className="food-card-header">
                    <span className="food-card__category">{food.category}</span>
                    {food.priceRange && <span className="food-price">{food.priceRange}</span>}
                  </div>
                  <h3>{food.nameHindi || food.name}</h3>
                  <h4 className="food-en-name">{food.name}</h4>
                  <p>{food.desc}</p>
                  
                  {food.famousShops && (
                    <div className="food-famous-shops">
                      <strong>🏪 प्रसिद्ध स्थल:</strong> {food.famousShops}
                    </div>
                  )}

                  <div className="food-card__bottom">
                    <span>ब्रज स्वाद</span>
                    {food.latitude && food.longitude ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${food.latitude},${food.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="food-directions-link"
                      >
                        दिशा मार्ग ↗
                      </a>
                    ) : (
                      <strong>राधे राधे 🌸</strong>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      <section className="food-banner">
        <div>
          <span className="section-tag">Braj Experience</span>
          <h2>
            मंदिर दर्शन के साथ <span>ब्रज का स्वाद</span>
          </h2>
          <p>
            अपनी यात्रा में Mathura Peda, Kachori & Sabzi, Lassi और स्थानीय मिठाइयों का स्वाद लेना न भूलें।
          </p>
        </div>
        <div className="food-banner__emoji"> 🪷 </div>
      </section>
    </main>
  );
}
