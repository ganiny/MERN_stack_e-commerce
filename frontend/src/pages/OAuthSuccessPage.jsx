import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../redux/slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

function OAuthSuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      // You may want to fetch user info from backend using the token
      // For now, just store token and redirect
      localStorage.setItem("userInfo", JSON.stringify({ token }));
      dispatch(signin({ token }));
      navigate("/");
    }
  }, [location, dispatch, navigate]);

  return <div>Signing you in with Google...</div>;
}

export default OAuthSuccessPage;