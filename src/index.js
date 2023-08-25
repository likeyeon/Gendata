import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import "./style/style.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import ServiceLabeling from "./pages/service-labeling/ServiceLabeling";
import About from "./pages/about/About";
import AiDevelopment from "./pages/ai-development/AiDevelopment";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";

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
    path: "/service-labeling",
    element: <ServiceLabeling/>
  },
  {
    path: "/ai-development",
    element: <AiDevelopment />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function initHamburgerMenu() {
  const hamburgerEl = document.querySelector('.gnb .hamburger');
  const menuEl = document.querySelector('.gnb .menu');
  const mobileMql = window.matchMedia('(max-width: 991px)');

  mobileMql.onchange = (event) => {
    !event.matches && menuEl.classList.remove('active');
  }

  hamburgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('active');
  })
}
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initHamburgerMenu();
