import { useState } from "react";

import styles from "./scss/AboutHistory.module.scss";
import history2021Img from "../../../assets/about/history_2021.png";
import history2022Img from "../../../assets/about/history_2022.png";
import history2023Img from "../../../assets/about/history_2023.png";
import history2021Mobile from "../../../assets/about/history_2021_mobile.png";
import history2022Mobile from "../../../assets/about/history_2022_mobile.png";
import history2023Mobile from "../../../assets/about/history_2023_mobile.png";
import Inside from "../../../components/inside/Inside";
import { Subtitle } from "../../../components/common/typo/Typo";

const HISTORY_DATA = {
  year2023: {
    name: "2023",
    img: history2023Img,
  },
  year2022: {
    name: "2022",
    img: history2022Img,
  },
  year2021: {
    name: "~2021",
    img: history2021Img,
  },
};

const HISTORY_DATA_MOBILE = {
  year2023: {
    name: "2023",
    img: history2023Mobile,
  },
  year2022: {
    name: "2022",
    img: history2022Mobile,
  },
  year2021: {
    name: "~2021",
    img: history2021Mobile,
  },
};

const AboutHistory = () => {
  const [selected, setSelected] = useState("year2023");

  return (
    <main className={styles.main}>
      <Inside>
        <div className={styles.container}>
          <div className={styles.space}></div>
          <div className={styles.history}>
            <Subtitle subtitle="HISTORY" />
          </div>
          <div className={styles.bar}></div>
          <div className={styles.button_layout}>
            {Object.keys(HISTORY_DATA).map((key, index) => (
              <span
                key={index}
                className={`${styles.button} ${
                  selected === key ? styles.selected : ""
                }`}
                onClick={() => setSelected(key)}
              >
                {HISTORY_DATA[key].name}
              </span>
            ))}
          </div>
          <div className={styles.img_box}>
            <img
              className={styles[selected]}
              src={HISTORY_DATA[selected].img}
              alt="history"
            />
          </div>
          <div className={styles.img_box_mobile}>
            <img
              className={styles[selected]}
              src={HISTORY_DATA_MOBILE[selected].img}
              alt="history"
            />
          </div>
        </div>
      </Inside>
    </main>
  );
};

export default AboutHistory;
