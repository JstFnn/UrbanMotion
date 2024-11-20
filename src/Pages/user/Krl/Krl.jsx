import React from "react";
import "./Krl.css";

const Krl = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/images/img/bgheader.jpg" alt="background header" />
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
            <img src="/assets/images/img/fotokrl.png" alt="Gambar KRL" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* Card 1 */}
            <div className="swiper-slide">
              <div className="station-card">
                <div className="button-image">
                  <button style={{ border: "none", backgroundColor: "#ffffff" }}>
                    <img src="/assets/images/img/Krl/jakartakota/jkt1-3.png" alt="Stasiun Jakarta Kota" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide">
              <div className="station-card">
                <div className="button-image">
                  <button style={{ border: "none", backgroundColor: "#ffffff" }}>
                    <img src="/assets/images/img/Krl/jayakarta/jy1-2.png" alt="Stasiun Jayakarta" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide">
              <div className="station-card">
                <div className="button-image">
                  <button style={{ border: "none", backgroundColor: "#ffffff" }}>
                    <img src="/assets/images/img/Krl/mangga besar/m1-2.png" alt="Stasiun Mangga Besar" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide">
              <div className="station-card">
                <div className="button-image">
                  <button style={{ border: "none", backgroundColor: "#ffffff" }}>
                    <img src="/assets/images/img/Krl/sawah besar/s1-2.png" alt="Stasiun Sawah Besar" />
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
