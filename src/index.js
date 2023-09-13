import React from "react";
import "./style/reset.css";
import "./style/style.scss";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
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

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Main />} />
        <Route path="introduce" element={<About />} />
        <Route path="government-support-project" element={<Government />} />
        <Route path="data-dealing" element={<DataDealing />} />
        <Route path="gendata-service-labeling" element={<ServiceLabeling />} />
        <Route path="data-collection" element={<DataCollection />} />
        <Route path="inhouse-operation" element={<InHouseOperation />} />
        <Route path="ai-development" element={<AiDevelopment />} />
        <Route path="ai-education" element={<Education />} />
        <Route path="AI-data-project" element={<ProjectDevelop />} />
        <Route path="AI-service-paga" element={<AiService />} />
        <Route path="news" element={<News />} />
        <Route path="news/:newsId" element={<NewsContents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="data-process-3d" element={<DataProcess3d />} />
        <Route path="data-process-text" element={<DataProcessText />} />
        <Route path="data-process-video" element={<DataProcessVideo />} />
        <Route path="data-process-audio" element={<DataProcessAudio />} />
      </Route>
    </Routes>
  </HashRouter>
);

// const router = createBrowserRouter([
//   {
//     path: `${process.env.PUBLIC_URL}/`,
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Main />,
//       },
//       {
//         path: "introduce",
//         element: <About />,
//       },
//       {
//         path: "government-support-project",
//         element: <Government />,
//       },
//       {
//         path: "data-dealing",
//         element: <DataDealing />,
//       },
//       {
//         path: "gendata-service-labeling",
//         element: <ServiceLabeling />,
//       },
//       {
//         path: "data-collection",
//         element: <DataCollection />,
//       },
//       {
//         path: "inhouse-operation",
//         element: <InHouseOperation />,
//       },
//       {
//         path: "ai-development",
//         element: <AiDevelopment />,
//       },
//       {
//         path: "ai-education",
//         element: <Education />,
//       },
//       {
//         path: "AI-data-project",
//         element: <ProjectDevelop />,
//       },
//       {
//         path: "AI-service-paga",
//         element: <AiService />,
//       },
//       {
//         path: "news",
//         element: <News />,
//       },
//       {
//         path: "news/:newsId",
//         element: <NewsContents />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "data-process-3d",
//         element: <DataProcess3d />,
//       },
//       {
//         path: "data-process-text",
//         element: <DataProcessText />,
//       },
//       {
//         path: "data-process-video",
//         element: <DataProcessVideo />,
//       },
//       {
//         path: "data-process-audio",
//         element: <DataProcessAudio />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

reportWebVitals();
