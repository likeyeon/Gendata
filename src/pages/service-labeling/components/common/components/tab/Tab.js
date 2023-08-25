import { useState } from "react";
import styles from "./Tab.module.scss";

const Tab = ({contentsData}) => {
  const [currentTab, setTab] = useState(0);
  const selectMenuHandler = (index) => {
    setTab(index);
  };

  const {
    title,
    menuArray,
  } = contentsData;

  return (
    <div className={styles.TabOuterWrap}>
      <div className={styles.TabInnerWrap}>
        <h2 className={styles.TabTitle}>{title}</h2>
        <div>
          <ul className={styles.TabMenu}>
            {menuArray.map((el, index) => (
              <li key={index} className={index === currentTab ? `${styles.TabItem} ${styles.Focused}` : `${styles.TabItem}`} onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
          </ul>
          {menuArray[currentTab].content}
        </div>
      </div>         
    </div>
  )
}
export default Tab;