import Navbar from "../../components/navbar/Navbar";
import "../../assets/styles/landing.css";
import Hero from "../../components/hero/Hero";
import AboutUsLanding from "../../components/aboutUs/AboutUs";
const LandingPage = () => {
  return (
    <>
      <div
        className="min-h-screen 
      "
      >
        <div className="circle w-[421px] h-[421px] absolute rounded-full"></div>
        <div className="rectangle" />
        <Navbar />
        <div className="mr-auto ml-auto mb-7 content-navbar ">
          <h1 className="text-center ">
            Transaksi Lebih Aman Dan Nyaman Bersama MYCUAN
          </h1>
        </div>
        <div className="circle3 w-[421px] h-[421px] absolute rounded-full right-0 top-[455px] z-[-10]"></div>
        <Hero />
        <AboutUsLanding />
      </div>
    </>
  );
};

export default LandingPage;
