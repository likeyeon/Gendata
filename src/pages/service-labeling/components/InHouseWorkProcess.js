import styles from "./InHouseWorkProcess.module.scss";
import WorkIcon1 from "../../../assets/data-building/inhouse_work_icon1.png";
import WorkIcon2 from "../../../assets/data-building/inhouse_work_icon2.png";
import WorkIcon3 from "../../../assets/data-building/inhouse_work_icon3.png";
import WorkIcon4 from "../../../assets/data-building/inhouse_work_icon4.png";
import WorkIcon5 from "../../../assets/data-building/inhouse_work_icon5.png";

const InHouseWorkProcess = () => {
  return (
    <div className={styles.WorkProcessWrap}>
      <h2 className={styles.WorkProcessTitle}>인하우스 작업 프로세스</h2>
      <ul className={styles.WorkProcessList}>
        <li className={styles.WorkProcessItem}>
          <img src={WorkIcon1} alt="" />
          <h3>STEP 01.</h3>
          <p>내부 작업자 NDA 작성</p>
        </li>
        <li className={styles.WorkProcessItem}>
          <img src={WorkIcon2} alt="" />
          <h3>STEP 02.</h3>
          <p>가이드 배포 및 교육</p>
        </li>
        <li className={styles.WorkProcessItem}>
          <img src={WorkIcon3} alt="" />
          <h3>STEP 03.</h3>
          <p>작업 진행</p>
        </li>
        <li className={styles.WorkProcessItem}>
          <img src={WorkIcon4} alt="" />
          <h3>STEP 04.</h3>
          <p>관리자 검수</p>
        </li>
        <li className={styles.WorkProcessItem}>
          <img src={WorkIcon5} alt="" />
          <h3>STEP 05.</h3>
          <p>최종 데이터</p>
        </li>
      </ul>
    </div>
  )
}
export default InHouseWorkProcess;