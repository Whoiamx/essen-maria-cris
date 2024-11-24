import { createSlice } from "@reduxjs/toolkit";
import { ProductsEssen } from "../../../data";

const INITIAL_STATE = {
  originalProducts: ProductsEssen, // Mantén los productos originales
  products: ProductsEssen, // Productos actuales (modificables)
  filterProducts: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
    getProductsByCategory: (state, action) => {
      const itemByCategory = action.payload;

      // Filtrar productos por categoría
      const filteredProducts = state.originalProducts.filter(
        (product) => product.category === itemByCategory
      );

      // Si no hay coincidencias, restablecer a los productos originales
      state.products =
        filteredProducts.length > 0 ? filteredProducts : state.originalProducts;
    },
    resetProducts: (state) => {
      // Acción para restaurar productos originales manualmente si es necesario
      state.products = state.originalProducts;
    },
  },
});

export const { getProducts, getProductsByCategory, resetProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
