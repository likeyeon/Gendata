import styles from "./DataDealingTypes.module.scss";
import { Subtitle } from "../../../components/common/typo/Typo";
import Inside from "../../../components/inside/Inside";
import dataTypes from "../../../assets/data-dealing/dataTypes.png";
import dataTypes_mobile from "../../../assets/data-dealing/dataTypes_mobile.png";

const DataDealingTypes = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.title_wrapper}>
          <Subtitle subtitle={"다양한 데이터 유형"} className={styles.title} />
        </div>
        <div className={styles.img_wrapper}>
          <img src={dataTypes} alt="다양한 데이터 유형" />
        </div>
        <div className={styles.img_wrapper_mobile}>
          <img src={dataTypes_mobile} alt="다양한 데이터 유형" />
        </div>
      </Inside>
    </main>
  );
};

export default DataDealingTypes;
