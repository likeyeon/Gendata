import styles from "./AiDevelopmentCase.module.scss";
import { Subtitle } from "../../../components/common/typo/Typo";
import card7 from "../../../assets/ai-development/card7.png";
import card8 from "../../../assets/ai-development/card8.png";
import card9 from "../../../assets/ai-development/card9.png";

const AiDevlopmentCase = () => {
  return (
    <div className={styles.aiDevlopmentCase}>
      <Subtitle subtitle="활용 사례" className={styles.aiDevlopmentCaseTitle} />
      <div className={styles.aiDevlopmentCaseContainer}>
        <img className={styles.aiDevlopmentCaseImages} src={card7} alt="card" />
        <img className={styles.aiDevlopmentCaseImages} src={card8} alt="card" />
        <img className={styles.aiDevlopmentCaseImages} src={card9} alt="card" />
      </div>
    </div>
  );
};
export default AiDevlopmentCase;
