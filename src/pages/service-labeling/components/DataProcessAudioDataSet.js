import AudioTab1 from "../../../assets/data-building/data_type_audio_tab1.png";
import AudioTab2 from "../../../assets/data-building/data_type_audio_tab2.png";

import DataProcessDataSet from "./common/data-process-dataset/DataProcessDataSet";

const DataProcessAudioDataSet = () => {

  const data = {
    title : "음성 데이터",
    menuArray: [
      {name : "음성전사", content : <img src={AudioTab1} alt="" />},
      {name : "분류/분할/검출", content : <img src={AudioTab2} alt="" />},
    ],
    desc : "젠데이터는 고품질 음성 데이터셋을 가공합니다.",
  } 

  return (
    <DataProcessDataSet contentsData={data}/>
  )
}
export default DataProcessAudioDataSet;