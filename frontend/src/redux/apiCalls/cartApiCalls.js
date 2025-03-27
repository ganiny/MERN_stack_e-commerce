import axios from "axios";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import {toast} from "react-toastify";



// Add Item To Cart
export function addProductToCart(productId, token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8000/api/users/cart/add/${productId}`,null,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(addToCart(data));
      localStorage.setItem("cart", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Remove Item From Cart
export function removeProductFromCart(productId, token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8000/api/users/cart/remove/${productId}`,null,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(removeFromCart(data));
      localStorage.setItem("cart", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}