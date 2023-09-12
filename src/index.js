import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import "./style/style.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import App from "./App";
import ServiceLabeling from "./pages/service-labeling/ServiceLabeling";
import DataProcess3d from "./pages/service-labeling/DataProcess3d";
import DataProcessText from "./pages/service-labeling/DataProcessText";
import DataProcessVideo from "./pages/service-labeling/DataProcessVideo";
import DataProcessAudio from "./pages/service-labeling/DataProcessAudio";
import DataCollection from "./pages/service-labeling/DataCollection";
import InHouseOperation from "./pages/service-labeling/InHouseOperation";
import About from "./pages/about/About";
import AiDevelopment from "./pages/ai-development/AiDevelopment";
import Education from "./pages/education/Education";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import AiService from "./pages/ai-service/AiService";
import ProjectDevelop from "./pages/project-develop/Project";
import NewsContents from "./pages/newsContents/NewsContents.js"; //
import Government from "./pages/government/Government";
import DataDealing from "./pages/data-dealing/DataDealing";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App component={<Main />} />,
    },
    {
      path: "/introduce",
      element: <App component={<About />} />,
    },
    {
      path: "/government-support-project",
      element: <App component={<Government />} />,
    },
    {
      path: "/data-dealing",
      element: <App component={<DataDealing />} />,
    },
    {
      path: "/gendata-service-labeling",
      element: <App component={<ServiceLabeling />} />,
    },
    {
      path: "/data-collection",
      element: <App component={<DataCollection />} />,
    },
    {
      path: "/inhouse-operation",
      element: <App component={<InHouseOperation />} />,
    },
    {
      path: "/ai-development",
      element: <App component={<AiDevelopment />} />,
    },
    {
      path: "/ai-education",
      element: <App component={<Education />} />,
    },
    {
      path: "/AI-data-project",
      element: <App component={<ProjectDevelop />} />,
    },
    {
      path: "/AI-service-paga",
      element: <App component={<AiService />} />,
    },
    {
      path: "/news",
      element: <App component={<News />} />,
    },
    {
      path: "/news/:newsId",
      element: <App component={<NewsContents />} />,
    },
    {
      path: "/contact",
      element: <App component={<Contact />} />,
    },
    {
      path: "/data-process-3d",
      element: <App component={<DataProcess3d />} />,
    },
    {
      path: "/data-process-text",
      element: <App component={<DataProcessText />} />,
    },
    {
      path: "/data-process-video",
      element: <App component={<DataProcessVideo />} />,
    },
    {
      path: "/data-process-audio",
      element: <App component={<DataProcessAudio />} />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
