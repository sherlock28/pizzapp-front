import { createSlice } from "@reduxjs/toolkit";
// import { orders } from "services";

const initialState = {
  cart: [],
  countProducts: 0,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartLoading: (state, action) => {
      if (state.isFetching === false) state.isFetching = true;
    },
    addProductToCart: (state, action) => {
      state.cart = action.payload;
      state.countProducts = state.countProducts + 1;
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload);
      state.countProducts = state.cart.map(p => p.count).reduce((a, b) => a + b, 0);
    },
    updateCountFromCart: (state, action) => {
      state.cart = action.payload;
      state.countProducts = state.cart.map(p => p.count).reduce((a, b) => a + b, 0);
    },
    buySuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    buyFailed: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    },
    clearState: (state, action) => {
      state.cart = [];
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
});

export const {
  cartLoading,
  addProductToCart,
  removeProductFromCart,
  updateCountFromCart,
  buySuccess,
  buyFailed,
  clearState,
} = cartSlice.actions;

export const buyTheCart = data => async dispatch => {
  console.log("Comprar el carrito");
};

export const cartSelector = state => state.cart;

export default cartSlice.reducer;
