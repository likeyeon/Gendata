import TabContent from "../common/tab-module/TabContent";

import TabContentImg2 from "../../assets/data-building/sub_tab2.jpg";

const SubTabConten2 = () => {
  const data = {
    title: "초거대 AI",
    desc: <>젠데이터는 초거대AI의 응용, 데이터 구축 등<br/>초거대 AI 혁신 생태계 조성에 힘쓰고 있습니다.</>,
    img: TabContentImg2,
  }

  return (
    <TabContent contentsData={data}/>
  )
}
export default SubTabConten2;