/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProducts } from "../redux/apiCalls/productsApiCalls";
import { fetchWishlist } from "../redux/apiCalls/wishlistApiCalls";
import { addProductToCart } from "../redux/apiCalls/cartApiCalls";
import ProductCard from "../components/ProductCard";

function ProductDetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products?.products);
  const product = useSelector((state) => state.products?.product?.product);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart.cart) ?? [];
  const wishlist =
    useSelector((state) => state.wishlist.wishlist.wishlist) ?? [];
  const ids = wishlist?.map((obj) => obj._id);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const cartIds = cart?.map((obj) => obj._id);
  const [isProductInCart, setIsProductInCart] = useState(false);

  
  
  
  const randomProducts = products.slice(0, 4);

  useEffect(() => {
    setIsProductInWishlist(ids?.includes(id));
    setIsProductInCart(cartIds?.includes(id));
  }, [ids, cartIds]);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProduct(id));
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col md:mx-[135px]">
      <div className="mb-20 flex w-full items-center justify-between font-poppins text-sm font-normal text-black">
        <ul className="flex items-center">
          <li className="inline-flex items-center">
            <Link
              className="flex items-center opacity-50 focus:outline-none"
              to={"/account"}
            >
              Account
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
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              {product?.category}
            </a>
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
        </ul>
      </div>
      <div className="mb-[120px] flex flex-col xl:flex-row xl:gap-[70px]">
        <div className="mb-[30px] flex flex-col gap-10 xl:flex-row-reverse">
          <div className="flex h-full w-full items-center justify-center rounded bg-[#F5F5F5] lg:ml-[30px]">
            <img
              className="h-[315px] w-[446px] object-contain"
              src={product?.mainImage}
              alt="product image"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="flex h-[138px] w-[170px] items-center justify-center rounded bg-[#F5F5F5]">
              <img
                className="h-[114px] w-[121px] object-contain"
                src={product?.images[0]}
                alt="product details images"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center rounded bg-[#F5F5F5]">
              <img
                className="h-[97px] w-[112px] object-contain"
                src={product?.images[1]}
                alt="product details images"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center rounded bg-[#F5F5F5]">
              <img
                className="h-[94px] w-[134px] object-contain"
                src={product?.images[2]}
                alt="product details images"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center rounded bg-[#F5F5F5]">
              <img
                className="h-[106px] w-[122px] object-contain"
                src={product?.images[3]}
                alt="product details images"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-black border-opacity-50 pb-4">
            <p className="font-inter text-2xl font-semibold text-black">
              {product?.title}
            </p>
            <div className="mt-4 flex items-center gap-2">
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
                  className="h-5 w-5 text-black opacity-25"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              </div>

              <p className="font-poppins text-sm font-normal text-black opacity-50">
                ({product?.reviews.length})
                <span className="ml-4 border-l border-black pl-4 text-[#00FF66]">
                  {product?.stock} in stock
                </span>
              </p>
            </div>
            <p className="mb-6 mt-4 font-inter text-2xl font-normal text-black">
              ${product?.price}
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              {product?.description}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mt-4 flex flex-row items-center">
              <span className="mr-6 font-inter text-xl font-normal text-black">
                Colours:
              </span>
              <div>
                <input
                  type="radio"
                  name="color"
                  id="color1"
                  className="peer hidden h-5 w-5"
                />
                <label
                  htmlFor="color1"
                  className="relative mr-2 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black p-1 before:absolute before:block before:h-full before:w-full before:bg-[#A0BCE0] peer-checked:before:hidden"
                >
                  <span className="h-[9px] w-[9px] rounded-full bg-[#A0BCE0]"></span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="color"
                  id="color2"
                  className="peer hidden h-5 w-5"
                />
                <label
                  htmlFor="color2"
                  className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black p-1 before:absolute before:block before:h-full before:w-full before:bg-[#E07575] peer-checked:before:hidden"
                >
                  <span className="h-[9px] w-[9px] rounded-full bg-[#E07575]"></span>
                </label>
              </div>
            </div>
            <div className="mb-6 mt-4 flex flex-row items-center">
              <span className="mr-6 font-inter text-xl font-normal text-black">
                Size:
              </span>
              <div className="ml-2 flex flex-col items-center gap-4 font-poppins text-sm font-medium text-black xl:flex-row">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] bg-white hover:bg-[#DB4444] hover:text-white">
                  XS
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] bg-white hover:bg-[#DB4444] hover:text-white">
                  S
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] bg-white hover:bg-[#DB4444] hover:text-white">
                  M
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] bg-white hover:bg-[#DB4444] hover:text-white">
                  L
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] bg-white hover:bg-[#DB4444] hover:text-white">
                  XL
                </div>
              </div>
            </div>
            {user && (
              <div className="mb-10 flex w-full flex-col items-center gap-4 xl:flex-row">
                <Link
                  to={"/cart"}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addProductToCart(id, user.token));
                    isProductInWishlist &&
                      dispatch(fetchWishlist(id, user.token));
                    setIsProductInWishlist(false);
                    setIsProductInCart(true);
                  }}
                  type="button"
                  className="mr-[3px] flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-[48px] py-[10px] font-poppins text-base font-medium tracking-wider text-[#fafafa]"
                >
                  Buy Now
                </Link>

                <a
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    !isProductInCart && dispatch(fetchWishlist(id, user.token));
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00000080] bg-white">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill={isProductInWishlist ? "red" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            )}
            <div className="flex flex-col rounded border border-[#00000080]">
              <div className="flex items-center gap-4 pb-4 pl-4 pr-[51px] pt-6">
                <div className="flex items-center justify-center">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_261_4843)">
                      <path
                        d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 11.8182H11.6667"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.81836 15.4545H8.48503"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 19.0909H11.6667"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4843">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 font-poppins text-base font-medium text-black">
                    Free Delivery
                  </p>
                  <a href="#">
                    <p className="font-poppins text-xs font-medium text-black underline">
                      Enter your postal code for Delivery Availability
                    </p>
                  </a>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#00000080]"></div>
              <div className="flex items-center gap-4 pb-6 pl-4 pt-4">
                <div className="flex items-center justify-center">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_261_4865)">
                      <path
                        d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4865">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 font-poppins text-base font-medium text-black">
                    Return Delivery
                  </p>

                  <p className="font-poppins text-xs font-medium text-black">
                    Free 30 Days Delivery Returns.
                    <a href="#" className="underline">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0 md:mb-8">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            Related Items
          </p>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {randomProducts?.map((product) => (
          <ProductCard 
          key={product?._id}
          id={product?._id}
          mainImage={product?.mainImage}
          title={product?.title}
          price={product?.price}
          reviews={product?.reviews}
           />
        ))}
        </div>
      </div>
    </section>
  );
}
export default ProductDetailsPage;
