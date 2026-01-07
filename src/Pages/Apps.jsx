import React, { useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import notFoundImg from "../assets/App-Error.png";
import usePageTitle from "../hooks/usePageTitle";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [searchTerm, setSearchTerm] = useState("");
  usePageTitle("All Games");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0b0e1a] pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Our All Games</h1>
          <p className="text-gray-400 mt-1">
            Explore all the games crafted for millions of players worldwide
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">
          <h2 className="font-semibold text-gray-300">
            ({filteredApps.length}) Games found
          </h2>

          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full max-w-md px-4 py-2
              bg-white/10 border border-white/20
              text-white placeholder-gray-400
              rounded-lg shadow
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppCard key={app.id} app={app} />)
          ) : (
            <div className="col-span-full flex flex-col items-center py-10">
              <img
                src={notFoundImg}
                alt="App Not Found"
                className="w-[420px] max-w-full mb-6 opacity-90"
              />

              <h2 className="text-2xl font-bold text-white mb-2 text-center">
                Oops! Game Not Found
              </h2>

              <p className="text-gray-400 text-center max-w-md mb-6">
                The game you’re searching for doesn’t exist in our database. Try
                searching something else.
              </p>

              <button
                onClick={() => setSearchTerm("")}
                className="
                  px-6 py-2
                  bg-gradient-to-r from-purple-500 to-indigo-500
                  text-white rounded-lg
                  shadow hover:opacity-90 transition
                "
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
