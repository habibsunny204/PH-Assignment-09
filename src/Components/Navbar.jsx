import React from "react";
import { Link, NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-5 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home">
                <FiHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps">
                <MdApps />
                <span>Apps</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/installedapps">
                <LuDownload />
                <span>Installation</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="Hero logo" className="h-12 w-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <NavLink to="/home">
              <FiHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps">
              <MdApps />
              <span>Apps</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/installedapps">
              <LuDownload />
              <span>Installation</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/habibsunny204"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-white 
                    bg-linear-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg 
                    active:scale-95 transition-transform"
        >
          <FaGithub className="text-lg" />
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
