import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    authLoading: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    failed: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});