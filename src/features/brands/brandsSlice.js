import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",
  initialState: { activeFilter: "all" },
  reducers: {
    setFilter: (s, a) => { s.activeFilter = a.payload; },
  },
});

export const { setFilter } = brandsSlice.actions;
export default brandsSlice.reducer;