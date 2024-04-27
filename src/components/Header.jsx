import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-800 p-4">
      <div>
        <img className="logo w-16" src={LOGO_URL} alt="Logo" />
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li className="px-2 text-white">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-300 px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 px-2">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 px-2">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="text-white hover:text-gray-300 px-2">
              Grocery
            </Link>
          </li>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
