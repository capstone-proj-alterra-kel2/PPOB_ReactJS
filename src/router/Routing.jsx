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
import AddProductsTelkomsel from "../pages/dashboard/products/telecommunication/pulsa/AddProductsTelkomsel";
import EditProductTelkomsel from "../pages/dashboard/products/telecommunication/pulsa/EditProductTelkomsel";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../components/login/Login";
import NotFound from "../pages/notfound";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/">
              <Route index element={<DashboardPage />} />
              <Route path="/*" element={<NotFound />} />
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
                  <Route path="edit" element={<EditProductTelkomsel />} />
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
