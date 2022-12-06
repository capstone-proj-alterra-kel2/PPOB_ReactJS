import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UsersReducer from "../redux/feature/UsersSlice";
import AdminsReducer from "./feature/AdminSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    admins: AdminsReducer,
  },
});

// const persistConfig = {
//   key: "capstone",
//   storage,
// };

// const rootReducer = combineReducers({
//   users: UsersReducer,
//   admins: AdminsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
