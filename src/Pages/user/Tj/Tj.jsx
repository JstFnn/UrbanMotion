import React from "react";
import "./Tj.css";

const Tj = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/image/bgheader.jpg" alt="background header" />
        <div className="hero-overlay">
          <h1>Informasi seputar transportasi di Jakarta</h1>
          <p>
            Kami memberikan seputar informasi transportasi umum yang ada di DKI
            Jakarta, meliputi alamat serta foto tempat untuk memandu Anda.
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
            Titik pemberhentian bus TransJakarta yang tersebar di berbagai koridor, memungkinkan penumpang naik-turun dengan nyaman di jalur khusus. Setiap halte dilengkapi fasilitas seperti tempat duduk, sistem tiket elektronik, dan pintu otomatis untuk akses langsung ke bus demi memastikan perjalanan cepat dan aman di jalur bebas hambatan.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesTj">
            <img src="/image/fototj.png" alt="Gambar Transjakarta" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-tj">
        <div className="swiper-container-tj">
          <div className="swiper-wrapper-tj">
            {/* Card 1 */}
            <div className="swiper-slide-tj">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image tj/museum jakarta/1.png"
                      alt="Halte TJ Museum Jakarta"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-tj">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image tj/kota/1.png"
                      alt="Halte TJ Kota"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-tj">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image tj/glodok/1.png"
                      alt="Halte TJ Glodok"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-tj">
              <div className="station-card-tj">
                <div className="button-image-tj">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image tj/taman sari/1.png"
                      alt="Halte TJ Taman Sari"
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

export default Tj;