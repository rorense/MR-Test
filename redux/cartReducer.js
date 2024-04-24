import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const size = state.products.find(
        (item) => item.size === action.payload.size
      );

      if (item && size) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
