import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Jewelry from "./pages/Jewelry";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Jewelry", element: <Jewelry /> },
  { path: "" },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
