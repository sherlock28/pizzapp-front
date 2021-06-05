import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "reducers/productsReducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
