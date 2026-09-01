import { Link } from "react-router-dom";
import "./YatraCard.css";

function YatraCard({ yatra }) {
  return (
    <article className="yatra-card">
      <div className="yatra-card-top">
        <span className="yatra-duration">🕐 {yatra.duration}</span>
      </div>

      <div className="yatra-card-content">
        <h3>{yatra.titleHindi}</h3>

        <p className="yatra-title">{yatra.title}</p>

        <p className="yatra-description">{yatra.description}</p>

        <div className="yatra-places">
          {yatra.places.map((place, index) => (
            <span key={index} className="yatra-place">
              📍 {place}
            </span>
          ))}
        </div>

        <Link to={`/yatra/${yatra.id}`} className="yatra-btn">
          यात्रा देखें →
        </Link>
      </div>
    </article>
  );
}

export default YatraCard;
