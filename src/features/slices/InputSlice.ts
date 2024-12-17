import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputSlice {
  value: string;
}

const initialState: InputSlice = {
  value: "",
};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
