import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import { speakDevotional } from "../services/speech";
import LanguageSwitcher from "./LanguageSwitcher";
import RadheToast from "./RadheToast";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  const { favorites, setIsFavoritesOpen, setIsPlannerOpen } = useApp();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close drawer on window resize above 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
      }
    };
    if (isMobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (pageKey, label) => {
    setToastMessage(`जय श्री कृष्णा — ${label}`);
    setShowToast(true);
    speakDevotional("राधे राधे");
    setIsMobileOpen(false);
  };

  const navClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-content">
          {/* LEFT NAVIGATION (DESKTOP) */}
          <nav className="nav-links-left" aria-label="Primary Left">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => handleNavClick("home", t("nav.home"))}
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/temples"
              className={navClass}
              onClick={() => handleNavClick("temples", t("nav.temples"))}
            >
              {t("nav.temples")}
            </NavLink>

            <NavLink
              to="/places"
              className={navClass}
              onClick={() => handleNavClick("places", t("nav.places"))}
            >
              {t("nav.places")}
            </NavLink>

            <NavLink
              to="/yatra"
              className={navClass}
              onClick={() => handleNavClick("yatra", t("nav.yatra"))}
            >
              {t("nav.yatra")}
            </NavLink>
          </nav>

          {/* CENTER BRAND */}
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => handleNavClick("home", "DIVYABRAJ")}
          >
            <img
              src="/images/logo.png"
              alt="DIVYABRAJ Logo"
              className="nav-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="brand-title">
              <span className="title-en">{t("brand.titleEn", "DIVYABRAJ")}</span>
              <span className="title-hi">{t("brand.titleHi", "दिव्य ब्रज दर्शन")}</span>
            </div>
          </NavLink>

          {/* RIGHT NAVIGATION (DESKTOP) */}
          <nav className="nav-links-right" aria-label="Primary Right">
            <NavLink
              to="/panchang"
              className={navClass}
              onClick={() => handleNavClick("panchang", t("nav.panchang"))}
            >
              {t("nav.panchang")}
            </NavLink>

            <NavLink
              to="/events"
              className={navClass}
              onClick={() => handleNavClick("events", t("nav.events"))}
            >
              {t("nav.events")}
            </NavLink>

            <NavLink
              to="/food"
              className={navClass}
              onClick={() => handleNavClick("food", t("nav.food"))}
            >
              {t("nav.food")}
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => handleNavClick("contact", t("nav.contact"))}
            >
              {t("nav.contact")}
            </NavLink>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Wishlist / Favorites Button */}
            <button
              type="button"
              className="btn-nav-favorites"
              onClick={() => setIsFavoritesOpen(true)}
              title={t("nav.favorites")}
              aria-label={t("nav.favorites")}
            >
              <span>❤️</span>
              {favorites.length > 0 && (
                <span className="fav-badge">{favorites.length}</span>
              )}
            </button>

            {/* Custom Trip Planner CTA */}
            <button
              type="button"
              className="btn-nav-plan"
              onClick={() => setIsPlannerOpen(true)}
            >
              ✨ {t("nav.planTrip")}
            </button>
          </nav>

          {/* MOBILE CONTROLS & HAMBURGER */}
          <div className="mobile-controls">
            <LanguageSwitcher />
            
            <button
              type="button"
              className="btn-nav-favorites mobile-fav"
              onClick={() => setIsFavoritesOpen(true)}
              aria-label={t("nav.favorites")}
            >
              <span>❤️</span>
              {favorites.length > 0 && (
                <span className="fav-badge">{favorites.length}</span>
              )}
            </button>

            <button
              type="button"
              className={`nav-hamburger ${isMobileOpen ? "open" : ""}`}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT DRAWER */}
        {isMobileOpen && (
          <div className="mobile-drawer-overlay" onClick={() => setIsMobileOpen(false)}>
            <div
              className="mobile-drawer"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div className="brand-title">
                  <span className="title-en">{t("brand.titleEn", "DIVYABRAJ")}</span>
                  <span className="title-hi">{t("brand.titleHi", "ब्रज दर्शन")}</span>
                </div>
                <button
                  type="button"
                  className="drawer-close-btn"
                  onClick={() => setIsMobileOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="mobile-drawer-links">
                <NavLink
                  to="/"
                  className={navClass}
                  onClick={() => handleNavClick("home", t("nav.home"))}
                >
                  🏠 {t("nav.home")}
                </NavLink>

                <NavLink
                  to="/temples"
                  className={navClass}
                  onClick={() => handleNavClick("temples", t("nav.temples"))}
                >
                  🛕 {t("nav.temples")}
                </NavLink>

                <NavLink
                  to="/places"
                  className={navClass}
                  onClick={() => handleNavClick("places", t("nav.places"))}
                >
                  📍 {t("nav.places")}
                </NavLink>

                <NavLink
                  to="/yatra"
                  className={navClass}
                  onClick={() => handleNavClick("yatra", t("nav.yatra"))}
                >
                  📅 {t("nav.yatra")}
                </NavLink>

                <NavLink
                  to="/panchang"
                  className={navClass}
                  onClick={() => handleNavClick("panchang", t("nav.panchang"))}
                >
                  🗓️ {t("nav.panchang")}
                </NavLink>

                <NavLink
                  to="/events"
                  className={navClass}
                  onClick={() => handleNavClick("events", t("nav.events"))}
                >
                  🎉 {t("nav.events")}
                </NavLink>

                <NavLink
                  to="/food"
                  className={navClass}
                  onClick={() => handleNavClick("food", t("nav.food"))}
                >
                  🍽️ {t("nav.food")}
                </NavLink>

                <NavLink
                  to="/contact"
                  className={navClass}
                  onClick={() => handleNavClick("contact", t("nav.contact"))}
                >
                  📞 {t("nav.contact")}
                </NavLink>
              </div>

              <div className="mobile-drawer-footer">
                <button
                  type="button"
                  className="btn-nav-plan mobile-plan-btn"
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsPlannerOpen(true);
                  }}
                >
                  ✨ {t("nav.planTrip")}
                </button>
                <p className="mobile-chant">॥ राधे राधे ॥</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {showToast && (
        <RadheToast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default Navbar;
