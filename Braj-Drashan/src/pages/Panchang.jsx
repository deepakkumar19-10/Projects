import "../App.css";
import "./Panchang.css";
import React, { useMemo, useState } from "react";
const hindiMonths = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर",
];
const weekDays = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
/* NOTE: यह UI/demo Panchang data है। Real Tithi/Nakshatra/Yoga calculation के लिए बाद में API/library जोड़ सकते हैं. */ const panchangInfo =
  {
    tithi: "शुक्ल एकादशी",
    paksha: "शुक्ल पक्ष",
    nakshatra: "रोहिणी",
    yoga: "सिद्धि",
    karana: "वणिज",
    samvat: "2083",
    ayana: "दक्षिणायन",
    ritu: "वर्षा ऋतु",
    sunrise: "05:58 AM",
    sunset: "06:48 PM",
    rahukaal: "12:18 PM – 01:53 PM",
  };
const brajFestivals = {
  "2026-08-27": "जन्माष्टमी",
  "2026-10-20": "गोवर्धन पूजा",
  "2026-03-04": "लट्ठमार होली",
};
function formatKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export default function Panchang() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= totalDays; day++) {
      days.push(new Date(currentYear, currentMonth, day));
    }
    return days;
  }, [currentMonth, currentYear, firstDay, totalDays]);
  const selectedKey = formatKey(selectedDate);
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };
  const handleDateChange = (event) => {
    const value = event.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-").map(Number);
    const newDate = new Date(year, month - 1, day);
    setSelectedDate(newDate);
    setCurrentMonth(month - 1);
    setCurrentYear(year);
  };
  return (
    <main className="panchang-page page-transition">
      {" "}
      <section className="panchang-hero">
        {" "}
        <div className="panchang-hero__content">
          {" "}
          <span className="section-tag">🪷 वैदिक पंचांग</span>{" "}
          <h1>
            {" "}
            हिंदू <span>पंचांग</span>{" "}
          </h1>{" "}
          <p>
            {" "}
            ब्रज धाम की यात्रा, पर्व और शुभ दिनों के लिए तिथि, नक्षत्र और वैदिक
            जानकारी एक ही स्थान पर।{" "}
          </p>{" "}
        </div>{" "}
        <div className="panchang-hero__symbol">ॐ</div>{" "}
      </section>{" "}
      <section className="panchang-date-selector">
        {" "}
        <div>
          {" "}
          <span className="panchang-date-selector__label">
            {" "}
            चयनित तारीख{" "}
          </span>{" "}
          <h3>
            {" "}
            {selectedDate.toLocaleDateString("hi-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
          </h3>{" "}
        </div>{" "}
        <div className="panchang-date-selector__input">
          {" "}
          <label htmlFor="panchang-date">तारीख चुनें</label>{" "}
          <input
            id="panchang-date"
            type="date"
            value={formatKey(selectedDate)}
            onChange={handleDateChange}
          />{" "}
        </div>{" "}
      </section>{" "}
      <section className="panchang-layout">
        {" "}
        <div className="panchang-calendar-card">
          {" "}
          <div className="calendar-header">
            {" "}
            <button
              type="button"
              className="calendar-nav-btn"
              onClick={goToPreviousMonth}
              aria-label="Previous month"
            >
              {" "}
              ←{" "}
            </button>{" "}
            <div>
              {" "}
              <span className="calendar-header__small">
                {" "}
                विक्रम संवत् {panchangInfo.samvat}{" "}
              </span>{" "}
              <h2>
                {" "}
                {hindiMonths[currentMonth]} {currentYear}{" "}
              </h2>{" "}
            </div>{" "}
            <button
              type="button"
              className="calendar-nav-btn"
              onClick={goToNextMonth}
              aria-label="Next month"
            >
              {" "}
              →{" "}
            </button>{" "}
          </div>{" "}
          <div className="calendar-weekdays">
            {" "}
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}{" "}
          </div>{" "}
          <div className="calendar-grid">
            {" "}
            {calendarDays.map((date, index) => {
              if (!date) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="calendar-day calendar-day--empty"
                  />
                );
              }
              const dateKey = formatKey(date);
              const isSelected = dateKey === selectedKey;
              const isToday = formatKey(today) === dateKey;
              const festival = brajFestivals[dateKey];
              return (
                <button
                  type="button"
                  key={dateKey}
                  className={`calendar-day ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {" "}
                  <span className="calendar-day__number">
                    {" "}
                    {date.getDate()}{" "}
                  </span>{" "}
                  {festival && (
                    <span className="calendar-day__festival"> {festival} </span>
                  )}{" "}
                </button>
              );
            })}{" "}
          </div>{" "}
          <div className="calendar-legend">
            {" "}
            <span>
              {" "}
              <i className="legend-dot legend-dot--today" /> आज{" "}
            </span>{" "}
            <span>
              {" "}
              <i className="legend-dot legend-dot--festival" /> ब्रज पर्व{" "}
            </span>{" "}
            <span>
              {" "}
              <i className="legend-dot legend-dot--selected" /> चयनित दिन{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <aside className="panchang-side-card">
          {" "}
          <div className="panchang-side-card__top">
            {" "}
            <span>आज का पंचांग</span>{" "}
            <span className="panchang-side-card__om">ॐ</span>{" "}
          </div>{" "}
          <h2>
            {" "}
            {selectedDate.toLocaleDateString("hi-IN", {
              day: "numeric",
              month: "long",
            })}{" "}
          </h2>{" "}
          <div className="paksha-box">
            {" "}
            <span>पक्ष</span> <strong>{panchangInfo.paksha}</strong>{" "}
          </div>{" "}
          <div className="panchang-detail-list">
            {" "}
            <div>
              {" "}
              <span>तिथि</span> <strong>{panchangInfo.tithi}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>नक्षत्र</span>{" "}
              <strong>{panchangInfo.nakshatra}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>योग</span> <strong>{panchangInfo.yoga}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>करण</span> <strong>{panchangInfo.karana}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>विक्रम संवत्</span>{" "}
              <strong>{panchangInfo.samvat}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>अयन</span> <strong>{panchangInfo.ayana}</strong>{" "}
            </div>{" "}
            <div>
              {" "}
              <span>ऋतु</span> <strong>{panchangInfo.ritu}</strong>{" "}
            </div>{" "}
          </div>{" "}
        </aside>{" "}
      </section>{" "}
      <section className="daily-timing-section">
        {" "}
        <div className="section-heading">
          {" "}
          <span className="section-tag">☀️ दैनिक समय</span>{" "}
          <h2>
            {" "}
            सूर्योदय, <span>सूर्यास्त</span> और शुभ समय{" "}
          </h2>{" "}
        </div>{" "}
        <div className="timing-grid">
          {" "}
          <div className="timing-card">
            {" "}
            <span className="timing-icon">🌅</span>{" "}
            <div>
              {" "}
              <span>सूर्योदय</span> <strong>{panchangInfo.sunrise}</strong>{" "}
            </div>{" "}
          </div>{" "}
          <div className="timing-card">
            {" "}
            <span className="timing-icon">🌇</span>{" "}
            <div>
              {" "}
              <span>सूर्यास्त</span> <strong>{panchangInfo.sunset}</strong>{" "}
            </div>{" "}
          </div>{" "}
          <div className="timing-card timing-card--warning">
            {" "}
            <span className="timing-icon">⏳</span>{" "}
            <div>
              {" "}
              <span>राहुकाल</span> <strong>{panchangInfo.rahukaal}</strong>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="panchang-note">
        {" "}
        <div className="panchang-note__icon">🪷</div>{" "}
        <div>
          {" "}
          <h3>ब्रज दर्शन पंचांग</h3>{" "}
          <p>
            {" "}
            ब्रज के सभी प्रमुख मंदिरों के उत्सव, एकादशी व्रत और ठाकुर जी के
            विशेष श्रृंगार की जानकारी स्थानीय ब्रज पंचांग पर ही आधारित होती
            है{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
