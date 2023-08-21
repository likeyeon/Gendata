import styles from "./AiDevelopmentCase.module.scss";

import card7 from "../../../assets/ai-development/card7.png";
import card8 from "../../../assets/ai-development/card8.png";
import card9 from "../../../assets/ai-development/card9.png";

const AiDevlopmentCase = () => {
  return (
    <div className={styles.aiDevlopmentCase}>
      <h3 className={styles.aiDevlopmentCaseTitle}>활용 사례</h3>
      <div className={styles.aiDevlopmentCaseContainer}>
        <img className={styles.aiDevlopmentCaseImages} src={card7} alt="card" />
        <img className={styles.aiDevlopmentCaseImages} src={card8} alt="card" />
        <img className={styles.aiDevlopmentCaseImages} src={card9} alt="card" />
      </div>
    </div>
  );
};
export default AiDevlopmentCase;
