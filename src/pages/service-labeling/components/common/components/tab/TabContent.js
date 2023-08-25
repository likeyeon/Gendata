import styles from "./TabContent.module.scss";

const TabContent = ({contentsData}) => {
  const {
    title, 
    desc, 
    img
  } = contentsData;

  return (
    <div className={styles.TabContentWrap}>
      <h3 className={styles.TabContentTitle}>{title}</h3>
      <p className={styles.TabContentDesc}>{desc}</p>
      <button className={styles.TabBtn}>자세히 보기 →</button> 
      <div className={styles.TabContentImgWrap}>
        <img src={img} alt=""/>
      </div>           
    </div>
  )
};

export default TabContent;