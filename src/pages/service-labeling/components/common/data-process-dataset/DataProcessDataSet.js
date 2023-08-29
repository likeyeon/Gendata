import styles from "./DataProcessDataSet.module.scss";
import { useState } from "react";

const DataProcessDataSet = ({contentsData}) => {
  const [currentTab, setTab] = useState(0);
  const selectMenuHandler = (index) => {
    setTab(index)
  };
  const {
    title,
    menuArray,
    desc,
  } = contentsData;

  return (
    <div className={styles.DataSetWrap}>
      <h3 className={styles.DataSetTitle}>{title}</h3>
      <div className={styles.DataSetContents}>
        <ul className={styles.DataSetTabMenu}>
          {menuArray.map((el, index) => (
            <li key={index} className={index === currentTab ? `${styles.TabItem} ${styles.Focused}` : `${styles.TabItem}`} onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </ul>
        <div className={styles.DataSetTabContentWrap}>
          <p className={styles.DataSetTabDesc}>{desc}</p>
          <div className={styles.DataSetTabContent}>
            {menuArray[currentTab].content}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataProcessDataSet;