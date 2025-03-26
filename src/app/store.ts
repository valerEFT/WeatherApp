import { configureStore } from "@reduxjs/toolkit";
import InputValueReducer from "../features/slices/InputSlice";
import themeReducer from "../features/slices/theme";
export const store = configureStore({
  reducer: {
    input: InputValueReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
