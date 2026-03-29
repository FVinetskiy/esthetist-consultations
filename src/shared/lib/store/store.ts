import { configureStore } from "@reduxjs/toolkit";
import { localeReducer } from "@/entities/locale";
import { themeReducer } from "@/entities/theme";

export function makeStore() {
  return configureStore({
    reducer: {
      theme: themeReducer,
      locale: localeReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
