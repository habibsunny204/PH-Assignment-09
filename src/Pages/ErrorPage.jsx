import React from "react";
import { Link, useRouteError } from "react-router";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F5F9] px-4">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-[420px] max-w-full mb-6"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Oops, page not found!
      </h1>

      <p className="text-slate-500 text-center max-w-md mb-6">
        The page you are looking for is not available.
        <br />
        {error?.statusText || error?.message}
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
