import React from "react";
import "./Login.css";

class Login extends React.Component {
  handleRegister = (event) => {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("successPopup").style.display = "block";
  };

  closePopup = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="left">
            <img alt="Webverse Studio Logo" className="logo" src="/src/assets/images/logo.png" />
          </div>
          <div className="right">
            <div className="login-form">
              <h2>Masuk</h2>
              <p>Masuk untuk mengakses akun Urban Motion anda.</p>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
              <div className="checkbox-label">
                <input id="terms" name="terms" type="checkbox" />
                <label htmlFor="terms">Saya menerima syarat &amp; ketentuan yang berlaku</label>
              </div>

              <button type="submit" id="registerButton" onClick={this.handleRegister}>
                Masuk
              </button>
              <div className="register">
                <p>
                  Belum punya akun? <a href="/register">Daftar</a>
                </p>
                <p>Atau</p>

                <a href="/dummy">
                  <div className="google-login">
                    <img alt="Google Logo" height="20" src="/src/assets/images/google.png" width="20" />
                    <span>Masuk dengan Google</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pop-up */}
        <div className="popup-overlay" id="popupOverlay"></div>
        <div className="popup" id="successPopup">
          <img src="/src/assets/images/masukBerhasil.png" alt="Gambar Masuk Daftar" />
          <button id="closePopup" onClick={this.closePopup}>
            Tutup
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
