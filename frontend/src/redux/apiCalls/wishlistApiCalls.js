import axios from "axios";
import { clearWishlist, getWishlist } from "../slices/wishlistSlice";
import {toast} from "react-toastify";



// Get Wishlist with non-repeated products
export function fetchWishlist(productId, token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8000/api/users/wishlist/${productId}`,null,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getWishlist(data));
      localStorage.setItem("wishlist", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Clear Wishlist 
export function removeWishlist() {
  return async (dispatch) => {
    try {
      
      dispatch(clearWishlist());
      localStorage.removeItem("wishlist");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}