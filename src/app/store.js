import { configureStore } from "@reduxjs/toolkit";
import storageLocal from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import productSlice from "reducers/productSlice";
import cartSlice from "reducers/cartSlice";
import userSlice from "reducers/userSlice";
import configSlice from "reducers/configSlice";

const reducers = combineReducers({
  products: productSlice,
  cart: cartSlice,
  user: userSlice,
  config: configSlice
});

const persistLocalConfig = {
  key: "root",
  storage: storageLocal,
};

// eslint-disable-next-line 
const persistSessionConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistLocalConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
