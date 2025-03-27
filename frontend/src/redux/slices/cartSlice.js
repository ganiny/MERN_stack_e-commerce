import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")): [],
    },
    reducers: {
      addToCart(state, action) {
        state.cart = action.payload;
      },
      removeFromCart(state, action) {
        state.cart = action.payload;
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  