import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes";

import { InstalledAppsProvider } from "./context/InstalledAppsContext";
import AuthProvider from "./Contexts/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <InstalledAppsProvider>
        <RouterProvider router={router} />
      </InstalledAppsProvider>
    </AuthProvider>
  </StrictMode>
);
