import DataProcessTitle from "./common/data-process-title/DataProceeTitle";
import TitleImg from "../../../assets/data-building/data_type_3d_big_icon.png";

const DataProcee3DTitle = () => {
  const data = {
    title: "3D 데이터",
    desc: <>3D 라이다, 센서, 레이더 데이터 라벨링 서비스</>,
    titleImg: TitleImg,
    titleImgAlt: "데이터 타입 3D 아이콘"
  }
  return (
    <DataProcessTitle contentsData={data}/>
  )
}

export default DataProcee3DTitle;