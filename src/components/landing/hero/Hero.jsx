import heroImage from "../../../assets/img/image-hero-2.png";
import icon from "../../../assets/img/icon-hero.png";
import fourstar from "../../../assets/img/4star.png";
import fivestar from "../../../assets/img/5star.png";
import useraktif from "../../../assets/img/usertransaksi.png";
import playstore from "../../../assets/img/playstore.png";
import appstore from "../../../assets/img/appstore.png";

const Hero = () => {
  return (
    <section className="w-full px-5 h-auto lg:h-[130vh] flex gap-20 flex-col pt-32 justify-center">
      <div className="hidden lg:block absolute top-0 h-[421px] w-[421px] bg-primary-40 rounded-full opacity-50 bagiankesatu" />
      <div className="hidden lg:block absolute right-0 -bottom-52 h-[421px] w-[421px] bg-primary-40 rounded-full opacity-50 bagiankesatu " />

      {/* title */}
      <div className="text-center">
        <h1 className=" text-4xl md:text-5xl  lg:text-6xl font-bold text-grayScale-90">
          Transaksi Lebih Aman dan Nyaman <br /> Bersama MYCUAN
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        {/* 1 */}
        <div className="flex lg:flex-col  justify-between  gap-[70px] h-[360px] w-full lg:w-[281px] md:justify-around items-center">
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              7k+ User
              <br />
              Download
            </h2>
            <p className="text-lg">
              7240 User telah download aplikasi mycuan di playstore dan appstore
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              5k+ User <br /> Aktif
            </h2>
            <p className="text-lg">
              5256 User aktif bertransaksi pada tahun 2022
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full lg:w-[600px] flex justify-center relative">
          <img src={heroImage} style={{ height: "527px" }} alt="" />
          <img
            src={playstore}
            className="hidden md:block absolute w-[90px] h-[90px] top-16 right-20"
            alt=""
          />
          <img
            src={icon}
            className="hidden md:block  absolute w-[90px] h-[90px] top-24 left-20"
            alt=""
          />
          <img
            src={useraktif}
            className="hidden md:block  absolute w-[90px] h-[90px] bottom-28 left-0"
            alt=""
          />
          <img
            src={appstore}
            className=" hidden md:block  absolute w-[90px] h-[90px] bottom-40 right-0"
            alt=""
          />
        </div>
        {/* 3 */}
        <div className="flex lg:flex-col justify-between  gap-[70px] h-[360px] w-full lg:w-[281px] items-center">
          <div>
            <img src={fourstar} alt="rating"/>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              4 Rating Play Store
            </h2>
            <p className="text-base">
              4 bintang untuk rata rata rating yang diberikan oleh user pada
              playstore
            </p>
          </div>

          <div>
            <img src={fivestar} alt="rating" />
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              5 Rating App Store
            </h2>
            <p className="text-base">
              5 bintang untuk rata rata rating yang diberikan oleh user pada
              appstore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
