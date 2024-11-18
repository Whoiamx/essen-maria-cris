import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const newItem = action.payload;

      let itemInCart = state.cart.find((product) => product.id === newItem.id);

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
  },
  CLEAR_CART: (state) => {
    return {
      ...state,
      cart: [],
    };
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, CLEAR_CART } = cartSlice.actions;

export default cartSlice.reducer;
