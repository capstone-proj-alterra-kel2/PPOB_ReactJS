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
      <div
        className="p-4 justify-start flex  w-full h-auto lg:h-[600px] bg-grayScale-90 text-grayScale-10 "
        id="kontak"
      >
        <div className="flex w-full justify-around flex-col lg:flex-row mt-[320px] lg:gap-[100px] " >
          {/* deskripsi mycuan */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col gap-4">
              <img
                className=""
                src={logomycuan}
                width="250px"
                height="63px"
                alt=""
              />
              <p className="text-base w-full md::w-[378px] font-normal text-justify ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
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
          <section className="flex flex-col md:flex-row pt-7 justify-between gap-12 flex-1">
            {/* section */}  
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-semibold">Section</h3>
                <ul className="flex flex-col gap-5 text-base">
                  <li className="">Tentang Kami</li>
                  <li className="">Produk Kami</li>
                  <li className="">Tentang Kami</li>
                  <li className="">Kontak</li>
                </ul>
              </div>
            {/* produk */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold">Produk</h3>
              <ul className="flex flex-col gap-5 text-base">
                <li >Top Up Pulsa</li>
                <li >Top Up Game</li>
              </ul>
            </div>
            {/* kontak */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold">Kontak</h3>
              <ul className="flex flex-col gap-5 text-base">
              <li >mycuan@gmail.com</li>
                  <li >0854 0982 5321</li>
                  <li >@mycuan.id</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-grayScale-90 w-full text-grayScale-10 justify-between p-[30px] flex ">
        <div>Syarat dan Ketentuan</div>
        <div>Copyright 2022 All Right Reserved</div>
      </div>
    </>
  );
};

export default Footer;
