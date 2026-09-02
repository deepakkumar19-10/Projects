import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import "./FavoritesDrawer.css";

function FavoritesDrawer() {
  const { t } = useTranslation();
  const { favorites, toggleFavorite, isFavoritesOpen, setIsFavoritesOpen } = useApp();

  if (!isFavoritesOpen) return null;

  return (
    <div className="fav-drawer-overlay" onClick={() => setIsFavoritesOpen(false)}>
      <aside className="fav-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="fav-drawer-header">
          <div className="fav-drawer-title">
            <span className="fav-heart">❤️</span>
            <h3>{t("favorites.title", "मेरी पसंद (Saved Wishlist)")}</h3>
          </div>
          <button
            type="button"
            className="fav-close-btn"
            onClick={() => setIsFavoritesOpen(false)}
            aria-label="Close Wishlist"
          >
            ✕
          </button>
        </div>

        <div className="fav-drawer-content">
          {favorites.length === 0 ? (
            <div className="fav-empty-state">
              <span className="empty-lotus">🪷</span>
              <h4>{t("favorites.empty", "कोई स्थान सेव नहीं है")}</h4>
              <p>{t("favorites.hint", "कार्ड्स पर लगे दिल ❤️ आइकन पर क्लिक करके अपने पसंदीदा मंदिर यहाँ जोड़ें।")}</p>
              <Link
                to="/temples"
                className="btn-fav-browse"
                onClick={() => setIsFavoritesOpen(false)}
              >
                मंदिर देखें →
              </Link>
            </div>
          ) : (
            <div className="fav-list">
              {favorites.map((item) => (
                <div key={`${item.type}-${item.id}`} className="fav-item-card">
                  <div className="fav-item-img-wrap">
                    <img
                      src={item.image || "/images/temples/default-temple.svg"}
                      alt={item.nameHindi || item.name}
                      onError={(e) => {
                        e.currentTarget.src = "/images/temples/default-temple.svg";
                      }}
                    />
                  </div>
                  <div className="fav-item-info">
                    <h4>{item.nameHindi || item.name}</h4>
                    <span className="fav-item-city">📍 {item.city || "Braj"}</span>
                    <div className="fav-item-actions">
                      <Link
                        to={item.link || `/temples/${item.id}`}
                        className="fav-view-link"
                        onClick={() => setIsFavoritesOpen(false)}
                      >
                        दर्शन देखें →
                      </Link>
                      <button
                        type="button"
                        className="fav-remove-btn"
                        onClick={() => toggleFavorite(item)}
                        title="हटाएँ"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {favorites.length > 0 && (
          <div className="fav-drawer-footer">
            <p>कुल सुरक्षित स्थल: <strong>{favorites.length}</strong></p>
          </div>
        )}
      </aside>
    </div>
  );
}

export default FavoritesDrawer;
