import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect

// Components PAGES
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sidebar from "./Pages/admin/componen/Sidebar/sidebar.jsx";

// USER PAGES
import KontakKami from "./Pages/user/KontakKami/KontakKami";
import TentangKami from "./Pages/user/TentangKami/TentangKami";
import Login from "./Pages/auth/Login/Login";
import Register from "./Pages/auth/Register/Register";
import MyAccount from "./Pages/user/MyAccount/MyAccount.jsx";

// Admin PAGES

import DashboardAdmin from "./Pages/admin/page/dashboardAdmin/dashboardAdmin.jsx";
import ProductsPage from "./Pages/admin/page/produkAdmin/prdoukAdmin.jsx";

// 404 PAGES
import NotFoundPage from "./Pages/404/notFound.jsx";

// CSS
import "./styles.css";

function AppContent() {
  const location = useLocation();

  // Tentukan halaman yang tidak menampilkan Navbar dan Footer
  const hideHeaderFooter = ["/login", "/register", "*"].includes(location.pathname);

  // Gunakan matchPath untuk memeriksa apakah URL cocok dengan pola '/admin/*'
  const isAdminPage = matchPath("/admin/*", location.pathname);

  useEffect(() => {
    // Update document title based on the current route
    const pageTitleMap = {
      "/": "Beranda - Urban Motion",
      "/tentang-kami": "Tentang Kami - Urban Motion",
      "/transportasi-umum/peta": "Peta - Urban Motion",
      "/transportasi-umum/jadwal": "Jadwal - Urban Motion",
      "/transportasi-umum/tarif": "Tarif - Urban Motion",
      "/sewa": "Sewa - Urban Motion",
      "/daftar-harga": "Daftar Harga - Urban Motion",
      "/kontak": "Kontak Kami - Urban Motion",
      "/login": "Login - Urban Motion",
      "/register": "Register - Urban Motion",
    };

    // Set the document title based on the current path
    document.title = pageTitleMap[location.pathname] || "Urban Motion";
  }, [location.pathname]); // Re-run this effect every time the path changes

  return (
    <div className="app-wrapper">
      {!hideHeaderFooter && !isAdminPage && <Navbar />}
      <div className={`main-content ${isAdminPage ? "admin-layout" : ""}`}>
        {isAdminPage && <Sidebar />} {/* Tampilkan Sidebar jika halaman admin */}
        <div className={`content-area ${isAdminPage ? "admin-content" : ""}`}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/transportasi-umum" element={<div>Transportasi Umum</div>} />
            <Route path="/sewa" element={<div>Sewa </div>} />
            <Route path="/daftar-harga" element={<div>Daftar Harga </div>} />
            <Route path="/kontak" element={<KontakKami />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/product" element={<ProductsPage />} />

            <Route path="/dummy" element={<div>Lorem Ipsum</div>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      {!hideHeaderFooter && !isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
