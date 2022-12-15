import UsersReducer from "../redux/feature/UsersSlice";
import AdminsReducer from "./feature/AdminSlice";
import ProductReducer from "./feature/ProductSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     users: UsersReducer,
//     admins: AdminsReducer,
//     products: ProductReducer,
//   },
// });

const persistConfig = {
  key: "Capstone",
  storage,
};

const rootReducer = combineReducers({
  users: UsersReducer,
  admins: AdminsReducer,
  products: ProductReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
