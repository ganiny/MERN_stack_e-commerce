import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: localStorage.getItem("wishlist")? JSON.parse(localStorage.getItem("wishlist")): [],
    },
    reducers: {
      getWishlist(state, action) {
        state.wishlist = action.payload;
      },
      clearWishlist(state) {
        state.wishlist = [];
      }
    },
  });
  
  export const { getWishlist, clearWishlist } = wishlistSlice.actions;
  export default wishlistSlice.reducer;
  