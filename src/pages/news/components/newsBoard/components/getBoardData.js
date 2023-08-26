export function getBoardListData(NewsBoardData) {
  const boardListData = NewsBoardData.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    contents: item.contents,
  }));
  return boardListData.reverse();
}
