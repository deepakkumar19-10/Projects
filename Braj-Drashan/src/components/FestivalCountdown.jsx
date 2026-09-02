import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./FestivalCountdown.css";

// Major upcoming festivals dates
const FESTIVALS = [
  {
    name: "Shri Krishna Janmashtami (श्री कृष्ण जन्मोत्सव)",
    date: new Date(new Date().getFullYear(), 7, 27, 0, 0, 0), // late August
    location: "Mathura & Vrindavan",
    tagline: "कंस कारागार में भगवान का दिव्य प्राकट्य"
  },
  {
    name: "Radhashtami (श्री राधाष्टमी महामहोत्सव)",
    date: new Date(new Date().getFullYear(), 8, 10, 5, 0, 0), // September
    location: "Barsana Dham",
    tagline: "लाड़ली जी बरसाने में बधाई महोत्सव"
  },
  {
    name: "Govardhan Puja & Annakoot (गोवर्धन पूजा)",
    date: new Date(new Date().getFullYear(), 10, 2, 8, 0, 0), // November
    location: "Govardhan Hill",
    tagline: "56 भोग एवं सप्तकोसीय गिरिराज परिक्रमा"
  },
  {
    name: "Barsana Lathmar Holi (लट्ठमार होली)",
    date: new Date(new Date().getFullYear() + 1, 2, 17, 10, 0, 0), // March
    location: "Barsana & Nandgaon",
    tagline: "विश्वप्रसिद्ध रंग-गुलाल एवं प्रेममयी होली"
  }
];

function getNextFestival() {
  const now = new Date();
  for (const f of FESTIVALS) {
    if (f.date > now) return f;
  }
  return FESTIVALS[0];
}

function FestivalCountdown() {
  const { t } = useTranslation();
  const [festival, setFestival] = useState(getNextFestival);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = festival.date - now;

      if (diff <= 0) {
        setFestival(getNextFestival());
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [festival]);

  return (
    <div className="festival-countdown-card">
      <div className="countdown-info">
        <span className="countdown-badge">✨ {t("countdown.title", "आगामी महापर्व")}</span>
        <h3>{festival.name}</h3>
        <p>📍 {festival.location} • {festival.tagline}</p>
      </div>

      <div className="countdown-timer">
        <div className="timer-box">
          <span className="timer-num">{timeLeft.days}</span>
          <span className="timer-label">{t("countdown.days", "दिन")}</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-box">
          <span className="timer-num">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="timer-label">{t("countdown.hours", "घंटे")}</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-box">
          <span className="timer-num">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="timer-label">{t("countdown.minutes", "मिनट")}</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-box">
          <span className="timer-num">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="timer-label">{t("countdown.seconds", "सेकंड")}</span>
        </div>
      </div>
    </div>
  );
}

export default FestivalCountdown;
