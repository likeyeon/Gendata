import styles from "./EducationSystem.module.scss";
import { Subtitle, Contents } from "../../../../components/common/typo/Typo";
import coperation from "../../../../assets/education/coperation.png";
const EducationSystem = () => {
  return (
    <div className={styles.educationSystemContainer}>
      <Subtitle
        subtitle="경험있는 전문 강사들이 직접 강의합니다."
        className={styles.educationSystemTitle}
      />
      <div className={styles.educationSystemContentsContainer}>
        <Contents
          contents="실무를 위한 인공지능 이론부터 가이드 이해와 실무 위주의 실습과 교육을 통한 AI데이터라벨러 인력양성과,"
          className={styles.educationSystemContents}
        />
        <Contents
          contents="AI 개발 멘토링을 통한 광주인공지능사관학교 3기, 4기, 5기 AI전문 개발인력을 양성하였습니다."
          className={styles.educationSystemContents}
        />
      </div>
      <img
        src={coperation}
        className={styles.educationSystemImg}
        alt="coperation"
      />
    </div>
  );
};
export default EducationSystem;
