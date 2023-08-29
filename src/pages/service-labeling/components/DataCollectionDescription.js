import styles from "./DataCollectionDescription.module.scss";

import Desc1 from "../../../assets/data-building/data_collection1.png";
import Desc2 from "../../../assets/data-building/data_collection2.png";
import Desc3 from "../../../assets/data-building/data_collection3.png";
import Desc4 from "../../../assets/data-building/data_collection4.png";
import Desc5 from "../../../assets/data-building/data_collection5.png";

const DataCollectionDescription = () => {
  return (
    <div className={styles.DescriptionOuterWrap}>
      <div className={styles.DescriptionInnerWrap}>
        <h2 className={styles.DescriptionTitle}>AI모델 학습을 위한 원천데이터 수집입니다.</h2>
        <p className={styles.DescriptionDesc}>젠데이터는 기업에서 원하는 AI 개발에 필요한 원천데이터를 직접 수집하며 다양한 데이터 수집을 통해 성능을 향상 시킵니다.</p>
        <ul className={styles.DescriptionList}>
          <li className={styles.DescriptionItem}><img src={Desc1} alt=""/></li>
          <li className={styles.DescriptionItem}><img src={Desc2} alt=""/></li>
          <li className={styles.DescriptionItem}><img src={Desc3} alt=""/></li>
          <li className={styles.DescriptionItem}><img src={Desc4} alt=""/></li>
          <li className={styles.DescriptionItem}><img src={Desc5} alt=""/></li>
        </ul>
      </div>
    </div>
  )
}

export default DataCollectionDescription;