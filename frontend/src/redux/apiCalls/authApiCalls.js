import axios from "axios";
import { signin, signout, signup } from "../slices/authSlice";
import { toast } from "react-toastify";

const API = axios.create({ baseURL: "https://mern-stack-e-commerce-2byo.vercel.app/api/auth" });

// Sign up
export function signupUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await API.post("/signup", user);
      dispatch(signup(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success(`Your Sign Up is Successful!\nWelcome ${data.userWithoutPassword.username}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Sign In
export function signinUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await API.post("/signin", user);
      dispatch(signin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success(`Your Sign In is Successful!\nWelcome ${data.userWithoutPassword.username}`);
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Sign out
export function signoutUser() {
  return (dispatch) => {
    dispatch(signout());
    localStorage.clear();
  }
}

// Google Sign In
// export function googleSignin() {
//   window.open("http://localhost:8000/api/auth/google", "_self");
// }
