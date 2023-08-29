import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./NewsContents.module.scss";
import NewsBoardTitle from "../news/components/newsBoardTitle/NewsBoardTitle";
import { boardData } from "../news/components/newsBoard/components/getBoardData";

const NewsContents = () => {
  const { newsId } = useParams();
  const idNumber = parseInt(newsId, 10);
  const [newsContent, setNewsContent] = useState(null);
  const [nextNews, setNextNews] = useState(null);
  const [prevNews, setPrevNews] = useState(null);
  const [nextNewsId, setNextNewsId] = useState(null);
  const [prevNewsId, setPrevNewsId] = useState(null);

  useEffect(() => {
    const selectedNews = boardData.find((item) => item.id === idNumber);
    const nextNewsItem = boardData.find((item) => item.id === idNumber + 1);
    const prevNewsItem = boardData.find((item) => item.id === idNumber - 1);

    if (selectedNews) {
      setNewsContent(selectedNews);
    }
    if (nextNewsItem) {
      setNextNewsId(parseInt(nextNewsItem.id, 10));
      setNextNews(nextNewsItem.title);
    }
    if (prevNewsItem) {
      setPrevNewsId(parseInt(prevNewsItem.id, 10));
      setPrevNews(prevNewsItem.title);
    }
  }, [idNumber]);

  if (!newsContent) {
    return null;
  }
  return (
    <div className={styles.newsContent}>
      <div className={styles.newsBoardTitle}>
        <NewsBoardTitle />
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.contentMain}>
          <div
            className={styles.contentsTitle}
            dangerouslySetInnerHTML={{ __html: newsContent.title }}
          ></div>
          <div className={styles.date}>소식 {newsContent.date}</div>
          <div
            className={styles.contents}
            dangerouslySetInnerHTML={{ __html: newsContent.contents }}
          ></div>
        </div>
        <div className={styles.pagenationContainer}>
          {prevNews && (
            <Link className={styles.pagenation} to={`/news/${prevNewsId}`}>
              {/* 이전 */}
              <span className={styles.pagenationIconUP}>&lt;</span>
              <span
                className={styles.pagenationText}
                dangerouslySetInnerHTML={{ __html: prevNews }}
              ></span>
            </Link>
          )}
          {nextNews && (
            <Link className={styles.pagenation} to={`/news/${nextNewsId}`}>
              {/* 다음 */}
              <span className={styles.pagenationIconDown}>&gt;</span>
              <span
                className={styles.pagenationText}
                dangerouslySetInnerHTML={{ __html: nextNews }}
              ></span>
            </Link>
          )}
        </div>
        <a className={styles.goNewsBordPage} href="/news">
          목록
        </a>
        <div className={styles.blank}></div>
      </div>
    </div>
  );
};

export default NewsContents;
