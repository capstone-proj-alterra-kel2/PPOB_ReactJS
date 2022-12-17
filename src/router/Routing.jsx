import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Dashboard";
import ProductsPage from "../pages/dashboard/products/ProductsPage";
import TransactionsPage from "../pages/dashboard/transactions/Transactions";
import UsersPage from "../pages/dashboard/users/Users";
import AdminsPage from "../pages/dashboard/admins/Admin";
import LandingPage from "../pages/landing/Landing";
import PulsaPage from "../pages/dashboard/products/telecommunication/pulsa/Pulsa";

import PaketData from "../pages/dashboard/products/telecommunication/PaketData/PaketData";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../components/login/Login";
import NotFound from "../pages/notfound";
import TelkomselPagePaketData from "../pages/dashboard/products/telecommunication/PaketData/Telkomsel";
import AddPaketDataTelkomsel from "../components/dashboard/products/Telecommunication/paketdata/telkomsel/AddPaketdataTelkomsel";
import EditPaketDataTelkomsel from "../components/dashboard/products/EditPaketDataTelkomsel";
import IndosatPagePaketData from "../pages/dashboard/products/telecommunication/PaketData/Indosat";
import SimpatiPagePaketData from "../pages/dashboard/products/telecommunication/PaketData/Simpati";
import ThreePagePaketData from "../pages/dashboard/products/telecommunication/PaketData/Three";
import SmartfrenPagePaketData from "../pages/dashboard/products/telecommunication/PaketData/Smartfren";
import TelkomselPagePulsa from "../pages/dashboard/products/telecommunication/pulsa/Telkomsel";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path="/">
              <Route index element={<DashboardPage />} />
            </Route>
            <Route path="/users">
              <Route index element={<UsersPage />} />
            </Route>
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              {/* Pulsa */}
              <Route path="pulsa">
                <Route index element={<PulsaPage />} />
                <Route path="telkomsel">
                  {/* TElKOMSEL */}
                  <Route index element={<TelkomselPagePulsa />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
              </Route>
              {/* PaketData */}
              <Route path="paket-data">
                <Route index element={<PaketData />} />
                {/* Telkomsel */}
                <Route path="telkomsel">
                  <Route index element={<TelkomselPagePaketData />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
                {/* Indosat */}
                <Route path="indosat">
                  <Route index element={<IndosatPagePaketData />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
                {/* Simpati */}
                <Route path="simpati">
                  <Route index element={<SimpatiPagePaketData />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
                {/* Three */}
                <Route path="three">
                  <Route index element={<ThreePagePaketData />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
                {/* Smartfren */}
                <Route path="smartfren">
                  <Route index element={<SmartfrenPagePaketData />} />
                  <Route path="new" element={<AddPaketDataTelkomsel />} />
                  <Route path="edit/:id" element={<EditPaketDataTelkomsel />} />
                </Route>
              </Route>
              {/* End paket Data */}
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
