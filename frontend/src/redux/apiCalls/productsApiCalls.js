import axios from "axios";
import { getAllProducts, getSingleProduct } from "../slices/productsSlice";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/products`,
});

// Get All Products
export function getProducts(category, keyword) {
  return async (dispatch) => {
    if (category) {
      try {
        const { data } = await API.get(
          `?category=${encodeURIComponent(category)}`,
        );
        dispatch(getAllProducts(data));
        localStorage.setItem("products", JSON.stringify(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else if (keyword) {
      try {
        const { data } = await API.get(
          `?keyword=${encodeURIComponent(keyword)}`,
        );
        dispatch(getAllProducts(data));
        localStorage.setItem("products", JSON.stringify(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const { data } = await API.get("/?pageNumber=1");
        dispatch(getAllProducts(data));
        localStorage.setItem("products", JSON.stringify(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
}

// Get Single Products
export function getProduct(productId) {
  return async (dispatch) => {
    try {
      const { data } = await API.get(`/${productId}`);
      dispatch(getSingleProduct(data));
      localStorage.setItem("singleProduct", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
