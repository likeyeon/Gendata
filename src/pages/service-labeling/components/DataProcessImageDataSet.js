import styles from "./DataProcessImageDataSet.module.scss";

import ImgTab1 from "../../../assets/data-building/data_type_img_tab1.png";
import ImgTab2 from "../../../assets/data-building/data_type_img_tab2.png";
import ImgTab3 from "../../../assets/data-building/data_type_img_tab3.png";
import ImgTab4 from "../../../assets/data-building/data_type_img_tab4.png";
import ImgTab5 from "../../../assets/data-building/data_type_img_tab5.png";

import { useState } from "react";

const DataProcessImageDataSet = () => {

  const [currentTab, setTab] = useState(0);

  const menuArr = [
    {name : "Bounding box", content : <img src={ImgTab1} alt="" />},
    {name : "Keypoint", content : <img src={ImgTab2} alt="" />},
    {name : "Polyline", content : <img src={ImgTab3} alt="" />},
    {name : "Segmentation", content : <img src={ImgTab4} alt="" />},
    {name : "OCR", content : <img src={ImgTab5} alt="" />},
  ];

  const selectMenuHandler = (index) => {
    setTab(index)
  };

  return (
    <div className={styles.DataSetWrap}>
      <h3 className={styles.DataSetTitle}>이미지</h3>
      <div className={styles.DataSetContents}>
        <ul className={styles.DataSetTabMenu}>
          {menuArr.map((el, index) => (
            <li key={index} className={index === currentTab ? `${styles.TabItem} ${styles.Focused}` : `${styles.TabItem}`} onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </ul>
        <div className={styles.DataSetTabContentWrap}>
          <p className={styles.DataSetTabDesc}>젠데이터는 고품질 이미지 데이터셋을 가공합니다.</p>
          <div className={styles.DataSetTabContent}>
            {menuArr[currentTab].content}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataProcessImageDataSet;