// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const YATRA_TOPICS = [
  "मथुरा-वृंदावन दर्शन",
  "गोवर्धन परिक्रमा",
  "आरती व दर्शन समय",
  "धर्मशाला / आवास",
  "गाइड व टैक्सी सेवा",
  "अन्य पूछताछ",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "मथुरा-वृंदावन दर्शन",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      topic: "मथुरा-वृंदावन दर्शन",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="contact-page-wrapper page-transition">
      {/* 1. Header Section */}
      <div className="contact-header">
        <span className="contact-badge">
          ✨ 24x7 तीर्थ यात्री सहायता केंद्र
        </span>
        <h1>
          संपर्क एवं <span>मार्गदर्शन केंद्र</span>
        </h1>
        <p>
          श्री धाम ब्रज यात्रा, मंदिर दर्शन समय, परिक्रमा मार्ग या आवास संबंधित
          किसी भी सहायता के लिए हमसे संपर्क करें।
        </p>
      </div>

      {/* 2. Main Grid */}
      <div className="contact-grid">
        {/* Left Column: Direct Info & Action Cards */}
        <div className="contact-info-list">
          <div className="info-card highlight-card">
            <div className="info-card-icon">🚩</div>
            <div className="info-card-text">
              <h3>मुख्य तीर्थ सेवा कार्यालय</h3>
              <p>श्री कृष्ण जन्मस्थान मार्ग, डीग गेट, मथुरा (उ.प्र.) 281001</p>
              <span className="info-subtext">निशुल्क मार्गदर्शन उपलब्ध</span>
            </div>
          </div>

          <a href="tel:+919876543210" className="info-card clickable-card">
            <div className="info-card-icon">📞</div>
            <div className="info-card-text">
              <h3>यात्री हेल्पलाइन (Click to Call)</h3>
              <p className="phone-number">+91 98765 43210</p>
              <span className="info-subtext">
                प्रातः 06:00 से रात्रि 10:00 तक
              </span>
            </div>
          </a>

          <a
            href="mailto:seva@brajdarshan.org"
            className="info-card clickable-card"
          >
            <div className="info-card-icon">✉️</div>
            <div className="info-card-text">
              <h3>ईमेल सहायता</h3>
              <p>seva@brajdarshan.org</p>
              <span className="info-subtext">24 घंटे के अंदर त्वरित उत्तर</span>
            </div>
          </a>

          <div className="info-card promise-card">
            <div className="info-card-icon">🙏</div>
            <div className="info-card-text">
              <h3>ब्रज सेवा संकल्प</h3>
              <p>
                समस्त जानकारी ब्रज के प्रामाणिक पुजारियों व संतों के परामर्श
                अनुसार प्रदान की जाती है।
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="contact-form-box">
          {submitted ? (
            <div className="success-screen">
              <div className="success-icon">🪷</div>
              <h2>राधे राधे! {formData.name} जी</h2>
              <p className="success-tagline">
                आपकी <strong>"{formData.topic}"</strong> संबंधी पूछताछ
                सफलतापूर्वक प्राप्त हो गई है।
              </p>
              <div className="success-summary">
                <div>
                  <span>संपर्क नंबर:</span> <strong>{formData.phone}</strong>
                </div>
                <div>
                  <span>सेवा स्थिति:</span>{" "}
                  <strong className="status-badge">
                    प्रक्रिया में (Pending)
                  </strong>
                </div>
              </div>
              <p className="success-note">
                हमारी सेवा टीम शीघ्र ही आपसे संपर्क करेगी।
              </p>
              <button onClick={handleReset} className="btn-reset">
                + दूसरा प्रश्न पूछें
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-title-group">
                <h2>यात्रा पूछताछ फॉर्म</h2>
                <p>कृपया अपना विवरण भरें, हम मार्गदर्शन करेंगे</p>
              </div>

              {/* Topic Selector Pills */}
              <div className="form-group">
                <label>पूछताछ का विषय चुनें (Select Topic)</label>
                <div className="topic-pills">
                  {YATRA_TOPICS.map((topic, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`topic-pill ${formData.topic === topic ? "active" : ""}`}
                      onClick={() => handleTopicSelect(topic)}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone Inputs */}
              <div className="form-row">
                <div className="form-group">
                  <label>आपका नाम (Full Name) *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="उदा. राहुल शर्मा"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>मोबाइल नंबर (Phone) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    pattern="[0-9+ ]{10,14}"
                    title="कृपया वैध 10 अंकों का मोबाइल नंबर डालें"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="form-group">
                <label>यात्रा का विवरण या आपका प्रश्न (Message) *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="उदा. हम 4 लोग वृंदावन आ रहे हैं, कृपया बांके बिहारी जी के दर्शन समय व पास की धर्मशाला बताएं..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "संदेश भेजा जा रहा है..."
                  : "संदेश भेजें (Submit Query) →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
