import React, { useState, useCallback, useEffect } from "react";
import styles from "./AiDevlopmentTitle.module.scss";
import "../../../style/style.scss";
import { TitleBig, Contents } from "../../../components/common/typo/Typo";

const AiDevlopmentTitle = () => {
  const [contentsString, setContentsString] = useState("");
  const maxWidthContents = `<strong>고품질 학습 데이터를 통해</strong> 학습시켜서 AI 모델을 추천하고
  개발합니다.<br />AI의 목적을 고려해서 구축한 <strong>고품질 데이터셋</strong>
  을 학습시키기 때문에 더 개선된 성능을 확보할 수 있습니다.`;
  const minWidthContents = `<strong>고품질 학습 데이터를 통해</strong> 학습시켜서 AI 모델을 추천하고
  개발합니다. AI의 목적을 고려해서 구축한 <strong>고품질 데이터셋</strong>
  을 학습시키기 때문에 더 개선된 성능을 확보할 수 있습니다.`;

  const tabletMql = window.matchMedia("screen and (min-width:992px)");
  const changeEventHandler = useCallback(
    (e) => {
      if (e.matches) {
        setContentsString(maxWidthContents);
      } else {
        setContentsString(minWidthContents);
      }
    },
    [maxWidthContents, minWidthContents]
  );
  tabletMql.addEventListener("change", changeEventHandler);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setContentsString(maxWidthContents);
    }

    return () => {
      tabletMql.removeEventListener("change", changeEventHandler);
    };
  }, [changeEventHandler, tabletMql]);

  return (
    <div className={styles.AiDevlopmentTitle}>
      <TitleBig title={"AI 개발"} />
      <Contents contents={contentsString} />
    </div>
  );
};
export default AiDevlopmentTitle;
