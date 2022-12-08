import heroImage from "../../../assets/img/image-hero-2.png";
import icon from "../../../assets/img/icon-hero.png";
import fourstar from "../../../assets/img/4star.png";
import fivestar from "../../../assets/img/5star.png";

const Hero = () => {
  return (
    <>
      <img
        src={icon}
        className="absolute w-[90px] h-[90px] top-[433px] right-[410px]"
      alt ="" />
      <img
        src={icon}
        className="absolute w-[90px] h-[90px] top-[473px] left-[474px]"
      alt =""/>
      <img
        src={icon}
        className="absolute w-[90px] h-[90px] top-[661px] left-[425px]"
      alt=""/>
      <img
        src={icon}
        className="absolute w-[90px] h-[90px] top-[667px] right-[390px]"
      alt=""/>
      <div className="flex justify-around">
        <div className="left-hero-content">
          <ul className="flex flex-col justify-between  gap-[70px] h-[360px] w-[281px] items-center">
            <div>
              <li className="sub-title-content">
                <b>7k+ User <br /> Download</b>
              </li>
              <p>7240 User telah download aplikasi mycuan di playstore dan appstore</p>
            </div>
            
            <div>
              <li className="sub-title-content">
                <b>5k+ User <br /> Aktif</b>
              </li>
              <p>7240 User telah download aplikasi mycuan di playstore dan appstore</p>
            </div>
          </ul>
        </div>
        <div className="center-hero-content">
          <img src={heroImage} style={{ height: "527px" }} alt=""/>
        </div>
        <div className="right-hero-content">
          <ul className="flex flex-col justify-between  gap-[70px] h-[360px] w-[281px] items-center">

            <div>
            <img src={fourstar}/>
              <li className="sub-title-content">
                <p className="font-bold">4 Rating Play Store</p>
              </li>
              <p>4 bintang untuk rata rata rating yang diberikan oleh user pada playstore</p>
            </div>
            
            <div>
            <img src={fivestar}/>
              <li className="sub-title-content">
                <b>5 Rating App Store</b>
              </li>
              <p>5 bintang untuk rata rata rating yang diberikan oleh user pada appstore</p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
