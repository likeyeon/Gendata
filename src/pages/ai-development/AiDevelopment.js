import AiDevlopmentTitle from "./components/AiDevlopmentTitle";
import AiDevelopmentApplication from "./components/AiDevelopmentApplication";
import AiDevelopmentCase from "./components/AiDevelopmentCase";
import Strength from "./../../components/strength/Strength";
import Contact from "./components/Contact";
import AiDevelopmentRecommend from "./components/AiDevelopmentRecommend";
import { Helmet } from "react-helmet";

export default function AiDevelopment() {
  return (
    <>
      <Helmet>
        <title>젠데이터 AI 개발</title>
      </Helmet>
      <AiDevlopmentTitle />
      <AiDevelopmentApplication />
      <AiDevelopmentRecommend />
      <AiDevelopmentCase />
      <Strength />
      <Contact />
    </>
  );
}
