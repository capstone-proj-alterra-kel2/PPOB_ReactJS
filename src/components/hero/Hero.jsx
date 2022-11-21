import heroImage from "../../assets/img/18915856.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex justify-around">
        <div className="left-hero-content">
          <ul className="flex flex-col justify-between  gap-[70px] h-[360px] w-[281px] items-center">
            <li>7k+ User Download</li>
            <li>5k+ User Aktif</li>
          </ul>
        </div>
        <div className="center-hero-content">
          <img src={heroImage} style={{ height: "421px" }} />
        </div>
        <div className="right-hero-content">
          <ul className="flex flex-col justify-between  gap-[70px] h-[360px] w-[281px] items-center">
            <li>7k+ User Download</li>
            <li>5k+ User Aktif</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
