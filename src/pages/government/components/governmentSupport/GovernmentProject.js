import styles from "./GovernmentProject.module.scss";
import { Subtitle, Contents } from "../../../../components/common/typo/Typo";
import dataVoucher from "../../../../assets/government/dataVoucher.png";
import aiVoucher from "../../../../assets/government/aiVoucher.png";
import rndApply from "../../../../assets/government/rndApply.png";
import niaAiData from "../../../../assets/government/niaAiData.png";
const GovernmentProject = () => {
  return (
    <>
      <div className={styles.title_wrapper}>
        <Subtitle
          subtitle={"젠데이터와 다양한 정부지원사업을 협업해보세요."}
          className={styles.project_title}
        />
        <Contents
          contents={`젠데이터와 협업가능한 대표적인 정부지원사업입니다.`}
        />
      </div>
      <div className={styles.project_wrapper}>
        <div className={styles.project_item}>
          <img src={dataVoucher} alt="dataVoucher" />
        </div>
        <div className={styles.project_item}>
          <img src={aiVoucher} alt="aiVoucher" />
        </div>
        <div className={styles.project_item}>
          <img src={rndApply} alt="rndApply" />
        </div>
        <div className={styles.project_item}>
          <img src={niaAiData} alt="niaAiData" />
        </div>
      </div>
    </>
  );
};

export default GovernmentProject;
