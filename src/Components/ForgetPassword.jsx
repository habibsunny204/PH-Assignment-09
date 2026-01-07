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
        toast.success("Password reset email sent!");

        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1200);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="card-body text-center mb-8">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email to reset your password
          </p>

          <form onSubmit={handleForgetPassword} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium text-gray-700">
                  Email
                </span>
              </label>

              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full py-3 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-blue-600 text-white w-full hover:bg-blue-700"
            >
              Reset Password
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
