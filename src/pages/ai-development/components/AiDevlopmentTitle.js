import styles from "./AiDevlopmentTitle.module.scss";

const AiDevlopmentTitle = () => {
  return (
    <div className={styles.aiDevelopmentTitle}>
      <h1 className={styles.Title}>AI 개발</h1>
      <p className={styles.Text}>
        <b>고품질 학습 데이터를 통해</b> 학습시켜서 AI 모델을 추천하고
        개발합니다.
        <br />
        AI의 목적을 고려해서 구축한 <b>고품질 데이터셋</b>을 학습시키기 때문에
        더 개선된 성능을 확보할 수 있습니다.
      </p>
    </div>
  );
};
export default AiDevlopmentTitle;
