import "./sewa.style.css";

const steps = [
  "Detail Sewa",
  "Pilih Metode Pembayaran",
  "Konfirmasi Pemesanan",
];

export default function Sewa(props) {
  return (
    <div className="container-sewa">
      {/* price list */}
      <div className="section-wrapper">
        {/* steps */}
        <div class="step-container">
          {steps.map((step, index) => {
            return <PriceStep step={index + 1} title={step} />;
          })}
        </div>

        <div class="hor-line">
          <hr />
        </div>

        <div class="detail-sewa">
          <form class="row g-3">
            <h2>Form Pemesanan</h2>
            <div class="col-md-6">
              <label for="namalengkap" class="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="nama lengkap"
                class="form-control"
                id="namalengkap"
              />
            </div>
            <div class="col-md-6">
              <label for="pilih-kendaraan" class="form-label">
                Pilih Kendaraan
              </label>
              <select
                class="form-select"
                id="pilih-kendaraan"
                aria-label="pilih-kendaraan"
              >
                <option disabled selected>
                  pilih kendaraan
                </option>
                <option value="1">Toyota Avanza</option>
                <option value="2">Mitsubishi Xpander</option>
                <option value="3">Suzuki Ertiga</option>
                <option value="4">Daihatsu Xenia</option>
                <option value="5">Honda CR-V</option>
                <option value="6">Suzuki Ignis</option>
                <option value="7">Daihatsu Sirion</option>
                <option value="8">Honda Brio</option>
                <option value="9">Lexus LM</option>
                <option value="10">Toyota Alphard</option>
                <option value="11">Mercedes Benz S-Class</option>
                <option value="12">BMW 7 Series</option>
                <option value="13">Honda Vario 150</option>
                <option value="14">Yamaha NMAX 155</option>
                <option value="15">Vespa GTS 300</option>
                <option value="16">United E-Motor MX1200</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="alamat" class="form-label">
                Alamat
              </label>
              <input
                type="text"
                placeholder="alamat"
                class="form-control"
                id="alamat"
              />
            </div>
            <div class="col-md-6">
              <label for="jumlah-hari" class="form-label">
                umlah Hari
              </label>
              <select
                class="form-select"
                id="jumlah-hari"
                aria-label="jumlah-hari"
              >
                <option disabled selected>
                  jumlah hari
                </option>
                <option value="1">1 Hari</option>
                <option value="2">2 Hari</option>
                <option value="3">3 Hari</option>
                <option value="4">4 Hari</option>
                <option value="5">5 Hari</option>
                <option value="6">6 Hari</option>
                <option value="7">7 Hari</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="col-md-6">
              <label for="pilih-driver" class="form-label">
                Pilih Driver
              </label>
              <select
                class="form-select"
                id="pilih-driver"
                aria-label="pilih-driver"
              >
                <option disabled selected>
                  pilih driver
                </option>
                <option value="1">Tanpa Driver</option>
                <option value="2">Laki - Laki</option>
                <option value="3">Perempuan</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="notelepon" class="form-label">
                No Telepon
              </label>
              <input
                type="text"
                placeholder="no telepon"
                class="form-control"
                id="notelepon"
              />
            </div>
            <div class="col-md-6">
              <label for="tanggal" class="form-label">
                Tanggal Sewa
              </label>
              <input type="date" class="form-control" id="tanggal" />
            </div>
          </form>
        </div>
      </div>

      <div className="container payment-method-wrapper">
        <div className="d-flex flex-row gap-4">
          <div className="section-wrapper col-8">
            <h2>Pilih Metode Pembayaran</h2>
            <div className="payment-category">
              <div className="payment-method-subtitle">QRIS</div>
              <div className="payment-method-list">
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={
                      "https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png"
                    }
                    title={"QRIS"}
                    groupName="payment-method"
                  />
                </div>
                
              </div>
            </div>
            <div className="payment-category">
              <div className="payment-method-subtitle">Transfer Bank</div>
              <div className="payment-method-list">
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/mandiri.png"}
                    title={"Mandiri"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/bank bri.png"}
                    title={"BRI"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/bni.png"}
                    title={"BNI"}
                    groupName="payment-method"
                  />
                
                </div>
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/bank mega.png"}
                    title={"Bank Mega"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/bca.png"}
                    title={"BCA"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/bni syariah.png"}
                    title={"BNI Syarian"}
                    groupName="payment-method"
                  />
                  
                </div>
              </div>
            </div>

            <div className="payment-category">
              <div className="payment-method-subtitle">E-Wallet</div>
              <div className="payment-method-list">
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/gopay.png"}
                    title={"Gopay"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/ovo.png"}
                    title={"OVO"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/link aja.png"}
                    title={"Link Aja"}
                    groupName="payment-method"
                  />
                
                </div>
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/grabpay.png"}
                    title={"Grab Ppay"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/dana.png"}
                    title={"Dana"}
                    groupName="payment-method"
                  />
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/kredivo.png"}
                    title={"Kredivo"}
                    groupName="payment-method"
                  />
                  
                </div>
              </div>
            </div>

            <div className="payment-category">
              <div className="payment-method-subtitle">Credit Card</div>
              <div className="payment-method-list">
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/mastercard-icon.png"}
                    title={"Mastercard"}
                    groupName="payment-method"
                  />
                
                </div>
                <div className="col-6">
                  <PaymentMethodItem
                    imgUrl={"image/img-sewa/maestro-icon.png"}
                    title={"Maestro"}
                    groupName="payment-method"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="section-wrapper col-4">
          <div className="details">
              <h2>Detail Sewa</h2>
              <p className="detail-label">Nama Lengkap</p>
              <p><strong>Budiman</strong></p>
              <p className="detail-label">Alamat</p>
              <p><strong>Jakarta Pusat</strong></p>
              <p className="detail-label">Email</p>
              <p><strong>budiman@gmail.com</strong></p>
              <p className="detail-label">No Tlp</p>
              <p><strong>085785505467</strong></p>
              <hr />
              <p className="detail-label">Nama Kendaraan</p>
              <p><strong>Toyota Alphard</strong></p>
              <p className="detail-label">Jumlah Hari</p>
              <p><strong>1 Hari</strong></p>
              <p className="price-line">
                Harga / hari
                <strong className="price">Rp 1.000.000</strong>
              </p>
              <p className="detail-label">Driver</p>
              <p className="price-line">
                <strong>Perempuan</strong>
                <hr />
                <strong className="price">Rp 200.000</strong>
              </p>
              <hr />
              <p className="total">
                Total
                <strong className="price">Rp 1.200.000</strong>
              </p>
              <div className="confirm-button">
                <button>Konfirmasi Pemesanan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceStep({ step, title }) {
  return (
    <>
      <div class="step">
        <div class="circle">{step}</div>
        <div class="step-text">{title}</div>
      </div>
      {step < steps.length && <div class="separator">—</div>}
    </>
  );
}

function PaymentMethodItem({ imgUrl, title, groupName }) {
  return (
    <div className="payment-method-item">
      <img src={imgUrl} className="payment-method-item-logo" />
      <h5 className="payment-method-item-title">{title}</h5>
      <input 
        type="radio"  
        name={groupName} 
        id="" />
    </div>
  );
}

