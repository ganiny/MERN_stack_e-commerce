/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/apiCalls/productsApiCalls";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

const mensClothingCategory = "men's clothing";
const womensClothingCategory = "women's clothing";
const jeweleryCategory = "jewelery";
const electronicsCategory = "electronics";

function HomePage() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const products =
    useSelector((state) => state.products.products.products) ?? [];
  const randomProducts = products.slice(0, 8);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  useEffect(() => {
    if (window.HSCarousel) {
      window.HSCarousel.autoInit();
    }
  }, [location]);

  return (
    <section className="mx-5 mb-36 flex h-full flex-col md:mx-[135px]">
      <div className="mb-[140px] flex">
        <ul className="hidden border-r-[0.5px] border-black border-opacity-30 pr-4 pt-10 font-poppins text-base font-normal text-black sm:flex sm:w-[217px] sm:flex-col sm:gap-4">
          <Link
            onClick={() => {
              dispatch(getProducts(womensClothingCategory, false));
            }}
            to={"/products"}
          >
            <li className="flex justify-between">
              <p>Women’s Fashion</p>
            </li>
          </Link>
          <Link
            onClick={() => {
              dispatch(getProducts(mensClothingCategory, false));
            }}
            to={"/products"}
          >
            <li className="flex justify-between">
              <p>Men’s Fashion</p>
            </li>
          </Link>
          <Link
            onClick={() => {
              dispatch(getProducts(electronicsCategory, false));
            }}
            to={"/products"}
          >
            <li>
              <p>Electronics</p>
            </li>
          </Link>
          <Link
            onClick={() => {
              dispatch(getProducts(jeweleryCategory, false));
            }}
            to={"/products"}
          >
            <li>
              <p>Jewelery</p>
            </li>
          </Link>
        </ul>

        <div
          data-hs-carousel='{
          "dotsItemClasses": "hs-carousel-active:bg-[#DB4444] size-3 border border-gray-400 rounded-full cursor-pointer",
          "isAutoPlay": true
          }'
          className="relative px-2 pt-10 sm:pl-11"
        >
          <div className="hs-carousel relative h-[650px] w-[280px] overflow-hidden bg-white sm:w-[450px] xl:h-[344px] xl:w-[892px]">
            <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap transition-transform duration-700">
              <div className="hs-carousel-slide">
                <div className="flex h-full justify-center bg-black p-6">
                  <div className="flex flex-col self-center text-[#fafafa] transition duration-700 xl:flex-row">
                    <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
                      <div className="mb-5 flex items-center">
                        <svg
                          width={40}
                          height={49}
                          viewBox="0 0 40 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width={40}
                            height={49}
                            fill="url(#pattern0_163_2562)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_163_2562"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_163_2562"
                                transform="matrix(0.00199495 0 0 0.00162551 -0.218182 -0.0888889)"
                              />
                            </pattern>
                            <image
                              id="image0_163_2562"
                              width={720}
                              height={720}
                            />
                          </defs>
                        </svg>

                        <p className="ml-[14.5px] font-poppins text-base font-normal">
                          iPhone 14 Series
                        </p>
                      </div>
                      <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
                        Up to 10% <br /> off Voucher
                      </p>
                      {!user && (
                        <div>
                          <Link
                            to={"/signup"}
                            className="flex items-center gap-2"
                          >
                            <p className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8">
                              Shop Now
                            </p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="lg:h-[352px] lg:w-[496px] xl:-mr-20">
                      <img
                        className="object-contain"
                        src="https://m.media-amazon.com/images/I/61NfnaEUqOL._AC_UY327_FMwebp_QL65_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex h-full justify-center bg-black p-6">
                  <div className="flex flex-col self-center text-[#fafafa] transition duration-700 xl:flex-row">
                    <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
                      <div className="mb-5 flex items-center">
                        <svg
                          width={40}
                          height={49}
                          viewBox="0 0 40 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width={40}
                            height={49}
                            fill="url(#pattern0_163_2562)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_163_2562"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_163_2562"
                                transform="matrix(0.00199495 0 0 0.00162551 -0.218182 -0.0888889)"
                              />
                            </pattern>
                            <image
                              id="image0_163_2562"
                              width={720}
                              height={720}
                            />
                          </defs>
                        </svg>

                        <p className="ml-[14.5px] font-poppins text-base font-normal">
                          iPhone 14 Series
                        </p>
                      </div>
                      <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
                        Up to 10% <br /> off Voucher
                      </p>
                      {!user && (
                        <div>
                          <Link
                            to={"/signup"}
                            className="flex items-center gap-2"
                          >
                            <p className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8">
                              Shop Now
                            </p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="lg:h-[352px] lg:w-[496px] xl:-mr-20">
                      <img
                        className="object-contain"
                        src="https://m.media-amazon.com/images/I/61NfnaEUqOL._AC_UY327_FMwebp_QL65_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex h-full justify-center bg-black p-6">
                  <div className="flex flex-col self-center text-[#fafafa] transition duration-700 xl:flex-row">
                    <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
                      <div className="mb-5 flex items-center">
                        <svg
                          width={40}
                          height={49}
                          viewBox="0 0 40 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width={40}
                            height={49}
                            fill="url(#pattern0_163_2562)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_163_2562"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_163_2562"
                                transform="matrix(0.00199495 0 0 0.00162551 -0.218182 -0.0888889)"
                              />
                            </pattern>
                            <image
                              id="image0_163_2562"
                              width={720}
                              height={720}
                            />
                          </defs>
                        </svg>

                        <p className="ml-[14.5px] font-poppins text-base font-normal">
                          iPhone 14 Series
                        </p>
                      </div>
                      <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
                        Up to 10% <br /> off Voucher
                      </p>
                      {!user && (
                        <div>
                          <Link
                            to={"/signup"}
                            className="flex items-center gap-2"
                          >
                            <p className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8">
                              Shop Now
                            </p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="lg:h-[352px] lg:w-[496px] xl:-mr-20">
                      <img
                        className="object-contain"
                        src="https://m.media-amazon.com/images/I/61NfnaEUqOL._AC_UY327_FMwebp_QL65_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex h-full justify-center bg-black p-6">
                  <div className="flex flex-col self-center text-[#fafafa] transition duration-700 xl:flex-row">
                    <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
                      <div className="mb-5 flex items-center">
                        <svg
                          width={40}
                          height={49}
                          viewBox="0 0 40 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width={40}
                            height={49}
                            fill="url(#pattern0_163_2562)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_163_2562"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_163_2562"
                                transform="matrix(0.00199495 0 0 0.00162551 -0.218182 -0.0888889)"
                              />
                            </pattern>
                            <image
                              id="image0_163_2562"
                              width={720}
                              height={720}
                            />
                          </defs>
                        </svg>

                        <p className="ml-[14.5px] font-poppins text-base font-normal">
                          iPhone 14 Series
                        </p>
                      </div>
                      <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
                        Up to 10% <br /> off Voucher
                      </p>
                      {!user && (
                        <div>
                          <Link
                            to={"/signup"}
                            className="flex items-center gap-2"
                          >
                            <p className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8">
                              Shop Now
                            </p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="lg:h-[352px] lg:w-[496px] xl:-mr-20">
                      <img
                        className="object-contain"
                        src="https://m.media-amazon.com/images/I/61NfnaEUqOL._AC_UY327_FMwebp_QL65_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex h-full justify-center bg-black p-6">
                  <div className="flex flex-col self-center text-[#fafafa] transition duration-700 xl:flex-row">
                    <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
                      <div className="mb-5 flex items-center">
                        <svg
                          width={40}
                          height={49}
                          viewBox="0 0 40 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width={40}
                            height={49}
                            fill="url(#pattern0_163_2562)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_163_2562"
                              patternContentUnits="objectBoundingBox"
                              width={1}
                              height={1}
                            >
                              <use
                                xlinkHref="#image0_163_2562"
                                transform="matrix(0.00199495 0 0 0.00162551 -0.218182 -0.0888889)"
                              />
                            </pattern>
                            <image
                              id="image0_163_2562"
                              width={720}
                              height={720}
                            />
                          </defs>
                        </svg>

                        <p className="ml-[14.5px] font-poppins text-base font-normal">
                          iPhone 14 Series
                        </p>
                      </div>
                      <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
                        Up to 10% <br /> off Voucher
                      </p>
                      {!user && (
                        <div>
                          <Link
                            to={"/signup"}
                            className="flex items-center gap-2"
                          >
                            <p className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8">
                              Shop Now
                            </p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="lg:h-[352px] lg:w-[496px] xl:-mr-20">
                      <img
                        className="object-contain"
                        src="https://m.media-amazon.com/images/I/61NfnaEUqOL._AC_UY327_FMwebp_QL65_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center space-x-2" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            {"Today's"}
          </p>
        </div>
        <div className="-mt-6 mb-24 flex flex-col items-center gap-10 md:flex-row md:gap-20 lg:mb-10">
          <p className="font-inter text-4xl font-semibold text-black">
            Flash Sales
          </p>
          <div className="count-down-main flex w-[250px] items-start justify-center gap-4">
            <div className="timer relative w-16">
              <p className="mt-1 w-full text-center font-poppins text-sm font-medium text-black">
                Days
              </p>
              <h3 className="countdown-element days text-center font-inter text-[32px] font-bold text-black"></h3>
              <h3 className="absolute -right-2 bottom-3 text-2xl font-semibold text-[#E07575]">
                :
              </h3>
            </div>
            <div className="timer relative w-16">
              <p className="mt-1 w-full text-center font-poppins text-sm font-medium text-black">
                Hours
              </p>
              <h3 className="countdown-element hours text-center font-inter text-[32px] font-bold text-black"></h3>
              <h3 className="absolute -right-2 bottom-3 text-2xl font-semibold text-[#E07575]">
                :
              </h3>
            </div>
            <div className="timer relative w-16">
              <p className="mt-1 w-full text-center font-poppins text-sm font-medium text-black">
                Minutes
              </p>
              <h3 className="countdown-element minutes text-center font-inter text-[32px] font-bold text-black"></h3>
              <h3 className="absolute -right-2 bottom-3 text-2xl font-semibold text-[#E07575]">
                :
              </h3>
            </div>
            <div className="timer w-16">
              <p className="mt-1 w-full text-center font-poppins text-sm font-medium text-black">
                Seconds
              </p>
              <h3 className="countdown-element seconds text-center font-inter text-[32px] font-bold text-black"></h3>
            </div>
          </div>
        </div>
        <div
          data-hs-carousel='{
  "slidesQty": {
    "xs": 1,
    "lg": 2
  }
}'
          className="relative"
        >
          <div className="hs-carousel w-full overflow-hidden bg-white">
            <div className="relative min-h-[400px]">
              <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap gap-4 transition-transform duration-700">
                <div className="hs-carousel-slide !w-[270px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[270px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[270px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[270px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[270px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-12 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-0 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="mb-[60px] mt-[60px] flex items-center justify-center">
          <Link to={"/products"}>
            <button
              onClick={() => {
                dispatch(getProducts());
              }}
              type="button"
              className="mb-4 flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
            >
              View All Products
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-[70px] flex flex-col border-b-[0.5px] border-t-[0.5px] border-black border-opacity-30 pb-[70px] pt-[80px]">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            {"Categories"}
          </p>
        </div>
        <div className="-mt-6 mb-24 flex items-center gap-20 lg:mb-10">
          <p className="font-inter text-4xl font-semibold text-black">
            Browse By Category
          </p>
        </div>
        <div
          data-hs-carousel='{
  "slidesQty": {
    "xs": 1,
    "lg": 2
  }
}'
          className="relative"
        >
          <div className="hs-carousel w-full overflow-hidden bg-white">
            <div className="relative min-h-[145px]">
              <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap gap-[45px] transition-transform duration-700">
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_868)">
                        <path
                          d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.6667 7H31.1354"
                          stroke="black"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28 44.0052V44.0305"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="15.1667"
                          y1="39.8334"
                          x2="40.8333"
                          y2="39.8334"
                          stroke="black"
                          strokeWidth={2}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_868">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      Electronics
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(womensClothingCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      {"Women's Clothing"}
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_613)">
                        <path
                          d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.3333 46.6666H39.6667"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 37.3334V46.6667"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 37.3334V46.6667"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 32H48"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_613">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      Electronics
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(mensClothingCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      {"Men's Clothing"}
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_629)">
                        <path
                          d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 42V49H35V42"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 14V7H35V14"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1={24}
                          y1={23}
                          x2={24}
                          y2={34}
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <line
                          x1={28}
                          y1={28}
                          x2={28}
                          y2={34}
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <line
                          x1={32}
                          y1={26}
                          x2={32}
                          y2={34}
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_629">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      Electronics
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(jeweleryCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      {"Jewelery"}
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded bg-[#DB4444]">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_6)">
                        <path
                          d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_6">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mt-4 font-poppins text-base font-normal text-white">
                      Electronics
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_644)">
                        <path
                          d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_644">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      Electronics
                    </p>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(getProducts(electronicsCategory, false));
                  }}
                  to={"/products"}
                  className="hs-carousel-slide !w-[170px]"
                >
                  <div className="flex h-full flex-col items-center justify-center rounded border border-[#0000004D] bg-white">
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15636_809)">
                        <path
                          d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 28H23.3333M18.6667 23.3334V32.6667"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 25.6666V25.6908"
                          stroke="black"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M42 30.3333V30.3574"
                          stroke="black"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15636_809">
                          <rect width={56} height={56} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="mt-4 font-poppins text-base font-normal text-black">
                      Electronics
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-12 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-0 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="mb-[140px] flex flex-col">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            {"This Month"}
          </p>
        </div>
        <div className="-mt-6 mb-[60px] flex flex-col items-center gap-10 md:flex-row md:justify-between lg:mb-10">
          <p className="font-inter text-4xl font-semibold text-black">
            Best Selling Products
          </p>
          <Link href="#">
            <button
              type="button"
              className="flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
            >
              View All
            </button>
          </Link>
        </div>
        <ProductCarousel
          products={randomProducts}
          title="Best Selling Products"
        />
      </div>

      <div className="flex h-full w-full items-start justify-center bg-black">
        <div className="flex flex-col text-[#fafafa] xl:flex-row">
          <div className="mb-4 flex flex-col items-center pr-[38px] pt-[58px] xl:items-start">
            <div className="mb-5 flex items-center">
              <p className="font-poppins text-base font-semibold text-[#00FF66]">
                Categories
              </p>
            </div>
            <p className="mb-[22px] font-inter text-3xl font-semibold leading-[60px] xl:text-5xl">
              Enhance Your
              <br />
              Music Experience
            </p>
            <div className="count-down-main mb-10 flex items-start justify-center gap-4">
              <div className="timer flex h-16 w-16 flex-col items-center rounded-full bg-white px-[17px] py-[14px]">
                <h3 className="countdown-element days text-center font-poppins text-base font-semibold text-black"></h3>
                <p className="text-center font-poppins text-[11px] font-normal text-black">
                  Days
                </p>
              </div>
              <div className="timer flex h-16 w-16 flex-col items-center rounded-full bg-white px-[17px] py-[14px]">
                <h3 className="countdown-element hours text-center font-poppins text-base font-semibold text-black"></h3>
                <p className="text-center font-poppins text-[11px] font-normal text-black">
                  Hours
                </p>
              </div>
              <div className="timer flex h-16 w-16 flex-col items-center rounded-full bg-white px-[17px] py-[14px]">
                <h3 className="countdown-element minutes text-center font-poppins text-base font-semibold text-black"></h3>
                <p className="text-center font-poppins text-[11px] font-normal text-black">
                  Minutes
                </p>
              </div>
              <div className="timer flex h-16 w-16 flex-col items-center rounded-full bg-white px-[17px] py-[14px]">
                <h3 className="countdown-element seconds text-center font-poppins text-base font-semibold text-black"></h3>
                <p className="text-center font-poppins text-[11px] font-normal text-black">
                  Seconds
                </p>
              </div>
            </div>
            <Link to={"/signup"}>
              <button
                type="button"
                className="flex items-center justify-center text-nowrap rounded bg-[#00FF66] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
              >
                Buy Now!
              </button>
            </Link>
          </div>
          <div className="flex h-full w-full items-center justify-center xl:-mr-20 xl:h-[420px] xl:w-[800px]">
            <img
              className="object-contain"
              src="https://m.media-amazon.com/images/I/61v6ZwLc6rL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mb-[140px] mt-[71px] flex flex-col">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            {"Our Products"}
          </p>
        </div>
        <div className="-mt-6 mb-24 flex flex-col items-center gap-10 md:flex-row md:gap-20 lg:mb-10">
          <p className="font-inter text-4xl font-semibold text-black">
            Explore Our Products
          </p>
        </div>
        <div
          data-hs-carousel='{
  "slidesQty": {
    "xs": 1,
    "lg": 2
  }
}'
          className="relative"
        >
          <div className="hs-carousel w-full overflow-hidden bg-white">
            <div className="relative min-h-[410px]">
              <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap gap-4 transition-transform duration-700">
                <div className="hs-carousel-slide !w-[300px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[300px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[300px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[300px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hs-carousel-slide !w-[300px]">
                  <div className="flex h-full justify-center bg-gray-100">
                    <div className="flex flex-col bg-white">
                      <div className="flex flex-col bg-[#f5f5f5]">
                        <div className="flex flex-col bg-[#f5f5f5]">
                          <div className="flex items-start justify-between pt-4">
                            <span className="ms-3 rounded bg-[#DB4444] px-2.5 py-0.5 font-poppins text-xs font-normal text-[#fafafa]">
                              {" "}
                              -35%{" "}
                            </span>
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="me-3 rounded-full bg-white p-2"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
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
                          <div className="mx-auto flex h-[200px] items-center justify-center object-contain">
                            <a href="#">
                              <img
                                src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/203be522b7b02d10672f6f6147762cf52bfcfc54"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col">
                        <a
                          href="#"
                          className="font-poppins text-base font-medium leading-tight text-black"
                        >
                          ASUS FHD Gaming Laptop
                        </a>

                        <div className="mt-4 flex items-center gap-3">
                          <p className="font-poppins text-base font-medium leading-tight text-[#DB4444]">
                            $960
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
                            (65)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-12 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute -top-24 right-0 inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f5f5f5] focus:outline-none"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
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
        <div className="mb-[60px] mt-[60px] flex items-center justify-center">
          <Link
            onClick={() => {
              dispatch(getProducts());
            }}
            to={"/products"}
          >
            <button
              type="button"
              className="mb-4 flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
            >
              View All Products
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-[140px] flex flex-col">
        <div className="flex items-end justify-between space-y-4 font-poppins text-base font-semibold text-[#DB4444] sm:flex sm:space-y-0">
          <p className="relative mb-12 ml-8 before:absolute before:-left-8 before:-top-2 before:h-[40px] before:w-[20px] before:rounded before:bg-[#DB4444] before:content-['']">
            {"Featured"}
          </p>
        </div>
        <div className="-mt-6 mb-[60px] flex flex-col items-center gap-10 md:flex-row md:gap-20 lg:mb-10">
          <p className="font-inter text-4xl font-semibold text-black">
            New Arrival
          </p>
        </div>
        <div className="flex flex-col gap-[60px] xl:flex-row xl:gap-[30px]">
          <div className="relative flex items-end justify-center rounded bg-black xl:h-[600px] xl:w-[570px]">
            <img
              className="object-contain"
              src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MafFHPvGmt84vqMZNYinMQ3DNDA7A4DUHeRMm5WOrpTGCVLs7h-QvkQ6wtsYi-oWTNDHbSvOZm-6ADWMK8VYdvzz7IqOfxcGMIzbg26ydecAcmqn~aROkY1S7SABKkxJj3RYyeQaUHcHAtsfjZhbwlNG7aJTkiu~c8h1INBQ3a9QmT~vNYSOWACSDaXkzvS1ptxJ0feBNhY43mbdeRC9jDOXH20mIPVgQ9~52Eaf5LXYEMbXIzVpzWk-7rKW8neU7IEy84UVHA0kDElJYTt3ilqNfgUAKhRPIueXU9F3XsbE~Q8yICg-fG2GVG5qTKIkZ3u8j8lcRVscFar8mhqBGQ__"
              alt=""
            />
            <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-white">
              <p className="font-inter text-2xl font-semibold">PlayStation 5</p>
              <p className="font-poppins text-sm font-normal text-[#FAFAFA]">
                Black and White version of the PS5
                <br />
                coming out on sale.
              </p>
              <a href="#" className="flex items-center">
                <p
                  href="#"
                  className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8"
                >
                  Shop Now
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative flex h-[284px] w-full items-end justify-center rounded bg-black xl:h-[284px] xl:w-[570px]">
              <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-white">
                <p className="font-inter text-2xl font-semibold">
                  Women’s Collections
                </p>
                <p className="font-poppins text-sm font-normal text-[#FAFAFA]">
                  Featured woman collections that
                  <br />
                  give you another vibe.
                </p>
                <a href="#" className="flex items-center">
                  <p
                    href="#"
                    className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8"
                  >
                    Shop Now
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-[30px]">
              <div className="relative flex items-center justify-center rounded bg-black xl:h-[284px] xl:w-[270px]">
                <img
                  className="ml-10 object-cover"
                  src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uHyI2q6D0K4M8D7yMU~s33w81jH86-azhXM4NvXHIcav-u~nTWW-dIkcrLFUNFz4W~JGserox5nAyIcKQgfwwa-h1nnWihdRiMkcmarBEGve48qj05zywJGdfD3Mm0qLSetq-HxkM-J7k03CjHMZhdAT6-dG3UQ36ugDqKl1YyBiuuY0WTZZfJSUTis7WrA6h9n0XXzUNR0oilUll9d7l9ocD~hAACSCTRVNRmch5TkPSsm7U84ibFmTnKY5UTwcytBU2H0l26gawVfIs3mg0daxfRVtRBM78oXsdg1OkzWzxHed3R-doBNrfICzIfIZpzSNvvwEmxWP6yNmZ4qjbA__"
                  alt=""
                />
                <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
                  <p className="font-inter text-2xl font-semibold">Speakers</p>
                  <p className="font-poppins text-sm font-normal text-[#FAFAFA]">
                    Amazon wireless speakers
                  </p>
                  <a href="#" className="flex items-center">
                    <p
                      href="#"
                      className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8"
                    >
                      Shop Now
                    </p>
                  </a>
                </div>
              </div>
              <div className="relative flex items-end justify-center rounded bg-black xl:h-[284px] xl:w-[270px]">
                <img
                  className="object-contain"
                  src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn-kEZuG0aOMV39V4cOpCcfs-qfH~LHAR84Tsn4LTnri4izCfx3HCuE8ZDLQkarWvlCuj90-DrgD54-lanVPwi2hHf0bmw5cut5zGNagy2r3uotitoyQFsxbbiGjOrIZjTcRjjueHONSAhHHZWFE5vfjWBcHPCXNooIFobpmv~akwmNUTeCH6rJspgu5KcTUgbH3QJs2aZXqgaEdNN8SiuiVFUyW0u6eyztJ~-mY3D~tewCNMAnIQQ5rfCJktgkR6WBRMC66W3lZleyVhxdqiMWbTKPPWQYl9l0qjmey~Hr2o3Olr92O3mCcupkM8Y21DrwCyfiYrEx3xWftlberhw__"
                  alt=""
                />
                <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
                  <p className="font-inter text-2xl font-semibold">Perfume</p>
                  <p className="font-poppins text-sm font-normal text-[#FAFAFA]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a href="#" className="flex items-center">
                    <p
                      href="#"
                      className="font-poppins text-base font-medium underline underline-offset-4 xl:underline-offset-8"
                    >
                      Shop Now
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-36">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-center gap-2 bg-white p-4 text-center">
            <svg
              width={81}
              height={80}
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy={40} r={29} fill="black" />
              <g clipPath="url(#clip0_15074_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_15074_3513">
                  <rect
                    width={40}
                    height={40}
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="mt-3 font-poppins text-xl font-semibold text-black">
              FREE AND FAST DELIVERY
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-2 bg-white p-4 text-center">
            <svg
              width={80}
              height={80}
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx={40} cy={40} r={29} fill="black" />
              <g clipPath="url(#clip0_15074_3530)">
                <path
                  d="M33.3337 45.0001C33.3337 43.1591 31.8413 41.6667 30.0003 41.6667C28.1594 41.6667 26.667 43.1591 26.667 45.0001V48.3334C26.667 50.1744 28.1594 51.6667 30.0003 51.6667C31.8413 51.6667 33.3337 50.1744 33.3337 48.3334V45.0001Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M53.3337 45.0001C53.3337 43.1591 51.8413 41.6667 50.0003 41.6667C48.1594 41.6667 46.667 43.1591 46.667 45.0001V48.3334C46.667 50.1744 48.1594 51.6667 50.0003 51.6667C51.8413 51.6667 53.3337 50.1744 53.3337 48.3334V45.0001Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.667 45.0001V40.0001C26.667 36.4639 28.0718 33.0725 30.5722 30.572C33.0727 28.0715 36.4641 26.6667 40.0003 26.6667C43.5365 26.6667 46.9279 28.0715 49.4284 30.572C51.9289 33.0725 53.3337 36.4639 53.3337 40.0001V45.0001"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 51.6667C50 52.9928 48.9464 54.2646 47.0711 55.2023C45.1957 56.14 42.6522 56.6667 40 56.6667"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_15074_3530">
                  <rect
                    width={40}
                    height={40}
                    fill="white"
                    transform="translate(20 20)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="mt-3 font-poppins text-xl font-semibold text-black">
              24/7 CUSTOMER SERVICE
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-2 bg-white p-4 text-center">
            <svg
              width={80}
              height={80}
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
                fill="#2F2E30"
              />
              <circle cx={40} cy={40} r={29} fill="black" />
              <path
                d="M28.0994 50.5992L28.0992 50.5991C27.2265 49.9483 26.4259 48.9206 25.8431 47.759C25.2602 46.5973 24.917 45.3451 24.917 44.2666V31.8666C24.917 29.5074 26.6718 26.9618 28.8915 26.1351L28.8925 26.1348L37.2087 23.0183C37.2088 23.0182 37.2089 23.0182 37.2089 23.0182C37.9624 22.7366 38.9619 22.5874 39.9837 22.5874C41.0054 22.5874 42.0049 22.7366 42.7584 23.0182C42.7585 23.0182 42.7585 23.0182 42.7586 23.0183L51.0749 26.1348L51.0758 26.1351C53.2955 26.9618 55.0503 29.5074 55.0503 31.8666V44.2499C55.0503 45.3371 54.7069 46.5892 54.1244 47.7483C53.5419 48.9073 52.7414 49.9313 51.8681 50.5824L51.8679 50.5826L44.7012 55.9326L44.7012 55.9325L44.695 55.9373C43.4123 56.9264 41.7243 57.4332 40.0003 57.4332C38.2777 57.4332 36.5855 56.927 35.2652 55.9486C35.265 55.9484 35.2649 55.9483 35.2647 55.9482L28.0994 50.5992ZM37.7422 24.4315L37.7415 24.4317L29.4249 27.5484L29.4242 27.5486C28.5966 27.8602 27.8553 28.5225 27.3244 29.2906C26.7933 30.059 26.4337 30.9898 26.4337 31.8832V44.2666C26.4337 45.161 26.7442 46.1892 27.2012 47.101C27.6581 48.0126 28.2936 48.8722 29.0012 49.4005L29.0012 49.4006L36.1676 54.7503C37.2296 55.5445 38.6286 55.9249 40.0024 55.9249C41.3764 55.9249 42.7786 55.5445 43.8481 54.7516L43.8494 54.7506L51.0161 49.4006L51.017 49.3999C51.7317 48.8638 52.3672 48.005 52.8225 47.0943C53.2779 46.1837 53.5837 45.16 53.5837 44.2666V31.8666C53.5837 30.9804 53.2232 30.0538 52.6929 29.2864C52.1624 28.5189 51.4226 27.854 50.5979 27.5338L50.598 27.5338L50.5925 27.5317L42.2758 24.415L42.2758 24.4149L42.2667 24.4117C41.6286 24.1865 40.8005 24.0831 40.001 24.0853C39.2024 24.0875 38.3755 24.1951 37.7422 24.4315Z"
                fill="#FAFAFA"
                stroke="#FAFAFA"
              />
              <path
                d="M37.4135 41.0536L37.7671 41.4071L38.1206 41.0536L44.4039 34.7703C44.692 34.4822 45.1754 34.4822 45.4635 34.7703C45.7516 35.0583 45.7516 35.5417 45.4635 35.8298L38.2968 42.9965C38.1455 43.1478 37.9583 43.2167 37.7671 43.2167C37.5758 43.2167 37.3886 43.1478 37.2373 42.9965L34.5539 40.3131C34.2659 40.0251 34.2659 39.5417 34.5539 39.2536C34.842 38.9655 35.3254 38.9655 35.6135 39.2536L37.4135 41.0536Z"
                fill="#FAFAFA"
                stroke="#FAFAFA"
              />
            </svg>

            <p className="mt-3 font-poppins text-xl font-semibold text-black">
              MONEY BACK GUARANTEE
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
