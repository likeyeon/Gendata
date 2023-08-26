import Gnb from "../../components/gnb/Gnb";
import AboutHeader from "../about/components/aboutHeader"
import AboutIntro from "./components/aboutIntro";
import AboutSection from "./components/aboutSection";
import AboutSectionTwo from "./components/aboutSectionTwo";
import AboutSectionThree from "./components/aboutSectionThree";
import AboutHistory from "./components/aboutHisory";

export default function About() {
  return (
    <>
      <Gnb />
      <br />
      Hello about!
      <AboutHeader />
      <AboutIntro />
      <AboutSection />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutHistory />
    </>
  );
}