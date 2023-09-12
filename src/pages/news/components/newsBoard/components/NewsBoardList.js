import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { boardData } from "./getBoardData";
import styles from "./NewsBoardList.module.scss";

const NewsBoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getBoardList = () => {
    const boardListData = boardData.map((item) => ({
      id: item.id,
      title: item.title,
      date: item.date,
    }));

    setBoardList(boardListData.reverse());
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return boardList.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(boardList.length / itemsPerPage);

  return (
    <div className={styles.newsBoard}>
      {getCurrentPageData().map((board) => (
        <div key={board.id} className={styles.NewsBoardTableContents}>
          <div className={`${styles.newsNumber} ${styles.hide}`}>
            {board.id}
          </div>
          <div className={`${styles.newsTitle}`}>
            <Link to={`${process.env.PUBLIC_URL}/</div>/news/${board.id}`}>
              {board.title}
            </Link>
          </div>
          <div className={`${styles.newsDate} ${styles.hide}`}>
            {board.date}
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        <button className={styles.mouseEvent}>&lt;</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.mouseEvent} ${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button className={styles.mouseEvent}>&gt;</button>
      </div>
    </div>
  );
};
export default NewsBoardList;
