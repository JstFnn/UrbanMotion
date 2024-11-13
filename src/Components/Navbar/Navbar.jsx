import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Profil } from "../Profil/Profil.jsx"; // Komponen profil yang sudah Anda buat
import "./Navbar.css"; // Impor CSS di sini

export const Navbar = ({ className, ...props }) => {
  // State untuk status login, dropdown, dan menu di tampilan mobile
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu di tampilan mobile
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk navigasi ke halaman login
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Fungsi untuk navigasi ke halaman profil
  const handleProfileClick = () => {
    navigate("/my-account");
  };

  // Fungsi untuk navigasi ke halaman utama dan menutup menu
  const handleMenuClick = (route) => {
    navigate(route);
    setActiveMenu(route);
    setIsMenuOpen(false); // Tutup menu mobile setelah klik link
    setIsDropdownOpen(false); // Tutup dropdown jika terbuka
  };

  // Fungsi untuk navigasi ke submenu dan menutup dropdown/menu
  const handleSubMenuClick = (route) => {
    navigate(route);
    setIsMenuOpen(false); // Tutup menu mobile setelah pilih submenu
    setIsDropdownOpen(false); // Tutup dropdown jika terbuka
    setActiveMenu("/transportasi-umum");
  };

  // Daftar link utama untuk menu navbar
  const links = [
    { path: "/", label: "Beranda" },
    { path: "/tentang-kami", label: "Tentang kami" },
    { path: "/transportasi-umum", label: "Transportasi umum" },
    { path: "/daftar-harga", label: "Daftar harga" },
    { path: "/sewa", label: "Sewa" },
    { path: "/kontak", label: "Kontak" },
  ];

  // Daftar item dropdown untuk menu "Transportasi Umum"
  const dropdownItems = [
    { path: "/transportasi-umum/jadwal", label: "Jadwal Transportasi" },
    { path: "/transportasi-umum/peta", label: "Peta Rute" },
    { path: "/transportasi-umum/tarif", label: "Tarif" },
  ];

  return (
    <div className={`navbar-container ${className}`}>
      {/* Logo navbar */}
      <div className="navbar-logo">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </div>

      {/* Tombol toggle menu untuk tampilan mobile */}
      <button
        className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
      >
        <i className={`fas fa-bars ${isMenuOpen ? "open" : ""}`}></i>
      </button>

      {/* Link utama di navbar */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <div
            key={link.path}
            onClick={() =>
              link.path === "/transportasi-umum" ? setIsDropdownOpen(!isDropdownOpen) : handleMenuClick(link.path)
            }
            className={`navbar-item ${activeMenu === link.path ? "active" : ""}`}
          >
            <div className="navbar-item-text flex items-center">
              {link.label}
              {/* Ikon dropdown untuk "Transportasi umum" */}
              {link.label === "Transportasi umum" && (
                <i className={`fas fa-chevron-down dropdown-icon ${isDropdownOpen ? "open" : ""}`}></i>
              )}
            </div>

            {/* Dropdown menu jika "Transportasi Umum" dipilih */}
            {link.label === "Transportasi umum" && isDropdownOpen && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <div key={item.path} onClick={() => handleSubMenuClick(item.path)} className="dropdown-item">
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Tombol login atau profil */}
        <div className={`login-button ${isLoggedIn ? "desktop-visible" : ""}`} onClick={handleLoginClick}>
          <span className="login-button-text">{isLoggedIn ? "Profil" : "Login"}</span>
        </div>
      </div>
    </div>
  );
};
