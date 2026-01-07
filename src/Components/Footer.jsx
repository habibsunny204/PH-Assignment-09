import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b0f1a] to-[#000d1f] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="GameHub Logo" className="h-11 w-auto" />
              <h2 className="text-xl font-bold tracking-wide">GameHub</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Discover, track and download games safely.
              GameHub makes gaming simple, fast and enjoyable — all in one platform.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">
              About
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white transition cursor-pointer">Our Story</li>
              <li className="hover:text-white transition cursor-pointer">Community</li>
              <li className="hover:text-white transition cursor-pointer">Developers</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white transition cursor-pointer">Help Center</li>
              <li className="hover:text-white transition cursor-pointer">Install Guide</li>
              <li className="hover:text-white transition cursor-pointer">Report a Bug</li>
              <li className="hover:text-white transition cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">
              Stay Connected
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Follow us for updates, news and giveaways.
            </p>

            <div className="flex gap-4 text-xl">
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaFacebookF />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaYoutube />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 text-center text-slate-400 text-sm">
          © 2025 GameHub — Built for gamers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
