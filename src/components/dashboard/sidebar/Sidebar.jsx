import React, { useState } from "react";
import logo from "../../../assets/img/logo4.png";
import iconLogout from "../../../assets/img/icon-logout.png";
import { menuItem } from "./MenuSidebar";

import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavbarDashboard from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";
import { AxiosInstance } from "../../../apis/api";
import { Auth } from "../../../utils/Auth";

const SidebarPage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [navigate, setNavigate] = useState(false);

  // useEffect(() => {
  //     (async () => {
  //         try {
  //             const {data} = await axios.get('user');

  //             setName(data.name);
  //         } catch (e) {
  //             setNavigate(true);
  //         }
  //     })();
  // }, []);

  const logout = () => {
    AxiosInstance.post("/auth/logout", {}).then((res) => {
      console.log("berhasil", res);
      // return Cookies.remove("token");
    });

    setNavigate(true);
  };

  const handleLogout = () => {
    Auth.signOut();
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex">
      <div className="">
        <div
          className=" h-[100vh] w-[240px]  bg-primary50 flex flex-col"
          style={{ width: isOpen ? "240px" : "60px" }}
        >
          <div className="top h-[70px] flex items-center ">
            <div
              className="text-lg pl-3"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <img src={logo} style={{ width: "150px", height: "40px" }} />
            </div>
            <div
              style={{ marginLeft: isOpen ? "60px" : "0px" }}
              className="flex text-2xl p-[20px] w-auto"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <hr />

          <div className="flex flex-col  h-[90vh] justify-between">
            <div>
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex mt-[10px] mb-[10px] list-none text-white h-[48px] items-center content-center px-[10px] hover:bg-white hover:text-midblue"
                  activeClassName="active"
                >
                  <div className="font-menu p-2">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="font-menu p-1 text-base font-semibold not-italic"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
            <div
              onClick={handleLogout}
              className="flex mt-[50px] mb-[10px] list-none text-white h-[48px] items-center  px-[10px] hover:bg-white hover:text-midblue"
            >
              <div className="font-menu p-2">
                <img src={iconLogout} alt="" className="w-7 h-7" />
              </div>

              <button
                style={{ display: isOpen ? "block" : "none" }}
                className="font-menu p-1 text-base font-semibold not-italic"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] max-h-screen bg-grey3 overflow-auto">
        <NavbarDashboard />

        <ToastContainer
          position="top-left"
          autoClose={false}
          newestOnTop={false}
          style={{
            width: "95%",
            marginLeft: "40px",

            position: "absolute",
            top: 0,
            right: 0,
          }}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
        />

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default SidebarPage;
