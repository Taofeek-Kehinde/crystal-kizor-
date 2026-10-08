import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navigation/navSlice";
import brandsReducer from "../features/brands/brandsSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    brands: brandsReducer,
    ui: uiReducer,
  },
});