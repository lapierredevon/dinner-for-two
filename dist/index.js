import { jsx as _jsx } from "react/jsx-runtime";
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
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        errorElement: _jsx(ErrorRoute, {}),
        children: [
            {
                path: "/",
                element: _jsx(HomePage, {}),
            },
            {
                path: "/menu",
                element: _jsx(Menu, {}),
            },
            {
                path: "/contact",
                element: _jsx(Contact, {}),
            },
            {
                path: "/order",
                element: _jsx(Orders, {}),
            },
            {
                path: "/confirmation/:orderId",
                element: _jsx(ConfirmationPage, {}),
            },
        ],
    },
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(AnimatePresence, { children: _jsx(RouterProvider, { router: router }) }) }));
