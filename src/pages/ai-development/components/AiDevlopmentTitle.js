import styles from "./AiDevlopmentTitle.module.scss";
import "../../../style/style.scss";
const AiDevlopmentTitle = () => {
  return (
    <div className={styles.AiDevlopmentTitle}>
      <h1 className={styles.Title}>AI 개발</h1>
      <p className={styles.Text}>
        <strong>고품질 학습 데이터를 통해</strong> 학습시켜서 AI 모델을 추천하고
        개발합니다.
      </p>
      <p className={styles.Text}>
        AI의 목적을 고려해서 구축한 <strong>고품질 데이터셋</strong>을
        학습시키기 때문에 더 개선된 성능을 확보할 수 있습니다.
      </p>
    </div>
  );
};
export default AiDevlopmentTitle;
