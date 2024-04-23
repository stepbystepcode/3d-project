import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import City from "./routes/city";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/city",
        element: <City />,
      },
      {
        path: "/space",
        element: <div>Space</div>,
      },
      {
        path: "/community",
        element: <div>Community</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
