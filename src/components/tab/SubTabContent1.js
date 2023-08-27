import TabContent from "../common/tab-module/TabContent";

import TabContentImg1 from "../../assets/data-building/sub_tab1.jpg";

const SubTabConten1 = () => {
  const data = {
    title: "데이터 가공/수집",
    desc: <>다양한 프로젝트 수행 경험과 품질확보전략과 품질<br/>프로세스를 통한 고품질 데이터셋 구축합니다.</>,
    img: TabContentImg1,
  }

  return (
    <TabContent contentsData={data}/>
  )
}
export default SubTabConten1;