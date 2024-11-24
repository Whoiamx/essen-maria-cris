import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  IsVisible: false,
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
    CLEAR_CART: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
    DELETE_ALL_ONE_ELEMENT: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.cart = state.cart.filter(
        (product) => product.id !== itemIdToRemove
      );
    },
    toggleCart: (state) => {
      if (state.cart.length > 0) {
        state.isVisible = !state.isVisible;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, CLEAR_CART, DELETE_ALL_ONE_ELEMENT, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
