import NewsBoardTitle from "./components/newsBoardTitle/NewsBoardTitle";
import NewsBoard from "./components/newsBoard/NewsBoard";
import { Helmet } from "react-helmet";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>소식</title>
      </Helmet>
      <NewsBoardTitle />
      <NewsBoard />
    </>
  );
}
