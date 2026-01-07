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
    <header className="sticky top-0 z-50">
      <nav className="navbar bg-gradient-to-r from-[#0a0d1a] to-[#111736] border-b border-white/10 shadow-sm md:px-6 lg:px-10">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 p-2 shadow bg-[#141932] text-white rounded-xl border border-white/10"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">All Games</NavLink>
              </li>
              <li>
                <NavLink to="/installedapps">Installed Games</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
            </ul>
          </div>

          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="GameHub Logo" className="h-10" />
            <span className="font-bold text-xl hidden sm:block">GameHub</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-200 gap-2">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/installedapps">Installed Games</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user && (
            <NavLink to="/myprofile">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} className="cursor-pointer">
                  <img
                    src={user.photoURL || "https://i.ibb.co/Y36sQjp/user.png"}
                    alt="profile"
                    className="w-10 h-10 rounded-full border border-purple-400"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#141932] text-white rounded-xl w-44 p-2 shadow border border-white/10"
                >
                  <li className="font-semibold">
                    {user.displayName || "User"}
                  </li>
                  <li className="text-xs text-gray-400">{user.email}</li>
                </ul>
              </div>
            </NavLink>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
