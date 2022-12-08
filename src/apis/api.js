// api configurasi

import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const AxiosInstance = axios.create({
  baseURL: "http://108.136.220.111/v1",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export const loginAdmin = async () => {
  const response = await AxiosInstance.post("/auth/login");
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await AxiosInstance.post("/auth/logout");
  return response.data;
};

// export const getDataUsers = async () => {
//   const response = await AxiosInstance.get(
//     "/admin/users?size=5&page=0&sort=created_at"
//   );
//   return response.data.data;
// };
