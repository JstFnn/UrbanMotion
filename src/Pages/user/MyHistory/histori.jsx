import React from "react";
import { useNavigate } from "react-router-dom"; // If you're using react-router for navigation
import "./histori.css"; // Assuming you have the correct CSS file

const Myhistory = () => {
  const navigate = useNavigate(); // React Router for navigation

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    localStorage.removeItem("role"); // Remove user role
    navigate("/login"); // Redirect user to login page after logout
  };

  // Navigate to the history page
  const handleHistori = () => {
    navigate("/my-history"); // Redirect to history page
  };

  return (
    <section className="myaccount-profil ml-60 py-8 items-center justify-center min-h-screen ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl">Profil Akun</h1>
      </div>

      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Profil Section */}
          <div className="lg:w-1/3">
            <div className="bg-primary-10 shadow-md rounded-lg p-6 text-center">
              <img
                src="./public/assets/images/windah.jpg"
                alt="Profile Picture"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <a
                href="/my-account"
                className="bg-primary-20 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition inline-block text-center">
                Profil Saya
              </a>
              <h4 className="text-lg text-secondary-30 font-semibold">Budiman</h4>
              <p className="text-secondary-30 mb-4">budiman@gmail.com</p>

              <div className="space-x-4">
                <button
                  onClick={handleHistori}
                  className="bg-primary-20 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
                  Histori
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* History Table Section */}
          <div className="lg:w-2/3">
            <div className="myhistory-vehicle-table-container overflow-x-auto">
              <table className="myhistory-vehicle-table w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2">No</th>
                    <th className="border-b px-4 py-2">Nama Kendaraan</th>
                    <th className="border-b px-4 py-2">Tanggal Sewa</th>
                    <th className="border-b px-4 py-2">Tanggal Pengembalian</th>
                    <th className="border-b px-4 py-2">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-4 py-2">#1</td>
                    <td className="border-b px-4 py-2">Toyota Fortuner 2020</td>
                    <td className="border-b px-4 py-2">12/09/2024</td>
                    <td className="border-b px-4 py-2">13/09/2024</td>
                    <td className="border-b px-4 py-2">Rp1,5jt</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">#2</td>
                    <td className="border-b px-4 py-2">Innova Reborn</td>
                    <td className="border-b px-4 py-2">24/10/2024</td>
                    <td className="border-b px-4 py-2">25/10/2024</td>
                    <td className="border-b px-4 py-2">Rp800k</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">#3</td>
                    <td className="border-b px-4 py-2">Yamaha Nmax</td>
                    <td className="border-b px-4 py-2">1/11/2024</td>
                    <td className="border-b px-4 py-2">2/11/2024</td>
                    <td className="border-b px-4 py-2">Rp100k</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myhistory;
