import React from "react";
import { NavLink } from "react-router";
import { IoMdSearch, IoMdHeartEmpty, IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <header className="h-12 md:h-18 w-[100%] fixed inset-x-0 z-50 max-w-7xl flex justify-between items-center px-2 bg-yellow-300/25 md:bg-yellow-400/5 mx-auto">
        <p className="text-2xl md:text-4xl font-bold ">Exclusive</p>

        <nav className="hidden md:flex gap-20">
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/product"
          >
            Product
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/signUp"
          >
            Sign-up
          </NavLink>
        </nav>

        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-4 items-center bg-gray-400/20 px-4 py-1 rounded">
            <input
              className="outline-none"
              type="search"
              placeholder="Search"
            />
            <IoMdSearch className=" text-lg" />
          </div>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/wishlist"
          >
            <IoMdHeartEmpty className=" text-lg" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-red-400 ${
                isActive ? "text-red-400" : "text-gray-500"
              }`
            }
            to="/cart"
          >
            <IoCartOutline className=" text-lg" />
          </NavLink>
        </div>

        <div className="flex md:hidden text-2xl">
          <IoIosMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
