import React from "react";
import styles from "./AutoSlider.module.scss";

const Slide = ({ images, className, animationDuration }) => (
  <div className={`${styles.slide} ${className}`} style={{ animationDuration }}>
    {images.map((image, i) => (
      <li key={i}>
        <div className={styles.item}>
          <img src={image} alt={`Slide ${i}`} />
        </div>
      </li>
    ))}
  </div>
);

const AutoSlider = ({ ImgArr, animationDuration }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slideContainer}>
        <ul className={styles.slideWrapper}>
          <Slide
            images={ImgArr}
            className={styles.original}
            animationDuration={animationDuration}
          />
          <Slide
            images={ImgArr}
            className={styles.clone}
            animationDuration={animationDuration}
          />
        </ul>
      </div>
    </div>
  );
};

export default AutoSlider;
