import React from "react";
import styles from "./Typo.module.scss";

export const TitleBig = ({ title }) => {
  return <span className={styles.titleBig}>{title}</span>;
};

export const Contents = ({ contents }) => {
  return (
    <span
      className={styles.contents}
      dangerouslySetInnerHTML={{ __html: contents }}
    ></span>
  );
};
