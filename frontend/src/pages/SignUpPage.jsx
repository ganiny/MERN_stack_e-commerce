
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/apiCalls/authApiCalls";
import { Link} from "react-router-dom";

function SignUpPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  },[]);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  return (
    <div className="mb-36 mt-16 h-screen bg-white">
      <div className="grid h-full items-center gap-8 md:grid-cols-2">
        <div className="hidden h-full bg-[#CBE4E8] max-md:order-1 md:block">
          <img
            src="https://www.figma.com/file/yn2DFQJla0UiSMvomFsqwT/image/75f394c0a1c7dc5b68a42239311e510f54d8cd59"
            className="h-full w-full object-contain xl:object-cover"
            alt="login-image"
          />
        </div>
        <div className="flex h-full w-full items-center p-6">
          <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
            <div className="mb-12">
              <h3 className="font-inter text-4xl font-medium text-black">
                Create an account
              </h3>
              <p className="mt-6 font-poppins text-base font-normal text-black">
                Enter your details below
              </p>
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  onChange={handleChange}
                  value={form.username}
                  name="username"
                  type="text"
                  required
                  className="w-full border-0 border-b border-black bg-transparent px-2 py-3 font-poppins text-base font-normal text-black"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  onChange={handleChange}
                  value={form.email}
                  name="email"
                  type="email"
                  required
                  className="w-full border-0 border-b border-black bg-transparent px-2 py-3 font-poppins text-base font-normal text-black"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  onChange={handleChange}
                  value={form.password}
                  name="password"
                  type="password"
                  required
                  className="w-full border-0 border-b border-black bg-transparent px-2 py-3 font-poppins text-base font-normal text-black"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="mb-4 flex w-full items-center justify-center text-nowrap rounded-[4px] bg-[#DB4444] px-32 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
              >
                Creat an account
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-4 rounded-[4px] border border-[#00000066] bg-white px-32 py-4 font-poppins text-base font-normal tracking-wider text-black"
              >
                <div>
                  <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13197_3336)">
                      <path
                        d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13197_3336">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-nowrap">Sign up with Google</p>
              </button>
              <p className="mt-8 text-center font-poppins text-base font-normal text-black">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="ml-4 border-b border-black pb-1 font-poppins font-medium text-black"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
