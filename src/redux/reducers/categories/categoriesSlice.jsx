import { createSlice } from "@reduxjs/toolkit";
import { CategoriesOfProducts, ProductsEssen } from "../../../data";

const INITIAL_STATE = {
  categories: CategoriesOfProducts,
  productsAll: ProductsEssen,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => state,
  },
});

export const { getCategories } = categoriesSlice.actions; // Se exporto la funcion del reducer getCategories

export default categoriesSlice.reducer; // Se exporto por defecto todo el slice
