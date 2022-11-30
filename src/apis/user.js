import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getUsers = async () => {
  const response = await usersApi.get("/");
  return response.data;
};

export const getUsersbyid = async (id) => {
  const response = await usersApi.get(`/${id}`);
  return response.data;
};
