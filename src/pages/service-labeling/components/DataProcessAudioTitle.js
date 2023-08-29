import DataProcessTitle from "./common/data-process-title/DataProceeTitle";
import TitleImg from "../../../assets/data-building/data_type_audio_big_icon.png";

const DataProceeAudioTitle = () => {
  const data = {
    title: "음성 데이터",
    desc: <>음성 데이터 라벨링 서비스</>,
    titleImg: TitleImg,
    titleImgAlt: "데이터 타입 음성 아이콘"
  }
  return (
    <DataProcessTitle contentsData={data}/>
  )
}

export default DataProceeAudioTitle;