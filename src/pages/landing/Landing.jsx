import Navbar from "../../components/landing/navbar/Navbar";
import "../../assets/styles/landing.css";
import Hero from "../../components/landing/hero/Hero";
import AboutUsLanding from "../../components/landing/aboutUs/AboutUs";
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
import { AiOutlineArrowUp } from "react-icons/ai";

const LandingPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <main className="min-h-screen w-full ">
      <section id="banner">
        <Navbar />
        <Hero />
      </section>
      <section>
        <AboutUsLanding />
      </section>
      <section className="py-[120px] px-0 lg:px-[120px]  w-full flex flex-col  items-center gap-16">
        {/* Title Content */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xl font-bold text-grayScale-60">
            PRODUK TELEKOMUNIKASI
          </h3>
          <h1 className="text-4xl font-bold text-center text-grayScale-90">
            Beberapa produk untuk membantu <br /> layanan telekomunikasi anda
          </h1>
          <hr className="bg-primary-50 w-[70px] h-2 rounded-full" />
        </div>
        {/* Content */}
        <section className="mx-[0px]  lg:mx-[120px] w-full flex flex-col gap-10 lg:gap-16 ">
          {/* 1 */}
          <section className="flex flex-col lg:flex-row justify-between items-center gap-10 h-auto p-5 lg:p-0 lg:h-[545px]   ">
            <img className="w-full lg:w-[852px]" src={fitur1} alt="" />

            <div className="flex flex-col justify-start gap-7">
              <div className="flex flex-col gap-3 ">
                <h3 className="text-xl font-bold text-succes-70">#1</h3>
                <h1 className="text-4xl font-bold  text-grayScale-90">
                  Makin mudah Isi pulsa ke berbagai macam operator
                </h1>
                <hr className="bg-primary-50 w-[70px] h-2 rounded-full" />
              </div>
              <p className="text-base">
                Melalui fitur ini, pembeli dapat membeli pulsa prabayar dari
                berbagai operator dan memilih nominal pulsa sesuai kebutuhan
              </p>
            </div>
          </section>
          {/* 2 */}
          <section className="flex flex-col lg:flex-row justify-between items-center gap-10 h-auto p-5 lg:p-0 lg:h-[545px]  ">
            <img className="w-full lg:w-[852px] order-1 lg:order-2" src={fitur2} alt="" />

            <div className="flex flex-col justify-start gap-7 order-2 lg:order-1">
              <div className="flex flex-col gap-3 ">
                <h3 className="text-xl font-bold text-succes-70">#2</h3>
                <h1 className="text-4xl font-bold  text-grayScale-90">
                  Berbagai macam paket data dari berbagai provider
                </h1>
                <hr className="bg-primary-50 w-[70px] h-2 rounded-full" />
              </div>
              <p className="text-base">
                Melalui fitur ini, pembeli dapat memilih paket data sesuai
                kebutuhan dari berbagai provider
              </p>
            </div>
          </section>
          {/* 3 */}
          <section className="flex flex-col lg:flex-row justify-between items-center gap-10 h-auto p-5 lg:p-0 lg:h-[545px]    ">
            <img className="w-full lg:w-[852px]" src={fitur3} alt="" />

            <div className="flex flex-col justify-start gap-7">
              <div className="flex flex-col gap-3 ">
                <h3 className="text-xl font-bold text-succes-70">#3</h3>
                <h1 className="text-4xl font-bold  text-grayScale-90">
                  Bayar tagihan internet indihome kapanpun dan dimanapun
                </h1>
                <hr className="bg-primary-50 w-[70px] h-2 rounded-full" />
              </div>
              <p className="text-base">
                Melalui fitur ini, pengguna dapat melakukan pengecekan tagihan
                dan pembayaran Telkom/IndiHome secara online
              </p>
            </div>
          </section>
        </section>
      </section>
      {/* 4 */}
      <section className="flex flex-col  w-full items-center bg-grayScale-20 pt-[120px] pb-[304px]">
        {/* Top */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xl font-bold text-grayScale-60">
            PRODUK TELEKOMUNIKASI
          </h3>
          <h1 className="text-5xl font-bold text-center text-grayScale-90">
            Beberapa produk untuk membantu <br /> layanan telekomunikasi anda
          </h1>
          <hr className="bg-primary-50 w-[70px] h-2 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap pt-[66px] items-center justify-center md:justify-around  gap-5   w-full">
          {/* bpjs */}
          <div class="rounded-md w-[285px] h-[208px] py-[18px] px-4 bg-grayScale-10">
            <img className="w-12 h-12 mb-3" src={BPJS} alt="a.png" />
            <h1>BPJS</h1>
            <p>Pembayaran BPJS secara online, berbagai metode pembayaran</p>
          </div>
          {/* listrik */}
          <div class="rounded-md w-[285px] h-[208px] py-[18px] px-4 bg-grayScale-10">
            <img className="w-12 h-12 mb-3" src={Tagihanlistrik} alt="a.png" />
            <h1>Tagihan Listrik</h1>
            <p>
              Pembayaran tagihan listrik secara online, dengan berbagai metode
              pembayaran
            </p>
          </div>

          {/* token listrik */}
          <div class="rounded-md w-[285px] h-[208px] py-[18px] px-4 bg-grayScale-10">
            <img className="w-12 h-12 mb-3" src={Tokenlistrik} alt="a.png" />
            <h1>Token Listrik</h1>
            <p>
              Pembayaran token listrik secara online, dengan berbagai metode
              pembayaran
            </p>
          </div>

          {/* pdam */}
          <div class="rounded-md w-[285px] h-[208px] py-[18px] px-4 bg-grayScale-10">
            <img className="w-12 h-12 mb-3" src={PDAM} alt="a.png" />
            <h1>PDAM</h1>
            <p>Pembayaran PDAM secara online, berbagai metode pembayaran</p>
          </div>
        </div>
      </section> 
    </main>
    <section className="relative w-full h-[600px] p-0 bg-primary-30 bg-primary left-0">
      <section id="download" className="absolute download  flex flex-col gap-10 justify-center items-center left-1/2 -top-[200px] px-5  w-[95%] mx-auto h-[468px] ">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl  text-center text-grayScale-10">
              Download Aplikasi Kami Sekarang Juga <br/> dan Nikmati Produk Utama Kami.
            </h1>
          <div className=" flex flex-col md:flex-row gap-5 justify-center items-center">
            <img className="w-[248px] " src={downloadps} alt=""/>
            <img className="w-[248px]" src={downloadaps} alt=""/>
          </div>
      </section>
      <Footer/>
    </section>
    <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="fixed font-bold p-5 text-xl bottom-10 right-10 text-grayScale-10 text-center bg-primary-50 rounded-xl"
     
      >
        <AiOutlineArrowUp />
      </button>
    </>

  );
};

export default LandingPage;
