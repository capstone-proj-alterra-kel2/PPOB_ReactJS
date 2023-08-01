import imageAbout from "../../../assets/img/image-about.png";

const AboutUsLanding = () => {
  return (
    <section id="about" className="px-5 h-[270px] w-full text-grayScale-20 flex justify-around    ">
      <div className="hidden w-[500px] h-full relative md:flex justify-center items-center">
        <div className="circle2 w-[220px] h-[220px]">
          <div className="absolute bottom-7 left-[13px] image-about">
            <img
              src={imageAbout}
              alt="a.png"
              style={{ width: "330px", height: "339px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10  items-center content-center text-grayScale-10   justify-between">
        <p className="text-3xl md:text-4xl lg:text-5xl about-title">
          Tentang Kami
        </p>
        <p className=" text-sm   md:text-base ">
          MYCUAN adalah layanan pembayaran tagihan secara online real time 24
          jam sehingga proses rekonsiliasi data dan dana bisa lebih cepat dan
          akurat serta aman
        </p>
      </div>
    </section>
  );
};

export default AboutUsLanding;
