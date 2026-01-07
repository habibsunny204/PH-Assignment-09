import React, { use, useState } from "react";

import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Myprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser, updateUser } = use(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const notify = () => toast.success("Profile Updated!");
    const updatedData = {};
    if (photoURL) {
      updatedData.photoURL = photoURL;
    }
    if (displayName) {
      updatedData.displayName = displayName;
    }

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
        .catch((err) => {
          console.log("Update error:", err);
        });
    } else {
      console.log("No fields to update");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>

          <div className="relative px-8 pb-8">
            <div className="flex flex-col items-center -mt-16">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                {user.displayName}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="text-lg font-medium text-gray-800">
                  {user.displayName}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="text-lg font-medium text-gray-800">
                  {user.email}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Profile Picture</p>
                <p className="text-sm font-medium text-gray-800 break-all">
                  {user.photoURL}
                </p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors mt-6"
              >
                Update Profile
              </button>
            </div>

            {isEditing && (
              <form onSubmit={handleUpdate} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
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
