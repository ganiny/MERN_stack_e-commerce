import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
import ResetPasswordPage from "./pages/ResetPassword";
import ProductsListPage from "./pages/ProductsList";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentFailurePage from "./pages/PaymentFailurePage";
import OAuthSuccessPage from "./pages/OAuthSuccessPage";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signin"
            element={!user ? <SignInPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/wishlist"
            element={user ? <WishListPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/cart"
            element={user ? <CartPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/checkout"
            element={user ? <CheckOutPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/account"
            element={user ? <AccountPage /> : <Navigate to={"/"} />}
          />
          <Route path="/success" element={<PaymentSuccessPage />} />
          <Route path="/cancel" element={<PaymentFailurePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/forget-password"
            element={!user ? <ForgetPasswordPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/reset-password/:userId/:token"
            element={!user ? <ResetPasswordPage /> : <Navigate to={"/"} />}
          />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/oauth-success" element={<OAuthSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
