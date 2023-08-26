import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsBoardData from "../../../../../Mock/newsBoard.json";
import { getBoardListData } from "./getBoardData";
import styles from "./NewsBoardList.module.scss";

const NewsBoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // 분리한 함수를 호출하여 데이터를 가져옴
    const boardListData = getBoardListData(NewsBoardData);
    setBoardList(boardListData.reverse());
  }, []);

  const getBoardList = () => {
    // JSON 데이터를 가공하여 boardList 변수에 할당
    const boardListData = NewsBoardData.map((item) => ({
      id: item.id,
      title: item.title,
      date: item.date,
    }));

    setBoardList(boardListData.reverse());
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  // 현재 페이지의 데이터를 계산하는 함수
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return boardList.slice(startIndex, endIndex);
  };

  // 페이지 버튼을 클릭할 때 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(boardList.length / itemsPerPage);

  return (
    <>
      {getCurrentPageData().map((board) => (
        <div
          key={board.id}
          className={`${styles.NewsBoardTableContents} ${styles.tableContents}`}
        >
          <div className={`${styles.newsNumber} ${styles.hide}`}>
            {board.id}
          </div>
          <div className={`${styles.newsTitle}`}>
            <Link to={`/news/${board.id}`}>{board.title}</Link>
          </div>
          <div className={`${styles.newsDate} ${styles.hide}`}>
            {board.date}
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        <button className={` ${styles.mouseEvent} ${styles.leftBtutton}`}>
          &lt;
        </button>
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
        <button className={`${styles.mouseEvent} ${styles.rightButton}`}>
          &gt;
        </button>
      </div>
    </>
  );
};
export default NewsBoardList;
