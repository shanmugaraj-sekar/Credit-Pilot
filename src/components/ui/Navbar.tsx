import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center backdrop-blur bg-[#ffffff31] h-16 text-black  justify-between px-4 z-10 shadow-lg  fixed w-full">
      <Link to={"/"} className="text-xl font-semibold text-[#4746f4]">
        Credit Pilot
      </Link>
      <div className="flex space-x-4">
        <Link to={"/"} className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link to={"/cards"} className="hover:text-gray-300">
          Cards
        </Link>
        <Link to={"/User"} className="hover:text-gray-300">
          Profile
        </Link>
      </div>
    </div>
  );
}
