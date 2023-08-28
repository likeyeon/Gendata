import styles from "./SemoAiPc.module.scss";
import semoAiBanner from "../../../../assets/semoAi/semoAiBanner.png";
import semoAiCard from "../../../../assets/semoAi/semoAiCard.jpg";
import { CommonButton } from "../../../../components/common/button-type/ButtonType";

const semoAiPc = () => {
  const data = {
    goToUrl: "/AI-service-paga",
    content: "더 알아보기",
  };

  return (
    <div className={styles.contents_wrap}>
      <div className={styles.contents}>
        <div className={styles.card_img}>
          <img src={semoAiCard} alt="semoAi" />
        </div>
        <div className={styles.text_table}>
          <div className={styles.text_wrap}>
            <div className={styles.text}>
              <p>
                <strong>비전문기업의 성공적인 AI 도입과 상용화</strong>
              </p>
              <p>
                <strong>세상의 모든 AI 비즈니스 매칭 서비스, semoAI</strong>
              </p>
            </div>
            <div className={styles.banner_img}>
              <img src={semoAiBanner} alt="semoAi" />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <CommonButton buttonData={data} />
        </div>
      </div>
    </div>
  );
};

export default semoAiPc;
