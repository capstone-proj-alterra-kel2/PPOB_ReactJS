import tentangImage from "../../assets/img/34.png";

const AboutUsLanding = () => {
  return (
    <>
      <div className="w-[90%] h-[270px] bg-blue-100 tentangkami-hero mr-auto ml-14 absolute p-12">
        <div className="flex">
          <div className="flex-2">
            <div className="circle2 w-[209px] h-[209px] bg-white absolute"></div>
            <div className="image-tentangkami absolute">
              <img
                src={tentangImage}
                alt="a.png"
                style={{ width: "150px", height: "170px" }}
              />
            </div>
          </div>
          <div className="flex-4 absolute left-[425px]  top-[128px] gap-[40px] ">
            <div className="flex items-center text-white">
              <p className="text-large mr-12">Tentang Kami</p>
              <p className="pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                voluptates tempore inventore mollitia eveniet repellat est
                suscipit adipisci vel doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsLanding;
