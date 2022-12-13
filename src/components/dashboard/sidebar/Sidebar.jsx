import React, { useState } from "react";
import logo from "../../../assets/img/logo.png";
import logoText from "../../../assets/img/MYCUAN.png";
import iconLogout from "../../../assets/img/icon-logout.png";
import { menuItem } from "./MenuSidebar";

import { NavLink } from "react-router-dom";
import NavbarDashboard from "../navbar/Navbar";
import { Navigate } from "react-router-dom";
import { Auth } from "../../../utils/Auth";
import SidebarMenu from "./SidebarMenu";
import ToastifyComponent from "../toasttify";

const SidebarPage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [navigate, setNavigate] = useState(false);

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
          <div className="top h-[70px] flex items-center justify-center">
            <img
              src={logo}
              style={{ width: "30px", height: "30px" }}
              alt="logo"
            />
            <div
              className="text-lg pl-1"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <img
                src={logoText}
                style={{ width: "100px", height: "20px" }}
                alt="logoText"
              />
            </div>
          </div>
          <hr />

          <div className="flex flex-col  h-[90vh] justify-between">
            <div>
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="group  flex mt-[10px] mb-[10px] list-none
                  text-white h-[48px] items-center content-center
                  px-[10px] hover:bg-white hover:text-midblue"
                  activeclassname="active"
                >
                  <SidebarMenu
                    title={item.name}
                    icon={item.icon}
                    isOpen={isOpen}
                    index={index}
                  />
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
        <NavbarDashboard toggle={toggle} isOpen={isOpen} />

        <ToastifyComponent />

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default SidebarPage;
