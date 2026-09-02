import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { BRAJ_CENTER, DEFAULT_ZOOM, CATEGORY_COLORS, CATEGORY_EMOJIS } from "../services/mapbox";
import "./MapView.css";

function MapView({
  markers = [],
  center = BRAJ_CENTER,
  zoom = DEFAULT_ZOOM,
  height = "480px",
  activeId = null,
  onMarkerClick = null
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [mapError, setMapError] = useState(false);
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    // If no Mapbox token is set, switch to fallback mode
    if (!token || token.trim() === "") {
      setMapError(true);
      return;
    }

    try {
      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: center,
        zoom: zoom,
        attributionControl: false
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.on("error", (e) => {
        console.warn("Mapbox load error, switching to fallback:", e);
        setMapError(true);
      });

      mapRef.current = map;

      return () => {
        map.remove();
      };
    } catch (err) {
      console.warn("Could not initialize Mapbox:", err);
      setMapError(true);
    }
  }, [token]);

  // Update center when prop changes
  useEffect(() => {
    if (mapRef.current && center) {
      mapRef.current.flyTo({
        center: center,
        zoom: zoom || DEFAULT_ZOOM,
        essential: true
      });
    }
  }, [center, zoom]);

  // Render markers
  useEffect(() => {
    if (!mapRef.current || mapError) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    markers.forEach((item) => {
      if (!item.latitude || !item.longitude) return;

      const category = item.type || item.category?.toLowerCase() || "place";
      const color = CATEGORY_COLORS[category] || "#d97706";
      const emoji = CATEGORY_EMOJIS[category] || "📍";

      // Create custom pin element
      const el = document.createElement("div");
      el.className = `custom-map-marker ${activeId === item.id ? "active" : ""}`;
      el.style.backgroundColor = color;
      el.innerHTML = `<span>${emoji}</span>`;

      el.addEventListener("click", () => {
        if (onMarkerClick) onMarkerClick(item);
      });

      // Popup
      const popupHtml = `
        <div class="map-popup-card">
          ${item.image ? `<img src="${item.image}" alt="${item.nameHindi || item.name}" class="map-popup-img" />` : ""}
          <div class="map-popup-info">
            <h4>${item.nameHindi || item.name}</h4>
            <p>${item.name ? item.name : ""}</p>
            <span class="map-popup-city">📍 ${item.city || "Braj"}</span>
            <div class="map-popup-actions">
              ${item.link ? `<a href="${item.link}" class="map-popup-link">दर्शन देखें →</a>` : ""}
              <a href="https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}" target="_blank" rel="noopener noreferrer" class="map-popup-gmaps">Directions ↗</a>
            </div>
          </div>
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.longitude, item.latitude])
        .setPopup(popup)
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [markers, mapError, activeId, onMarkerClick]);

  if (mapError) {
    // Beautiful interactive fallback map explorer with OpenStreetMap
    const defaultLng = center ? center[0] : 77.6737;
    const defaultLat = center ? center[1] : 27.4924;

    return (
      <div className="map-fallback-wrapper" style={{ height }}>
        <div className="map-fallback-header">
          <div className="map-badge">🗺️ ब्रज धाम जीपीएस मानचित्र</div>
          <p className="map-fallback-note">
            Google Maps & Live Coordinates (OpenStreetMap View)
          </p>
        </div>

        <iframe
          title="Braj Dham Map View"
          className="osm-map-frame"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${defaultLng - 0.25}%2C${defaultLat - 0.2}%2C${defaultLng + 0.25}%2C${defaultLat + 0.2}&layer=mapnik&marker=${defaultLat}%2C${defaultLng}`}
          loading="lazy"
        />

        <div className="map-fallback-markers-bar">
          {markers.slice(0, 8).map((m) => (
            <a
              key={m.id}
              href={`https://www.google.com/maps/search/?api=1&query=${m.latitude},${m.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-fallback-pill"
            >
              📍 {m.nameHindi || m.name} ({m.city || "Braj"}) ↗
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="map-view-container" style={{ height }}>
      <div ref={mapContainerRef} className="mapbox-gl-canvas" />
    </div>
  );
}

export default MapView;
