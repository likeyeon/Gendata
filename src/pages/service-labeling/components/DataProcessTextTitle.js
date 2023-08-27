import DataProcessTitle from "./common/components/data-process-title/DataProceeTitle";
import TitleImg from "../../../assets/data-building/data_type_text_big_icon.png";

const DataProceeTextTitle = () => {
  const data = {
    title: "텍스트",
    desc: <>텍스트 데이터 라벨링 서비스</>,
    titleImg: TitleImg,
    titleImgAlt: "데이터 타입 텍스트 아이콘"
  }
  return (
    <DataProcessTitle contentsData={data}/>
  )
}

export default DataProceeTextTitle;