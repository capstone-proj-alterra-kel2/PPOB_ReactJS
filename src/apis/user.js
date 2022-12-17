import Cookies from "js-cookie";
import { AxiosInstance } from "./api";

export const GetDataUsers = async () => {
  const token = Cookies.get("token");
  const res = await AxiosInstance.get("/admin/users?sort=name&size=1000", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data.items;
};

export const GetDataforadmin = async () => {
  const token = Cookies.get("token");
  const res = await AxiosInstance.get("/admin/admins?sort=name&size=1000", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data.items;
};
