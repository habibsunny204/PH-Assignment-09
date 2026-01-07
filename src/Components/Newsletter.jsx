import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    toast.success("You're subscribed! 🎮");
    setEmail("");
  };

  return (
    <section className="relative py-16 bg-[#0b0f1a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center transition hover:border-purple-400/60">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join the GameHub Newsletter
          </h2>
          <p className="text-gray-300 mb-6">
            Be the first to know about new games, updates, and giveaways.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="px-4 py-2 rounded-lg bg-white/90 shadow outline-none text-gray-900 text-sm focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow hover:opacity-90 transition active:scale-95"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
