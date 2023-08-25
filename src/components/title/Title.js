import React, { useState, useCallback, useEffect } from "react";
import styles from "./Title.module.scss";
import { TitleBig, Contents } from "../common/typo/Typo";

const Title = ({
  title,
  titleClassName,
  maxContents,
  minContents,
  contentClassName,
}) => {
  const [contentsString, setContentsString] = useState("");
  const titleText = <>{title}</>;
  const maxWidthContents = <>{maxContents}</>;
  const minWidthContents = <>{minContents}</>;

  const tabletMql = window.matchMedia("screen and (min-width:util.rem(992px))");
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
  }, []);

  return (
    <div className={styles.title}>
      <TitleBig className={titleClassName} titleBig={titleText} />
      <Contents className={contentClassName} contents={contentsString} />
    </div>
  );
};
export default Title;
