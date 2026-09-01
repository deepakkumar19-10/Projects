import "./PlaceCard.css";

function PlaceCard({ place }) {
  return (
    <article className="place-card">
      {/* Image */}
      <div className="place-image-wrapper">
        <img src={place.image} alt={place.nameHindi} className="place-image" />

        <div className="image-gradient"></div>

        <span className="place-category">{place.category}</span>

        <div className="image-title">
          <h3>{place.nameHindi}</h3>
          <p>{place.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="place-content">
        <div className="place-meta">
          <span>📍 {place.city || "Braj"}</span>
          <span>🕉️ दर्शन</span>
        </div>

        <p className="place-description">{place.shortDescription}</p>

        <button className="place-btn" type="button">
          <span>दर्शन स्थल देखें</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </article>
  );
}

export default PlaceCard;
