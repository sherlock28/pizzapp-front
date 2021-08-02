import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    rememberme: false,
  },
  reducers: {
    setRememberme: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const { setRememberme } = configSlice.actions;

export const configSelector = state => state.configSlice;

export default configSlice.reducer;

