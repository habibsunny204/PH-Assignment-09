import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, id, ratingAvg, downloads } = app;

  const formatDownloads = (num) => {
    if (num >= 1_000_000_000) return `${Math.round(num / 1_000_000_000)}B`;
    if (num >= 1_000_000) return `${Math.round(num / 1_000_000)}M`;
    if (num >= 1_000) return `${Math.round(num / 1_000)}K`;
    return num;
  };

  return (
    <Link
      to={`/apps/${id}`}
      className="
        bg-white/10
        backdrop-blur-xl
        border border-white/15
        rounded-3xl
        shadow-lg
        hover:shadow-purple-500/20
        hover:-translate-y-1
        hover:scale-[1.02]
        transition-all duration-300 ease-out
        flex flex-col overflow-hidden
      "
    >
      <div className="flex items-center justify-center p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-contain rounded-2xl"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between px-6 pb-5 pt-4">
        <h3 className="text-center font-semibold text-white text-lg leading-snug">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-emerald-900/40 text-emerald-300 px-3 py-1 rounded-xl text-sm font-semibold">
            <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
            <span>{formatDownloads(downloads)}</span>
          </div>

          <div className="flex items-center gap-2 bg-purple-900/40 text-purple-300 px-3 py-1 rounded-xl text-sm font-semibold">
            <img src={starIcon} alt="Rating" className="w-4 h-4" />
            <span>{ratingAvg.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
