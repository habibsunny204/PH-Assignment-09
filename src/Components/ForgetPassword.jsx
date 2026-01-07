import { useState } from "react";
import { Link, useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleForgetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! 📩");

        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1200);
      })
      .catch((error) => {
        toast.error("Something went wrong. Try again.");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#0f1220] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center">
          Forgot Password?
        </h2>

        <p className="text-gray-300 text-center mt-2">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleForgetPassword} className="mt-6 space-y-6">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input bg-white/90 text-gray-900 w-full mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300 text-sm">
          Remember your password?{" "}
          <Link to="/login" className="text-purple-300 hover:text-white">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
