import React from "react";
import { Link, useRouteError } from "react-router";
import errorImg from "../assets/error-404.png";
import usePageTitle from "../hooks/usePageTitle";

const ErrorPage = () => {
  const error = useRouteError();
  usePageTitle("Error Page");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1220] relative overflow-hidden px-4">
      <div className="absolute -top-16 -left-10 w-64 h-64 bg-purple-700/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/25 blur-3xl rounded-full" />

      <div className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-lg text-center text-white">
        <img
          src={errorImg}
          alt="404 Not Found"
          className="w-[360px] max-w-full mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold mb-2">Oops — page not found!</h1>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
          The page you were trying to reach doesn’t exist or was moved.
          <br />
          <span className="text-purple-300 text-xs">
            {error?.statusText || error?.message}
          </span>
        </p>

        <Link
          to="/"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow hover:opacity-90 active:scale-95 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
