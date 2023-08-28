import { Subtitle, Contents } from "../../../components/common/typo/Typo";
import styles from "./AiDevelopmentApplication.module.scss";

import card1 from "../../../assets/ai-development/card1.png";
import card2 from "../../../assets/ai-development/card2.png";
import card3 from "../../../assets/ai-development/card3.png";
import card4 from "../../../assets/ai-development/card4.png";
import minCard1 from "../../../assets/ai-development/minCard1.png";
import minCard2 from "../../../assets/ai-development/minCard1.png";

import character from "../../../assets/ai-development/character.png";

const AiDevelopmentApplication = () => {
  return (
    <div className={styles.applicationBackground}>
      <Subtitle
        subtitle={"걱정하지 마세요."}
        className={styles.applicationText}
      />
      <Contents
        contents={
          <>
            머신러닝, AI…
            <br />
            전문 개발 용어를 하나도 모르겠습니다.
            <br />
            <br />
            우리 회사는 AI 개발자가 없습니다.
          </>
        }
        className={styles.hiddenText}
      />
      <div className={styles.applicationContainer}>
        <img className={styles.applicationItems} src={card1} alt="card" />
        <img className={styles.applicationItems} src={card2} alt="card" />
      </div>
      <div className={styles.applicationContainer}>
        <img className={styles.applicationItems} src={card3} alt="card" />
        <img className={styles.applicationItems} src={card4} alt="card" />
      </div>
      <div className={styles.minCardContainer}>
        <img className={styles.minCards} src={minCard1} alt="min card" />
        <img className={styles.minCards} src={minCard2} alt="min card" />
      </div>
      <img className={styles.character} src={character} alt="character" />
    </div>
  );
};

export default AiDevelopmentApplication;
