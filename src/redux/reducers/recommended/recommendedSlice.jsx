import { createSlice } from "@reduxjs/toolkit";
import { ProductsEssen } from "../../../data";

const INITIAL_STATE = {
  recommended: ProductsEssen.filter((el) => el.id % 2 === 0), // Datos iniciales filtrados
  originalRecommended: ProductsEssen.filter((el) => el.id % 2 === 0), // Datos originales
  filterProducts: false,
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    getRecommended: (state) => state,
    getProductsRecommendedByCategory: (state, action) => {
      const itemByCategory = action.payload;

      // Filtrar productos por categoría
      const filteredProducts = state.originalRecommended.filter(
        (recommended) => recommended.category === itemByCategory
      );

      // Si no hay productos que coincidan, restablecer al estado original
      state.recommended =
        filteredProducts.length > 0
          ? filteredProducts
          : state.originalRecommended;
    },
  },
});

export const { getRecommended, getProductsRecommendedByCategory } =
  recommendedSlice.actions;
export default recommendedSlice.reducer;
