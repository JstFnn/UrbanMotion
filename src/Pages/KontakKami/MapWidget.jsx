import React from "react";
import "./KontakKami";

const MapWidget = () => {
  // URL untuk membuka peta (Google Maps misalnya)
  const mapUrl = "https://www.google.com/maps/place/Your+Location+Here"; // Ganti dengan URL yang sesuai

  return (
    <div className="map-section">
      <div className="map-widget">
        {/* Gambar peta tetap */}
        <img className="map-image" src="src/assets/images/maps.png" alt="Map" />
        {/* Tombol di tengah peta */}
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="view-on-map-button">
          View on Maps
        </a>
      </div>
    </div>
  );
};

export default MapWidget;
