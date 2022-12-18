import { AxiosInstance } from "./api";
import Cookies from "js-cookie";
const token = Cookies.get("token");

// Get Product Type
export const GetProductType = async () => {
  const res = await AxiosInstance.get("/admin/producttypes", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// Get Data  Provider pulsa
export const GetProviderPulsa = async () => {
  const res = await AxiosInstance.get("/admin/producttypes/3/providers", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// Get Data Provider Paket Data
export const GetProviderPaketdata = async () => {
  const res = await AxiosInstance.get("/admin/producttypes/4/providers", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// GET DATA PRODUCTS => d

export const GetProduct = async () => {
  const tokenas = Cookies.get("token");
  const res = await AxiosInstance.get("/admin/products?size=800&sort=name", {
    headers: {
      Authorization: "Bearer " + tokenas,
    },
  });
  return res.data.data.items;
};
