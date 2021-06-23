import { createSlice } from "@reduxjs/toolkit";
import { products } from "services";

export const productSlice = createSlice({
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
    findProduct: (state, action) => {
      const product = state.products.filter(p => p._id === action.payload);
      state.product = product[0];
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
  findProduct,
  currentProduct,
  fetchFailed,
} = productSlice.actions;

export const fetchAllProducts = () => async dispath => {
  dispath(productsLoading());
  try {
    const allProducts = await products.getAllProducts();
    if (allProducts.length !== 0) {
      dispath(productsReceived(allProducts.data.products));
    }
  } catch (err) {
    dispath(fetchFailed(err.toString()));
  }
};

export const getCurrentProduct = product => dispatch => {
  dispatch(currentProduct(product));
};

export default productSlice.reducer;
