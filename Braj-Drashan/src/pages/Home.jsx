import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import TempleCard from "../components/TempleCard";
import FestivalCountdown from "../components/FestivalCountdown";
import temples from "../data/temples.json";
import "./Home.css";

function Home() {
  const { t } = useTranslation();
  const { setIsPlannerOpen } = useApp();

  // Featured temples
  const featuredTemples = temples.filter((temple) => temple.featured).slice(0, 6);

  // Devotee Testimonials
  const testimonials = [
    {
      quote:
        "ब्रज दर्शन वेबसाइट की मदद से हमने अपनी 3 दिवसीय परिक्रमा बहुत आसानी से पूरी की। सभी मंदिरों की आरती का समय एकदम सही मिला!",
      name: "राधिका शर्मा",
      city: "नई दिल्ली",
      rating: "★★★★★"
    },
    {
      quote:
        "विश्राम घाट की संध्या आरती और बांके बिहारी जी के दर्शन का अनुभव अद्भुत रहा। यह पोर्टल हर तीर्थ यात्री के लिए बहुत मददगार है।",
      name: "अमिताभ वर्मा",
      city: "वाराणसी",
      rating: "★★★★★"
    },
    {
      quote:
        "वेबसाइट पर नेविगेट करते समय 'राधे राधे' की मधुर ध्वनि सुनकर मन को बहुत शांति मिलती है। बहुत ही सुंदर और उपयोगी प्रोजेक्ट!",
      name: "गौरव जोशी",
      city: "जयपुर",
      rating: "★★★★★"
    }
  ];

  return (
    <div className="home-container page-transition">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-small-text">{t("home.heroSmall", "DIVINE PILGRIMAGE OF BRAJ")}</span>
          <h1>
            DIVYABRAJ <span>| दिव्य ब्रज दर्शन</span>
          </h1>
          <p className="hero-tagline">
            {t(
              "home.heroSubheading",
              "श्री कृष्ण की पावन लीला भूमि में आपका हार्दिक स्वागत है"
            )}
          </p>
          <div className="hero-buttons">
            <Link to="/temples" className="btn-primary">
              <span>🛕</span> {t("home.btnTemples", "मंदिर दर्शन देखें")}
            </Link>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setIsPlannerOpen(true)}
            >
              <span>✨</span> {t("home.btnYatra", "यात्रा प्लान करें")}
            </button>
            <Link to="/panchang" className="btn-secondary">
              <span>🗓️</span> {t("nav.panchang", "पंचांग देखें")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING MAJOR FESTIVAL COUNTDOWN */}
      <section className="home-countdown-wrapper">
        <FestivalCountdown />
      </section>

      {/* 3. INTRO SECTION */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>{t("home.introTitle", "दिव्य धाम ब्रज भूमि")}</h2>
          <p>
            {t(
              "home.introDesc",
              "मथुरा, वृंदावन, गोवर्धन, बरसाना, गोकुल और नंदगांव — जहाँ भगवान श्री कृष्ण और श्री राधा रानी की अलौकिक लीलाएं आज भी कण-कण में विद्यमान हैं। ब्रज दर्शन के माध्यम से अपनी यात्रा को सुगम, मंगलमय और भक्तिमय बनाएं।"
            )}
          </p>
        </div>
      </section>

      {/* 4. FEATURED TEMPLES SECTION */}
      <section className="featured-section">
        <div className="section-header">
          <h2>{t("home.featuredTitle", "प्रमुख दर्शनीय मंदिर")}</h2>
          <p>{t("home.featuredSub", "दर्शन, आरती समय और पावन इतिहास")}</p>
        </div>

        <div className="temple-cards-container">
          {featuredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>

        <div className="more-temples-link">
          <Link to="/temples" className="btn-view-all">
            {t("home.viewAllTemples", "सभी मंदिर दर्शन देखें →")}
          </Link>
        </div>
      </section>

      {/* 5. DEVOTEE REVIEWS SECTION */}
      <section className="reviews-section">
        <div className="section-header">
          <h2>{t("home.reviewsTitle", "भक्तों के पावन अनुभव")}</h2>
          <p>{t("home.reviewsSub", "तीर्थ यात्रियों द्वारा साझा किए गए अविस्मरणीय अनुभव")}</p>
        </div>

        <div className="reviews-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="review-card">
              <div className="quote-icon">“</div>
              <p className="review-text">{test.quote}</p>
              <div className="review-rating">{test.rating}</div>
              <div className="reviewer-info">
                <div className="reviewer-avatar">{test.name.charAt(0)}</div>
                <div className="reviewer-meta">
                  <h4>{test.name}</h4>
                  <span>{test.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SPIRITUAL FOOTER */}
      <footer className="rich-footer">
        <div className="footer-columns-container">
          {/* Column 1: About */}
          <div className="footer-col">
            <h3 className="footer-logo-title">DIVYABRAJ • दिव्य ब्रज</h3>
            <p className="footer-desc">
              ब्रज दर्शन आपका डिजिटल आध्यात्मिक मार्गदर्शक है। मथुरा, वृंदावन, गोवर्धन, बरसाना और गोकुल के समस्त पावन मंदिरों, आरती समय एवं यात्रा योजनाओं की प्रामाणिक जानकारी।
            </p>
            <span className="footer-chant">॥ राधे राधे ॥</span>
          </div>

          {/* Column 2: Quick Temple Links */}
          <div className="footer-col">
            <h4>प्रमुख पावन स्थल</h4>
            <ul className="footer-links">
              <li>
                <Link to="/temples">बांके बिहारी जी मंदिर</Link>
              </li>
              <li>
                <Link to="/temples">श्री कृष्ण जन्मस्थान</Link>
              </li>
              <li>
                <Link to="/temples">प्रेम मंदिर वृंदावन</Link>
              </li>
              <li>
                <Link to="/places">विश्राम घाट मथुरा</Link>
              </li>
              <li>
                <Link to="/places">श्री राधा रानी मंदिर बरसाना</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Yatra Tour Links */}
          <div className="footer-col">
            <h4>यात्रा योजना</h4>
            <ul className="footer-links">
              <li>
                <Link to="/yatra">1 दिवसीय मथुरा-वृंदावन दर्शन</Link>
              </li>
              <li>
                <Link to="/yatra">2 दिवसीय गोकुल-वृंदावन यात्रा</Link>
              </li>
              <li>
                <Link to="/yatra">गिरिराज गोवर्धन पावन परिक्रमा</Link>
              </li>
              <li>
                <Link to="/yatra">बरसाना एवं नंदगांव दर्शन</Link>
              </li>
              <li>
                <Link to="/yatra">6 दिवसीय संपूर्ण ब्रज यात्रा</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Help Desk */}
          <div className="footer-col">
            <h4>तीर्थ सहायता केंद्र</h4>
            <p className="footer-contact-info">
              📍 श्री कृष्ण जन्मस्थान मार्ग, डीग गेट, मथुरा (उ.प्र.) 281001
            </p>
            <p className="footer-contact-info">📞 हेल्पलाइन: +91 98765 43210</p>
            <div className="footer-badge">
              <Link to="/contact">सहायता हेतु संपर्क करें →</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            © {new Date().getFullYear()} DIVYABRAJ • Crafted with Devotion for Krishna Devotees
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
