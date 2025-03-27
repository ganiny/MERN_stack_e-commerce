import { useEffect } from "react";

function ContactPage() {
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
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="flex flex-col px-[35px] pb-[51px] pt-10">
          <div className="flex flex-col border-b border-black">
            <div className="mb-6 flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="font-poppins text-base font-medium text-black">
                Call To Us
              </p>
            </div>
            <p className="mb-4 font-poppins text-sm font-normal text-black">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mb-8 font-poppins text-sm font-normal text-black">
              Phone: +8801611112222
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 mt-8 flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="font-poppins text-base font-medium text-black">
                Write To US
              </p>
            </div>
            <p className="mb-4 font-poppins text-sm font-normal text-black">
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <p className="mb-4 font-poppins text-sm font-normal text-black">
              Emails: customer@exclusive.com
            </p>
            <p className="font-poppins text-sm font-normal text-black">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
        <div className="py-10 xl:px-8">
          <div className="mb-8 flex flex-col gap-4 xl:flex-row">
            <input
              type="text"
              id="name"
              className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] lg:w-[400px] xl:w-[235px]"
              placeholder="Your Name *"
            />
            <input
              type="email"
              id="email"
              className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] lg:w-[400px] xl:w-[235px]"
              placeholder="Your Email *"
            />
            <input
              type="tel"
              id="phone"
              className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] lg:w-[400px] xl:w-[235px]"
              placeholder="Your Phone *"
            />
          </div>

          <textarea
            placeholder="Your Massage"
            name="message"
            id="message"
            className="mb-8 h-[207px] w-full resize-none rounded border-0 bg-[#f5f5f5] p-2 ps-5 font-poppins text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[330px] lg:w-[400px] xl:w-[737px]"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="button"
              className=" flex items-center justify-center text-nowrap rounded bg-[#DB4444] md:px-12 md:py-4 px-6 py-2 font-poppins text-base font-medium tracking-wider text-[#fafafa]"
            >
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactPage;
