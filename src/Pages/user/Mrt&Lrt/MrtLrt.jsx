import React from "react";
import "./MrtLrt.css";

const MrtLrt = () => {
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

      {/* Section Mrt */}
      <section className="MRT">
        <div className="containerMrt">
          <div className="contentMrt">
            <h1>Stasiun Mrt</h1>
            <h1>Commuter Line</h1>
            <p>
              Tempat pemberhentian khusus untuk layanan kereta Mass Rapid Transit (MRT) yang menghubungkan wilayah di
              Jakarta melalui jalur cepat dan efisien. tempat pemberhentian khusus untuk layanan kereta Mass Rapid
              Transit (MRT) yang menghubungkan wilayah di Jakarta melalui jalur cepat dan efisien.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesMrt">
            <img src="/assets/images/fotomrt.png" alt="Gambar MRT" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-mrt py-8">
        <div className="swiper-container-mrt">
          <div className="swiper-wrapper-mrt flex space-x-8">
            {/* Card 1 */}
            <div className="swiper-slide-mrt flex-shrink-0">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Mrt/lebak bulus grab/1-1.png"
                      alt="Stasiun MRT Lebak Bulus Grab"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-mrt flex-shrink-0">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Mrt/fatmawati/1-1.png"
                      alt="Stasiun MRT Fatamawati Indomaret"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-mrt flex-shrink-0">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Mrt/cipete raya/1-1.png"
                      alt="Stasiun MRT Cipete Raya"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-mrt flex-shrink-0">
              <div className="station-card-mrt">
                <div className="button-image-mrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image Mrt/haji nawi/1-1.png"
                      alt="Stasiun MRT Haji Nawi"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
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
              Tempat pemberhentian kereta Light Rail Transit (LRT) yang melayani rute singkat dengan jalur layang,
              umumnya di Jakarta dan sekitarnya. Setiap stasiun LRT dilengkapi fasilitas modern seperti area tunggu
              tertutup, akses lift, dan gerbang tiket otomatis, memberikan kenyamanan bagi penumpang di kawasan
              perkotaan.
            </p>
            <a href="#" className="button">
              Lihat Rute
            </a>
          </div>
          <div className="imagesLrt">
            <img src="/assets/images/fotolrt.png" alt="Gambar LRT" />
          </div>
        </div>
      </section>

      {/* Section Slider */}
      <section className="station-slider-lrt py-8">
        <div className="swiper-container-lrt">
          <div className="swiper-wrapper-lrt flex space-x-8">
            {/* Card 1 */}
            <div className="swiper-slide-lrt flex-shrink-0">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image lrt/dukuh atas/1-1.png"
                      alt="Stasiun LRT Dukuh Atas"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="swiper-slide-lrt flex-shrink-0">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image lrt/setia budi/1-1.png"
                      alt="Stasiun LRT Setia Budi"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="swiper-slide-lrt flex-shrink-0">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image lrt/rasuna said/1-1.png"
                      alt="Stasiun LRT Rasuna Said"
                      className="w-120 h-120 object-cover rounded-lg shadow-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="swiper-slide-lrt flex-shrink-0">
              <div className="station-card-lrt">
                <div className="button-image-lrt">
                  <button className="border-none bg-white">
                    <img
                      src="/assets/images/Image lrt/kuningan/1-1.png"
                      alt="Stasiun LRT Kuningan"
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

export default MrtLrt;
