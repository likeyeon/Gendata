import React, { useState, useCallback, useEffect } from "react";

import styles from "./Strength.module.scss";
import { TitleBig, Subtitle, Contents } from "../common/typo/Typo";

import cd from "../../assets/strength/emoji-cd.png";
import lock from "../../assets/strength/emoji-lock.png";
import monkey from "../../assets/strength/emoji-monkey.png";
import thumbsUp from "../../assets/strength/emoji-thumbsUp.png";
import tools from "../../assets/strength/emoji-tools.png";

const Strength = () => {
  const Strengths = ({
    img,
    maxTitle,
    minTittle,
    maxContents,
    minContents,
    moveLeft,
  }) => {
    const [titleString, setTitleString] = useState(<></>);
    const [contentsString, setContentsString] = useState("");
    const maxTitleString = <>{maxTitle}</>;
    const minTitleString = <>{minTittle}</>;
    const maxWidthContents = <>{maxContents}</>;
    const minWidthContents = <>{minContents}</>;

    const tabletMql = window.matchMedia("screen and (min-width:992px)");
    const changeEventHandler = useCallback(
      (e) => {
        if (e.matches) {
          setTitleString(maxTitleString);
          setContentsString(maxWidthContents);
        } else {
          setTitleString(minTitleString);
          setContentsString(minWidthContents);
        }
      },
      [maxTitleString, minTitleString, maxWidthContents, minWidthContents]
    );
    tabletMql.addEventListener("change", changeEventHandler);

    useEffect(() => {
      if (window.innerWidth > 992) {
        setTitleString(maxTitleString);
        setContentsString(maxWidthContents);
      }
      if (tabletMql.matches) {
        setTitleString(maxTitleString);
        setContentsString(maxWidthContents);
      } else {
        setTitleString(minTitleString);
        setContentsString(minWidthContents);
      }
      return () => {
        tabletMql.removeEventListener("change", changeEventHandler);
      };
    }, []);

    return (
      <div className={`${styles.strengthTableItems} ${moveLeft}`}>
        <div className={styles.strengthItembox}>
          <img className={styles.strengthTableImge} src={img} alt={img} />
          <div className={styles.strengthTableContent}>
            <Subtitle
              className={styles.strengthTableTitle}
              subtitle={titleString}
            />
            <Contents
              className={styles.strengthTableText}
              contents={contentsString}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.strength}>
      <TitleBig
        className={styles.strengthTitle}
        titleBig={
          <>
            <span>젠데이터</span> 서비스 강점
          </>
        }
      />
      <div className={styles.strengthTable}>
        <Strengths
          moveLeft={styles.moveLeft}
          img={thumbsUp}
          maxTitle="데이터 품질"
          minTittle="데이터 품질"
          maxContents={
            <>
              내부 품질 프로세스를 통해 고품질 데이터를
              <br />
              구축합니다.
            </>
          }
          minContents={
            <>
              내부 품질 프로세스를 통해
              <br />
              고품질 데이터를 구축합니다.
            </>
          }
        />
        <Strengths
          moveLeft=""
          img={tools}
          maxTitle="Annotation Tools"
          minTittle="Annotation Tools"
          maxContents={
            <>
              다양한 라벨링 툴을 제공합니다.
              <br />
              <span>이미지/영성, 음성, 텍스트, 3D 등</span>
            </>
          }
          minContents={
            <>
              다양한 라벨링 툴을 제공합니다.
              <br />
              <span>이미지/영성, 음성, 텍스트, 3D 등</span>
            </>
          }
        />
        <Strengths
          moveLeft={styles.moveLeft}
          img={lock}
          maxTitle="데이터 보안"
          minTittle="데이터 보안"
          maxContents={
            <>
              인하우스 작업 진행과 모든 작업자 NDA 서류를 통해 보안을 강화합니다
            </>
          }
          minContents={
            <>
              인하우스 작업 진행과 모든 작업자
              <br />
              NDA 서류를 통해 보안을 강화합니다.
            </>
          }
        />
        <Strengths
          moveLeft=""
          img={monkey}
          maxTitle="개인정보 이슈차단"
          minTittle="비식별화 솔루션"
          maxContents={
            <>
              수집단계에서 개인정보제공동의서 및 제3자 제공동의서를 통해 데이
              <br />
              터의 개인정보 이슈를 차단합니다.
            </>
          }
          minContents={
            <>
              개인정보 비식별화 솔루션을 통해
              <br />
              개인정보 이슈를 차단합니다
            </>
          }
        />
        <Strengths
          moveLeft={styles.moveLeft}
          img={cd}
          maxTitle="A-Z 데이터 구축 서비스"
          minTittle="A-Z 데이터 구축 서비스"
          maxContents={
            <>
              젠데이터는 AI 학습용 데이터셋 구축과 AI개발까지
              <br />
              진행이 가능한 기업입니다.
            </>
          }
          minContents={
            <>
              젠데이터는 AI 학습용 데이터셋 구축과
              <br />
              AI개발까지 진행가능한 기업입니다.
            </>
          }
        />
      </div>
    </div>
  );
};
export default Strength;
