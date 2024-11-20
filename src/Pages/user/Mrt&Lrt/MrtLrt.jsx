import React from "react";
import "./MrtLrt.css";

const MrtLrt = () => {
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

      {/* Section Mrt */}
      <section className="MRT">
        <div className="containerMrt">
          <div className="contentMrt">
            <h1>Stasiun Mrt</h1>
            <h1>Commuter Line</h1>
            <p>
            Tempat pemberhentian khusus untuk layanan kereta Mass Rapid Transit (MRT) yang menghubungkan wilayah di Jakarta melalui jalur cepat dan efisien. tempat pemberhentian khusus untuk layanan kereta Mass Rapid Transit (MRT) yang menghubungkan wilayah di Jakarta melalui jalur cepat dan efisien.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesMrt">
            <img src="/image/fotomrt.png" alt="Gambar MRT" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-mrt">
        <div className="swiper-container-mrt">
          <div className="swiper-wrapper-mrt">
            {/* Card 1 */}
            <div className="swiper-slide-mrt">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image Mrt/lebak bulus grab/1-1.png"
                      alt="Stasiun MRT Lebak Bulus Grab"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-mrt">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image Mrt/fatmawati/1-1.png"
                      alt="Stasiun MRT Fatamawati Indomaret"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-mrt">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image Mrt/cipete raya/1-1.png"
                      alt="Stasiun MRT Cipete Raya"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-mrt">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image Mrt/haji nawi/1-1.png"
                      alt="Stasiun MRT Haji Nawi"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Section Lrt */}
            <section className="LRT">
        <div className="containerLrt">
          <div className="contentLrt">
            <h1>Stasiun Lrt</h1>
            <h1>Commuter Line</h1>
            <p>
            Tempat pemberhentian kereta Light Rail Transit (LRT) yang melayani rute singkat dengan jalur layang, umumnya di Jakarta dan sekitarnya. Setiap stasiun LRT dilengkapi fasilitas modern seperti area tunggu tertutup, akses lift, dan gerbang tiket otomatis, memberikan kenyamanan bagi penumpang di kawasan perkotaan.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesLrt">
            <img src="/image/fotolrt.png" alt="Gambar LRT" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-lrt">
        <div className="swiper-container-lrt">
          <div className="swiper-wrapper-lrt">
            {/* Card 1 */}
            <div className="swiper-slide-lrt">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image lrt/dukuh atas/1-1.png"
                      alt="Stasiun LRT Dukuh Atas"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-lrt">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image lrt/setia budi/1-1.png"
                      alt="Stasiun LRT Setia Budi"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-lrt">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image lrt/rasuna said/1-1.png"
                      alt="Stasiun LRT Rasuna Said"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-lrt">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button
                    style={{ border: "none", backgroundColor: "#ffffff" }}
                  >
                    <img
                      src="/image/Image lrt/kuningan/1-1.png"
                      alt="Stasiun LRT Kuningan"
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

export default MrtLrt;