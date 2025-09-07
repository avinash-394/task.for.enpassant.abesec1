import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Import your main layout and page components
import App from "./App.tsx";
import Index from "./pages/Index";
import Grandmasters from "./pages/Grandmasters.tsx";

import "./index.css";
import Gallery from "./pages/Gallery.tsx";

// 1. Define the application routes using the modern data router.
// The App component now acts as the main layout for all child routes.
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, // App.tsx is the layout shell
      children: [
        {
          index: true, // The 'index' route renders inside the layout at the parent's path
          element: <Index />,
        },
        {
          path: "Grandmasters",
          element: <Grandmasters />,
        },
        {
          path: "Gallery",
          element: <Gallery />,
        },
        // You can add more routes here, like:
        // { path: "gallery", element: <Gallery /> },
      ],
    },
  ],
  {
    // 2. Add the 'future' flags here to opt-in to new features and remove warnings.
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const rootElement = document.getElementById("root");

if (rootElement) {
  // 3. Render the app using the RouterProvider.
  createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}
