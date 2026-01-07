import React, { useState } from "react";
import { useInstalledApps } from "../context/InstalledAppsContext";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";

const formatShortNumber = (num) => {
  if (num >= 1_000_000_000) return `${Math.round(num / 1_000_000_000)}B`;
  if (num >= 1_000_000) return `${Math.round(num / 1_000_000)}M`;
  if (num >= 1_000) return `${Math.round(num / 1_000)}K`;
  return num;
};

const InstalledApps = () => {
  const { installedApps, uninstallApp } = useInstalledApps();
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const [sortBy, setSortBy] = useState("downloadsLow");

  const sorted = [...installedApps].sort((a, b) => {
    if (sortBy === "downloadsLow") return a.downloads - b.downloads;
    if (sortBy === "downloadsHigh") return b.downloads - a.downloads;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#F4F5F9] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Your Installed Apps
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <p className="text-purple-600 font-medium underline">
            {installedApps.length} Apps Found
          </p>

          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white shadow-sm"
            >
              <option value="downloadsLow">
                Sort By Downloads (Low → High)
              </option>
              <option value="downloadsHigh">
                Sort By Downloads (High → Low)
              </option>
            </select>
          </div>
        </div>

        <hr className="border-slate-200 mb-6" />

        <div className="space-y-4">
          {sorted.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl shadow-sm px-4 py-3 md:px-6 md:py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#F4F5F9] rounded-2xl flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 object-contain rounded-xl"
                  />
                </div>

                <div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    {app.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-4 text-xs md:text-sm text-slate-600">
                    <span className="flex items-center gap-1 text-emerald-500">
                      <img src={downloadIcon} className="w-3 h-3" alt="" />
                      {formatShortNumber(app.downloads)}
                    </span>

                    <span className="flex items-center gap-1 text-purple-600">
                      <img src={starIcon} className="w-3 h-3" alt="" />
                      {app.ratingAvg.toFixed(1)}
                    </span>

                    <span>{Math.round(app.size)} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedApp(app);
                  setShowModal(true);
                }}
                className="ml-4 px-6 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold shadow-[0_6px_0_rgba(16,185,129,0.7)] hover:translate-y-[1px] hover:shadow-[0_4px_0_rgba(16,185,129,0.7)] transition-all"
              >
                Uninstall
              </button>
            </div>
          ))}

          {sorted.length === 0 && (
            <p className="text-center text-slate-500 text-sm">
              You don’t have any installed apps yet. Install one from the apps
              list to see it here.
            </p>
          )}
        </div>
      </div>
      {showModal && selectedApp && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-[360px]">
            <h3 className="text-lg font-semibold text-gray-900">
              Uninstall App
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Are you sure you want to uninstall
              <span className="font-semibold text-purple-600">
                {" "}
                {selectedApp.title}
              </span>
              ?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md border text-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  uninstallApp(selectedApp.id);
                  setShowModal(false);
                }}
                className="px-5 py-2 rounded-md bg-emerald-500 text-white font-semibold shadow"
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
