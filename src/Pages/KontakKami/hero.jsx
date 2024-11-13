import React from "react";
import "./KontakKami";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero-container ${className}`}>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Siap Berangkat? Hubungi Kami Sekarang!</h1>
            <p>Tanyakan apa saja, kami siap memberikan solusi terbaik untuk Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
