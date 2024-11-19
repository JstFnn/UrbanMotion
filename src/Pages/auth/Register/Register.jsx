import React from "react";
import "./Register.css"; // Import the CSS file

class Register extends React.Component {
  handleRegister = (event) => {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("successPopup").style.display = "block";
  };

  closePopup = () => {
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="left">
            <img alt="Webverse Studio Logo" height="200" src="/assets/images/logo.png" width="600" className="logo" />
          </div>
          <div className="right">
            <div className="login-form">
              <i className="fa fa-times close-icon" onClick={() => navigate("/")} title="Tutup"></i>
              <h2>Daftar</h2>
              <p>Daftar untuk mengakses akun Urban Motion anda.</p>
              <label htmlFor="username">Nama Pengguna</label>
              <input id="username" name="username" type="text" />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" />
              <label htmlFor="nohp">Nomor handphone</label>
              <input id="nohp" name="nohp" type="text" />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
              <div className="checkbox-label">
                <input id="terms" name="terms" type="checkbox" />
                <label htmlFor="terms">Saya menerima syarat &amp; ketentuan yang berlaku</label>
              </div>

              <button type="submit" id="registerButton" onClick={this.handleRegister}>
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
            <button id="closePopup" onClick={this.closePopup}>
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
