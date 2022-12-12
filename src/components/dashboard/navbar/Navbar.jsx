import Cookies from "js-cookie";
import { FaBars } from "react-icons/fa";

const NavbarDashboard = ({ toggle, isOpen }) => {
  return (
    <>
      <div className=" flex items-center justify-between p-5 text-lg h-[10vh] w-[100%] bg-white sticky top-0">
        <div
          style={{ marginLeft: isOpen ? "60px" : "0px" }}
          className="flex text-2xl p-[20px] w-auto"
        >
          <FaBars onClick={toggle} />
        </div>
        <div className="flex items-center">
          <div className="mr-5">Monkey D. Luffy</div>
          <img
            src="https://yt3.ggpht.com/a/AATXAJx92-kho8NnIChcdBk63x82cVUrPDpmRvvTwQ=s900-c-k-c0xffffffff-no-rj-mo"
            alt=""
            className="w-[55px] h-[55px] rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;
