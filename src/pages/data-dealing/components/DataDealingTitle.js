import Title from "../../../components/title/Title";
import { useEffect, useState } from "react";

const GovernmentTitle = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Title
        title="데이터거래"
        titleClassName="TitleBig"
        minContents={
          windowSize > 991 ? (
            <>젠데이터가 기업 간의 데이터 거래를 중개하고 매칭시켜드립니다.</>
          ) : (
            <>
              젠데이터가 기업 간의 데이터 거래를 <br />
              중개하고 매칭시켜드립니다.
            </>
          )
        }
      />
    </>
  );
};

export default GovernmentTitle;
