import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TopHeader() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className="sticky start-0 top-0 z-50 flex w-full justify-between bg-black p-4 font-poppins"
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-white">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            {!user && (
              <Link
                to={"/signup"}
                className="decoration-600 ml-2 inline font-semibold text-[#FAFAFA] underline decoration-solid underline-offset-2 hover:no-underline"
              >
                ShopNow
              </Link>
            )}
          </span>
        </p>
      </div>
      <div className="flex items-center lg:-ml-32 lg:mr-32">
        <select
          className="w-[100px] border-0 bg-black p-1 text-white"
          aria-label="language"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
}

export default TopHeader;
