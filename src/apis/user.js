import axios from "axios";

export const usersApi = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getUsers = async () => {
  const response = await usersApi.get("/");
  return response.data;
};

export const hasuraApi = axios.create({
  baseURL: "https://capstone-kel2.hasura.app/api/rest/",
  headers: {
    "x-hasura-admin-secret":
      "cL4GG8Gy40j8TNxZacZ7rgxWjVtke2P267pHIKLjvmGPm1K2w4ggOFFINEVBN6Zl",
  },
});

export const getUsersHasura = async () => {
  const response = await hasuraApi.get("/users");
  return response.data.users;
};

export const getAdminsHasura = async () => {
  const response = await hasuraApi.get("/admins");
  return response.data.data_admins;
};

export const postUserHasura = async () => {
  const response = await hasuraApi.post("/post");
  return response.data.users;
};
