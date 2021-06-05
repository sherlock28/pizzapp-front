import { createSlice } from "@reduxjs/toolkit";

export const productsReducer = createSlice({
  name: "publication",
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    productsReceived: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.products = action.payload;
      }
    },
    productsLoading: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    fetchFailed: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
  },
});

export const { productsReceived, productsLoading, fetchFailed } =
  productsReducer.actions;

export const fetchAllProducts = () => async dispath => {
  dispath(productsLoading());
  try {
    const allProducts = await fetch("");
    dispath(productsReceived(allProducts));
  } catch (err) {
    dispath(fetchFailed(err.toString()));
  }
};

export default productsReducer.reducer;
