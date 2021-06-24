import { createSlice } from "@reduxjs/toolkit";
import { auth } from "services";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    authLoading: (state, action) => {
      if (state.isFetching === false) {
        state.isFetching = true;
      }
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.data.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isError = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = null;
    },
    authFailed: (state, action) => {
      state.isFetching = false;
      state.isError = action.payload.message;
    },
  },
});

export const { authLoading, loginSuccess, registerSuccess, authFailed } =
  userSlice.actions;

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

export const userSelector = (state) => state.user;
