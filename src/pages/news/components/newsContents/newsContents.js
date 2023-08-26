import styles from "./NewsContents.module.scss";

const NewsContents = () => {
  return (
    <div className={styles.contentsContainer}>
      <div className={styles.contentMain}>
        <div className={styles.contentsTitle}>contentsTitle</div>
        <div className={styles.date}>소식 dddddddddddddddddd</div>
        <div className={styles.contents}>
          contents
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
      </div>
      <div className={styles.pagenationContainer}>
        <button className={styles.pagenation}>
          <span className={styles.pagenationIcon}>&lt;</span>
          <span className={styles.pagenationText}>이전 글 입니다.</span>
        </button>
        <button className={styles.pagenation}>
          <span className={styles.pagenationIcon}>&gt;</span>
          <span className={styles.pagenationText}>다음 글 입니다.</span>
        </button>
      </div>
      <a className={styles.goNewsBordPage} href="/news">
        목록
      </a>
    </div>
  );
};

export default NewsContents;
