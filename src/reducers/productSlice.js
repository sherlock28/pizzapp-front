import { createSlice } from "@reduxjs/toolkit";
import { products } from "services";

const initialState = {
  products: [],
  product: null,
  filteredProducts: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsReceived: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      }
    },
    productsLoading: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
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
  setFilteredProducts,
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

export const productSelector = state => state.products;
