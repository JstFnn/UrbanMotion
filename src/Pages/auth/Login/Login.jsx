import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Untuk navigasi menggunakan React Router

  // Dummy Data untuk login
  const dummyData = [
    {
      id: 1,
      email: "admin@urbanmotion.com",
      password: "admin123", // Password untuk admin
      role: "admin",
    },
    {
      id: 2,
      email: "user@urbanmotion.com",
      password: "user123", // Password untuk user
      role: "user",
    },
  ];

  const handleLogin = async (event) => {
    event.preventDefault();

    // Cek apakah email dan password cocok dengan data dummy
    const user = dummyData.find((u) => u.email === email && u.password === password);

    if (user) {
      // Simpan status login di localStorage (agar status login tetap saat reload)
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", user.role); // Simpan role untuk memeriksa peran pengguna

      // Redirect berdasarkan role (admin atau user)
      if (user.role === "admin") {
        navigate("/admin/dashboard"); // Arahkan ke dashboard admin
      } else if (user.role === "user") {
        navigate("/"); // Arahkan ke halaman user biasa
      }
    } else {
      setErrorMessage("Email atau password salah.");
    }
  };

  // Cek status login ketika komponen pertama kali dimuat
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      // Jika sudah login, arahkan pengguna ke halaman sesuai dengan role mereka
      const userRole = localStorage.getItem("role");
      if (userRole === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <div className="Login">
      <div className="container">
        <div className="left">
          <img alt="Webverse Studio Logo" className="logo" src="/assets/images/logo.png" />
        </div>
        <div className="right">
          <div className="login-form">
            {/* Ikon Silang */}
            <i className="fa fa-times close-icon" onClick={() => navigate("/")} title="Tutup"></i>

            <h2>Masuk</h2>
            <p>Masuk untuk mengakses akun Urban Motion anda.</p>

            {/* Form */}
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="checkbox-label">
                <input id="terms" name="terms" type="checkbox" />
                <label htmlFor="terms">Saya menerima syarat &amp; ketentuan yang berlaku</label>
              </div>

              {/* Error Message */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <button type="submit" id="registerButton">
                Masuk
              </button>
            </form>

            {/* Register and Google Login */}
            <div className="register">
              <p>
                Belum punya akun? <a href="/register">Daftar</a>
              </p>
              <p>Atau</p>
              <a href="/dummy">
                <div className="google-login">
                  <img alt="Google Logo" height="20" src="/assets/images/google.png" width="20" />
                  <span>Masuk dengan Google</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
