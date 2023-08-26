import React, { useState, useEffect, useMemo } from "react";

import styles from "./AiDevelopmentRecommend.module.scss";
import { Subtitle } from "../../../components/common/typo/Typo";

import card5 from "../../../assets/ai-development/card5.png";
import card6 from "../../../assets/ai-development/card6.png";
import files from "../../../assets/ai-development/files.png";

const AiDevelopmentRecommend = () => {
  const [contentsString, setTitleString] = useState("");

  const maxWidthTitle = useMemo(
    () => (
      <>
        우리 회사에 적합한 AI 기술과 모델,
        <br />
        젠데이터에서 추천받으세요.
      </>
    ),
    []
  );

  const minWidthTitle = useMemo(
    () => (
      <>
        우리 회사에 적합한 AI 기술과
        <br />
        모델, 젠데이터에서 추천받으세요.
      </>
    ),
    []
  );

  useEffect(() => {
    const tabletMql = window.matchMedia("screen and (min-width:992px)");

    const changeEventHandler = (e) => {
      if (e.matches) {
        setTitleString(maxWidthTitle);
      } else {
        setTitleString(minWidthTitle);
      }
    };

    // 초기 화면 크기를 체크하여 contentsString을 설정합니다.
    if (tabletMql.matches) {
      setTitleString(maxWidthTitle);
    } else {
      setTitleString(minWidthTitle);
    }

    tabletMql.addEventListener("change", changeEventHandler);

    return () => {
      tabletMql.removeEventListener("change", changeEventHandler);
    };
  }, [maxWidthTitle, minWidthTitle]);

  return (
    <div className={styles.recommendBackground}>
      <div className={styles.recommendContent}>
        <div className={styles.recommendContentText}>
          <Subtitle
            className={styles.recommendContentTitle}
            subtitle={contentsString}
          />

          <p className={styles.recommendContentDescription}>
            우리 회사 비즈니스에 맞는 AI 기술을 찾고 계시나요?
          </p>
          <p className={styles.recommendContentDescription}>
            비즈니스에 적합한 AI 모델을 맞춤형으로 추천해드립니다.
          </p>
        </div>
        <img className={styles.recommendContentImges} src={files} alt="files" />
      </div>
      <div className={styles.recommendContentCardsTable}>
        <img
          className={styles.recommendContentImgesCards}
          src={card5}
          alt="card"
        />
        <img
          className={styles.recommendContentImgesCards}
          src={card6}
          alt="card"
        />
      </div>
    </div>
  );
};

export default AiDevelopmentRecommend;
