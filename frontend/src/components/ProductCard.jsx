/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../redux/apiCalls/wishlistApiCalls";
import { addProductToCart } from "../redux/apiCalls/cartApiCalls";

function ProductCard({ id, title, mainImage, price, reviews = [] }) {
  const [addToCartAppearOnHover, setAddToCartAppearOnHover] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart.cart) ?? [];
  const wishlist =
    useSelector((state) => state.wishlist.wishlist.wishlist) ?? [];
  const ids = wishlist?.map((obj) => obj._id);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const cartIds = cart?.map((obj) => obj._id);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInWishlist(ids?.includes(id));
    setIsProductInCart(cartIds?.includes(id));
  }, [ids, cartIds]);

  return (
    <Link
      className="h-fit"
      to={`/products/${id}`}
      onMouseEnter={() => setAddToCartAppearOnHover(true)}
      onMouseLeave={() => setAddToCartAppearOnHover(false)}
    >
      <div className="flex flex-col">
        <div className="flex h-full flex-col bg-[#f5f5f5]">
          <div className="flex flex-col bg-[#f5f5f5]">
            <div className="flex items-start justify-between pt-4">
              <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                -35%
              </span>
              <div className="flex flex-col gap-2">
                {user && !isProductInCart && (
                  <>
                    <button
                      type="button"
                      className="me-3 rounded-full bg-white p-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(fetchWishlist(id, user.token));
                      }}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill={isProductInWishlist ? "red" : "none"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="me-3 rounded-full bg-white p-2"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mx-auto flex h-[450px] w-[270px] items-center justify-center bg-[#f5f5f5] object-contain">
              <img src={mainImage} alt={title} className="mt-2 rounded-lg" />
            </div>
          </div>
        </div>
        {user && !isProductInCart ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProductToCart(id, user.token));
              isProductInWishlist && dispatch(fetchWishlist(id, user.token));
              setIsProductInWishlist(false);
              setIsProductInCart(true);
            }}
            style={
              addToCartAppearOnHover ? { display: "flex" } : { display: "none" }
            }
            type="button"
            className="addToCartBtn flex w-full items-center justify-center gap-2 rounded-bl rounded-br bg-black px-5 py-2.5 font-poppins text-xs font-normal text-white"
          >
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.75 3.75H5.75L8 16.5H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add to cart
          </button>
        ) : user && isProductInCart ? (
          <div className="flex w-full items-center justify-center gap-2 rounded-bl rounded-br bg-black px-5 py-2.5 font-poppins text-xs font-normal text-white">
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.75 3.75H5.75L8 16.5H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Item Added To Cart
          </div>
        ) : (
          <></>
        )}
        <div className="mt-4 flex flex-col">
          <p className="line-clamp-1 font-poppins text-base font-medium text-black">
            {title}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
              ${price}
            </p>
            <span className="font-poppins text-base font-medium leading-tight text-black line-through opacity-50">
              $1160
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="-mt-[3px] flex items-center">
              <svg
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>

            <p className="font-poppins text-sm font-semibold text-black opacity-50">
              ({Array.isArray(reviews) ? reviews.length : 0})
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
