import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppLocale } from "./types";

export type LocaleState = {
  locale: AppLocale;
};

const initialState: LocaleState = {
  locale: "ru",
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<AppLocale>) {
      state.locale = action.payload;
    },
    toggleLocale(state) {
      state.locale = state.locale === "ru" ? "en" : "ru";
    },
  },
});

export const { setLocale, toggleLocale } = localeSlice.actions;
export const localeReducer = localeSlice.reducer;
