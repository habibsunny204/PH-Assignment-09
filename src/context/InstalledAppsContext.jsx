import React, { createContext, useContext, useEffect, useState } from "react";

const InstalledAppsContext = createContext(null);
export const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("installedApps");
    if (saved) {
      try {
        setInstalledApps(JSON.parse(saved));
      } catch {
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  const installApp = (app) => {
    setInstalledApps((prev) =>
      prev.some((a) => a.id === app.id) ? prev : [...prev, app]
    );
  };

  const uninstallApp = (id) => {
    setInstalledApps((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <InstalledAppsContext.Provider
      value={{ installedApps, installApp, uninstallApp }}
    >
      {children}
    </InstalledAppsContext.Provider>
  );
};

export const useInstalledApps = () => useContext(InstalledAppsContext);
