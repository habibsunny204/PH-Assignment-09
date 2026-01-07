import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import usePageTitle from "../hooks/usePageTitle";

const SignUp = () => {
  usePageTitle("Signup Page");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const notify = () => toast.success("Registration successful!");

  const { createUser, signInWithGoogle, updateUser, user, setUser } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const passwordPattern = /^.{6,}$/;
    const hasUpper = /[A-Z]/;
    const hasLower = /[a-z]/;

    if (!passwordPattern.test(password)) {
      setError("Password must be at least 6 characters.");
      return;
    } else if (!hasUpper.test(password)) {
      setError("Password must have an uppercase letter.");
      return;
    } else if (!hasLower.test(password)) {
      setError("Password must have a lowercase letter.");
      return;
    }

    setError("");
    setSuccess(false);

    if (!terms) {
      setError("Please accept our terms & conditions.");
      return;
    }

    createUser(email, password)
      .then(() => {
        notify();

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => setUser(user));

        setSuccess(true);
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then(() => {
        notify();
        navigate(location.state || "/");
      })
      .catch(console.log);
  };

  return (
    <div className="min-h-screen bg-[#0f1220] flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6">

        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Create Account
        </h1>

        <form onSubmit={handleRegister}>
          <fieldset className="space-y-3">

            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              className="input bg-white/90 text-gray-900"
              name="name"
              placeholder="Name"
            />

            <label className="text-gray-300 text-sm">Photo URL</label>
            <input
              type="text"
              className="input bg-white/90 text-gray-900"
              name="photo"
              placeholder="Photo URL"
            />

            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="input bg-white/90 text-gray-900"
              name="email"
              placeholder="Email"
            />

            <label className="text-gray-300 text-sm">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input bg-white/90 text-gray-900 pr-10"
                name="password"
                placeholder="Password"
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-2 right-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <label className="flex items-center gap-2 text-gray-300 text-sm mt-1">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept our Terms & Conditions
            </label>

            <button className="btn mt-3 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold">
              Sign Up
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="btn w-full bg-white text-black border mt-2"
            >
              Login with Google
            </button>
          </fieldset>

          <p className="mt-3 text-gray-300 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-300 hover:text-white">
              Login
            </Link>
          </p>

          {success && (
            <p className="text-green-400 mt-2 text-sm text-center">
              Account Created Successfully!
            </p>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
