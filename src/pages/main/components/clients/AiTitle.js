import styles from "./AiTitle.module.scss";

const AiTitle = () => {
  return (
    <div className={styles.text_wrap}>
      <h4 className={styles.text}>
        <strong>
          <span className={styles.title}>SBS Biz Pick UP! 트렌드 스페셜</span>
          <br />
          <span className={styles.subTitle}>
            인공지능의 핵심! 데이터 구축의 모든 것
          </span>
        </strong>
      </h4>
    </div>
  );
};

export default AiTitle;
