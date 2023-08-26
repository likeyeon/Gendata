import styles from "./ButtonType.module.scss";

export const HoverButton = ({buttonData}) => {
  const {
    goToUrl,
    content
  } = buttonData;

  return (
    <div className={`${styles.HoverButtonWrap}`}>
      <a href={goToUrl} className={`${styles.HoverButton} ${styles.Button}`}>{content} →</a> 
    </div>
  )
};
export const CommonButton = ({buttonData}) => {
  const {
    goToUrl,
    content
  } = buttonData;

  return (
    <div className={`${styles.CommonButtonWrap}`}>
      <a href={goToUrl} className={`${styles.CommonButton} ${styles.Button}`}>{content} →</a>
    </div>
  )
};