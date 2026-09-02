import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locales/en/translation.json";
import hiTranslations from "../../public/locales/hi/translation.json";

const savedLanguage = typeof window !== "undefined" 
  ? localStorage.getItem("divyabraj_lang") || "hi" 
  : "hi";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations }
    },
    lng: savedLanguage,
    fallbackLng: "hi",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("divyabraj_lang", lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
