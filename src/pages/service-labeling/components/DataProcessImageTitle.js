import styles from "./DataProcessImageTitle.module.scss";

import TitleImg from "../../../assets/data-building/data_type_img_big_icon.png";

const DataProcessImageTitle = () => {
  return (
    <div className={styles.DataProcessWrap}>
      <div className={styles.DataProcessTitleWrap}>
        <h2 className={styles.DataProcessTitle}>이미지</h2>
        <p className={styles.DataProcessDesc}>
        다양한 어노테이션을 사용하여 이미지 라벨링을 통한<br />인공지능 모델 학습용 데이터셋 구축
        </p>
      </div>
      <div className={styles.DataProcessImgWrap}>
        <img src={TitleImg} alt="데이터타입 이미지"/>
      </div>
    </div>
  )
}
export default DataProcessImageTitle;
