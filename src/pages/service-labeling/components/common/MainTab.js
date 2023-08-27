import Tab from "./components/tab/Tab";

import MainTabContent1 from "./MainTabContent1";
import MainTabContent2 from "./MainTabContent2";
import MainTabContent3 from "./MainTabContent3";

const MainTab = () => {
  const data = {
    title: <><span>AI 모델 개발과</span> <span>학습용 데이터 구축,</span><br/><span>젠데이터와</span> <span>시작해보세요.</span></>,
    menuArray: [
      {name : "AI 데이터 구축", content : <MainTabContent1 />},
      {name : "AI 비즈니스 매칭", content : <MainTabContent2 />},
      {name : "AI모델개발", content : <MainTabContent3 />}
    ],
  }

  return (
    <Tab contentsData={data}/>
  )
}
export default MainTab;
