import { AxiosInstance } from "./api";
import Cookies from "js-cookie";

export const GetDataTransactions = async () => {
  const token = Cookies.get("token");

  const res = await AxiosInstance.get("/admin/transactions?size=8000&sort=id", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data.items;
};
