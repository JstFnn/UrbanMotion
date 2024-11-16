import "./ContactForm.css";
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
    <div className="form-KontakKami">
      <div className="header-title-form-KontakKami">
        <div>Hubungi kami</div>
      </div>
      <div className="subtitle-form-KontakKami">
        <p>Jangan ragu untuk meminta konsultasi atau bertanya, hubungi kami</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row-KontakKami">
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Nama Pertama</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nama Pertama"
              className="input-field-KontakKami"
            />
          </div>
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Nama Terakhir</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nama Terakhir"
              className="input-field-KontakKami"
            />
          </div>
        </div>
        <div className="row-KontakKami">
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Alamat Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="input-field-KontakKami"
            />
          </div>
          <div className="form-field-KontakKami">
            <label className="label-KontakKami">Subjek</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Isi Subjek"
              className="input-field-KontakKami"
            />
          </div>
        </div>
        <div className="form-field-KontakKami">
          <label className="label-KontakKami">Pesan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ketik pesan di sini..."
            className="input-field-message-KontakKami"
          />
        </div>
        <button type="submit" className="submit-button-KontakKami">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
