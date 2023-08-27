import TabContent from "../common/tab-module/TabContent";

import TabContentImg1 from "../../assets/data-building/main_tab1.png";

const MainTabContent1 = () => {
  const data = {
    title: "AI 데이터 구축",
    desc: <>AI모델 학습에 필요한 데이터 수집,정제,가공<br/>내부 서버, 작업자를 통한 철저한 보안과 품질확보</>,
    img: TabContentImg1,
  }

  return (
    <TabContent contentsData={data}/>
  )
};
export default MainTabContent1;
