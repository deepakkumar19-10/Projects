import "../App.css";
import places from "../data/places.json";
import PlaceCard from "../components/PlaceCard";
function Places() {
  return (
    <div className="app">
      <main>
        <section className="temples-section">
          <div className="temples-heading">
            <p>📍 Explore Braj</p>

            <h1>
              ब्रज के <span>प्रमुख स्थान</span>
            </h1>

            <p>
              मथुरा, वृंदावन, गोकुल, गोवर्धन और बरसाना के प्रमुख दर्शनीय स्थान
              यहाँ देखें।
            </p>
          </div>

          <div className="temples-grid">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Places;
