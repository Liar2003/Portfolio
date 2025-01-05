import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "dark" },
  reducers: {
    setLight: (state) => {
      state.mode = "light";
    },
    setDark: (state) => {
      state.mode = "dark";
    },
  },
});

export const { setLight, setDark } = themeSlice.actions;
export default themeSlice.reducer;
