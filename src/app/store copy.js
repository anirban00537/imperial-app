import { configureStore } from "@reduxjs/toolkit";
import QueSlice from "../features/que/QueSlice";

export const store = configureStore({
  reducer: {
    QueSlice: QueSlice,
  },
});
