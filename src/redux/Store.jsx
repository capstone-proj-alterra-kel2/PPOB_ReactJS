import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../redux/feature/UsersSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});
