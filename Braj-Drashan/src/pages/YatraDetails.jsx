import "../App.css";
import "./YatraDetails.css";
import { Link, useParams } from "react-router-dom";
import yatraPlans from "../data/yatra.json";

function YatraDetails() {
  const { id } = useParams();

  const yatra = yatraPlans.find((plan) => plan.id === Number(id));

  if (!yatra) {
    return (
      <div className="app">
        <main className="yatra-details-page">
          <div className="yatra-details-container">
            <h1>यात्रा योजना नहीं मिली</h1>

            <Link to="/yatra" className="back-link">
              ← सभी यात्रा योजनाएँ
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="yatra-details-page">
        <div className="yatra-details-container">
          <Link to="/yatra" className="back-link">
            ← सभी यात्रा योजनाएँ
          </Link>

          <div className="yatra-details-card">
            <div className="yatra-details-header">
              <span className="yatra-details-duration">
                🕐 {yatra.duration}
              </span>

              <h1>{yatra.titleHindi}</h1>

              <p>{yatra.title}</p>

              <p className="yatra-details-description">{yatra.description}</p>
            </div>

            <div className="yatra-details-body">
              <div className="yatra-route-section">
                <h2>यात्रा में शामिल स्थान</h2>

                <div className="yatra-route-list">
                  {yatra.places.map((place, index) => (
                    <div key={index} className="yatra-route-item">
                      <span className="route-number">{index + 1}</span>

                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="yatra-tips">
                <h2>यात्रा सुझाव</h2>

                <p>
                  यात्रा शुरू करने से पहले मंदिरों के दर्शन समय और स्थानीय
                  परिस्थितियों की जानकारी verify करें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default YatraDetails;
