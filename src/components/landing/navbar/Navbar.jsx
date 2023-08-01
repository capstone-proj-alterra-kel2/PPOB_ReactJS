import logo from "../../../assets/img/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleClick = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }
  return (
    <nav className="  cursor-default fixed flex w-full justify-between lg:justify-center align-center p-5  gap-[40px] ">
      <div className="lg:order-1 left-menu hidden lg:block">
        <ul className="font-bold text-xl">
          <li className="inline-block text-lg text-primary-60 font-navbar">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="inline-block ml-5 text-lg text-primary-60 font-navbar">
            <Link
              to="produk"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Produk Kami
            </Link>
          </li>
        </ul>
      </div>
   
      <div className="order-1 lg:order-2 flex text-xl font-bold">
        <img
          src={logo}
          alt="logo.png"
          style={{ width: "30px", height: "30px" }}
        />
        <span className="text-2xl">MYCUAN</span>
      </div>
      <button onClick={toggleClick} className="block lg:hidden order-2" >
        <GiHamburgerMenu size={30}/>
      </button>
      {toggle ? <div className="absolute top-12 bg-primary-10 left-0 w-full p-4 transition-all duration-150 ">
      <ul className="flex flex-col justify-end items-end gap-4 ">
      <li className="text-lg text-primary-60 font-navbar">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="  text-lg text-primary-60 font-navbar">
            <Link
              to="produk"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Produk Kami
            </Link>
          </li>
          <li
            className=" text-lg text-primary-60 font-navbar"
            href="download"
          >
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Download Aplikasi
            </Link>
          </li>
          <li
            className=" text-primary-60 "
            href="kontak"
          >
            <NavLink  className="bg-primary p-5 rounded-xl" to="/login">Login</NavLink>
          </li>
        </ul>
      </div> : <div className="absolute top-20 hidden">Menutup Navbar</div>}
      <div className="lg:order-3 hidden lg:block ">
        <ul className="font-bold text-xl flex">
          <li className="text-primary-60"href="download" >
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Download Aplikasi
            </Link>
          </li>
          <li
            className=" text-primary-60 "
            href="kontak"
          >
            <NavLink  className="bg-primary p-5 rounded-xl" to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
