import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutUser } from "../redux/apiCalls/authApiCalls";
import { getProducts } from "../redux/apiCalls/productsApiCalls";

function Header() {
  const [keyword, setKeyword] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [userDropdownMenu, setUserDropdownMenu] = useState(false);
  const [toggleNavbarSearch, setToggleNavbarSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const wishlist =
    useSelector((state) => state.wishlist.wishlist.wishlist) ?? [];
  const cart = useSelector((state) => state.cart.cart.cart) ?? [];

  return (
    <nav className="sticky start-0 top-0 z-50 border-b-[0.5px] border-black border-opacity-30 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h1 className="self-center whitespace-nowrap font-inter text-2xl font-bold">
            Exclusive
          </h1>
        </Link>
        <ul className="mt-4 hidden rounded-lg border border-gray-100 bg-gray-50 p-4 font-poppins font-normal md:mt-0 md:flex md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
          <li>
            <Link
              to={"/"}
              className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
            >
              About
            </Link>
          </li>
          {!user && (
            <li>
              <Link
                to={"/signup"}
                className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>
        <div className="flex pl-20 sm:pl-0 md:order-2">
          <button
            type="button"
            onClick={() => setToggleNavbarSearch((prev) => !prev)}
            className="me-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute inset-y-0 end-10 flex items-center ps-3">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span className="sr-only">Search icon</span>
            </div>
            <input
              onChange={(e) => {
                navigate("/products");
                setKeyword(e.target.value);
                if (typingTimeout) clearTimeout(typingTimeout);

                // Set a new timeout to trigger after 1 second of inactivity
                setTypingTimeout(
                  setTimeout(() => {
                    dispatch(getProducts(false, e.target.value));
                  }, 1000),
                );
              }}
              value={keyword}
              type="text"
              className="mr-8 block w-64 max-w-64 rounded-lg border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="What are you looking for?"
            />
          </div>

          {user && (
            <div className="relative flex items-center lg:space-x-2">
              <Link className="relative" to={"/wishlist"}>
                {wishlist?.length > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                    {Array.from(wishlist)?.length}
                  </span>
                )}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="sr-only">Wishlist</span>
                  <svg
                    width={23}
                    height={23}
                    viewBox="0 0 32 32"
                    fill="none"
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
                </button>
              </Link>
              <Link className="relative" to={"/cart"}>
                {cart.length > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                    {cart?.length}
                  </span>
                )}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="sr-only">Cart</span>
                  <svg
                    width={23}
                    height={23}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 5H7L10 22H26"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>

              <button
                type="button"
                onClick={() => setUserDropdownMenu((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full object-contain p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100"
                style={{
                  backgroundColor: `${userDropdownMenu ? "#DB4444" : ""}`,
                }}
              >
                <img
                  src={user.userWithoutPassword.profilePhoto.url}
                  className="h-6 w-6 rounded-full object-contain"
                  alt=""
                />
              </button>
              <div
                style={
                  userDropdownMenu ? { display: "block" } : { display: "none" }
                }
                className="absolute right-0 top-full z-10 mt-2 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-[4px] bg-[#0000000A] text-[#fafafa] antialiased backdrop-blur-[150px]"
                onMouseLeave={() => setUserDropdownMenu(false)}
              >
                <ul className="p-2 text-start font-poppins text-sm font-normal">
                  <li>
                    <Link
                      to={"/account"}
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"
                    >
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Manage My Account{" "}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      My Orders{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_13015_458)">
                          <path
                            d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                            stroke="#FAFAFA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={12}
                            cy={12}
                            r="11.25"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13015_458">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      My Cancellations{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                        />
                      </svg>{" "}
                      My Reviews{" "}
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => dispatch(signoutUser())}
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-600"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      Logout{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => setToggleNavbarSearch((prev) => !prev)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="w-full items-center justify-between md:order-1 md:flex"
          style={
            toggleNavbarSearch
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }
              : { display: "none" }
          }
          onMouseLeave={() => setToggleNavbarSearch(false)}
        >
          <div className="relative mt-3 w-full md:hidden">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => {
                navigate("/products");
                setKeyword(e.target.value);
                if (typingTimeout) clearTimeout(typingTimeout);

                // Set a new timeout to trigger after 1 second of inactivity
                setTypingTimeout(
                  setTimeout(() => {
                    dispatch(getProducts(false, e.target.value));
                  }, 1000),
                );
              }}
              value={keyword}
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="What are you looking for?"
            />
          </div>
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-poppins font-normal md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                to={"/"}
                className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
              >
                About
              </Link>
            </li>
            {!user && (
              <li>
                <Link
                  to={"/signup"}
                  className="block w-fit border-black px-3 py-2 text-black hover:border-b hover:border-opacity-50 md:p-0"
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
