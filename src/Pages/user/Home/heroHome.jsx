import React from "react";
import "./heroHome.css";

const HeroHomeP = () => {
  return (
    <div className={`hero-container-home ${className}`}>
      <div className="hero-overlay-home">
        <div className="hero-content-home">
          <div className="hero-text-home">
            <h1>Semua dalam satu solusi mobilitas anda di Jakarta</h1>
            <p>
              Kami memberikan kemudahan akses transportasi umum, rental kendaraan, dan layanan driver untuk memastikan
              perjalanan Anda nyaman dan efisien di Jakarta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
