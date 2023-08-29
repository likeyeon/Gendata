import Header from "./components/AiHeader";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

export default function AiService() {
  return (
    <>
      <Helmet>
        <title>AI 서비스</title>
      </Helmet>
      <Header />
      <Contact />
    </>
  );
}
