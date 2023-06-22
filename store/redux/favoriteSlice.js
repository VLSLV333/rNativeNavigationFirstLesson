import { createSlice } from "@reduxjs/toolkit";

const initialState = { ids: [] };

const favoritesSlice = createSlice({
  initialState,
  name: "favoriteSlice",
  reducers: {
    addFavorite(state, { payload }) {
      state.ids.push(payload);
      //   console.log(payload);
      //   return [...state.ids, payload];
    },
    removeFavorite(state, { payload }) {
        state.ids.splice(state.ids.indexOf(payload),1)
    //   const arrayWithIds = state.ids.filter((itemId) => itemId !== payload);
    //   return { ids: arrayWithIds };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
