import EducitionTitle from "./components/educationTitle/EducationTitle";
import EducationIntro from "./components/educationIntro/EducationIntro";
import EducationSystem from "./components/educationSystem/EducationSystem";
import EducationReview from "./components/educationReview/EducationReview";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>AI에듀</title>
      </Helmet>
      <EducitionTitle />
      <EducationIntro />
      <EducationSystem />
      <EducationReview />
      <Contact />
    </>
  );
}
