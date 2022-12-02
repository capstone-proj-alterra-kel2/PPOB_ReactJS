import axios from "axios";

export const usersApi = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getUsers = async () => {
  const response = await usersApi.get("/");
  return response.data;
};

export const hasuraApi = axios.create({
  baseURL: "https://capstone-alterra.hasura.app/api/rest",
  headers: {
    "x-hasura-admin-secret":
      "9tNl5pf4Cbw6ZORJXjQEW6vz3T1saIM83m6BDtvl31wPh61k4o7jxNq52TwBFARh",
  },
});

export const getUsersHasura = async () => {
  const response = await hasuraApi.get("/get");
  return response.data.users;
};

export const postUserHasura = async () => {
  const response = await hasuraApi.post("/post");
  return response.data.users;
};
