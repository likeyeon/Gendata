import ThreeDTab1 from "../../../assets/data-building/data_type_3d_tab1.png";
import ThreeDTab2 from "../../../assets/data-building/data_type_3d_tab2.png";

import DataProcessDataSet from "./common/data-process-dataset/DataProcessDataSet";

const DataProcess3dDataSet = () => {

  const data = {
    title : "3D 데이터",
    menuArray: [
      {name : "3D Point Cloud", content : <img src={ThreeDTab1} alt="" />},
      {name : "3D 객체 생성", content : <img src={ThreeDTab2} alt="" />},
    ],
    desc : "젠데이터는 고품질 3D 데이터셋을 가공합니다.",
  } 

  return (
    <DataProcessDataSet contentsData={data}/>
  )
}
export default DataProcess3dDataSet;