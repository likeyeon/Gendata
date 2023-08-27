import DataProcessTitle from "./common/data-process-title/DataProceeTitle";
import TitleImg from "../../../assets/data-building/data_type_img_big_icon.png";

const DataProcessImageTitle = () => {
  const data = {
    title: "이미지",
    desc: <>다양한 어노테이션을 사용하여 이미지 라벨링을 통한<br />인공지능 모델 학습용 데이터셋 구축</>,
    titleImg: TitleImg,
    titleImgAlt: "데이터 타입 이미지 아이콘"
  }
  return (
    <DataProcessTitle contentsData={data}/>
  )
}
export default DataProcessImageTitle;
