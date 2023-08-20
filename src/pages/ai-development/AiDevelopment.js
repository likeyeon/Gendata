import Gnb from "../../components/gnb/Gnb";

import styles from "./AiDevelopment.module.css";

import card1 from "../../assets/ai-development/card1.png";
import card2 from "../../assets/ai-development/card2.png";
import card3 from "../../assets/ai-development/card3.png";
import card4 from "../../assets/ai-development/card4.png";
import card5 from "../../assets/ai-development/card5.png";
import card6 from "../../assets/ai-development/card6.png";
import card7 from "../../assets/ai-development/card7.png";
import card8 from "../../assets/ai-development/card8.png";
import card9 from "../../assets/ai-development/card9.png";
import character from "../../assets/ai-development/character.png";
import cd from "../../assets/ai-development/emoji-cd.png";
import lock from "../../assets/ai-development/emoji-lock.png";
import monkey from "../../assets/ai-development/emoji-monkey.png";
import thumbsUp from "../../assets/ai-development/emoji-thumbsUp.png";
import tools from "../../assets/ai-development/emoji-tools.png";
import files from "../../assets/ai-development/files.png";

export default function AiDevelopment() {
  return (
    <>
      <Gnb />
      <br />
      <div className={styles.AiDevelopmentContents}>
        <div className={styles.AiDevelopmentTitle}>
          <h1 className={styles.h1}>AI 개발</h1>
          <p className={styles.h1P}>
            <b>고품질 학습 데이터를 통해</b> 학습시켜서 AI 모델을 추천하고
            개발합니다.
            <br />
            AI의 목적을 고려해서 구축한 <b>고품질 데이터셋</b>을 학습시키기
            때문에 더 개선된 성능을 확보할 수 있습니다.
          </p>
        </div>
        <div className={styles.bgGray1}>
          <h3 className={styles.h3}>걱정하지 마세요.</h3>
          <div className={`${styles.bgGray1Container} ${styles.inside}`}>
            <img className={styles.bgGray1Items} src={card1} alt="card" />
            <img className={styles.bgGray1Items} src={card2} alt="card" />
            <img className={styles.bgGray1Items} src={card3} alt="card" />
            <img className={styles.bgGray1Items} src={card4} alt="card" />
          </div>
          <img className={styles.character} src={character} alt="character" />
        </div>
        <div className={styles.bgBlack}>
          <div className={styles.bgBlackContent}>
            <img className={styles.bgBlackGridImg} src={files} alt="files" />
            <div>
              <h2 className={styles.bgBlackGridTitle}>
                우리 회사에 적합한 AI 기술과 모델,
                <br />
                젠데이터에서 추천받으세요.
              </h2>
              <p className={styles.bgBlackGirdText}>
                우리 회사 비즈니스에 맞는 AI 기술을 찾고 계시나요?
                <br />
                비즈니스에 적합한 AI 모델을 맞춤형으로 추천해드립니다.
              </p>
            </div>
          </div>
          <div className={styles.bgBlackContentImges}>
            <img
              className={styles.bgBlackContentImgesCards}
              src={card5}
              alt="card"
            />
            <img
              className={styles.bgBlackContentImgesCards}
              src={card6}
              alt="card"
            />
          </div>
        </div>
        <div>
          <h3>활용 사례</h3>
          <div>
            <img src={card7} alt="card" />
            <img src={card8} alt="card" />
            <img src={card9} alt="card" />
          </div>
        </div>
        <div>
          <h2>
            <span>젠데이터</span> 서비스 강점
          </h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridItems}>
              <img
                className={styles.gridItemsImge}
                src={thumbsUp}
                alt="Thumbs Up"
              />
              <h4 className={styles.gridItemsTitle}>데이터 품질</h4>
              <p className={styles.gridItemscontents}>
                내부 품질 프로세스를 통해 고품질 데이터를 <br />
                구축합니다.
              </p>
            </div>
            <div className={styles.gridItems}>
              <img className={styles.gridItems} src={tools} alt="Tools" />
              <h4 className={styles.gridItemsTitle}>Annotation Tools</h4>
              <p className={styles.gridItemscontents}>
                다양한 라벨링 툴을 제공합니다.
                <br />
                <span>이미지/영성, 음성, 텍스트, 3D 등</span>
              </p>
            </div>
            <div className={styles.gridItems}>
              <img className={styles.gridItems} src={lock} alt="Lock and Key" />
              <h4 className={styles.gridItemsTitle}>데이터 보안</h4>
              <p className={styles.gridItemscontents}>
                인하우스 작업 진행과 모든 작업자 NDA 서류를
                <br />
                통해 보안을 강화합니다.
              </p>
            </div>
            <div className={styles.gridItems}>
              <img className={styles.gridItems} src={monkey} alt="monkey" />
              <h4 className={styles.gridItemsTitle}>개인정보 이슈차단</h4>
              <p className={styles.gridItemscontents}>
                수집단계에서 개인정보제공동의서 및 제3자 제공동의서를 통해
                <br />
                데이터의 개인정보 이슈를 차단합니다.
              </p>
            </div>
            <div className={styles.gridItems}>
              <img className={styles.gridItems} src={cd} alt="cd" />
              <h4 className={styles.gridItemsTitle}>A-Z 데이터 구축 서비스</h4>
              <p className={styles.gridItemscontents}>
                젠데이터는 AI 학습용 데이터셋 구축과 AI개발까지
                <br />
                진행이 가능한 기업입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
