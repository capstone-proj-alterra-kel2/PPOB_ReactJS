import imageAbout from "../../../assets/img/image-about.png";

const AboutUsLanding = () => {
  return (
    <>
      <div className="segitiga1"></div>
      <div className="h-[270px] top-[871px] tentangkami-hero absolute z-[-100] mx-6">
        <div className="circle2 w-[220px] h-[220px] absolute m-12"></div>
        <div className="flex mx-auto" id="about">
          <div className="flex-2 ">
            <div className="image-tentangkami absolute z-[10]">
              <img
                src={imageAbout}
                alt="a.png"
                style={{ width: "330px", height: "339px" }}
              />
            </div>
          </div>
          <div className="ml-[300px]">
            <div className="flex items-center content-center text-white h-[270px] p-10">
              <p className="text-large mr-12 about-title">Tentang Kami</p>
              <p className="pr-10 about-content">
                MYCUAN adalah layanan pembayaran tagihan secara online real time
                24 jam sehingga proses rekonsiliasi data dan dana bisa lebih
                cepat dan akurat serta aman
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsLanding;
