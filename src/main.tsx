import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Tabs from "./pages/Tabs.tsx";
import ImageSlider from "./pages/ImageSlider.tsx";
import StarRating from "./pages/StarRating.tsx";
import AccordionPage from "./pages/AccordionPage.tsx";
import RandomColorGeneratorPage from "./pages/RandomColorGeneratorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "accordion",
        element: <AccordionPage />,
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
      {
        path: 'random-color-generator',
        element: <RandomColorGeneratorPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
