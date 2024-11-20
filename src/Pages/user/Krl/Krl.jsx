import React from "react";
import "./Krl.css";

const Krl = () => {
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

      {/* Section KRL */}
      <section className="KRL">
        <div className="containerKrl">
          <div className="contentKrl">
            <h1>Stasiun KRL</h1>
            <h1>Commuter Line</h1>
            <p>
              Tempat pemberhentian bagi kereta listrik, dilengkapi dengan fasilitas akses masuk, area tunggu, dan
              layanan tiket untuk mendukung mobilitas penumpang secara efisien di kawasan perkotaan padat.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesKrl">
            <img src="/assets/images/fotokrl.png" alt="Gambar KRL" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider py-8">
        <div className="swiper-container">
          <div className="swiper-wrapper flex space-x-8">
            {/* Card 1 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="station-card">
                <div className="button-image">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Krl/jakartakota/jkt1-3.png"
                      alt="Stasiun Jakarta Kota"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="station-card">
                <div className="button-image">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Krl/jayakarta/jy1-2.png"
                      alt="Stasiun Jayakarta"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="station-card">
                <div className="button-image">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Krl/mangga besar/m1-2.png"
                      alt="Stasiun Mangga Besar"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="station-card">
                <div className="button-image">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Krl/sawah besar/s1-2.png"
                      alt="Stasiun Sawah Besar"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Krl;
