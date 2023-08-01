import { Navigate, Outlet } from "react-router-dom";

import { Auth } from "../utils/Auth";

export default function PrivateRoute() {
  let { token } = Auth.isAuthorization();

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
  }

  return <Outlet />;
}
