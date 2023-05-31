import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./navigation/HomePage";
import { AnimatePresence } from "framer-motion";
import Menu from "./navigation/Menu";
import ErrorRoute from "./navigation/ErrorPage";
import Contact from "./navigation/Contact";
import Orders from "./navigation/Orders";
import ConfirmationPage from "./navigation/ConfirmationPage";

/**
 * Continue to work on loader function for this project;
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Orders />,
      },
      {
        path: "/confirmation/:orderId",
        element: <ConfirmationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
