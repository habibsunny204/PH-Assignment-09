import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import {
  FaGamepad,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaCrown,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 80 });
  }, []);

  const stats = [
    { number: "2M+", label: "Total Downloads" },
    { number: "500+", label: "Games Available" },
    { number: "150+", label: "Developers" },
    { number: "50K+", label: "Reviews Posted" },
  ];

  const values = [
    {
      icon: <FaUsers className="text-purple-400 text-3xl" />,
      title: "Player Focused",
      description:
        "Everything we build starts from one point — making gaming fun, smooth and accessible.",
    },
    {
      icon: <FaShieldAlt className="text-blue-400 text-3xl" />,
      title: "Safe & Verified",
      description:
        "Every game passes strict verification so players install with confidence.",
    },
    {
      icon: <FaBolt className="text-yellow-400 text-3xl" />,
      title: "Performance First",
      description:
        "Lightning-fast loading, optimized browsing, and smooth installs.",
    },
    {
      icon: <FaChartLine className="text-pink-400 text-3xl" />,
      title: "Always Evolving",
      description:
        "We constantly update GameHub with new titles, features, and improvements.",
    },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & Lead Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=450",
    },
    {
      name: "Daniel Rivera",
      role: "Game Partnership Lead",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450",
    },
    {
      name: "Sophia Lee",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=450",
    },
    {
      name: "Mark Williams",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=450",
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "GameHub Was Born",
      description:
        "Created to give gamers a safe and simple download platform.",
    },
    {
      year: "2024",
      event: "50+ Games Added",
      description: "Player engagement skyrocketed and community grew fast.",
    },
    {
      year: "2025",
      event: "2 Million Downloads",
      description: "GameHub became a trusted name among casual gamers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0e1a] text-white">
      <div
        className="bg-gradient-to-r from-purple-700 to-blue-700 py-20 px-4"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About GameHub</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            A modern platform built for gamers — discover games, install safely,
            and enjoy seamless experiences.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#0f1220]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center" data-aos="fade-up">
              <div className="text-4xl font-bold text-purple-400">
                {s.number}
              </div>
              <p className="text-gray-300 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div
          className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-8"
          data-aos="fade-right"
        >
          <FaGamepad className="text-purple-400 text-4xl mb-3" />
          <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To make discovering and installing games simple, secure and fast —
            while supporting developers and entertaining millions of players.
          </p>
        </div>

        <div
          className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-8"
          data-aos="fade-left"
        >
          <FaRocket className="text-blue-400 text-4xl mb-3" />
          <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become the most trusted digital hub where gamers find quality
            titles and developers grow meaningful audiences.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-3">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-300">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-[#0f1220] px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-10"
            data-aos="fade-down"
          >
            Our Journey
          </h2>

          {milestones.map((m, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/10 rounded-xl p-6 mb-6"
              data-aos="fade-up"
            >
              <div className="text-purple-400 text-3xl font-bold">{m.year}</div>
              <h3 className="text-xl font-semibold">{m.event}</h3>
              <p className="text-gray-300">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          Meet Our Team
        </h2>

        <p className="text-center text-gray-400 mb-10">
          A passionate team building tools gamers truly love
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center" data-aos="zoom-in">
              <img
                src={member.image}
                className="rounded-2xl h-72 w-full object-cover shadow-lg mb-3"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-purple-700 to-blue-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Play?</h2>

        <p className="text-blue-100 mb-6">
          Discover new titles and start installing instantly.
        </p>

        <Link to="/apps">
          <button className="bg-white text-purple-700 px-10 py-3 rounded-lg font-semibold hover:bg-blue-50 shadow-lg hover:shadow-2xl transition">
            Browse Games
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
