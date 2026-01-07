import React, { useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import notFoundImg from "../assets/App-Error.png";

const App = () => {
  const { apps, loading, error } = useApps();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 ">
            Our All Applications
          </h1>
          <p className="text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 gap-4 flex-wrap">
          <div>
            <h2 className="font-bold underline">
              ({filteredApps.length})Apps found
            </h2>
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search Apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppCard key={app.id} app={app} />)
          ) : (
            <div className="col-span-full flex flex-col items-center py-10">
              <img
                src={notFoundImg}
                alt="App Not Found"
                className="w-[420px] max-w-full mb-6"
              />

              <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                OPPS!! APP NOT FOUND
              </h2>

              <p className="text-slate-500 text-center max-w-md mb-6">
                The app you are searching for is not found in our system. Please
                try another one.
              </p>

              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition"
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

export default App;
