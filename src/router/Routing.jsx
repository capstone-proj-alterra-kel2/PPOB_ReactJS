import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarPage from "../components/dashboard/sidebar/Sidebar";
import DashboardPage from "../pages/dashboard/Dashboard";
import ProductsPage from "../pages/dashboard/products/ProductsPage";
import TransactionsPage from "../pages/dashboard/transactions/Transactions";
import UsersPage from "../pages/dashboard/users/Users";
import AdminsPage from "../pages/dashboard/admins/Admin";
import LandingPage from "../pages/landing/Landing";
import PulsaPage from "../pages/dashboard/products/telecommunication/Pulsa";
import PaketData from "../pages/dashboard/products/telecommunication/PaketData";
import TelkomselPage from "../pages/dashboard/products/telecommunication/Telkomsel";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        {/* Public Router */}
        <Routes>
          <Route path="/landing">
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/login" element={<LandingPage />} />
          <Route path="/register" element={<LandingPage />} />
        </Routes>
        {/* Private Router, Auth */}

        <SidebarPage>
          <Routes>
            <Route path="/">
              <Route index element={<DashboardPage />} />
            </Route>
            <Route path="/users">
              <Route index element={<UsersPage />} />
            </Route>
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              <Route path="pulsa">
                <Route index element={<PulsaPage />} />
                <Route path="telkomsel" element={<TelkomselPage />} />
              </Route>
              <Route path="paket-data" element={<PaketData />} />
            </Route>
            <Route path="/transactions">
              <Route index element={<TransactionsPage />} />
            </Route>
            <Route path="/admins">
              <Route index element={<AdminsPage />} />
            </Route>
          </Routes>
        </SidebarPage>
      </BrowserRouter>
    </>
  );
};
export default Routing;
