import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch, IoPersonCircleOutline } from "react-icons/io5";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";

const linkClassName =
  "flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-center md:justify-start py-2 px-4 hover:bg-purple-200 rounded-full w-full transition-colors duration-200";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed top-0 left-0 bg-purple-100 h-screen p-2 md:p-4 overflow-y-auto
                      w-[80px] md:w-60 text-sm md:text-base font-medium transition-all duration-300
                      flex flex-col justify-between"
    >
      <nav className="w-full flex flex-col mt-12">
        <ul className="space-y-4 flex flex-col items-center w-full mb-6">
          <li className="w-full flex justify-center">
            <Link
              to="/profile"
              className="hover:bg-purple-200 p-2 rounded-full transition-colors duration-200"
            >
              <IoPersonCircleOutline size={30} />
            </Link>
          </li>
          <li className="w-full flex justify-center">
            <Link
              to="/upload"
              className="flex bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
            >
              <FaPlus size={24} color="white" />
            </Link>
          </li>
        </ul>
        <ul className="space-y-3 flex flex-col items-center w-full">
          <li className="w-full">
            <Link to="/playground" className={linkClassName}>
              <FaPlay size={22} />
              <span className="">Playground</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to="/search" className={linkClassName}>
              <IoSearch size={22} />
              <span className="">Search</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to="/favorite" className={linkClassName}>
              <FaRegHeart size={22} />
              <span className="">Favorite</span>
            </Link>
          </li>
          <li className="w-full">
            <Link to="/shop" className={linkClassName}>
              <CiShoppingBasket size={25} />
              <span className="">Shop</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
