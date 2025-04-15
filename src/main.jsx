import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not found </div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:productId",
        loader: () =>fetch("./data.json").then((res) => res.json()),
        element:<ProductDetails></ProductDetails>,
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
