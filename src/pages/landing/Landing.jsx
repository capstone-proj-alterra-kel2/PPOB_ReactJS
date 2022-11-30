import Navbar from "../../components/landing/navbar/Navbar";
import "../../assets/styles/landing.css";
import Hero from "../../components/landing/hero/Hero";
import AboutUsLanding from "../../components/landing/aboutUs/AboutUs";
import Group1 from "../../assets/img/Group 1.png";
import Group40 from "../../assets/img/Group 40.png";

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

        <div className="flex mx-auto z-[-10]">
         <p style={{fontSize: 24, textAlign: 'center', marginTop: 300, marginLeft: 500}}>PRODUK UTAMA KAMI</p>
        </div>

        <div className="flex mx-auto z-[-10]">
          <h1 style={{textAlign: 'center', marginTop: 30, marginLeft: 450}}>Lorem Ipsum is simply dummy the setting industry.</h1>
        </div>

        {/* topup pulsa */}
        <div className="flex mx-auto z-[-10] ">
          <div className="flex-2">
            <img className="absolute"
              src={Group1}
              alt="a.png"
              style={{ width: "330px", height: "300px", top: "1400px", left: "30px" }}
            />
          </div>
          <div className="ml-[400px] mt-[200px]" style={{textAlign: 'justify'}}>
            <p className="text1" style={{color: "#2A8010", fontSize: 24}}><b>#TOP UP PULSA</b></p>
            <p className="text2" style={{fontSize: 36}}><b>Lorem Ipsum is simply dummy the setting industry.</b></p>
            <p className="text3" style={{fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        {/* topup game */}
        <div className="flex mx-auto z-[-10] ">
          <div className="ml-[30px] mr-[400px] mt-[150px]" style={{textAlign: 'justify'}}>
            <p className="text1" style={{color: "#2A8010", fontSize: 24}}><b>#TOP UP GAME</b></p>
            <p className="text2" style={{fontSize: 36}}><b>Lorem Ipsum is simply dummy the setting industry.</b></p>
            <p className="text3" style={{fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="flex-2">
            <img className="absolute"
              src={Group40}
              alt="a.png"
              style={{ width: "330px", height: "300px", top: "1700px", right: "30px" }}
            />
          </div>
        </div>

      </div>
    </>

  );
};

export default LandingPage;
