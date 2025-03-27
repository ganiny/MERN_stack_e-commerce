import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    signup(state, action) {
      state.user = action.payload;
    },
    signin(state, action) {
      state.user = action.payload;
    },
    signout(state) {
      state.user = null;
    },
  },
});

export const { signup, signin, signout } = authSlice.actions;
export default authSlice.reducer;
