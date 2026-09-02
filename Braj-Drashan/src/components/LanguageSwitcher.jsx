import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "hi";

  const toggleLanguage = () => {
    const nextLang = currentLang.startsWith("hi") ? "en" : "hi";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      type="button"
      className="lang-switcher-btn"
      onClick={toggleLanguage}
      title={currentLang.startsWith("hi") ? "Switch to English" : "हिंदी में देखें"}
      aria-label="Toggle language"
    >
      <span className="lang-icon">🌐</span>
      <span className="lang-text">{currentLang.startsWith("hi") ? "English" : "हिन्दी"}</span>
    </button>
  );
}

export default LanguageSwitcher;
