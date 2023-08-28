import DataProcessTitle from "./common/data-process-title/DataProceeTitle";
import TitleImg from "../../../assets/data-building/data_type_video_big_icon.png";

const DataProceeVideoTitle = () => {
  const data = {
    title: "영상 데이터",
    desc: <>영상 데이터 라벨링 서비스</>,
    titleImg: TitleImg,
    titleImgAlt: "데이터 타입 영상 아이콘"
  }
  return (
    <DataProcessTitle contentsData={data}/>
  )
}

export default DataProceeVideoTitle;