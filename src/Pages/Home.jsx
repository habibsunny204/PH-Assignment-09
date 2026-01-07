import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import GameHubSlider from "../Components/GameHubSlider";
import AppCard from "../Components/AppCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import useApps from "../hooks/useApps";
import Newsletter from "../Components/Newsletter";
import gsap from "gsap";

const Home = () => {
  const { apps, loading, error } = useApps();

  const featuredApps = [...apps]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 35,
      duration: 0.9,
      stagger: 0.12,
      ease: "power2.out",
    });
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="w-full bg-[#0b0f1a]">
      <GameHubSlider />

      <section className="relative py-16">
        <div className="absolute -top-10 left-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-5 relative flex flex-col items-center gap-10">
          <div ref={titleRef} className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Popular Games
            </h1>
            <p className="text-gray-400 mt-2">
              Explore the top-rated titles created by our studio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {featuredApps.map((app, index) => (
              <div
                key={app.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-lg shadow-xl hover:border-purple-400/40 transition"
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>

          <Link
            to="/apps"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-7 py-3 rounded-lg font-semibold shadow hover:opacity-90 active:scale-95 transition"
          >
            Show All
          </Link>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
