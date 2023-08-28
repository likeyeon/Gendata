import styles from "./InHouseManage.module.scss";
import Banner from "../../../assets/data-building/inhouse_manage_title.png";
import ManageIcon1 from "../../../assets/data-building/inhouse_manage_icon1.png";
import ManageIcon2 from "../../../assets/data-building/inhouse_manage_icon2.png";
import ManageIcon3 from "../../../assets/data-building/inhouse_manage_icon3.png";
import ManageIcon4 from "../../../assets/data-building/inhouse_manage_icon4.png";
import ManageIcon5 from "../../../assets/data-building/inhouse_manage_icon5.png";

const InHouseManage = () => {
  return (
    <div className={styles.ManageOuterWrap}>
      <div className={styles.ManageInnerWrap}>
        <div className={styles.ManageBanner}>
          <img src={Banner} alt="" />
        </div>
        <h2 className={styles.ManageTitle}>품질 관리 프로세스</h2>
        <ul className={styles.ManageList}>
          <li className={styles.ManageItem}>
            <img src={ManageIcon1} alt="" />
            <h3>STEP 01.</h3>
            <p>데이터 선정</p>
          </li>
          <li className={styles.ManageItem}>
            <img src={ManageIcon2} alt="" />
            <h3>STEP 02.</h3>
            <p>데이터 수집</p>
          </li>
          <li className={styles.ManageItem}>
            <img src={ManageIcon3} alt="" />
            <h3>STEP 03.</h3>
            <p>데이터 정제</p>
          </li>
          <li className={styles.ManageItem}>
            <img src={ManageIcon4} alt="" />
            <h3>STEP 04.</h3>
            <p>데이터 라벨링</p>
          </li>
          <li className={styles.ManageItem}>
            <img src={ManageIcon5} alt="" />
            <h3>STEP 05.</h3>
            <p>전수 검사</p>
          </li>
        </ul>
        <p className={styles.ManageDesc}>
          <span>·  검수 결과 반려된 데이터는 재작업하여 적합한 데이터를 생성합니다.</span>
          <span>·  오류 데이터 특성 및 사례를 수집하여, 1차 검사완료 후 전수검사를 진행합니다.</span>
          <span>·  모든 검사 시, 분석된 검사결과 피드백을 공유합니다.</span>
        </p>
      </div>
    </div>
  )
}
export default InHouseManage;