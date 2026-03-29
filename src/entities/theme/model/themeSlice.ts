import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ColorMode } from "./types";

export type ThemeState = {
  colorMode: ColorMode;
};

const initialState: ThemeState = {
  colorMode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleColorMode(state) {
      state.colorMode = state.colorMode === "light" ? "dark" : "light";
    },
    setColorMode(state, action: PayloadAction<ColorMode>) {
      state.colorMode = action.payload;
    },
  },
});

export const { toggleColorMode, setColorMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
