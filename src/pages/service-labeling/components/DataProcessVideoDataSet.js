import VideoTab1 from "../../../assets/data-building/data_type_video_tab1.png";
import VideoTab2 from "../../../assets/data-building/data_type_video_tab2.png";
import VideoTab3 from "../../../assets/data-building/data_type_video_tab3.png";

import DataProcessDataSet from "./common/components/data-process-dataset/DataProcessDataSet";

const DataProcessVideoDataSet = () => {

  const data = {
    title : "영상 데이터",
    menuArray: [
      {name : "추출", content : <img src={VideoTab1} alt="" />},
      {name : "태깅", content : <img src={VideoTab2} alt="" />},
      {name : "비식별화", content : <img src={VideoTab3} alt="" />},
    ],
    desc : "젠데이터는 고품질 영상 데이터셋을 가공합니다.",
  } 

  return (
    <DataProcessDataSet contentsData={data}/>
  )
}
export default DataProcessVideoDataSet;