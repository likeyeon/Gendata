import styles from "./NewsBoard.module.scss";
import NewsBoardList from "./components/NewsBoardList";
const NewsBoard = () => {
  return (
    <div className={styles.newsBoardContainer}>
      <div className={styles.newsBoard}>
        <div className={`${styles.NewsBoardTableHeader} ${styles.hide}`}>
          <div className={`${styles.tableTitle} ${styles.newsNumber}`}>No</div>
          <div className={`${styles.tableTitle} ${styles.newsTitle}`}>제목</div>
          <div className={`${styles.tableTitle} ${styles.newsDate}`}>
            작성시간
          </div>
        </div>

        <NewsBoardList />
      </div>
    </div>
  );
};
export default NewsBoard;
