import "./sewa.style.css";

const steps = ["Detail Sewa", "Pilih Metode Pembayaran", "Konfirmasi Pemesanan"];

export default function Sewa(props) {
  return (
    <div>
      <div className="container-sewa ">
        {/* price list */}
        <div className="section-wrapper">
          {/* steps */}
          <div className="step-container">
            {steps.map((step, index) => {
              return <PriceStep step={index + 1} title={step} />;
            })}
          </div>

          <div className="hor-line">
            <hr />
          </div>
        </div>

        <div className="detail-sewa-form  ">
          <form className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Form Pemesanan</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label for="namalengkap" className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="nama lengkap"
                  className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="namalengkap"
                />
              </div>

              <div className="col-span-1">
                <label for="pilih-kendaraan" className="block text-sm font-medium mb-2">
                  Pilih Kendaraan
                </label>
                <select
                  className="form-select w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="pilih-kendaraan">
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
                  <option value="11">Mercedes Benz S-className</option>
                  <option value="12">BMW 7 Series</option>
                  <option value="13">Honda Vario 150</option>
                  <option value="14">Yamaha NMAX 155</option>
                  <option value="15">Vespa GTS 300</option>
                  <option value="16">United E-Motor MX1200</option>
                </select>
              </div>

              <div className="col-span-1">
                <label for="alamat" className="block text-sm font-medium mb-2">
                  Alamat
                </label>
                <input
                  type="text"
                  placeholder="alamat"
                  className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="alamat"
                />
              </div>

              <div className="col-span-1">
                <label for="jumlah-hari" className="block text-sm font-medium mb-2">
                  Jumlah Hari
                </label>
                <select
                  className="form-select w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="jumlah-hari">
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

              <div className="col-span-1">
                <label for="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                />
              </div>

              <div className="col-span-1">
                <label for="pilih-driver" className="block text-sm font-medium mb-2">
                  Pilih Driver
                </label>
                <select
                  className="form-select w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="pilih-driver">
                  <option disabled selected>
                    pilih driver
                  </option>
                  <option value="1">Tanpa Driver</option>
                  <option value="2">Laki - Laki</option>
                  <option value="3">Perempuan</option>
                </select>
              </div>

              <div className="col-span-1">
                <label for="notelepon" className="block text-sm font-medium mb-2">
                  No Telepon
                </label>
                <input
                  type="text"
                  placeholder="no telepon"
                  className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="notelepon"
                />
              </div>

              <div className="col-span-1">
                <label for="tanggal" className="block text-sm font-medium mb-2">
                  Tanggal Sewa
                </label>
                <input
                  type="date"
                  className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="tanggal"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="container payment-method-wrapper flex flex-col items-center mb-4 ">
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
                      imgUrl={"/assets/images/img/mandiri.png"}
                      title={"Mandiri"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/bank bri.png"}
                      title={"BRI"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem imgUrl={"/assets/images/img/bni.png"} title={"BNI"} groupName="payment-method" />
                  </div>
                  <div className="col-6">
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/bank mega.png"}
                      title={"Bank Mega"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem imgUrl={"/assets/images/img/bca.png"} title={"BCA"} groupName="payment-method" />
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/bni syariah.png"}
                      title={"BNI Syarian"}
                      groupName="payment-method"
                    />
                  </div>
                </div>
              </div>

              <div className="payment-category ">
                <div className="payment-method-subtitle">E-Wallet</div>
                <div className="payment-method-list">
                  <div className="col-6">
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/gopay.png"}
                      title={"Gopay"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem imgUrl={"/assets/images/img/ovo.png"} title={"OVO"} groupName="payment-method" />
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/link aja.png"}
                      title={"Link Aja"}
                      groupName="payment-method"
                    />
                  </div>
                  <div className="col-6">
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/grabpay.png"}
                      title={"Grab Ppay"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/dana.png"}
                      title={"Dana"}
                      groupName="payment-method"
                    />
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/kredivo.png"}
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
                      imgUrl={"/assets/images/img/mastercard-icon.png"}
                      title={"Mastercard"}
                      groupName="payment-method"
                    />
                  </div>
                  <div className="col-6">
                    <PaymentMethodItem
                      imgUrl={"/assets/images/img/maestro-icon.png"}
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
                <p>
                  <strong>Budiman</strong>
                </p>
                <p className="detail-label">Alamat</p>
                <p>
                  <strong>Jakarta Pusat</strong>
                </p>
                <p className="detail-label">Email</p>
                <p>
                  <strong>budiman@gmail.com</strong>
                </p>
                <p className="detail-label">No Tlp</p>
                <p>
                  <strong>085785505467</strong>
                </p>
                <hr />
                <p className="detail-label">Nama Kendaraan</p>
                <p>
                  <strong>Toyota Alphard</strong>
                </p>
                <p className="detail-label">Jumlah Hari</p>
                <p>
                  <strong>1 Hari</strong>
                </p>
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
      <input type="radio" name={groupName} id="" />
    </div>
  );
}
