import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { use } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const { signInUser, signInWithGoogle } = use(AuthContext);

  const notify = () => toast.success("Logged in successfully! 🎮");

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Email or password is incorrect.";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const from = location.state?.from || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");
    setSuccess(false);

    signInUser(email, password)
      .then(() => {
        notify();
        setSuccess(true);
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(getFriendlyError(err.code)));
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    signInWithGoogle()
      .then(() => {
        notify();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(getFriendlyError(err.code)));
  };

  return (
    <div className="min-h-screen bg-[#0b0e1a] flex items-center justify-center px-4">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-md w-full bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login to GameHub
        </h1>

        <form onSubmit={handleLogIn}>
          <fieldset className="space-y-3 flex flex-col">
            <label className="label text-gray-300">Email</label>
            <input
              type="email"
              className="input bg-white/90 text-gray-900"
              name="email"
              placeholder="Email"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label text-gray-300 text-sm">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input bg-white/90 text-gray-900"
                name="password"
                placeholder="Password"
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-2 right-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mt-1">
              <Link
                to="/forgetpassword"
                state={{ email }}
                className="text-purple-300 hover:text-white text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <button className="btn mt-3 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold">
              Login
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="btn w-full bg-white text-black border mt-2"
            >
              Login with Google
            </button>
          </fieldset>

          <p className="mt-4 text-gray-300 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-300 hover:text-white">
              Sign Up
            </Link>
          </p>

          {success && (
            <p className="text-green-400 mt-3 text-center">
              Logged in successfully!
            </p>
          )}

          {error && (
            <div className="mt-3 p-3 bg-red-500/20 text-red-300 rounded border border-red-500/30 text-sm">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
