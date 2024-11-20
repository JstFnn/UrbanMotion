import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const navigate = useNavigate(); // Use navigate from React Router

  // State to track form values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    nohp: "",
    password: "",
    terms: false,
  });

  // State to handle error messages
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Nama pengguna wajib diisi";
    if (!formData.email) newErrors.email = "Email wajib diisi";
    if (!formData.nohp) newErrors.nohp = "Nomor handphone wajib diisi";
    if (!formData.password) newErrors.password = "Password wajib diisi";
    if (!formData.terms) newErrors.terms = "Anda harus menyetujui syarat dan ketentuan";

    return newErrors;
  };

  // Handle form submission
  const handleRegister = (event) => {
    event.preventDefault();

    // Validate the form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // If there are errors, don't proceed
    }

    // If no errors, show the success popup
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("successPopup").style.display = "block";
  };

  // Close the success popup and navigate to the login page
  const closePopup = () => {
    navigate("/login"); // Navigate to login page when close popup is clicked
  };

  // Close the modal and navigate to the home page
  const closeModal = () => {
    navigate("/"); // Navigate to home page when close 'x' is clicked
  };

  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img alt="Webverse Studio Logo" height="200" src="/assets/images/logo.png" width="600" className="logo" />
        </div>
        <div className="right">
          <div className="login-form">
            {/* Close button with onClick */}
            <i className="fa fa-times close-icon" onClick={closeModal} title="Tutup"></i>
            <h2>Daftar</h2>
            <p>Daftar untuk mengakses akun Urban Motion anda.</p>

            <label htmlFor="username">Nama Pengguna</label>
            <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} />
            {errors.username && <span className="error">{errors.username}</span>}

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="nohp">Nomor handphone</label>
            <input id="nohp" name="nohp" type="text" value={formData.nohp} onChange={handleChange} />
            {errors.nohp && <span className="error">{errors.nohp}</span>}

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}

            <div className="checkbox-label">
              <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={handleChange} />
              <label htmlFor="terms">Saya menerima syarat &amp; ketentuan yang berlaku</label>
            </div>
            {errors.terms && <span className="error">{errors.terms}</span>}

            <button type="submit" id="registerButton" onClick={handleRegister}>
              Daftar
            </button>
            <div className="register">
              <p>
                Sudah punya akun? <a href="/login">Masuk</a>
              </p>
              <p>Atau</p>
              <a href="/dummy">
                <div className="google-login">
                  <img alt="Google Logo" height="20" src="/assets/images/google.png" width="20" />
                  <span>Daftar dengan Google</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Pop-up */}
        <div className="popup-overlay" id="popupOverlay"></div>
        <div className="popup" id="successPopup">
          <img src="/assets/images/daftarBerhasil.png" alt="Gambar Berhasil Daftar" />
          <button id="closePopup" onClick={closePopup}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
