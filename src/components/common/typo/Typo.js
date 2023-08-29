import React from "react";
import styles from "./Typo.module.scss";

export const TitleBig = ({ titleBig, className }) => {
  return <span className={`${styles.titleBig} ${className}`}>{titleBig}</span>;
};
export const Subtitle = ({ subtitle, className }) => {
  return <span className={`${styles.subtitle} ${className}`}>{subtitle}</span>;
};
export const Contents = ({ contents, className }) => {
  return <span className={`${styles.contents} ${className}`}>{contents}</span>;
};
