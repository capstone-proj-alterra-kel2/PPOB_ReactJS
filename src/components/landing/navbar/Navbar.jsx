import logo from "../../../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className=" flex justify-center align-center p-5 mt-[20px] gap-[40px] h-[50px]">
      <div className="left-menu">
        <ul>
          <li className="inline-block text-lg text-darkblue font-navbar">
            Tentang Kami
          </li>
          <li className="inline-block ml-5 text-lg text-darkblue font-navbar">
            Produk Kami
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
          <li className="inline-block text-lg text-darkblue font-navbar">
            Download Aplikasi
          </li>
          <li className="inline-block text-lg ml-5 text-darkblue font-navbar">
            Kontak
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
