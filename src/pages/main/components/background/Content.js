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
          <div className={styles.data_table}>
            <hr />
            <div className={styles.center_wrap}>
              <div className={styles.data_text_wrap}>
                <div className={styles.data_wrap}>
                  <p>100건+</p>
                  <span>데이터 가공</span>
                </div>
                <div className={styles.data_wrap}>
                  <p>50건+</p>
                  <span>AI 응용 소프트웨어 개발</span>
                </div>
                <div className={styles.data_wrap}>
                  <p>9건+</p>
                  <span>품질 검증</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Inside>
    </main>
  );
};

export default Content;
