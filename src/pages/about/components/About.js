import AboutHeader from "../about/components/AboutHeader";
import AboutIntro from "./components/AboutIntro";
import AboutSection from "./components/AboutSection";
import AboutSectionTwo from "./components/AboutSectionTwo";
import AboutSectionThree from "./components/AboutSectionThree";
import AboutHistory from "./components/AboutHisory";
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
