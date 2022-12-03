import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Dashboard";
import ProductsPage from "../pages/dashboard/products/ProductsPage";
import TransactionsPage from "../pages/dashboard/transactions/Transactions";
import UsersPage from "../pages/dashboard/users/Users";
import AdminsPage from "../pages/dashboard/admins/Admin";
import LandingPage from "../pages/landing/Landing";
import PulsaPage from "../pages/dashboard/products/telecommunication/Pulsa";
import PaketData from "../pages/dashboard/products/telecommunication/PaketData";
import TelkomselPage from "../pages/dashboard/products/telecommunication/Telkomsel";
import PrivateRoute from "./PrivateRoute";
import AddProductsTelkomsel from "../pages/dashboard/products/telecommunication/AddProductsTelkomsel";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        {/* Public Router */}
        <Routes>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/login" element={<LandingPage />} />
          <Route path="/register" element={<LandingPage />} />
        </Routes>

        {/* Private Router, Auth */}

        <Routes>
          <Route element={<PrivateRoute />}>
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
                <Route path="telkomsel">
                  <Route index element={<TelkomselPage />} />
                  <Route path="new" element={<AddProductsTelkomsel />} />
                </Route>
                <Route path="simpati" element={"a"} />
              </Route>
              <Route path="paket-data" element={<PaketData />} />
            </Route>
            <Route path="/transactions">
              <Route index element={<TransactionsPage />} />
            </Route>
            <Route path="/admins">
              <Route index element={<AdminsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
