import React, { useState } from "react";

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
    <div className="">
      <div className="">
        <button onClick={handleClickPrev} className="">
          이전
        </button>
      </div>
      <div className="">
        <img className="" src={ImgArr[currentIndex]} alt="Main Image" />
      </div>
      <div className="">
        <button onClick={handleClickNext} className="">
          다음
        </button>
      </div>
    </div>
  );
};

export default ClickSlider;
