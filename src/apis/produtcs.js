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

// ==============================================================================================

// Get Data Provider Pulsa by Telkomsel
export const GetProviderPulsaTelkomsel = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};
// Get Data Provider Pulsa by Simpati
export const GetProviderPulsaSimpati = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};
// Get Data Provider Pulsa by Axis
export const GetProviderPulsaAxis = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};
// Get Data Provider Pulsa by Three
export const GetProviderPulsaThree = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};
// Get Data Provider Pulsa by Smartfren
export const GetProviderPulsaSmartfren = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// Get Data Provider Pulsa by Xl
export const GetProviderPulsaXl = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// Get Data Provider Pulsa by Indosat
export const GetProviderPulsaIndosat = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

// Get Data Provider Pulsa by BY.u
export const GetProviderPulsaByu = async () => {
  const res = await AxiosInstance.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};
