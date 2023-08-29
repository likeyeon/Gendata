import AboutHeader from "./components/AboutHeader";
import AboutIntro from "./components/AboutIntro";
import AboutSection from "./components/AboutSection";
import AboutSectionTwo from "./components/AboutSectionTwo";
import AboutSectionThree from "./components/AboutSectionThree";
import AboutHistory from "./components/AboutHisory";
import Contact from "./components/Contact";
import WidgetSection from "./components/WidgetSection";

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutSection />
      <WidgetSection />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutHistory />
      <Contact />
    </>
  );
}
