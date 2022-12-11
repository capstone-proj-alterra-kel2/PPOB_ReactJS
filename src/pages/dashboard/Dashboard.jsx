import SidebarPage from "../../components/dashboard/sidebar/Sidebar";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  return (
    <SidebarPage>
      <section>
        <div className="widget flex justify-between flex-wrap">
          <div className="flex w-[50%] justify-around flex-wrap">
            <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
            <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
            <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
            <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
          </div>
          <div className="text1 w-60 h-[530px] bg-midblue m-3">h</div>
          <div className="flex flex-col justify-start">
            <div className="text1 w-80 h-[130px] bg-red2 m-3">h</div>
            <div className="text1 w-80 h-[130px] bg-grey m-3">h</div>
          </div>
          <div className="flex justify-start">
            <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
            <div className="text1 w-80 h-[130px] bg-green m-3">h</div>
          </div>
          <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
          <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
          <div className="text1 w-80 h-[130px] bg-midblue m-3">h</div>
        </div>
      </section>
    </SidebarPage>
  );
};

export default DashboardPage;
