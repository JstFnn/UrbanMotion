import "./KontakKami.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form">
      <div className="header-title-form">
        <div>Hubungi kami</div>
      </div>
      <div className="subtitle-form">
        <p>Jangan ragu untuk meminta konsultasi atau bertanya, hubungi kami</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-field">
            <label className="label">Nama Pertama</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nama Pertama"
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label className="label">Nama Terakhir</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nama Terakhir"
              className="input-field"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-field">
            <label className="label">Alamat Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label className="label">Subjek</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Isi Subjek"
              className="input-field"
            />
          </div>
        </div>
        <div className="form-field">
          <label className="label">Pesan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ketik pesan di sini..."
            className="input-field-message"
          />
        </div>
        <button type="submit" className="submit-button">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
