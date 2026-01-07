import React from "react";
import { Link } from "react-router";
import heroPhone from "../assets/hero.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import { FiDownload } from "react-icons/fi";
import { FaStar, FaGooglePlay } from "react-icons/fa";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="bg-[#F4F5F9] pt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            We Build <br /> <span className="text-purple-600">Productive </span>{" "}
            Apps
          </h1>

          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-purple-600">HERO.IO</span>,
            we craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences that truly make an impact.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store"
              className="bg-white px-6 py-3 text-sm font-medium shadow rounded-full hover:shadow-md transition inline-flex items-center gap-2"
            >
              <img src={googleplay} className="h-6" alt="Google Play" />
              <span>Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="bg-white px-6 py-3 text-sm font-medium shadow rounded-full hover:shadow-md transition inline-flex items-center gap-2"
            >
              <img src={appstore} className="h-6" alt="App Store" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF4F8]">
        <div className="max-w-5xl mx-auto flex justify-center">
          <img src={heroPhone} alt="ui" />
        </div>
      </section>

      <section className="bg-linear-to-r from-purple-600 to-purple-500 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-2xl font-semibold mb-10">
            Trusted by Millions, Built for You
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-wide text-purple-200">
                Total Downloads
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <p className="text-4xl font-bold">29.6M</p>
                <FiDownload className="text-2xl" />
              </div>
              <p className="text-[11px] mt-1 text-purple-200">
                21% more than last month
              </p>
            </div>

            <div className="md:border-x border-purple-400 px-4">
              <p className="text-xs uppercase tracking-wide text-purple-200">
                Total Reviews
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <p className="text-4xl font-bold">906K</p>
                <FaStar className="text-2xl text-yellow-300" />
              </div>
              <p className="text-[11px] mt-1 text-purple-200">
                46% more than last month
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-purple-200">
                Active Apps
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <p className="text-4xl font-bold">132+</p>
                <FaGooglePlay className="text-2xl" />
              </div>
              <p className="text-[11px] mt-1 text-purple-200">
                31 more will launch
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-7">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              Trending Apps
            </h1>
            <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <Link
            to="/apps"
            className="bg-linear-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:opacity-90 active:scale-95 transition"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
