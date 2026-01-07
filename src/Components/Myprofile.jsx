import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Myprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser, updateUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    const updatedData = {};
    const notify = () => toast.success("Profile Updated!");

    if (photoURL) updatedData.photoURL = photoURL;
    if (displayName) updatedData.displayName = displayName;

    if (Object.keys(updatedData).length > 0) {
      updateUser(updatedData)
        .then(() => {
          setUser((prev) => ({
            ...prev,
            ...updatedData,
          }));

          setIsEditing(false);
          notify();
          e.target.reset();
        })
        .catch((err) => console.log("Update error:", err));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1220] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-36" />

          <div className="relative px-8 pb-10">
            <div className="flex flex-col items-center -mt-16">
              <img
                src={user.photoURL || "https://i.ibb.co/Y36sQjp/user.png"}
                alt={user.displayName || "User"}
                className="h-32 w-32 rounded-full border-4 border-white shadow-xl object-cover"
              />

              <h2 className="mt-4 text-2xl font-bold text-white">
                {user.displayName || "User"}
              </h2>

              <p className="text-gray-300">{user.email}</p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Full Name</p>
                <p className="text-white font-medium">
                  {user.displayName || "Not set"}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Email Address</p>
                <p className="text-white font-medium">{user.email}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 break-all">
                <p className="text-gray-400 text-sm">Profile Picture</p>
                <p className="text-gray-200 text-sm">
                  {user.photoURL || "Not set"}
                </p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Update Profile
              </button>
            </div>

            {isEditing && (
              <form onSubmit={handleUpdate} className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photo"
                    className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
