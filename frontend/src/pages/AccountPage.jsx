import { useEffect } from "react";
import {useSelector} from "react-redux";

function AccountPage() {
  const user = useSelector(state => state.auth.user);
   useEffect(() => {
      window.scrollTo({top: 0, left: 0})
    },[]);
  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col xl:mx-[135px]">
      <div className="mb-20 flex w-full items-center justify-between font-poppins text-sm font-normal text-black">
        <ul className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a
              className="flex items-center opacity-50 focus:outline-none"
              href="#"
            >
              Home
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
            My Account
          </li>
        </ul>
        <div className="flex items-center">
          <p className="mr-1">Welcome!</p>
          <span className="text-[#DB4444]">{user.userWithoutPassword.username}</span>
        </div>
      </div>
      <div className="flex w-full gap-10 xl:gap-[100px]">
        <div className="flex w-1/3 flex-col xl:w-1/4">
          <ul>
            <li>
              <h3 className="font-poppins text-base font-medium text-black">
                Manage My Account
              </h3>
              <ul className="mb-6 ml-9 mt-4 flex flex-col gap-2 font-poppins text-base font-normal text-black">
                <li className="text-[#DB4444]">
                  <a href="#">My Profile</a>
                </li>
                <li className="opacity-50">
                  <a href="#">Address Book</a>
                </li>
                <li className="opacity-50">
                  <a href="#">My Payment Options</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-poppins text-base font-medium text-black">
                My Orders
              </h3>
              <ul className="mb-6 ml-9 mt-4 flex flex-col gap-2 font-poppins text-base font-normal text-black">
                <li className="opacity-50">
                  <a href="#">My Returns</a>
                </li>
                <li className="opacity-50">
                  <a href="#">My Cancellations</a>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-poppins text-base font-medium text-black">
                My WishList
              </h3>
            </li>
          </ul>
        </div>
        <div className="flex w-2/3 flex-col px-0 py-10 xl:w-[870px] xl:px-20">
          <h2 className="mb-4 font-poppins text-xl font-medium text-[#DB4444]">
            Edit Your Profile
          </h2>
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:gap-[50px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first-name"
                className="font-poppins text-base font-normal text-black"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px]"
                placeholder="Md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="last-name"
                className="font-poppins text-base font-normal text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px]"
                placeholder="Rimel"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:gap-[50px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="emailUpdate"
                className="font-poppins text-base font-normal text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="emailUpdate"
                className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px]"
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="font-poppins text-base font-normal text-black"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px]"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 font-poppins text-base font-normal text-black"
            >
              Password Changes
            </label>
            <input
              type="text"
              id="password"
              className="mb-4 h-[50px] rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] xl:w-[710px]"
              placeholder="Current Password"
            />
            <input
              type="text"
              id="new-password"
              className="mb-4 h-[50px] rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] xl:w-[710px]"
              placeholder="New Password"
            />
            <input
              type="text"
              id="confirm-password"
              className="h-[50px] rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] xl:w-[710px]"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="flex flex-col-reverse items-center justify-end gap-8 xl:flex-row">
            <button
              type="button"
              className="flex items-center justify-center font-poppins text-base font-normal text-black"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-12 py-4 font-poppins text-base font-medium tracking-wider text-[#fafafa]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AccountPage;
