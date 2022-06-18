import { configureStore } from "@reduxjs/toolkit";
import universitiesReducer from "./universities/universitiesSlice";

export const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});
