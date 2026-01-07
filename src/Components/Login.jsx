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

  const notify = () => toast.success("Logged in successfully!");

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
      .catch((err) => {
        console.log(err);
        setError(getFriendlyError(err.code));
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    signInWithGoogle()
      .then(() => {
        notify();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(getFriendlyError(err.code));
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-blue-600 font-bold">
            Login now!
          </h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
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
                    className="link link-hover"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button className="btn bg-blue-600 text-white mt-4">
                  Login
                </button>

                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border mt-2"
                >
                  Login with Google
                </button>
              </fieldset>

              <p className="mt-3">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-800"
                >
                  SignUp
                </Link>
              </p>

              {success && (
                <p className="text-green-500 mt-2">
                  Logged in successfully!
                </p>
              )}

              {error && (
                <div className="mt-2 p-2 bg-red-100 text-red-700 rounded">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
