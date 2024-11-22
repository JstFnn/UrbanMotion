import React, { useState } from "react";
import "./Tj.css";
import RouteOverlay from "../../../Components/RouteOverlay/RouteOverlay";

const Tj = () => {
   // State untuk mengontrol overlay
   const [isOverlayOpen, setIsOverlayOpen] = useState(false);

   // Fungsi untuk membuka dan menutup overlay
   const openOverlay = () => setIsOverlayOpen(true);
   const closeOverlay = () => setIsOverlayOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/images/bgheader.jpg" alt="background header" />
        <div className="hero-overlay">
          <h1>Informasi seputar transportasi di Jakarta</h1>
          <p>
            Kami memberikan seputar informasi transportasi umum yang ada di DKI Jakarta, meliputi alamat serta foto
            tempat untuk memandu Anda.
          </p>
        </div>
      </section>

      {/* Section Transjakarta */}
      <section className="TJ">
        <div className="containerTj">
          <div className="contentTj">
            <h1>Halte Busway</h1>
            <h1>Transjakarta</h1>
            <p>
              Titik pemberhentian bus TransJakarta yang tersebar di berbagai koridor, memungkinkan penumpang naik-turun
              dengan nyaman di jalur khusus. Setiap halte dilengkapi fasilitas seperti tempat duduk, sistem tiket
              elektronik, dan pintu otomatis untuk akses langsung ke bus demi memastikan perjalanan cepat dan aman di
              jalur bebas hambatan.
            </p>
            <button className="button" onClick={openOverlay}>
              Lihat Rute
            </button>
          </div>
          <div className="imagesTj">
            <img src="/assets/images/fototj.png" alt="Gambar Transjakarta" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-tj py-8">
        <div className="swiper-container-tj">
          <div className="swiper-wrapper-tj flex space-x-8">
            {/* Card 1 */}
            <div className="swiper-slide-tj flex-shrink-0">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image tj/museum jakarta/1.png"
                      alt="Halte TJ Museum Jakarta"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-tj flex-shrink-0">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image tj/kota/1.png"
                      alt="Halte TJ Kota"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-tj flex-shrink-0">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image tj/glodok/1.png"
                      alt="Halte TJ Glodok"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-tj flex-shrink-0">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image tj/taman sari/1.png"
                      alt="Halte TJ Taman Sari"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* RouteOverlay Component */}
      <RouteOverlay
        isOpen={isOverlayOpen}
        toggleOverlay={closeOverlay}
        imagePath="/assets/images/Peta Rute/Peta Rute TJ.jpg" // Gambar rute untuk tombol "Lihat Rute"
      />
    </>
  );
};

export default Tj;
