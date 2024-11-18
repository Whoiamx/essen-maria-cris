import { createSlice } from "@reduxjs/toolkit";
import { ProductsEssen } from "../../../data";

const INITIAL_STATE = {
  products: ProductsEssen,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
