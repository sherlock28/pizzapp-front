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
    cartLoading: (state, payload) => {
      if (state.isFetching === false) state.isFetching = true;
    },
    addProductToCart: (state, payload) => {
      state.cart = state.cart.concat(payload.product);
    },
    buySuccess: (state, payload) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    buyFailed: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    },
    clearState: (state, payload) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
});

export const {
  cartLoading,
  addProductToCart,
  buySuccess,
  buyFailed,
  clearState,
} = cartSlice.actions;

export const buyTheCart = data => async dispatch => {
  console.log("Comprar el carrito");
};

export const cartSelector = state => state.cart;

export default cartSlice.reducer;