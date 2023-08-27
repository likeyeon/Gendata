import TabContent from "../common/tab-module/TabContent";

import TabContentImg2 from "../../assets/data-building/main_tab2.png";

const MainTabContent2 = () => {
  const data = {
    title: "AI 비즈니스 매칭",
    desc: <>비전문기업의 AI도입부터 AI전문기업 매칭까지<br/>비전문기업을 위한 소통, 프로젝트 관리, 히스토리저장</>,
    img: TabContentImg2,
  }

  return (
    <TabContent contentsData={data}/>
  )
};
export default MainTabContent2;
