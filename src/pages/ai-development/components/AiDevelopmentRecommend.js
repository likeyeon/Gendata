import styles from "./AiDevelopmentRecommend.module.scss";

import card5 from "../../../assets/ai-development/card5.png";
import card6 from "../../../assets/ai-development/card6.png";
import files from "../../../assets/ai-development/files.png";

const AiDevelopmentRecommend = () => {
  return (
    <div className={styles.recommendBackground}>
      <div className={styles.recommendContent}>
        <div className={styles.recommendContentText}>
          <h2 className={styles.recommendContentTitle}>
            우리 회사에 적합한 AI 기술과 모델,
            <br />
            젠데이터에서 추천받으세요.
          </h2>
          <p className={styles.recommendContentDescription}>
            우리 회사 비즈니스에 맞는 AI 기술을 찾고 계시나요?
          </p>
          <p className={styles.recommendContentDescription}>
            비즈니스에 적합한 AI 모델을 맞춤형으로 추천해드립니다.
          </p>
        </div>
        <img className={styles.recommendContentImges} src={files} alt="files" />
      </div>
      <div className={styles.recommendContentCardsTable}>
        <img
          className={styles.recommendContentImgesCards}
          src={card5}
          alt="card"
        />
        <img
          className={styles.recommendContentImgesCards}
          src={card6}
          alt="card"
        />
      </div>
    </div>
  );
};

export default AiDevelopmentRecommend;
