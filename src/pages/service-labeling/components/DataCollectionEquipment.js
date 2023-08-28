import styles from "./DataCollectionEquipment.module.scss";

import Euipment1 from "../../../assets/data-building/data_collection_equip1.png";
import Euipment2 from "../../../assets/data-building/data_collection_equip2.png";
import Euipment3 from "../../../assets/data-building/data_collection_equip3.png";
import Euipment4 from "../../../assets/data-building/data_collection_equip4.png";

const DataCollectionEquipment = () => {
  return (
    <div className={styles.EquipmentInnerWrap}>
      <h2 className={styles.EquipmentTitle}>고품질 데이터 수집을 위해<br/>전문 장비를 사용합니다.</h2>
      <ul className={styles.EquipmentList}>
        <li className={styles.EquipmentItem}>
          <img src={Euipment1} alt=""/><span>rosbag</span></li>
        <li className={styles.EquipmentItem}>
          <img src={Euipment2} alt=""/><span>센서</span></li>
        <li className={styles.EquipmentItem}>
          <img src={Euipment3} alt=""/><span>영상 촬영용 장비</span></li>
        <li className={styles.EquipmentItem}><img src={Euipment4} alt=""/><span>기타</span></li>
      </ul>
    </div>
  )
}
export default DataCollectionEquipment;