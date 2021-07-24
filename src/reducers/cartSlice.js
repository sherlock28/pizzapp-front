import { createSlice } from "@reduxjs/toolkit";
// import { orders } from "services";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    cartLoading: (state, action) => {
      if (state.isFetching === false) state.isFetching = true;
    },
    addProductToCart: (state, action) => {
      state.cart = action.payload;
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
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
  buySuccess,
  buyFailed,
  clearState,
} = cartSlice.actions;

export const buyTheCart = data => async dispatch => {
  console.log("Comprar el carrito");
};

export const cartSelector = state => state.cart;

export default cartSlice.reducer;
