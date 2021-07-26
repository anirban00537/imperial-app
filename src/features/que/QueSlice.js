import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const QueSlice = createSlice({
  name: "QueSlice",
  initialState,
  reducers: {
    addQue: (state, { payload }) => {
      state = 0;
    },
  },
});

export const { addQue } = QueSlice.actions;
export default QueSlice.reducer;
