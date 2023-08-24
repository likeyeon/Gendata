import React from "react";
import styles from "./Typo.module.scss";

export const TitleBig = ({ title, className }) => {
  return <span className={`${styles.title} ${className}`}>{title}</span>;
};
export const Subtitle = ({ subtitle, className }) => {
  return <span className={`${styles.subtitle} ${className}`}>{subtitle}</span>;
};
export const Contents = ({ contents, className }) => {
  return <span className={`${styles.contents} ${className}`}>{contents}</span>;
};
