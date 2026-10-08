import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { introComplete: false },
  reducers: {
    completeIntro: (s) => { s.introComplete = true; },
  },
});

export const { completeIntro } = uiSlice.actions;
export default uiSlice.reducer;