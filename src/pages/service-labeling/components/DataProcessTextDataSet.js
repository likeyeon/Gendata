import TextTab1 from "../../../assets/data-building/data_type_text_tab1.png";
import TextTab2 from "../../../assets/data-building/data_type_text_tab2.png";
import TextTab3 from "../../../assets/data-building/data_type_text_tab3.png";
import TextTab4 from "../../../assets/data-building/data_type_text_tab4.png";
import TextTab5 from "../../../assets/data-building/data_type_text_tab5.png";

import DataProcessDataSet from "./common/data-process-dataset/DataProcessDataSet";

const DataProcessTextDataSet = () => {

  const data = {
    title : "텍스트",
    menuArray: [
      {name : "객체명인식", content : <img src={TextTab1} alt="" />},
      {name : "Classification", content : <img src={TextTab2} alt="" />},
      {name : "Taxonomy", content : <img src={TextTab3} alt="" />},
      {name : "라벨링", content : <img src={TextTab4} alt="" />},
      {name : "비식별화", content : <img src={TextTab5} alt="" />},
    ],
    desc : "젠데이터는 고품질 텍스트 데이터셋을 가공합니다.",
  } 

  return (
    <DataProcessDataSet contentsData={data}/>
  )
}
export default DataProcessTextDataSet;