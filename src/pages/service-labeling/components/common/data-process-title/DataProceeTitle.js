import styles from "./DataProcessTitle.module.scss";

const DataProcessTitle = ({contentsData}) => {
  const {
    title,
    desc,
    titleImg,
    titleImgAlt
  } = contentsData;
  return (
    <div className={styles.DataProcessWrap}>
        <div className={styles.DataProcessTitleWrap}>
          <h2 className={styles.DataProcessTitle}>{title}</h2>
          <p className={styles.DataProcessDesc}>
            {desc}
          </p>
        </div>
        <div className={styles.DataProcessImgWrap}>
          <img src={titleImg} alt={titleImgAlt}/>
        </div>
      </div>
  )
}

export default DataProcessTitle;