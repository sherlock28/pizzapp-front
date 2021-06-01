import { createSlice } from "@reduxjs/toolkit";

export const publicationsReducer = createSlice({
  name: "publication",
  initialState: {
    publications: [],
    publication: null,
    loading: false,
    error: null,
  },
  reducers: {
    publicationsReceived: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.publications = action.payload;
      }
    },
    publicationLoading: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    fetchFailed: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
  },
});

export const { publicationsReceived, publicationLoading, fetchFailed } =
  publicationsReducer.actions;

export const fetchAllPublications = () => async dispath => {
  dispath(publicationLoading());
  try {
    const allPublications = await fetch("");
    dispath(publicationsReceived(allPublications));
  } catch (err) {
    dispath(fetchFailed(err.toString()));
  }
};

export default publicationsReducer.reducer;
