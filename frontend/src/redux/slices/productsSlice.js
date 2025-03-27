import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
    product: localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : null,
  },
  reducers: {
    getAllProducts(state, action) {
      state.products = action.payload;
    },
    getSingleProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { getAllProducts, getSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;
