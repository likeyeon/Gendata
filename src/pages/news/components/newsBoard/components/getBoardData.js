import NewsBoardData from "../../../../../Mock/newsBoard.json";

const getBoardListData = () => {
  const boardListData = NewsBoardData.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    contents: item.contents,
  }));
  return boardListData;
};

export const boardData = getBoardListData();
