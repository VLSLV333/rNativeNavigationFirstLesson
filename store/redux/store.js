import { configureStore } from "@reduxjs/toolkit";

import favoriteSliceReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteSlice: favoriteSliceReducer,
  },
});
