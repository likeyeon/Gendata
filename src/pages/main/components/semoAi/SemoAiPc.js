import styles from "./SemoAiPc.module.scss";
import semoAiBannerSmall from "../../../../assets/main/semoAiBannerSmall.png";
import semoAiCard from "../../../../assets/semoAi/semoAiCard.jpg";
import { CommonButton } from "../../../../components/common/button-type/ButtonType";
import Inside from "../../../../components/inside/Inside";

const semoAiPc = () => {
  const data = {
    goToUrl: "/AI-service-paga",
    content: "더 알아보기",
  };

  return (
    <Inside>
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
            <img src={semoAiBannerSmall} alt="semoAi" />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <CommonButton buttonData={data} />
      </div>
    {/* E: pc_contents */}
    </Inside>
  );
};

export default semoAiPc;
