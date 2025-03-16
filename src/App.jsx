import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/Project",
        element: <ProjectPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
