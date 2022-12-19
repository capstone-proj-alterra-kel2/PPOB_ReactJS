import Navbar from "../../components/landing/navbar/Navbar";
import "../../assets/styles/landing.css";
import Hero from "../../components/landing/hero/Hero";
import AboutUsLanding from "../../components/landing/aboutUs/AboutUs";
import Group1 from "../../assets/img/Group 1.png";
import Group40 from "../../assets/img/Group 40.png";
import Footer from "../../components/landing/footer/Footer";
import downloadps from "../../assets/img/Download Playstore.png";
import downloadaps from "../../assets/img/Download Appstore.png";
import BPJS from "../../assets/img/products/BPJS.png";
import Tagihanlistrik from "../../assets/img/products/Tagihan_listrik.png";
import Tokenlistrik from "../../assets/img/products/Token_listrik.png";
import PDAM from "../../assets/img/products/PDAM.png";
import fitur1 from "../../assets/img/fitur1.png";
import fitur2 from "../../assets/img/fitur2.png";
import fitur3 from "../../assets/img/fitur3.png";
import { useEffect } from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';

const LandingPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <div
        className="min-h-screen w-full
      "
      >
        <div className="circle w-[421px] h-[421px] absolute rounded-full"></div>
        <div className="rectangle" />
        <Navbar />
        <div className="mx-auto mt-[50px] mb-[58px] content-navbar ">
          <h1 className="text-center ">
            Transaksi Lebih Aman Dan Nyaman Bersama MYCUAN
          </h1>
        </div>
        <div className="circle3 w-[421px] h-[421px] absolute rounded-full right-0 top-[455px] z-[-10]"></div>
        <Hero />
        <AboutUsLanding />

        <div className="flex flex-col items-center mt-80" id="produk">
          <div className="">
            <p style={{ fontSize: 24, textAlign: "center", color: "#8C8E93" }}>
              PRODUK TELEKOMUNIKASI
            </p>
          </div>

          <div className="">
            <p style={{ fontSize: 48, textAlign: "center" }}>
              <b>
                Beberapa produk untuk membantu<br></br>layanan telekomunikasi
                anda
              </b>
            </p>
          </div>

          <div className="w-[70px] h-[8px] bg-blue mt-3 rounded"></div>
        </div>

        {/* topup pulsa */}
        <div className="flex mx-[155px] justify-center items-center">
          <div className="">
            <img
              className="absolute"
              src={fitur1}
              alt="a.png"
              style={{
                width: "330px",
                height: "330px",
                top: "1450px",
                left: "140px",
              }}
            />
          </div>
          <div
            className="ml-[400px] mt-[150px]"
            style={{ textAlign: "justify" }}
          >
            <p className="text1" style={{ color: "#2A8010", fontSize: 24 }}>
              <b>#1</b>
            </p>
            <p className="text2" style={{ fontSize: 36 }}>
              <b>Makin mudah Isi pulsa ke berbagai macam operator</b>
            </p>
            <p className="text3" style={{ fontSize: 16 }}>
              Melalui fitur ini, pembeli dapat membeli pulsa prabayar dari
              berbagai operator dan memilih nominal pulsa sesuai kebutuhan
            </p>
          </div>
        </div>

        {/* topup game */}
        <div className="flex justify-center items-center mx-[155px] mb-[200px]">
          <div
            className="ml-[30px] mr-[400px] mt-[150px]"
            style={{ textAlign: "justify" }}
          >
            <p className="text1" style={{ color: "#2A8010", fontSize: 24 }}>
              <b>#2</b>
            </p>
            <p className="text2" style={{ fontSize: 36 }}>
              <b>Berbagai macam paket data yang memiliki banyak bonus</b>
            </p>
            <p className="text3" style={{ fontSize: 16 }}>
              Melalui fitur ini, pembeli dapat memilih paket data yang tersedia
              sesuai kebutuhan
            </p>
          </div>
          <div className="">
            <img
              className="absolute"
              src={fitur2}
              alt="a.png"
              style={{
                width: "350px",
                height: "350px",
                top: "1900px",
                left: "820px",
              }}
            />
          </div>
        </div>

        {/* indihome */}
        <div className="flex mx-[155px] justify-center items-center mb-[100px]">
          <div className="">
            <img
              className=""
              src={fitur3}
              alt="a.png"
              style={{
                width: "900px",
                height: "450px",
                top: "1500px",
                left: "140px",
              }}
            />
          </div>
          <div className="ml-[100px] mt-[0px]" style={{ textAlign: "justify" }}>
            <p className="text1" style={{ color: "#2A8010", fontSize: 24 }}>
              <b>#3</b>
            </p>
            <p className="text2" style={{ fontSize: 36 }}>
              <b>
                Bayar tagihan internet indihome
                <br />
                kapanpun dan dimanapun
              </b>
            </p>
            <p className="text3" style={{ fontSize: 16 }}>
              Melalui fitur ini, pengguna dapat melakukan pengecekan tagihan dan
              pembayaran Telkom/IndiHome secara online
            </p>
          </div>
        </div>

        {/* produk tagihan */}
        <div className="flex flex-col items-center bg-grey3 h-[800px]">
          <div className="mt-[80px]">
            <p style={{ fontSize: 24, textAlign: "center", color: "#8C8E93" }}>
              PRODUK TAGIHAN
            </p>
          </div>

          <div className="">
            <p style={{ fontSize: 48, textAlign: "center" }}>
              <b>
                Beberapa produk untuk membantu<br></br>berbagai macam tagihan
                anda
              </b>
            </p>
          </div>

          <div className="w-[70px] h-[8px] bg-blue mt-3 rounded"></div>

          <div className="flex flex-row gap-4 mt-20 mb-10">
            {/* bpjs */}
            <div class="w-[285px] h-[208px] mt-[20px] mb-[20px] rounded-md dropshadow-sm bg-white">
              <img
                className=""
                src={BPJS}
                alt="a.png"
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
              <h1 style={{ marginLeft: "20px", marginTop: "12px" }}>
                <b>BPJS</b>
              </h1>
              <p style={{ marginLeft: "20px" }}>
                Pembayaran BPJS secara online, berbagai metode pembayaran
              </p>
            </div>

            {/* listrik */}
            <div class="rounded-md w-[285px] h-[208px] mt-[20px] mb-[20px] dropshadow=sm bg-white">
              <img
                className=""
                src={Tagihanlistrik}
                alt="a.png"
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
              <h1 style={{ marginLeft: "20px", marginTop: "12px" }}>
                <b>Tagihan Listrik</b>
              </h1>
              <p style={{ marginLeft: "20px" }}>
                Pembayaran tagihan listrik secara online, dengan berbagai metode
                pembayaran
              </p>
            </div>

            {/* token listrik */}
            <div class="rounded-md w-[285px] h-[208px] mt-[20px] mb-[20px] dropshadow=sm bg-white">
              <img
                className=""
                src={Tokenlistrik}
                alt="a.png"
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
              <h1 style={{ marginLeft: "20px", marginTop: "12px" }}>
                <b>Token Listrik</b>
              </h1>
              <p style={{ marginLeft: "20px" }}>
                Pembayaran token listrik secara online, dengan berbagai metode
                pembayaran
              </p>
            </div>

            {/* pdam */}
            <div class="rounded-md w-[285px] h-[208px] mt-[20px] mb-[20px] dropshadow=sm bg-white">
              <img
                className=""
                src={PDAM}
                alt="a.png"
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
              <h1 style={{ marginLeft: "20px", marginTop: "12px" }}>
                <b>PDAM</b>
              </h1>
              <p style={{ marginLeft: "20px" }}>
                Pembayaran PDAM secara online, berbagai metode pembayaran
              </p>
            </div>
          </div>
        </div>

        {/* cta */}
        <div
          id="download"
          className="download flex flex-col justify-center items-center mx-[40px] w-[95%] h-[468px] top-[3400px] mt-[50px] absolute"
        >
          <div>
            <p className="font-bold text-5xl mx-[217] text-center text-white1">
              Download Aplikasi Kami Sekarang Juga dan Nikmati Produk Utama
              Kami.
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <img
              className="mt-[20px] w-[248px] mr-[8px]"
              src={downloadps}
              alt=""
            ></img>
            <img className="mt-[20px] w-[248px]" src={downloadaps} alt=""></img>
          </div>
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            padding: "1rem 1rem",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#0D40C6",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <AiOutlineArrowUp />
        </button>

        <Footer id="kontak" />
      </div>
    </>
  );
};

export default LandingPage;
