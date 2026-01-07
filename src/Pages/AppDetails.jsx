import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { useInstalledApps } from "../context/InstalledAppsContext";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const { installedApps, installApp } = useInstalledApps();

  const [showModal, setShowModal] = useState(false);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  const app = apps.find((a) => String(a.id) === id);

  if (!app)
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          App not found.
        </p>

        <a
          href="/"
          className="inline-block px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition"
        >
          Return Home
        </a>
      </div>
    );

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    size,
  } = app;

  const installed = installedApps.some((a) => a.id === app.id);

  const handleInstall = () => {
    installApp(app);
    setShowModal(true);
  };

  const max = Math.max(...ratings.map((r) => r.count));

  return (
    <div className="bg-[#F4F5F9] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl px-8 py-8 shadow">
          <div className="flex gap-10">
            <div className="w-40 h-40 bg-[#F4F5F9] rounded-3xl flex items-center justify-center shadow">
              <img
                src={image}
                alt={title}
                className="w-28 h-28 object-contain"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

              <p className="text-sm text-gray-700 mt-1">
                Developed by{" "}
                <span className="text-purple-600 font-medium">
                  {companyName}
                </span>
              </p>

              <div className="border-b my-4" />

              <div className="flex gap-12 items-center flex-wrap">
                <div>
                  <p className="text-xs text-gray-600">Downloads</p>
                  <div className="flex gap-2 items-center font-bold">
                    {downloads.toLocaleString()}
                    <img src={downloadIcon} className="w-4" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-600">Average Ratings</p>
                  <div className="flex gap-2 items-center font-bold">
                    {ratingAvg.toFixed(1)}
                    <img src={starIcon} className="w-4" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-600">Total Reviews</p>
                  <div className="flex gap-2 items-center font-bold">
                    {reviews.toLocaleString()}
                    <img src={starIcon} className="w-4" alt="" />
                  </div>
                </div>

                {!installed ? (
                  <button
                    onClick={handleInstall}
                    className="px-6 py-2 rounded-md bg-emerald-500 text-white font-semibold shadow"
                  >
                    Install Now ({Math.round(size)}MB)
                  </button>
                ) : (
                  <button
                    disabled
                    className="px-6 py-2 rounded-md bg-emerald-500 text-white font-semibold shadow cursor-default"
                  >
                    Installed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-bold text-gray-900">Ratings</h2>

        <div className="mt-5">
          {ratings.map((r) => (
            <div key={r.name} className="flex items-center mb-3 gap-4">
              <span className="w-14 text-sm">{r.name}</span>

              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-4 rounded-full"
                  style={{ width: `${(r.count / max) * 100}%` }}
                />
              </div>

              <span className="text-xs text-gray-600">
                {r.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold">Description</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-5 shadow-lg w-[350px]">
            <div className="flex justify-between">
              <h3 className="font-semibold">Installed</h3>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>

            <p className="mt-2 text-sm">
              Yahoo ⚡!! <span className="font-semibold">{title}</span>{" "}
              Installed Successfully
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-5 py-2 bg-emerald-500 text-white rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
