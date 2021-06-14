import { createSlice } from "@reduxjs/toolkit";
import { products } from "services";

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
    currentProduct: (state, action) => {
      state.product = action.payload;
    },
    fetchFailed: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
  },
});

export const {
  productsReceived,
  productsLoading,
  currentProduct,
  fetchFailed,
} = productsReducer.actions;

export const fetchAllProducts = () => async dispath => {
  dispath(productsLoading());
  try {
    const allProducts = await products.getAllProducts();
    dispath(productsReceived(allProducts.data.products));
  } catch (err) {
    dispath(fetchFailed(err.toString()));
  }
};

export const getCurrentProduct = product => dispatch => {
  dispatch(currentProduct(product));
};

export default productsReducer.reducer;
