import styles from "./InHousePrevention.module.scss";
import Prevent1 from "../../../assets/data-building/inhouse_prevent1.png";
import Prevent2 from "../../../assets/data-building/inhouse_prevent2.png";
import Prevent3 from "../../../assets/data-building/inhouse_prevent3.png";
import Prevent4 from "../../../assets/data-building/inhouse_prevent4.png";

const InHousePrevention = () => {
  return (
    <div className={styles.PreventionWrap}>
      <h2 className={styles.PreventionTitle}>품질과 보안 문제를 사전에 차단합니다.</h2>
      <ul className={styles.PreventionList}>
        <li className={styles.PreventionItem}>
          <img src={Prevent1} alt="" />
        </li>
        <li className={styles.PreventionItem}>
          <img src={Prevent2} alt="" />
        </li>
        <li className={styles.PreventionItem}>
          <img src={Prevent3} alt="" />
        </li>
        <li className={styles.PreventionItem}>
          <img src={Prevent4} alt="" />
        </li>
      </ul>
    </div>
  )
}
export default InHousePrevention;