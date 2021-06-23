import { createSlice } from "@reduxjs/toolkit";
import { auth } from "services";

export const authSlice = createSlice({
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
    registerSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    authFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { authLoading, loginSuccess, registerSuccess, authFailed } =
  authSlice.actions;

export const loginAction = data => async dispatch => {
  dispatch(authLoading());
  try {
    const { email, password } = data;
    const response = await auth.signInService({ email, password });
    dispatch(loginSuccess(response));
  } catch (err) {
    dispatch(authFailed(err.message));
  }
};

export const registerAction = data => async dispatch => {
  dispatch(authLoading());
  try {
    const response = await auth.signUpService({ body: data });
    dispatch(registerSuccess(response));
  } catch (err) {
    dispatch(authFailed(err.message));
  }
};

export default authSlice.reducer;
