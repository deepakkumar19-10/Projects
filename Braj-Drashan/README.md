# 🛕 DIVYABRAJ (दिव्य ब्रज दर्शन) — Divine Pilgrimage & Cultural Guide

<div align="center">

![DIVYABRAJ Banner](/images/logo.png)

### **श्री कृष्ण की पावन लीला भूमि ब्रज धाम का संपूर्ण डिजिटल आध्यात्मिक मार्गदर्शक**
*A bilingual (Hindi + English) responsive tourism, spiritual, and cultural web guide for Mathura, Vrindavan, Govardhan, Barsana, Gokul, and Baldev.*

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![i18next](https://img.shields.io/badge/i18next-Bilingual_EN_%26_HI-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox_GL-Interactive_Maps-4264FB?style=for-the-badge&logo=mapbox&logoColor=white)](https://www.mapbox.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Design_Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)

[Key Features](#-key-features) • [Folder Structure](#-project-folder-structure) • [Installation & Setup](#-installation--setup-guide) • [Routes](#-application-routes) • [Vedic Panchang](#-vedic-panchang-engine)

---

</div>

## 📖 About The Project (परियोजना परिचय)

**DIVYABRAJ (दिव्य ब्रज दर्शन)** एक आधुनिक, आकर्षक और पूरी तरह से रिस्पॉन्सिव वेब एप्लिकेशन है, जो भगवान श्री कृष्ण और श्री राधा रानी की पावन लीला भूमि **ब्रज धाम** (मथुरा, वृंदावन, गोकुल, गोवर्धन, बरसाना, बलदेव) की यात्रा को सुगम, भक्तिमय और योजनाबद्ध बनाने के लिए तैयार किया गया है।

इस पोर्टल के माध्यम से श्रद्धालु व पर्यटक ब्रज के प्रमुख मंदिरों के दर्शन समय, मंगला व शयन आरती का समय, 1 से 6 दिवसीय यात्रा मार्ग (Day-wise Itinerary), वास्तविक हिंदू वैदिक पंचांग, ब्रज के पारंपरिक व्यंजन (Braj Food), तथा वर्षभर आयोजित होने वाले उत्सवों (Events) की संपूर्ण प्रामाणिक जानकारी जीपीएस मानचित्र (Mapbox) के साथ प्राप्त कर सकते हैं।

---

## ✨ 12 Core Capabilities & Features (मुख्य विशेषताएँ)

### 1. 🛕 Temple Guide & Darshan Timings (मंदिर दर्शन व आरती)
- ब्रज के प्रसिद्ध मंदिरों (बांके बिहारी, श्री कृष्ण जन्मस्थान, प्रेम मंदिर, लाड़ली जी बरसाना, दानघाटी आदि) की विस्तृत जानकारी।
- ग्रीष्मकालीन एवं शीतकालीन दर्शन समय तथा मंगला, भोग व शयन आरती का समय।
- शहर अनुसार (City-wise filtering: Mathura, Vrindavan, Govardhan, Barsana, Gokul, Baldev) फ़िल्टर करने की सुविधा।
- प्रत्येक मंदिर का अलग विवरण पृष्ठ (`/temples/:id`), दर्शन टिप्स, और डायरेक्ट Google Maps दिशा-निर्देश।

### 2. 📱 Mobile Hamburger Navbar & Slide Drawer
- रिस्पॉन्सिव मोबाइल हैमबर्गर मेन्यू और स्मूथ साइड ड्रॉवर।
- बाहर क्लिक करने या `Escape` दबाने पर ऑटोमैटिक क्लोज़।
- मोबाइल स्क्रीन पर लोगो और ब्रांड टेक्स्ट का ऑप्टिमाइज़्ड अलाइनमेंट।

### 3. 🌐 Hindi & English i18n (द्विभाषी इंटरफ़ेस)
- `react-i18next` के माध्यम से एक क्लिक में **हिंदी ⇄ English** भाषा बदलने की सुविधा।
- हेडिंग्स, नेविगेशन, कार्ड्स, फ़िल्टर और टोस्ट मैसेज का तत्काल अनुवाद।
- यूज़र की भाषा प्राथमिकता ब्राउज़र के `localStorage` में सुरक्षित।

### 4. 🗺️ Mapbox & Reusable Interactive Map (`MapView`)
- सभी मंदिरों, घाटों, भोजनालयों और उत्सव स्थलों के लिए इंटरएक्टिव जीपीएस मैप।
- कस्टम पिन मार्कर्स (🛕 Temple, 📍 Place, 🍽️ Food, 🎉 Event) और पॉपअप कार्ड्स।
- बिना टोकन के भी ऐप कभी क्रैश नहीं होता — सुंदर OpenStreetMap व कोऑर्डिनेट्स फ़ॉलबैक मौजूद।

### 5. ⏹️ Grid View & Map View Toggle
- मंदिरों (`/temples`), स्थलों (`/places`), और खान-पान (`/food`) पृष्ठों पर एक क्लिक में ग्रिड और मैप के बीच स्विच करने की सुविधा।

### 6. 🍽️ Famous Foods & Eateries Guide
- मथुरा के पेड़े, बेड़मी पूरी-सब्जी, मलाई मक्खन, कुल्हड़ लस्सी, खस्ता कचौरी, रबड़ी व जलेबी का सचित्र विवरण।
- प्रसिद्ध दुकानों और बाज़ारों (Brijwasi, Shankar Mithaiwala, Loi Bazaar) के जीपीएस स्थान।
- श्रेणी अनुसार फ़िल्टर (मिठाई, नाश्ता, पेय, Street Food, पारंपरिक)।

### 7. 🗓️ Real Astronomical Vedic Panchang Engine
- क्लाइंट-साइड वैदिक पंचांग गणना इंजन:
  - शुद्ध तिथि (शुक्ल प्रतिपदा से पूर्णिमा/अमावस्या)
  - पक्ष (शुक्ल / कृष्ण)
  - नक्षत्र, योग, करण और विक्रम संवत्
  - मथुरा के अक्षांश/देशांतर ($27.49^\circ\text{ N}, 77.67^\circ\text{ E}$) के आधार पर दैनिक सटीक सूर्योदय, सूर्यास्त और राहुकाल।
- मासिक इंटरएक्टिव कैलेंडर और ब्रज पर्व हाइलाइट्स।

### 8. 🎉 Cultural Events & Celebrations
- लट्ठमार होली, फूलों की होली, श्री कृष्ण जन्माष्टमी, गोवर्धन पूजा, अन्नकूट, राधाष्टमी आदि की तिथियाँ व महत्व।
- श्रेणी एवं माह के आधार पर फ़िल्टरिंग तथा आयोजन स्थल मानचित्र।

### 9. ⏳ Real-Time Festival Countdown (आगामी महापर्व)
- आगामी सबसे बड़े ब्रज उत्सव (जैसे जन्माष्टमी, होली, राधाष्टमी) के लिए लाइव उल्टी गिनती (Days, Hours, Minutes, Seconds)।

### 10. ❤️ Devotee Wishlist / Favorites Drawer
- किसी भी मंदिर, स्थल या व्यंजन को दिल ❤️ आइकन पर क्लिक करके अपनी व्यक्तिगत पसंदीदा सूची में सुरक्षित करें (`localStorage` में सेव)।
- नेवबार के काउंटर बैज से विशलिस्ट ड्रॉवर कभी भी खोलें।

### 11. ✨ Smart Custom Yatra Planner
- 1 से 6 दिनों की अनुकूलित यात्रा योजना बनाएँ।
- गति का चयन (Relaxed, Balanced, Fast-track) और तत्काल इटिनरेरी प्रीव्यू।

### 12. 🔊 Devotional Audio Experience (राधे राधे उद्घोष)
- नेविगेशन पर Web Speech Synthesis API के माध्यम से मधुर **"राधे राधे"** का स्वर उद्घोष।
- कस्टम `RadheToast` नोटिफिकेशन (कमल 🪷 प्रतीक और 2.5 सेकंड टाइमआउट)।

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Internationalization** | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| **Maps & Geospatial** | [Mapbox GL JS v3](https://docs.mapbox.com/mapbox-gl-js/) + OpenStreetMap Fallback |
| **Styling** | Pure CSS3, Custom Design Tokens (CSS Variables), Fluid Clamp Typography |
| **Audio / Speech** | HTML5 Web Speech Synthesis API (`hi-IN` Hindi localization) |
| **Data Store** | Local JSON Store (`temples.json`, `places.json`, `food.json`, `events.json`, `yatra.json`) |

---

## 📂 Project Folder Structure

```text
Braj-Drashan/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json           # English i18n resources
│   │   └── hi/
│   │       └── translation.json           # Hindi i18n resources
│   └── images/
│       ├── logo.png                       # मुख्य ब्रांड लोगो
│       ├── events/                        # 1. उत्सव व पर्वों की तस्वीरें
│       ├── food/                          # 2. ब्रज के पारंपरिक व्यंजन
│       ├── places/                        # 3. दर्शनीय स्थल और घाट
│       └── temples/                       # 4. प्रमुख पावन मंदिर
│           └── default-temple.svg         # फॉलबैक मंदिर इमेज
│
├── src/
│   ├── components/                        # रीयूजेबल UI कॉम्पोनेंट्स
│   │   ├── Navbar.jsx & Navbar.css        # हैमबर्गर व ड्रॉवर युक्त नेवबार
│   │   ├── LanguageSwitcher.jsx & .css    # भाषा परिवर्तक (EN / हि)
│   │   ├── MapView.jsx & MapView.css      # रीयूजेबल मैपबॉक्स व मैप फॉलबैक
│   │   ├── TempleCard.jsx & .css          # मंदिर कार्ड (विशलिस्ट + मैप लिंक)
│   │   ├── PlaceCard.jsx & .css           # स्थल कार्ड
│   │   ├── FavoritesDrawer.jsx & .css     # विशलिस्ट ड्रॉवर
│   │   ├── FestivalCountdown.jsx & .css   # लाइव फ़ेस्टिवल काउंटडाउन
│   │   ├── YatraPlannerModal.jsx & .css   # कस्टम यात्रा प्लानर मोडल
│   │   ├── RadheToast.jsx & .css          # राधे-राधे टोस्ट
│   │   └── PageTransition.jsx             # पेज ट्रांज़िशन रैपर
│   │
│   ├── context/
│   │   └── AppContext.jsx                 # विशलिस्ट व मोडल स्टेट
│   │
│   ├── data/                              # जीपीएस कोऑर्डिनेट्स युक्त डेटा
│   │   ├── temples.json                   # 9 प्रमुख मंदिरों का विस्तृत डेटा
│   │   ├── places.json                    # 9 दर्शनीय स्थलों का डेटा
│   │   ├── food.json                      # 8 ब्रज के पारंपरिक व्यंजन व दुकानें
│   │   ├── events.json                    # 8 प्रमुख ब्रज उत्सव
│   │   └── yatra.json                     # 6 दिवसीय दैनिक यात्रा कार्यक्रम
│   │
│   ├── i18n/
│   │   └── i18n.js                        # i18next कॉन्फ़िगरेशन
│   │
│   ├── pages/                             # मुख्य पृष्ठ (Views)
│   │   ├── Home.jsx & Home.css            # होमपेज (काउंटडाउन + फ़ीचर्ड मंदिर + फुटर)
│   │   ├── Temples.jsx & Temples.css      # मंदिर सूची + मैप टॉगल
│   │   ├── TempleDetails.jsx & .css       # मंदिर विवरण + मिनी मैप
│   │   ├── Places.jsx                     # प्रमुख स्थल + मैप टॉगल
│   │   ├── Yatra.jsx & Yatra.css          # डे-वाइज़ यात्रा गाइड + प्लानर बटन
│   │   ├── YatraDetails.jsx & .css        # यात्रा का रूट व स्टॉप्स
│   │   ├── Panchang.jsx & Panchang.css    # वास्तविक खगोलीय वैदिक पंचांग
│   │   ├── Events.jsx & Events.css        # ब्रज के उत्सव + उत्सव मैप
│   │   ├── Food.jsx & Food.css            # ब्रज का भोजन + फूड मैप
│   │   └── Contact.jsx & Contact.css      # 24x7 तीर्थ यात्री सहायता केंद्र
│   │
│   ├── services/
│   │   ├── mapbox.js                      # मैपबॉक्स केंद्र व श्रेणियाँ
│   │   ├── panchangService.js             # वैदिक खगोलीय गणना इंजन
│   │   └── speech.js                      # वॉइस उद्घोष सेवा
│   │
│   ├── App.jsx                            # रूटिंग व मुख्य लेआउट
│   ├── App.css                            # ग्लोबल डिज़ाइन टोकन्स व रीसेट
│   ├── index.css                          # बेस CSS
│   └── main.jsx                           # रिएक्ट एंट्री पॉइंट
│
├── .env.example                           # एनवायरनमेंट टेम्पलेट
├── .env                                   # लोकल एनवायरनमेंट वेरिएबल्स
├── index.html                             # रूट HTML (फ़ॉन्ट्स + मैपबॉक्स CSS)
├── package.json                           # डिपेंडेंसीज़ एवं स्क्रिप्ट्स
├── vite.config.js                         # Vite बिल्ड कॉन्फ़िगरेशन
└── README.md                              # प्रोजेक्ट डॉक्यूमेंटेशन
```

---

## 🚀 Installation & Setup Guide (शुरुआती सेटअप)

### 1. Prerequisites (ज़रूरी टूल्स)
- [Node.js](https://nodejs.org/) (संस्करण v18 या उससे अधिक)
- [Git](https://git-scm.com/)

### 2. Clone & Install
```bash
git clone https://github.com/your-username/Braj-Drashan.git
cd Braj-Drashan
npm install
```

### 3. Environment Variables (वैकल्पिक)
`.env.example` को कॉपी करके `.env` बनाएँ:
```env
# Mapbox Public Access Token (वैकल्पिक: न होने पर OSM फॉलबैक काम करता है)
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

### 4. Run Development Server
```bash
npm run dev
```
ब्राउज़र में खोलें: `http://localhost:5173/`

### 5. Production Build
```bash
npm run build
```
उत्पादन फाइल्स `dist/` फ़ोल्डर में तैयार हो जाएँगी।

---

## 🧭 Application Routes (वेबसाइट के रूट्स)

| Route Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | मुख्य होमपेज, हीरो, लाइव काउंटडाउन, फ़ीचर्ड मंदिर व फुटर |
| `/temples` | `Temples.jsx` | मंदिर सूची + शहर फ़िल्टर + ग्रिड/मैप टॉगल |
| `/temples/:id` | `TempleDetails.jsx` | मंदिर का समय, आरती, इतिहास व मिनी मैप |
| `/places` | `Places.jsx` | दर्शनीय स्थल + ग्रिड/मैप टॉगल |
| `/yatra` | `Yatra.jsx` | 1 से 6 दिवसीय यात्रा योजना + कस्टम प्लानर |
| `/yatra/:id` | `YatraDetails.jsx` | यात्रा मार्ग व दैनिक स्टॉप्स |
| `/panchang` | `Panchang.jsx` | वास्तविक वैदिक पंचांग, सूर्योदय, सूर्यास्त व राहुकाल |
| `/events` | `Events.jsx` | ब्रज उत्सव + काउंटडाउन + उत्सव मैप |
| `/food` | `Food.jsx` | ब्रज के पारंपरिक व्यंजन + प्रसिद्ध दुकानें + फूड मैप |
| `/contact` | `Contact.jsx` | तीर्थ यात्री सहायता व संपर्क फॉर्म |

---

<div align="center">

### **॥ राधे राधे ॥**
**Crafted with Devotion for Sri Krishna Devotees across the World 🪷**

</div>
