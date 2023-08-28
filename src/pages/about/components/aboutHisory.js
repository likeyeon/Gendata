import { useState } from "react";

import styles from "./scss/aboutHistory.module.scss";
import history2021Img from "../../../assets/about/history_2021.png"
import history2022Img from "../../../assets/about/history_2022.png"
import history2023Img from "../../../assets/about/history_2023.png"

const HISTORY_DATA = {
  
  year2023: {
    name: '2023',
    img: history2023Img
  },
  year2022: {
    name: '2022',
    img: history2022Img
  },
  year2021: {
    name: '~2021',
    img: history2021Img
  }
}

const AboutHistory = () => {
  const [selected, setSelected] = useState('year2023');

  return (
    <div className={styles.container}>
      <div className={styles.space}></div>
      <div className={styles.history}>
        <strong>HISTORY</strong>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.button_layout}>
        {Object.keys(HISTORY_DATA).map((key, index) => (
          <span
            key={index}
            className={`${styles.button} ${selected === key ? styles.selected : ''}` }
            onClick={() => setSelected(key)}>
              {HISTORY_DATA[key].name}
          </span>
        ))}
      </div>
      <div className={styles.space_bar}></div>
      <div className={styles.img_box}>
        <img className={styles[selected]} src={HISTORY_DATA[selected].img}/>
      </div>
    </div>
  )
};

export default AboutHistory;