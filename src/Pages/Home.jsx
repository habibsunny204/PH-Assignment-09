import React from "react";
import { Link } from "react-router";
import heroPhone from "../assets/hero.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import { FiDownload } from "react-icons/fi";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import GameHubSlider from "../Components/GameHubSlider";

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
      <GameHubSlider />
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-7">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              Popular Games
            </h1>
            <p className="text-gray-400">Explore All Trending Games on the Market developed by us</p>
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
