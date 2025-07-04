import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTableRow from "../components/CartTableRow";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

function CartPage() {
  const [subtotals, setSubtotals] = useState({});
  const [quantities, setQuantities] = useState({}); 
  const cart = useSelector((state) => state.cart.cart.cart) ?? [];

  const updateSubtotal = (id, subtotal) => {
    setSubtotals((prev) => ({
      ...prev,
      [id]: subtotal,
    }));
  };

  const updateQuantity = (id, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  };

  const total = Object.values(subtotals).reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51QotcWRtpDBoq2iRhlmAq8Og2mBw2yFbHJOh1HMiWB7ZEQh5OnhVL5FWUs4mYYaob5iRXSrqQWYJG4Y3iMD29Epk00OKJX6EwJ",
    );
    const body = {
      products: cart,
      quantities: Object.values(quantities),
    };
    const response = await fetch("https://mern-stack-e-commerce-2byo.vercel.app/create-checkout-session",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },

      body: JSON.stringify(body), 
    });
    
    const session = await response.json();
    const result =  stripe.redirectToCheckout({sessionId : session.id});
    if (result.error) {
      toast(result.error);
    }
  };

  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col md:mx-[135px]">
      <div className="mb-20 w-full font-poppins text-sm font-normal text-black">
        <ul className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              className="flex items-center opacity-50 focus:outline-none"
              to={"/"}
            >
              Home
            </Link>
            <svg
              className="mx-2 size-5 shrink-0 opacity-50"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </li>

          <li className="inline-flex items-center truncate" aria-current="page">
            Cart
          </li>
        </ul>
      </div>
      <div className="mb-20 flex flex-col">
        {cart?.length > 0 ? (
          <div className="mb-6 overflow-x-auto xl:overflow-x-hidden">
            <table id="cartTable" className="w-full font-poppins text-sm font-normal text-black">
              <thead className="w-full">
                <tr className="justify-items-between grid grid-cols-[30px,150px,20px,20px,20px] gap-40 border-b border-[#0000000D] pb-6">
                  <td className="pl-10 text-left"></td>
                  <td className="pl-10 text-left">Product</td>
                  <td className="text-left">Price</td>
                  <td className="text-left">Quantity</td>
                  <td className="pr-16 text-left">Subtotal</td>
                </tr>
              </thead>
              <tbody className="w-full">
                {cart?.map((item) => (
                  <CartTableRow
                    onQuantityChange={updateQuantity}
                    onSubtotalChange={updateSubtotal}
                    key={item?._id}
                    id={item?._id}
                    image={item?.mainImage}
                    title={item?.title}
                    price={item?.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="mb-5 flex items-center justify-center font-inter text-5xl font-bold text-red-600">
            Your Cart Is Empty
          </h2>
        )}
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <Link to={"/"}>
            <button
              type="button"
              className="w-full text-nowrap rounded border border-[#00000080] px-12 py-4 font-poppins text-base font-medium text-black"
            >
              Return To Shop
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex max-w-[527px] flex-col items-start gap-4 xl:flex-row">
          <input
            className="w-full text-nowrap rounded border border-[#00000080] px-6 py-4 font-poppins text-base font-medium text-black"
            type="text"
            placeholder="Coupon Code"
          />
          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
          >
            Apply Coupon
          </button>
        </div>
        <div className="flex w-full max-w-[470px] flex-col gap-4 rounded border-[1.5px] border-black px-6 py-8">
          <h3 className="pb-6 font-poppins text-xl font-medium text-black">
            Cart Total
          </h3>
          <p className="flex justify-between border-b border-black border-opacity-40 pb-4 font-poppins text-base font-normal text-black">
            <span>Subtotal:</span>
            <span>{total.toFixed(2)}</span>
          </p>
          <p className="flex justify-between border-b border-black border-opacity-40 pb-4 font-poppins text-base font-normal text-black">
            <span>Shipping:</span>
            <span>Free</span>
          </p>
          <p className="flex justify-between pb-4 font-poppins text-base font-normal text-black">
            <span>Total:</span>
            <span>{total.toFixed(2)}</span>
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePayment}
              type="button"
              className="mb-4 flex w-full items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartPage;
