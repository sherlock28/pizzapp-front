import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "reducers/productsReducer";

const reducers = combineReducers({
  products: productsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);