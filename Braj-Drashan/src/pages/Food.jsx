import "../App.css";
import "./Food.css";

const brajFoods = [
  {
    name: "Mathura Peda",
    category: "मिठाई",
    image: "/images/food/mathura-peda.png",
    desc: "मथुरा की सबसे प्रसिद्ध मिठाइयों में से एक, खोया, चीनी और इलायची से तैयार किया जाने वाला पारंपरिक पेड़ा।",
    place: "Mathura",
  },
  {
    name: "Puri Sabzi",
    category: "नाश्ता",
    image: "/images/food/puri-sabzi.png",
    desc: "दाल से भरी गरमा-गरम बेड़मी पूरी के साथ मसालेदार आलू की सब्जी ब्रज का लोकप्रिय पारंपरिक नाश्ता है।",
    place: "Mathura",
  },
  {
    name: "Malai Makkhan",
    category: "पारंपरिक",
    image: "/images/food/malai-makkhan.png",
    desc: "सर्दियों में मिलने वाली हल्की, मलाईदार और झागदार ब्रज की विशेष मिठास जिसे स्थानीय रूप में मक्खन मलाई भी कहा जाता है।",
    place: "Mathura & Vrindavan",
  },
  {
    name: "Kulhar Lassi",
    category: "पेय",
    image: "/images/food/kulhar-lassi.png",
    desc: "गाढ़ी दही वाली लस्सी के ऊपर मलाई और सूखे मेवों की सजावट, जिसे मिट्टी के कुल्हड़ में परोसा जाता है।",
    place: "Vrindavan",
  },
  {
    name: "Rabri",
    category: "मिठाई",
    image: "/images/food/rabri.png",
    desc: "धीमी आँच पर गाढ़े किए गए दूध से बनी समृद्ध रबड़ी ब्रज की मिठाई परंपरा का खास हिस्सा है।",
    place: "Mathura & Vrindavan",
  },
  {
    name: "Kachori & Sabzi",
    category: "नाश्ता",
    image: "/images/food/kachori-sabzi.png",
    desc: "खस्ता मसालेदार कचौरी को तीखी आलू की सब्जी और चटनी के साथ परोसा जाता है।",
    place: "Mathura",
  },
  {
    name: "Aloo Tikki",
    category: "Street Food",
    image: "/images/food/aloo-tikki.png",
    desc: "कुरकुरी आलू टिक्की, दही, चटनी और मसालों के साथ परोसी जाने वाली लोकप्रिय शाम की चाट।",
    place: "Vrindavan",
  },
  {
    name: "Jalebi",
    category: "मिठाई",
    image: "/images/food/jalebi.png",
    desc: "गरमा-गरम चाशनी वाली जलेबी ब्रज की चाय और नाश्ते की संस्कृति में विशेष स्थान रखती है।",
    place: "Braj Region",
  },
];

export default function Food() {
  return (
    <main className="food-page page-transition">
      <section className="food-hero">
        <div>
          <span className="section-tag">🍽️ Where Flavor Meets Faith</span>
          <h1>
            स्वाद भी <span>भक्ति भी</span>
          </h1>
          <p>
            ब्रज दर्शन केवल मंदिरों और तीर्थों तक सीमित नहीं है। Mathura और
            Vrindavan का स्वाद भी इस यात्रा का महत्वपूर्ण हिस्सा है।
          </p>
        </div>
        <div className="food-hero__symbol">🍯</div>
      </section>

      <section className="food-heading">
        <span className="section-tag">
          <h1>ब्रज का भोजन</h1>
        </span>
        <h2>
          Famous <span>Foods of Braj</span>
        </h2>
        <p>
          स्थानीय मिठाइयों, नाश्ते, पेय और street food का पारंपरिक स्वाद अनुभव
          करें।
        </p>
      </section>

      <section className="food-grid">
        {brajFoods.map((food) => (
          <article className="food-card" key={food.name}>
            <div className="food-card__image-container">
              <img
                src={food.image}
                alt={food.name}
                className="food-card__image"
                loading="lazy"
              />
              <span className="food-card__location-overlay">
                📍 {food.place}
              </span>
            </div>

            <div className="food-card__content">
              <span className="food-card__category">{food.category}</span>
              <h3>{food.name}</h3>
              <p>{food.desc}</p>
              <div className="food-card__bottom">
                <span>ब्रज स्वाद</span> <strong>राधे राधे 🌸</strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="food-banner">
        <div>
          <span className="section-tag">Braj Experience</span>
          <h2>
            मंदिर दर्शन के साथ <span>ब्रज का स्वाद</span>
          </h2>
          <p>
            अपनी यात्रा में Mathura Peda, Kachori & Sabzi, Lassi और स्थानीय
            मिठाइयों का स्वाद लेना न भूलें।
          </p>
        </div>
        <div className="food-banner__emoji"> 🪷 </div>
      </section>
    </main>
  );
}
