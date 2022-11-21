const Navbar = () => {
  return (
    <nav className=" flex justify-center align-center p-5">
      <div className="left-menu">
        <ul>
          <li className="inline-block mr-7">Tentang Kami</li>
          <li className="inline-block mr-7">Produk Kami</li>
        </ul>
      </div>
      <div className="logo mr-7">My Cuan</div>
      <div className="right-menu  ">
        <ul>
          <li className="inline-block mr-7">Download Aplikasi</li>
          <li className="inline-block mr-7">Kontak</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
