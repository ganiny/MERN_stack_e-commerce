import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
   useEffect(() => {
      window.scrollTo({top: 0, left: 0})
    },[]);
  return (
    <section className="mx-5 mb-36 mt-20 flex h-full flex-col md:mx-[135px]">
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
            404 Error
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="mb-5 font-inter text-[110px] font-medium text-black">
          404 Not Found
        </p>
        <p className="mb-20 font-poppins text-base font-normal text-black">
          Page you visited is not found. You can go to home page.
        </p>
        <div className="flex justify-center">
          <Link to={"/"}>
            <button
              type="button"
              className="flex items-center justify-center text-nowrap rounded bg-[#DB4444] px-6 py-2 font-poppins text-base font-medium tracking-wider text-[#fafafa] md:px-12 md:py-4"
            >
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NotFoundPage;
