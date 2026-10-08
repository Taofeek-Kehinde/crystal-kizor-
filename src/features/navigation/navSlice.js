import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { isOpen: false, scrolled: false },
  reducers: {
    toggleMenu: (s) => { s.isOpen = !s.isOpen; },
    closeMenu: (s) => { s.isOpen = false; },
    setScrolled: (s, a) => { s.scrolled = a.payload; },
  },
});

export const { toggleMenu, closeMenu, setScrolled } = navSlice.actions;
export default navSlice.reducer;