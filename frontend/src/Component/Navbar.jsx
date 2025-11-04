import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-500"
          >
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
          Techbay
        </div>

        {/* Search Bar (hidden on very small screens) */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-4 py-2 w-60 md:w-80 shadow-sm">
          <YoutubeSearchedForIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for Products..."
            className="outline-none w-full text-gray-700"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {["Home", "Products", "Wishlist", "Cart"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-xl font-bold text-gray-800">Techbay</div>
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            <CloseIcon />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 mt-6 px-6 text-gray-700 font-medium">
          {["Home", "Products", "Wishlist", "Cart"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}

          <Button variant="contained" color="primary" className="mt-4">
            Sign In
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
