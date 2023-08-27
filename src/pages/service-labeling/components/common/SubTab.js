import Tab from "./components/tab/Tab";

import SubTabConten1 from "./SubTabContent1";
import SubTabConten2 from "./SubTabContent2";
import SubTabConten3 from "./SubTabContent3";

const SubTab = () => {
  const data = {
    title : <><span>AI개발과 학습용</span> <span>데이터 구축과 생성,</span><br/><span>전문기업 젠데이터와</span> <span>시작해보세요.</span></>,
    menuArray : [
      {name : "데이터 가공/수집", content : <SubTabConten1 />},
      {name : " 초거대 AI", content : <SubTabConten2 />},
      {name : "AI개발", content : <SubTabConten3 />},
    ],
  }

  return (
    <Tab contentsData={data}/>
  )
}

export default SubTab;