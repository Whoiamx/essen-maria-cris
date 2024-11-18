import { createSlice } from "@reduxjs/toolkit";
import { ProductsEssen } from "../../../data";

const initialState = {
  products: ProductsEssen,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state) => {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((product) => product.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    },
    decrement: (state) => {
      state.cart -= 1;
    },
    CLEAR_CART: (state) => {
      state = initialState.cart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, CLEAR_CART } = cartSlice.actions;

export default cartSlice.reducer;
