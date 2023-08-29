//import React, { useState, useCallback, useEffect, useMemo } from "react";
import styles from "./Title.module.scss";
import { TitleBig, Contents } from "../common/typo/Typo";

const Title = ({ title, titleClassName, maxContents, minContents }) => {
  return (
    <div className={styles.title}>
      <TitleBig className={titleClassName} titleBig={title} />
      <Contents className={`${styles.maxContents}`} contents={maxContents} />
      <Contents className={`${styles.minContents}`} contents={minContents} />
    </div>
  );
};
export default Title;
