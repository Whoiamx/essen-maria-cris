import { createSlice } from "@reduxjs/toolkit";
import { ProductsEssen } from "../../../data";

const INITIAL_STATE = {
  recommended: ProductsEssen.filter((el) => el.id % 2 === 0),
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    getRecommended: (state) => state,
  },
});

export const { getRecommended } = recommendedSlice.actions;
export default recommendedSlice.reducer;
