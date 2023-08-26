import styles from "./EducationTitle.module.scss";
import { TitleBig, Subtitle } from "../../../../components/common/typo/Typo";

const EducitionTitle = () => {
  return (
    <div className={styles.edcationTitleBackground}>
      <div className={styles.edcationTitle}>
        <TitleBig titleBig="교육" className={styles.titleBlue} />
        <Subtitle subtitle="과" className={styles.subTitle} />
        <TitleBig titleBig=" 혁신" className={styles.titleBlue} />
        <Subtitle subtitle="의" className={styles.subTitle} />
        <TitleBig titleBig=" 새로운 지평을 엽니다!" className={styles.title} />
      </div>
      <p className={styles.edcationSubtitle}>-Ai에듀 사업부-</p>
    </div>
  );
};
export default EducitionTitle;
