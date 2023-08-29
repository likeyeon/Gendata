import AboutHeader from "./components/AboutHeader";
import AboutIntro from "./components/AboutIntro";
import AboutSection from "./components/AboutSection";
import AboutSectionTwo from "./components/AboutSectionTwo";
import AboutSectionThree from "./components/AboutSectionThree";
import AboutHistory from "./components/AboutHisory";
import Contact from "./components/Contact";
import WidgetSection from "./components/WidgetSection";

import AutoSlider from "./components/AutoSlider";
import SliderArr from "./components/SliderArr";
//  AutoSlider와 동일 경로에 있는 module.scss 수정 해주세요.
// 속도는 24번째 줄 animationDuration="20s"로 조절해주세요.
// 작업 후 주석은 모두 삭제해주세요.

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
      <AutoSlider ImgArr={SliderArr} animationDuration="15s" />
      <Contact />
    </>
  );
}
