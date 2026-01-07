import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center shadow-xl">
            <h2 className="text-xl font-bold mb-2">Login required</h2>
            <p className="text-gray-500 mb-5">
              Please login or create an account to continue.
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => navigate("/login")}
                className="btn bg-blue-600 text-white"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="btn btn-outline"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return children;
};

export default PrivateRoute;
