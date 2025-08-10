import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../redux/slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function OAuthSuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      let decoded;
      try {
        decoded = jwtDecode(token);
      } catch (e) {
        decoded = null;
      }
      const userPayload = decoded
        ? { id: decoded.id, isAdmin: decoded.isAdmin }
        : null;
      const payload = userPayload
        ? { userWithoutPassword: userPayload, token }
        : { token };
      localStorage.setItem("userInfo", JSON.stringify(payload));
      dispatch(signin(payload));
      navigate("/");
    }
  }, [location, dispatch, navigate]);

  return <div>Signing you in with Google...</div>;
}

export default OAuthSuccessPage;
