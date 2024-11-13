import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapWidget from "./MapWidget";
import Hero from "./hero.jsx";
import "./KontakKami.css";
import "./../../vars.css";

const KontakKami = () => {
  return (
    <div className="content">
      <div className="main-frame">
        <div className="Heros">
          <Hero />
        </div>
        <div className="card-content">
          {/* Bagian kiri: Formulir Kontak */}
          <div className="left-panel">
            <ContactForm />
          </div>

          {/* Bagian kanan: Informasi Kontak */}
          <div className="right-panel">
            <ContactInfo />
          </div>
        </div>

        {/* Widget Google Maps */}
        <MapWidget />
      </div>
    </div>
  );
};

export default KontakKami;
