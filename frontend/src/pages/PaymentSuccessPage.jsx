/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/apiCalls/cartApiCalls";

function PaymentSuccessPage() {
  const cart = useSelector((state) => state.cart.cart.cart) ?? [];
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    cart?.map((item)=>{
      setTimeout(()=>{
        dispatch(removeProductFromCart(item._id, user.token));
      }, 50);
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-4 w-full max-w-2xl transform rounded-xl bg-white p-12 text-center shadow-lg transition-all hover:shadow-xl">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {/* Main Content */}
        <h1 className="mb-6 text-4xl font-extrabold text-green-600">
          Payment Successful!
        </h1>
        <p className="mb-8 text-xl text-gray-700">
          Thank you for your purchase.
        </p>

        {/* Back to Home Button */}
        <div className="mt-12">
          <Link
            to={"/"}
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-green-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PaymentSuccessPage;
