import { Link } from "react-router-dom";

function PaymentFailurePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-4 w-full max-w-2xl transform rounded-xl bg-white p-12 text-center shadow-lg transition-all hover:shadow-xl">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            className="size-32"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Main Content */}
        <h1 className="mb-6 text-4xl font-extrabold text-red-600">
          Payment Cancelled!
        </h1>
        

        {/* Back to Home Button */}
        <div className="mt-12">
          <Link
            to={"/"}
            className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-red-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PaymentFailurePage;
