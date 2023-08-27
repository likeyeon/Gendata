import TabContent from "./components/tab/TabContent";

import TabContentImg3 from "../../../../assets/data-building/sub_tab3.jpg";

const SubTabConten3 = () => {
  const data = {
    title: "AI 개발",
    desc: <>내 비즈니스에 적합한 AI 모델 추천 및<br/>개발을 통해 인공지능을 도입해보세요.</>,
    img: TabContentImg3,
  }

  return (
    <TabContent contentsData={data}/>
  )
}
export default SubTabConten3;