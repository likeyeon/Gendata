import styles from "./Strength.module.scss";
import cd from "../../assets/strength/emoji-cd.png";
import lock from "../../assets/strength/emoji-lock.png";
import monkey from "../../assets/strength/emoji-monkey.png";
import thumbsUp from "../../assets/strength/emoji-thumbsUp.png";
import tools from "../../assets/strength/emoji-tools.png";

const Strength = () => {
  return (
    <div className={styles.strength}>
      <h2 className={styles.strengthTitle}>
        <span>젠데이터</span> 서비스 강점
      </h2>
      <div className={styles.strengthTable}>
        <div className={`${styles.thumbsUp} ${styles.strengthTableItems} `}>
          <img
            className={styles.strengthTableImge}
            src={thumbsUp}
            alt="Thumbs Up"
          />
          <div className={styles.strengthTableContent}>
            <h4 className={styles.strengthTableTitle}>데이터 품질</h4>
            <p className={styles.strengthTabletext}>
              내부 품질 프로세스를 통해 고품질 데이터를 <br />
              구축합니다.
            </p>
          </div>
        </div>
        <div className={`${styles.tools} ${styles.strengthTableItems} `}>
          <img className={styles.strengthTableImge} src={tools} alt="Tools" />
          <div className={styles.strengthTableContent}>
            <h4 className={styles.strengthTableTitle}>Annotation Tools</h4>
            <p className={styles.strengthTabletext}>
              다양한 라벨링 툴을 제공합니다.
              <br />
              <span>이미지/영성, 음성, 텍스트, 3D 등</span>
            </p>
          </div>
        </div>
        <div className={`${styles.lock} ${styles.strengthTableItems}`}>
          <img
            className={styles.strengthTableImge}
            src={lock}
            alt="Lock and Key"
          />
          <div className={styles.strengthTableContent}>
            <h4 className={styles.strengthTableTitle}>데이터 보안</h4>
            <p className={styles.strengthTabletext}>
              인하우스 작업 진행과 모든 작업자 NDA 서류를
              <br />
              통해 보안을 강화합니다.
            </p>
          </div>
        </div>
        <div className={`${styles.monkey} ${styles.strengthTableItems} `}>
          <img className={styles.strengthTableImge} src={monkey} alt="monkey" />
          <div className={styles.strengthTableContent}>
            <h4 className={styles.strengthTableTitle}>개인정보 이슈차단</h4>
            <p className={styles.strengthTabletext}>
              수집단계에서 개인정보제공동의서 및 제3자 제공동의서를 통해
              <br />
              데이터의 개인정보 이슈를 차단합니다.
            </p>
          </div>
        </div>
        <div className={`${styles.cd} ${styles.strengthTableItems}`}>
          <img className={styles.strengthTableImge} src={cd} alt="cd" />
          <div className={styles.strengthTableContent}>
            <h4 className={styles.strengthTableTitle}>
              A-Z 데이터 구축 서비스
            </h4>
            <p className={styles.strengthTabletext}>
              젠데이터는 AI 학습용 데이터셋 구축과 AI개발까지
              <br />
              진행이 가능한 기업입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Strength;
