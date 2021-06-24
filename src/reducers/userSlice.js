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
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isSuccess = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.user;
      state.isSuccess = true;
    },
    authFailed: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    },
    clearState: (state, action) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = ""
    }
  },
});

export const { authLoading, loginSuccess, registerSuccess, authFailed, clearState } =
  userSlice.actions;

export const loginAction = data => async dispatch => {
  dispatch(authLoading());
  try {
    const response = await auth.signInService({ ...data });
    const statusCode = response.status;
    const res = await response.json();

    console.log(res, statusCode)
    if (statusCode === 202) {
      dispatch(loginSuccess(res));
    }
    if (statusCode === 403) {
      dispatch(authFailed(res));
    }
  } catch (err) {
    console.log("entra aqui?")
    dispatch(authFailed(err.message));
  }
};

export const registerAction = data => async dispatch => {
  dispatch(authLoading());
  try {
    const response = await auth.signUpService({ body: data });
    const statusCode = response.status;
    const res = await response.json();

    if (statusCode === 201) {
      dispatch(registerSuccess(res));
    }
    if (statusCode === 400) {
      dispatch(authFailed(res));
    }
  } catch (err) {
    dispatch(authFailed(err.message));
  }
};

export const userSelector = (state) => state.user;

export default userSlice.reducer;
