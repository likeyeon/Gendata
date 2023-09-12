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

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <App component={<Main />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/introduce`,
    element: <App component={<About />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/government-support-project`,
    element: <App component={<Government />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-dealing`,
    element: <App component={<DataDealing />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gendata-service-labeling`,
    element: <App component={<ServiceLabeling />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-collection`,
    element: <App component={<DataCollection />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/inhouse-operation`,
    element: <App component={<InHouseOperation />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ai-development`,
    element: <App component={<AiDevelopment />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ai-education`,
    element: <App component={<Education />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/AI-data-project`,
    element: <App component={<ProjectDevelop />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/AI-service-paga`,
    element: <App component={<AiService />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/news`,
    element: <App component={<News />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/news/:newsId`,
    element: <App component={<NewsContents />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/contact`,
    element: <App component={<Contact />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-process-3d`,
    element: <App component={<DataProcess3d />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-process-text`,
    element: <App component={<DataProcessText />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-process-video`,
    element: <App component={<DataProcessVideo />} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/data-process-audio`,
    element: <App component={<DataProcessAudio />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
