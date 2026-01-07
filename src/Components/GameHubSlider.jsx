import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Link } from "react-router";

// slider images
import s0 from "../assets/slider_img/s0.png";
import s1 from "../assets/slider_img/s1.png";
import s2 from "../assets/slider_img/s2.png";
import s3 from "../assets/slider_img/s3.png";
import s4 from "../assets/slider_img/s4.png";

const GameHubSlider = () => {
  const slides = [
    {
      image: s0,
      title: "Discover Amazing Games",
      text: "Browse and explore the latest trending games on GameHub.",
      button: "Explore Games",
      link: "/apps"
    },
    {
      image: s1,
      title: "Play. Compete. Win.",
      text: "Challenge your friends and climb to the top of the leaderboard.",
      button: "View Leaderboard",
      link: "/installed-apps"
    },
    {
      image: s2,
      title: "Game Reviews & Details",
      text: "See ratings, reviews, and details before you download.",
      button: "Browse Details",
      link: "/apps"
    },
    {
      image: s3,
      title: "Install With One Click",
      text: "Fast and secure downloads directly from GameHub.",
      button: "Download Now",
      link: "/apps"
    },
    {
      image: s4,
      title: "Your Ultimate Gaming Hub",
      text: "All your favorite games — collected in one place.",
      button: "Get Started",
      link: "/"
    }
  ];

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">

              {/* background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* text content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl mb-6">
                    {slide.text}
                  </p>

                  <Link
                    to={slide.link}
                    className="btn btn-primary px-8 py-3 font-semibold rounded-lg"
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameHubSlider;
