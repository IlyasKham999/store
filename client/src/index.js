import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Jewelry from "./pages/Jewelry";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Clock from "./pages/Clock";
import LeatherProducts from "./pages/LeatherProducts";
import Perfume from "./pages/Perfume";
import Brand from "./pages/Brand";
import Auto from "./pages/Auto";
import Bascet from "./pages/Bascet";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Jewelry", element: <Jewelry /> },
  { path: "/Clock", element: <Clock /> },
  { path: "/LeatherProducts", element: <LeatherProducts /> },
  { path: "/Perfume", element: <Perfume /> },
  { path: "/Brand", element: <Brand /> },
  { path: "/Auto", element: <Auto /> },
  { path: "/Bascet", element: <Bascet /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
