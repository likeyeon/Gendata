import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AiDevelopment from "./pages/ai-development/AiDevelopment";
import Education from "./pages/education/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/ai-development",
    element: <AiDevelopment />,
  },
  {
    path: "/education",
    element: <Education />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
