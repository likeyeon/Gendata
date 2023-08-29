import Header from "./components/Header";
import { Helmet } from "react-helmet";

export default function project() {
  return (
    <>
      <Helmet>
        <title>프로젝트 공고</title>
      </Helmet>
      <Header />
    </>
  );
}
