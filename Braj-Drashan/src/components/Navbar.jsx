// src/components/Navbar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import RadheToast from "./RadheToast";
import "./Navbar.css";

function Navbar() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const speakRadheRadhe = () => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance("राधे राधे");

    speech.lang = "hi-IN";
    speech.rate = 0.85;
    speech.pitch = 1;

    const voices = window.speechSynthesis.getVoices();

    const hindiVoice = voices.find(
      (voice) =>
        voice.lang === "hi-IN" || voice.lang.toLowerCase().includes("hi"),
    );

    if (hindiVoice) {
      speech.voice = hindiVoice;
    }

    window.speechSynthesis.speak(speech);
  };

  const handleNavClick = (pageName) => {
    setToastMessage(`जय श्री कृष्णा — ${pageName}`);
    setShowToast(true);

    speakRadheRadhe();
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-content">
          {/* LEFT NAVIGATION */}
          <nav className="nav-links-left">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => handleNavClick("Home")}
            >
              HOME
            </NavLink>

            <NavLink
              to="/temples"
              className={navClass}
              onClick={() => handleNavClick("Temples")}
            >
              TEMPLES
            </NavLink>

            <NavLink
              to="/places"
              className={navClass}
              onClick={() => handleNavClick("Ghats & Places")}
            >
              PLACES
            </NavLink>

            <NavLink
              to="/yatra"
              className={navClass}
              onClick={() => handleNavClick("Yatra Tours")}
            >
              YATRA
            </NavLink>
          </nav>

          {/* CENTER BRAND */}
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => handleNavClick("Home")}
          >
            <img
              src="/images/logo.png"
              alt="Braj Darshan Logo"
              className="nav-logo-img"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="brand-title">
              <span className="title-en">BRAJ DARSHAN</span>
              <span className="title-hi">ब्रज दर्शन</span>
            </div>
          </NavLink>

          {/* RIGHT NAVIGATION */}
          <nav className="nav-links-right">
            <NavLink
              to="/panchang"
              className={navClass}
              onClick={() => handleNavClick("Panchang")}
            >
              PANCHANG
            </NavLink>

            <NavLink
              to="/events"
              className={navClass}
              onClick={() => handleNavClick("Events")}
            >
              EVENTS
            </NavLink>

            <NavLink
              to="/food"
              className={navClass}
              onClick={() => handleNavClick("Braj Bhojan")}
            >
              FOOD
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => handleNavClick("Contact")}
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/yatra"
              className="btn-nav-plan"
              onClick={() => handleNavClick("Plan Your Trip")}
            >
              PLAN TRIP
            </NavLink>
          </nav>
        </div>
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
