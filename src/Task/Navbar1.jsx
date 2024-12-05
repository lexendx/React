import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        Flipkart
        <span className="text-yellow-400 text-sm ml-1">Explore Plus</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-md outline-none text-black"
          />
          <FiSearch className="absolute right-3 top-2 text-gray-600" size={20} />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <div className="cursor-pointer hover:text-gray-300 flex flex-col items-center">
          <FiUser size={20} />
          <span className="text-sm">Login</span>
        </div>
        <div className="cursor-pointer hover:text-gray-300 flex flex-col items-center">
          <FiShoppingCart size={20} />
          <span className="text-sm">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
