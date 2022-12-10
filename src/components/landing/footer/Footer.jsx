import logomycuan from "../../../assets/img/logo2.png";
import facebooklogo from "../../../assets/img/facebook.png";
import twitterlogo from "../../../assets/img/twitter.png";
import iglogo from "../../../assets/img/instagram.png";
import glogo from "../../../assets/img/google.png";
import linkedinlogo from "../../../assets/img/linkedin.png";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="justify-start flex items-end w-[100%] h-[700px] bg-blackfooter text-white1" id="kontak">
        <div className="flex mx-[120px] mb-[40px]">
          {/* deskripsi mycuan */}
          <div className="about mycuan">
            <div className="">
              <img
                className="mb-[27px]"
                src={logomycuan}
                width="250px"
                height="63px" alt=""
              ></img>
              <p className="text-base w-[378px] font-normal text-justify mb-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since{" "}
              </p>
            </div>

            <div className="flex">
              <img
                className="mr-2"
                src={facebooklogo}
                alt="Facebook Logo"
              ></img>
              <img className="mr-2" src={twitterlogo} alt="Twitter Logo"></img>
              <img className="mr-2" src={iglogo} alt="Instagram Logo"></img>
              <img className="mr-2" src={glogo} alt="Google Logo"></img>
              <img
                className="mr-2"
                src={linkedinlogo}
                alt="Linkedin Logo"
              ></img>
            </div>
          </div>

          {/* section */}
          <div className="about mycuan ml-[100px]">
            <div className="">
              <div className="mb-5 text-2xl font-semibold">Section</div>
              <ul>
                <li className="mb-5">Tentang Kami</li>
                <li className="mb-5">Produk Kami</li>
                <li className="mb-5">Tentang Kami</li>
                <li className="mb-5">Kontak</li>
              </ul>
            </div>
          </div>

          {/* produk */}
          <div className="about mycuan ml-[100px]">
            <div className="">
              <div className="mb-5 text-2xl font-semibold">Produk</div>
              <ul>
                <li className="mb-5">Top Up Pulsa</li>
                <li className="mb-5">Top Up Game</li>
              </ul>
            </div>
          </div>

          {/* kontak */}
          <div className="about mycuan ml-[100px]">
            <div className="">
              <div className="mb-5 text-2xl font-semibold">Kontak</div>
              <ul>
                <li className="mb-5">mycuan@gmail.com</li>
                <li className="mb-5">0854 0982 5321</li>
                <li className="mb-5">@mycuan.id</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blackfooter2 text-white1">
        <div className="justify-between p-[30px] flex mx-[120px]">
          <div>Syarat dan Ketentuan</div>
          <div>Copyright 2022 All Right Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
