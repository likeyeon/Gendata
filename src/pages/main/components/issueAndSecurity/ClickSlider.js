import React, { useState } from "react";
import styles from "./ClickSlider.module.scss";
import nextBtn from "../../../../assets/nextButton.png";
import prevBtn from "../../../../assets/prevButton.png";

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
    <div className={styles.slider}>
      <div className={styles.slideConataier}>
        <div className={styles.slidebtn}>
          <button onClick={handleClickPrev} className="">
            <img src={prevBtn} alt="이전 이미지" />
          </button>
        </div>
        <div className={styles.imgContaier}>
          <img
            className={styles.img}
            src={ImgArr[currentIndex]}
            alt="Main Image"
          />
        </div>
        <div className={styles.slidebtn}>
          <button onClick={handleClickNext} className="">
            <img src={nextBtn} alt="다음 이미지" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClickSlider;
