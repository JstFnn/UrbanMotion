import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login pengguna
  const navigate = useNavigate();

  // Cek status login saat halaman pertama kali dimuat
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true); // Jika sudah login, set status login ke true
    } else {
      navigate("/login"); // Jika tidak login, arahkan ke halaman login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Menghapus status login
    localStorage.removeItem("role"); // Menghapus role
    setIsLoggedIn(false); // Memperbarui state di komponen ini
    navigate("/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <div className="my-account">
      <h1>My Account</h1>
      {/* Konten profil pengguna di sini */}

      {/* Tombol logout */}
      {isLoggedIn && (
        <div className="logout-button">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
