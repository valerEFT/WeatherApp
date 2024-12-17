import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isDarkMode: boolean;
}

const initialState: InitialState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    disableDarkMode: (state) => {
      state.isDarkMode = false;
    },
    enableDarkMode: (state) => {
      state.isDarkMode = true;
    },
  },
});

export const { disableDarkMode, enableDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
