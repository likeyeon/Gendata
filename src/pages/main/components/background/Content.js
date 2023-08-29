import Inside from "../../../../components/inside/Inside";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.content_wrap}>
          <div className={styles.title}>
            <p>
              <strong>누구에게나 열려있는 AI</strong>
            </p>
            <p>
              <strong>AI 모델 개발</strong> 그리고 <strong>데이터 구축</strong>
            </p>
          </div>
          <hr />
          <div className={styles.data_text_wrap}>
            <div className={styles.data_wrap}>
              <span>100건+</span>
              <span>데이터 가공</span>
            </div>
            <div className={styles.data_wrap}>
              <span>50건+</span>
              <span>AI 응용 소프트웨어 개발</span>
            </div>
            <div className={styles.data_wrap}>
              <span>9건+</span>
              <span>품질 검증</span>
            </div>
          </div>
          <p className={styles.data_year}>2023.05 기준</p>
        </div>
      </Inside>
    </main>
  );
};

export default Content;
