import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ForMan from "./pages/ForMan";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ForMan", element: <ForMan /> },
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
