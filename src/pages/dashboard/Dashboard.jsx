import SidebarPage from "../../components/dashboard/sidebar/Sidebar";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  return (
    <SidebarPage>
      <section className="m-3">
        <div className="title">
          <h1>MYCUAN</h1>
          <p>welcome to you dashboard</p>
        </div>
      </section>
    </SidebarPage>
  );
};

export default DashboardPage;
