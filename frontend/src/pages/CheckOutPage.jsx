/* eslint-disable react/prop-types */


import { useEffect } from "react";

function CheckOutPage() {
   useEffect(() => {
      window.scrollTo({top: 0, left: 0})
    },[]);
  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col md:mx-[135px]">
      <div className="mb-20 w-full font-poppins text-sm font-normal text-black">
        <ul className="flex flex-wrap items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              Account
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
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              My Account
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
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              Product
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
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              View Cart
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

          <li className="inline-flex items-center truncate" aria-current="page">
            CheckOut
          </li>
        </ul>
      </div>
      <h2 className="mb-12 font-inter text-4xl font-medium text-black">
        Billing Details
      </h2>
      <div className="flex flex-col gap-44 xl:flex-row">
        <div className="flex max-w-[470px] flex-col">
          <div className="mb-6 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first-name"
                className="font-poppins text-base font-normal text-black opacity-40 after:text-[#DB4444] after:content-['*']"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company-name"
                className="font-poppins text-base font-normal text-black opacity-40"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="street-address"
                className="font-poppins text-base font-normal text-black opacity-40 after:text-[#DB4444] after:content-['*']"
              >
                Street Address
              </label>
              <input
                type="text"
                id="street-address"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="apartment"
                className="font-poppins text-base font-normal text-black opacity-40"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="city"
                className="font-poppins text-base font-normal text-black opacity-40 after:text-[#DB4444] after:content-['*']"
              >
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="font-poppins text-base font-normal text-black opacity-40 after:text-[#DB4444] after:content-['*']"
              >
                Phone Number
              </label>
              <input
                type="phone"
                id="phone"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-poppins text-base font-normal text-black opacity-40 after:text-[#DB4444] after:content-['*']"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="block rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="save-info"
              className="mr-2 flex h-6 w-6 appearance-none items-center justify-center rounded text-2xl checked:bg-[#DB4444] checked:text-white checked:content-['✔'] focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="save-info"
              className="text-nowrap font-poppins text-base font-normal text-black"
            >
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="mt-8 flex max-w-[422px] flex-col justify-start gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-52">
              <div className="flex items-center gap-4">
                <img
                  className="h-[54px] w-[54px]"
                  src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/5d5c2e5250752d55f8b60f2aa2923183dadbc135"
                  alt="product"
                />

                <p>H1 Gamepad</p>
              </div>
              <p>$650</p>
            </div>

            <div className="flex items-center justify-between gap-52">
              <div className="flex items-center gap-4">
                <img
                  className="h-[54px] w-[54px]"
                  src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/5e634682db5174aff99bb9337d2dc9598a0b44e4"
                  alt="product"
                />

                <p>LCD Monitor</p>
              </div>
              <p>$1100</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex justify-between border-b border-black border-opacity-40 pb-4 font-poppins text-base font-normal text-black">
              <span>Subtotal:</span>
              <span>$1750</span>
            </p>
            <p className="flex justify-between border-b border-black border-opacity-40 pb-4 font-poppins text-base font-normal text-black">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between pb-4 font-poppins text-base font-normal text-black">
              <span>Total:</span>
              <span>$1750</span>
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="payment-method"
                  className="peer hidden h-6 w-6"
                />
                <label
                  htmlFor="payment-method"
                  className="relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
                >
                  <span className="h-[13px] w-[13px] rounded-full bg-black"></span>
                </label>
                <p className="ml-2 font-poppins text-base font-normal text-black">
                  Bank
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex h-[28px] w-[42px] items-center justify-center"
                >
                  <img
                    src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="flex h-[28px] w-[42px] items-center justify-center"
                >
                  <img
                    src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/cfb0a6ee01b240273b40dab07f8246ef98aed88a"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="flex h-[28px] w-[42px] items-center justify-center"
                >
                  <img
                    src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/6eefb61d27c754abac218d25d8ea4360de61f8e8"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="flex h-[28px] w-[42px] items-center justify-center"
                >
                  <img
                    src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/b28e31b9c88d0c9b038b82deeb0523d82cffe267"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="cash"
                className="peer hidden h-6 w-6"
              />
              <label
                htmlFor="cash"
                className="relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
              >
                <span className="h-[13px] w-[13px] rounded-full bg-black"></span>
              </label>
              <p className="ml-2 font-poppins text-base font-normal text-black">
                Cash on delivery
              </p>
            </div>
          </div>
          <div className="flex max-w-[527px] flex-col items-start gap-4 lg:flex-row">
            <input
              className="w-[300px] text-nowrap rounded border border-[#00000080] px-6 py-4 font-poppins text-base font-medium text-black"
              type="text"
              placeholder="Coupon Code"
            />
            <button
              type="button"
              className="mb-4 flex items-center justify-center text-nowrap rounded-[4px] bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
            >
              Apply Coupon
            </button>
          </div>
          <button
            type="button"
            className="mb-4 flex items-center justify-center self-start text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
export default CheckOutPage;
