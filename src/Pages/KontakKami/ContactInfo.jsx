import React from "react";
import "./KontakKami";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-title">Tetap bersama kami</div>
      <div className="contact-header-title">Hubungi kami</div>
      <div className="contact-subtitle">
        <p>Jangan ragu untuk meminta konsultasi atau bertanya, langsung saja hubungi kami.</p>
      </div>

      <div className="icon-box">
        <div className="contact-info-item">
          <p className="label">
            <i className="fas fa-map-marker-alt"></i> {/* Ikon Tempat */}
            Tempat Kami
          </p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>

      <div className="icon-box">
        <div className="contact-info-item">
          <p className="label">
            <i className="fas fa-envelope"></i> {/* Ikon Email */}
            Alamat Email
          </p>
          <p>WebVerse.Studio@gmail.com</p>
        </div>
      </div>

      <div className="icon-box">
        <div className="contact-info-item">
          <p className="label">
            <i className="fas fa-phone-alt"></i> {/* Ikon Telepon */}
            Telepon
          </p>
          <p>( +62 ) 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
