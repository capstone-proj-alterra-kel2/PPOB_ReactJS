import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import { UpadateProducts, CreateProducts, Login } from "../components";

import {
  PaketData,
  IndosatPaketData,
  TelkomselPaketData,
  SimpatiPaketData,
  ThreePaketData,
  SmartfrenPaketData,
  TelkomselPulsa,
  IndosatPulsa,
  Pulsa,
  AdminsPage,
  UsersPage,
  Landing,
  ProductsPage,
  TransactionsPage,
  DashboardPage,
  NotFound404,
} from "../pages/";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound404 />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin">
              <Route index element={<DashboardPage />} />
            </Route>
            <Route path="/users">
              <Route index element={<UsersPage />} />
            </Route>
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              {/* Pulsa */}
              <Route path="pulsa">
                <Route index element={<Pulsa />} />
                <Route path="telkomsel">
                  {/* TElKOMSEL */}
                  <Route index element={<TelkomselPulsa />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
                <Route path="indosat">
                  {/* TElKOMSEL */}
                  <Route index element={<IndosatPulsa />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
              </Route>
              {/* PaketData */}
              <Route path="paket-data">
                <Route index element={<PaketData />} />
                {/* Telkomsel */}
                <Route path="telkomsel">
                  <Route index element={<TelkomselPaketData />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
                {/* Indosat */}
                <Route path="indosat">
                  <Route index element={<IndosatPaketData />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
                {/* Simpati */}
                <Route path="simpati">
                  <Route index element={<SimpatiPaketData />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
                {/* Three */}
                <Route path="three">
                  <Route index element={<ThreePaketData />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
                </Route>
                {/* Smartfren */}
                <Route path="smartfren">
                  <Route index element={<SmartfrenPaketData />} />
                  <Route path="new" element={<CreateProducts />} />
                  <Route path="edit/:id" element={<UpadateProducts />} />
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
