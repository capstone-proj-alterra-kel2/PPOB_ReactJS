// api configurasi

import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://foodnih.com/v1",
});

export const loginAdmin = async () => {
  const response = await AxiosInstance.post("/auth/login");
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await AxiosInstance.post("/auth/logout");
  return response.data;
};
