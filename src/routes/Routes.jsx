import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import LoadingSpinner from "../Components/LoadingSpinner";
import PrivateRoute from "./Privateroute";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import Myprofile from "../Components/Myprofile";
import ForgetPassword from "../Components/ForgetPassword";
import AboutUs from "../Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/apps",
        element: (
          <PrivateRoute>
            <Apps />
          </PrivateRoute>
        ),
      },
      {
        path: "/installedapps",
        element: (
          <PrivateRoute>
            <InstalledApps />
          </PrivateRoute>
        ),
      },
      {
        path: "/apps/:id",
        element: (
          <PrivateRoute>
            <AppDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <Myprofile />
          </PrivateRoute>
        ),
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
