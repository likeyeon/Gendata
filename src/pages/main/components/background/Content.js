import Inside from "../../../../components/inside/Inside";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <main className={styles.content}>
      <Inside>
        <div className={styles.top_wrapper}>
          <div className={styles.top}>
            <p>누구에게나 열려있는 AI</p>
            <p>AI 모델 개발 그리고 데이터 구축</p>
          </div>
        </div>
        <div className={styles.bottom_wrapper}>
          <div className={styles.bottom}></div>
        </div>
      </Inside>
    </main>
  );
};

export default Content;
