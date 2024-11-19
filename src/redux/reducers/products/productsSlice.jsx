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
    getOneProduct: (state, action) => {
      const productOne = state.products.find(
        (item) => item.id === action.payload.id
      );
      console.log(productOne);
      return productOne;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
