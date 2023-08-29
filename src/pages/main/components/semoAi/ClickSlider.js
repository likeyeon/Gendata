import React, { useState } from "react";
import styles from "./ClickSlider.module.scss";
import nextBtn from "../../../../assets/main/next.png";
import prevBtn from "../../../../assets/main/prev.png";

const ClickSlider = ({ ImgArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImgArr.length);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImgArr.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slide_wrap}>
      <div className={styles.slide_prev_btn}>
        <button onClick={handleClickPrev}>
          <img src={prevBtn} alt="이전 이미지" />
        </button>
      </div>
      <div className={styles.slideContaier}>
        <img 
            className={styles.slide} 
            src={ImgArr[currentIndex]} 
            alt="" />
      </div>
      <div className={styles.slide_next_btn}>
        <button onClick={handleClickNext}>
          <img src={nextBtn} alt="다음 이미지" />
        </button>
      </div>
    </div>
  );
};

export default ClickSlider;
