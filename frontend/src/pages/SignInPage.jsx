import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signinUser } from "../redux/apiCalls/authApiCalls";


function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  },[]);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinUser(form));
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
          <form className="mx-auto w-full max-w-sm">
            <div className="mb-12">
              <h3 className="font-inter text-4xl font-medium text-black">
                Log in to Exclusive
              </h3>
              <p className="mt-6 font-poppins text-base font-normal text-black">
                Enter your details below
              </p>
            </div>

            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  required
                  className="w-full border-0 border-b border-black bg-transparent px-2 py-3 font-poppins text-base font-normal text-black"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="submit"
                className="mb-4 flex items-center justify-center text-nowrap rounded-[4px] bg-[#DB4444] px-12 py-4 font-poppins text-base font-normal tracking-wider text-[#fafafa]"
              >
                Log In
              </button>

              <Link
                to={"/forget-password"}
                className="pb-4 font-poppins font-medium text-[#DB4444]"
              >
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignInPage;
