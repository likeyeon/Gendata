import AboutHeader from "../about/components/aboutHeader";
import AboutIntro from "./components/aboutIntro";
import AboutSection from "./components/aboutSection";
import AboutSectionTwo from "./components/aboutSectionTwo";
import AboutSectionThree from "./components/aboutSectionThree";
import AboutHistory from "./components/aboutHisory";
import Contact from "./components/Contact";
import AutoSlider from "./AutoSlider";

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutSection />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutHistory />
      <AutoSlider />
      <Contact />
    </>
  );
}
