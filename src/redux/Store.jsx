import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../redux/feature/UsersSlice";
import AdminsReducer from "./feature/AdminSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    admins: AdminsReducer,
  },
});
