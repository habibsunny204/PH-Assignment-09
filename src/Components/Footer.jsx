import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001732] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Hero Apps Logo" className="h-10 w-auto" />
              <h2 className="text-lg font-semibold">Hero Apps</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hero Apps creates useful and engaging digital products that
              empower millions of people to stay organized, learn faster, and
              achieve their goals — every day.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4">About Hero Apps</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press & Media</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Report an Issue
              </li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">
                Status Updates
              </li>
            </ul>
          </div>
          <div className="md:text-right">
            <h3 className="text-sm font-bold mb-4">Social Icons</h3>
            <div className="flex md:justify-end gap-4 text-xl">
              <a href="#" className="hover:text-purple-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-600 mt-10 pt-6">
          <p className="text-[12px] text-slate-400 text-center">
            Copyright © 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
