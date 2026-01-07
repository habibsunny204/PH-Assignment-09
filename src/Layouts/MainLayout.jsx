import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="mx-auto w-full flex-1">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
