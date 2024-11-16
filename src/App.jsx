import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import KontakKami from "./Pages/user/KontakKami/KontakKami";
import TentangKami from "./Pages/user/TentangKami/TentangKami";
import Login from "./Pages/auth/Login/Login";
import Register from "./Pages/auth/Register/Register";
import "./styles.css";

function AppContent() {
  const location = useLocation();

  // Tentukan halaman yang tidak menampilkan Navbar dan Footer
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  useEffect(() => {
    // Update document title based on the current route
    const pageTitleMap = {
      "/": "Home - Urban Motion",
      "/tentang-kami": "Tentang Kami - Urban Motion",
      "/transportasi-umum": "Transportasi Umum - Urban Motion",
      "/sewa": "Sewa - Urban Motion",
      "/daftar-harga": "Daftar Harga - Urban Motion",
      "/kontak": "Kontak Kami - Urban Motion",
      "/login": "Login - Urban Motion",
      "/register": "Register - Urban Motion",
    };

    // Set the document title based on the current path
    document.title = pageTitleMap[location.pathname] || "Urban Motion";
  }, [location.pathname]); // Re-run this effect every time the path changes

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     window.location.href = "./src/Pages/Beranda/index.html"; // Redirect ke file index.html
  //   }
  // }, [location.pathname]);

  return (
    <div>
      {!hideHeaderFooter && <Navbar />}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/transportasi-umum" element={<div>Transportasi Umum</div>} />
          <Route path="/sewa" element={<div>Sewa </div>} />
          <Route path="/daftar-harga" element={<div>Daftar Harga </div>} />
          <Route path="/kontak" element={<KontakKami />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dummy" element={<div>Lorem Ipsum</div>} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
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
