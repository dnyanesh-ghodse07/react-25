import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Projects from "./pages/Projects.tsx";
import Accordion from "./pages/Accordion.tsx";
import Tabs from "./pages/Tabs.tsx";
import ImageSlider from "./pages/ImageSlider.tsx";
import StarRating from "./pages/StarRating.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            path: "accordion",
            element: <Accordion />,
          },
          {
            path: "tabs",
            element: <Tabs />,
          },
          {
            path: "image-slider",
            element: <ImageSlider />,
          },
          {
            path: "start-rating",
            element: <StarRating />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
