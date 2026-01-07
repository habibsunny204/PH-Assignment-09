import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import logo from "../assets/logo.png";

import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    if (!logoutUser) return;
    logoutUser().catch(console.error);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-5 lg:px-10 sticky top-0 z-50">

      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            <li>
              <NavLink to="/home"><FiHome /> Home</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/apps"><MdApps /> All Apps</NavLink>
                </li>
                <li>
                  <NavLink to="/installedapps"><LuDownload /> Installation</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="GameHub Logo" className="h-10" />
          <span className="font-bold text-xl hidden sm:block">GameHub</span>
        </Link>
      </div>

      {/* CENTER (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/home"><FiHome /> Home</NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink to="/apps"><MdApps /> All Apps</NavLink>
              </li>

              <li>
                <NavLink to="/installedapps">
                  <LuDownload /> Installation
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">

        {user && (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="cursor-pointer">
              <img
                src={user.photoURL || "https://i.ibb.co/Y36sQjp/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-44 p-2 shadow"
            >
              <li className="text-black font-semibold">
                {user.displayName || "User"}
              </li>
              <li className="text-gray-500 text-xs">
                {user.email}
              </li>
            </ul>
          </div>
        )}

        {/* AUTH BUTTONS */}
        {user ? (
          <button onClick={handleSignOut} className="btn bg-blue-600 text-white">
            Log out
          </button>
        ) : (
          <>
            <Link to="/login" className="btn bg-blue-600 text-white">
              Login
            </Link>
            <Link to="/signup" className="btn bg-blue-600 text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
