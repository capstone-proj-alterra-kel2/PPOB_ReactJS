import logo from "../../../assets/img/logo.png";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="cursor-default flex justify-center align-center p-5 mt-[20px] gap-[40px] h-[50px]">
      <div className="left-menu">
        <ul>
          <li className="inline-block text-lg text-darkblue font-navbar">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>Tentang Kami</Link>
          </li>
          <li className="inline-block ml-5 text-lg text-darkblue font-navbar">
            <Link to="produk" spy={true} smooth={true} offset={50} duration={500}>Produk Kami</Link>
          </li>
        </ul>
      </div>
      <div className="logo flex font-logo">
        <img
          src={logo}
          alt="logo.png"
          style={{ width: "30px", height: "30px" }}
        />
        <span className="text-2xl">MYCUAN</span>
      </div>
      <div className="right-menu  ">
        <ul>
          <li className="inline-block text-lg text-darkblue font-navbar" href="download">
            <Link to="download" spy={true} smooth={true} offset={50} duration={500}>Download Aplikasi</Link>
          </li>
          <li className="inline-block text-lg ml-5 text-darkblue font-navbar" href="kontak">
            <Link to="kontak" spy={true} smooth={true} offset={50} duration={500}>Kontak</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
