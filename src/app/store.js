import { configureStore } from "@reduxjs/toolkit";
import publicationsReducer from "reducers/publicationsReducer";

export default configureStore({
  reducer: {
    publications: publicationsReducer,
  },
});
