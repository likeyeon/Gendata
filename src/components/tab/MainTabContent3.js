import TabContent from "../common/tab-module/TabContent";

import TabContentImg3 from "../../assets/data-building/main_tab3.png";

const MainTabContent3 = () => {
  const data = {
    title: "AI모델 개발",
    desc: <>내게 맞는 AI모델을 추천받고 MVP모델 개발<br />AI모델 개발을 통한 정부지원사업 연계까지</>,
    img: TabContentImg3,
  }

  return (
    <TabContent contentsData={data}/>
  )
};
export default MainTabContent3;
