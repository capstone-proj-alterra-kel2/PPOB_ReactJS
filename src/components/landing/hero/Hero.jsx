import heroImage from "../../../assets/img/image-hero-2.png";
import icon from "../../../assets/img/icon-hero.png";

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
            <li className="sub-title-content">
              7k+ User <br /> Download
            </li>
            
            <li className="sub-title-content">
              5k+ User <br /> Aktif
            </li>
          </ul>
        </div>
        <div className="center-hero-content">
          <img src={heroImage} style={{ height: "527px" }} alt=""/>
        </div>
        <div className="right-hero-content">
          <ul className="flex flex-col justify-between  gap-[70px] h-[360px] w-[281px] items-center">
            <li className="sub-title-content">4 Rating Play Store</li>
            <li className="sub-title-content">5 Rating App Store</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
