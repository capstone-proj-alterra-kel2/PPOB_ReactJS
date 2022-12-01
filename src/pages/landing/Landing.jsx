import Navbar from "../../components/landing/navbar/Navbar";
import "../../assets/styles/landing.css";
import Hero from "../../components/landing/hero/Hero";
import AboutUsLanding from "../../components/landing/aboutUs/AboutUs";
import Group1 from "../../assets/img/Group 1.png";
import Group40 from "../../assets/img/Group 40.png";
import Footer from "../../components/landing/footer/Footer";
import downloadps from "../../assets/img/Download Playstore.png";
import downloadaps from "../../assets/img/Download Appstore.png";

const LandingPage = () => {
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

        <div className="flex flex-col items-center mt-80">
          <div className="">
            <p style={{ fontSize: 24, textAlign: "center", color: "#8C8E93" }}>
              PRODUK UTAMA KAMI
            </p>
          </div>

          <div className="">
            <p style={{ fontSize: 48, textAlign: "center" }}>
              <b>
                Lorem Ipsum is simply dummy<br></br>the setting industry.
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
              src={Group1}
              alt="a.png"
              style={{
                width: "330px",
                height: "300px",
                top: "1500px",
                left: "140px",
              }}
            />
          </div>
          <div
            className="ml-[400px] mt-[150px]"
            style={{ textAlign: "justify" }}
          >
            <p className="text1" style={{ color: "#2A8010", fontSize: 24 }}>
              <b>#TOP UP PULSA</b>
            </p>
            <p className="text2" style={{ fontSize: 36 }}>
              <b>Lorem Ipsum is simply dummy the setting industry.</b>
            </p>
            <p className="text3" style={{ fontSize: 16 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* topup game */}
        <div className="flex justify-center items-center mx-[155px] mb-[300px]">
          <div
            className="ml-[30px] mr-[400px] mt-[150px]"
            style={{ textAlign: "justify" }}
          >
            <p className="text1" style={{ color: "#2A8010", fontSize: 24 }}>
              <b>#TOP UP GAME</b>
            </p>
            <p className="text2" style={{ fontSize: 36 }}>
              <b>Lorem Ipsum is simply dummy the setting industry.</b>
            </p>
            <p className="text3" style={{ fontSize: 16 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="">
            <img
              className="absolute"
              src={Group40}
              alt="a.png"
              style={{
                width: "330px",
                height: "300px",
                top: "1900px",
                left: "820px",
              }}
            />
          </div>
        </div>

        <div className="download flex flex-col justify-center items-center mx-[40px] w-[95%] h-[468px] top-[2300px] bg-lightblue mt-3 absolute">
          <div>
            <p className="font-bold text-5xl mx-[217] text-center text-white1">
              Download Aplikasi Kami Sekarang Juga dan Nikmati Produk Utama
              Kami.
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <img className="mt-[20px] w-[248px] mr-[8px]" src={downloadps} alt=""></img>
            <img className="mt-[20px] w-[248px]" src={downloadaps} alt=""></img>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
