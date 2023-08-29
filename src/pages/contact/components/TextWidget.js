import styles from "./TextWidget.module.scss";

const TextWidget = () => {
  return (
    <div className={styles.textWidget_wrapper}>
      <div className={styles.textWidget}>
        <p className={styles.textWidget_p}>
          <span className={styles.textWidget_span}>
            젠데이터의 담당자가 최대한 빠른 시일 내로 연락드리겠습니다.
          </span>
        </p>
      </div>
    </div>
  );
};

export default TextWidget;
