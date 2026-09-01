import "../App.css";
import "./Events.css";

const brajEvents = [
  {
    title: "श्री कृष्ण जन्माष्टमी",
    location: "Mathura",
    date: "भाद्रपद कृष्ण अष्टमी",
    month: "भाद्रपद",
    image: "/images/events/krishna-janmashtami-mathura.png",
    desc: "मथुरा में श्रीकृष्ण जन्मभूमि पर आधी रात जन्मोत्सव, मंगला आरती और भव्य धार्मिक कार्यक्रमों के साथ जन्माष्टमी मनाई जाती है।",
  },
  {
    title: "लट्ठमार होली",
    location: "Barsana",
    date: "फाल्गुन शुक्ल अष्टमी",
    month: "फाल्गुन",
    image: "/images/events/lathmar-holi-barsana.png",
    desc: "बरसाना और नंदगांव की प्रसिद्ध लट्ठमार होली ब्रज की सबसे अनोखी होली परंपराओं में से एक है।",
  },
  {
    title: "फूलों की होली",
    location: "Vrindavan",
    date: "फाल्गुन",
    month: "फाल्गुन",
    image: "/images/events/phoolon-ki-holi-vrindavan.png",
    desc: "वृंदावन के मंदिरों में रंगों की जगह फूलों से खेली जाने वाली सुंदर और भक्तिमय होली।",
  },
  {
    title: "गोवर्धन पूजा",
    location: "Govardhan",
    date: "कार्तिक शुक्ल प्रतिपदा",
    month: "कार्तिक",
    image: "/images/events/govardhan-puja.png",
    desc: "गोवर्धन पर्वत की पूजा और अन्नकूट के अवसर पर भगवान कृष्ण को छप्पन भोग अर्पित किया जाता है।",
  },
  {
    title: "अन्नकूट महोत्सव",
    location: "Govardhan & Vrindavan",
    date: "कार्तिक शुक्ल प्रतिपदा",
    month: "कार्तिक",
    image: "/images/events/annakoot-mahotsav.png",
    desc: "विभिन्न प्रकार के भोजन का विशाल भोग भगवान को समर्पित किया जाता है और भक्त प्रसाद ग्रहण करते हैं।",
  },
  {
    title: "राधाष्टमी",
    location: "Barsana",
    date: "भाद्रपद शुक्ल अष्टमी",
    month: "भाद्रपद",
    image: "/images/events/radhashtami-barsana.png",
    desc: "बरसाना में राधारानी के जन्मोत्सव का भव्य आयोजन होता है और मंदिरों में विशेष श्रृंगार किए जाते हैं।",
  },
  {
    title: "झूलन उत्सव",
    location: "Vrindavan",
    date: "श्रावण",
    month: "श्रावण",
    image: "/images/events/jhulan-utsav-vrindavan.png",
    desc: "सावन के दिनों में राधा-कृष्ण को सुंदर झूलों पर विराजमान कर मंदिरों में झूलन उत्सव मनाया जाता है।",
  },
  {
    title: "ब्रज परिक्रमा",
    location: "Govardhan & Vrindavan",
    date: "विभिन्न पर्व अवसर",
    month: "वर्षभर",
    image: "/images/events/braj-parikrama.png",
    desc: "भक्तजन ब्रज के प्रमुख तीर्थ स्थलों की परिक्रमा करते हुए Mathura, Vrindavan, Govardhan, Barsana और Gokul की यात्रा करते हैं।",
  },
  {
    title: "गोपाल जन्मोत्सव",
    location: "Gokul",
    date: "भाद्रपद कृष्ण नवमी",
    month: "भाद्रपद",
    image: "/images/events/gopal-janmotsav-gokul.png",
    desc: "गोकुल में कृष्ण जन्म के अगले दिन नंदोत्सव और बाल गोपाल की लीलाओं से जुड़े धार्मिक कार्यक्रम आयोजित होते हैं।",
  },
];

export default function Events() {
  return (
    <main className="events-page page-transition">
      <section className="events-hero">
        <div className="section-tag">
          <h1>🪷 ब्रज उत्सव</h1>
        </div>
        <h1>
          Festivals & <span>Events in Braj</span>
        </h1>
        <p>
          Mathura, Vrindavan, Barsana, Gokul और Govardhan के प्रमुख आध्यात्मिक
          एवं सांस्कृतिक उत्सवों की जानकारी।
        </p>
      </section>

      <section className="events-intro">
        <div>
          <div className="events-intro__eyebrow">
            <h2>Divine Celebrations</h2>
          </div>
          <h2>
            ब्रज की <span>उत्सव परंपरा</span>
          </h2>
        </div>
        <p>
          ब्रज में हर पर्व केवल उत्सव नहीं बल्कि भगवान श्रीकृष्ण और राधारानी की
          लीलाओं से जुड़ा आध्यात्मिक अनुभव है।
        </p>
      </section>

      <section className="events-grid">
        {brajEvents.map((event) => (
          <article className="event-card" key={event.title}>
            <div className="event-card__image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-card__image"
                loading="lazy"
              />
              <span className="event-card__location-overlay">
                📍 {event.location}
              </span>
            </div>

            <div className="event-card__content">
              <div className="event-card__top">
                <span className="event-card__date"> {event.date} </span>
                <span className="event-card__month"> {event.month} </span>
              </div>
              <h3>{event.title}</h3>
              <p className="event-card__desc"> {event.desc} </p>
              <div className="event-card__footer">
                <span>राधे राधे 🌸</span> <span>ब्रज दर्शन</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
