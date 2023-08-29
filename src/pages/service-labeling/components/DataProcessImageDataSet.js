import ImgTab1 from "../../../assets/data-building/data_type_img_tab1.png";
import ImgTab2 from "../../../assets/data-building/data_type_img_tab2.png";
import ImgTab3 from "../../../assets/data-building/data_type_img_tab3.png";
import ImgTab4 from "../../../assets/data-building/data_type_img_tab4.png";
import ImgTab5 from "../../../assets/data-building/data_type_img_tab5.png";

import DataProcessDataSet from "./common/data-process-dataset/DataProcessDataSet";

const DataProcessImageDataSet = () => {

  const data = {
    title : "이미지",
    menuArray: [
      {name : "Bounding box", content : <img src={ImgTab1} alt="" />},
      {name : "Keypoint", content : <img src={ImgTab2} alt="" />},
      {name : "Polyline", content : <img src={ImgTab3} alt="" />},
      {name : "Segmentation", content : <img src={ImgTab4} alt="" />},
      {name : "OCR", content : <img src={ImgTab5} alt="" />},
    ],
    desc : "젠데이터는 고품질 이미지 데이터셋을 가공합니다.",
  } 

  return (
    <DataProcessDataSet contentsData={data}/>
  )
}
export default DataProcessImageDataSet;